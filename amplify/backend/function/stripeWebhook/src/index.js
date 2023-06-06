/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY","STRIPE_ENDPOINT_SECRET","test"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_FESTIVALFRIENDS_GRAPHQLAPIENDPOINTOUTPUT
	API_FESTIVALFRIENDS_GRAPHQLAPIIDOUTPUT
	API_FESTIVALFRIENDS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY","STRIPE_ENDPOINT_SECRET","test"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require('aws-sdk');
const Stripe = require('stripe');
const axios = require("axios");
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const GRAPHQL_API_ENDPOINT = process.env.API_FESTIVALFRIENDS_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_FESTIVALFRIENDS_GRAPHQLAPIKEYOUTPUT

const updateFestivalMutation = gql`
  mutation UpdateFestival($input: UpdateFestivalInput!) {
    updateFestival(input: $input) {
      id
      hasPaid
      subID
    }
  }
`;

const getFestivalQuery = gql`
  query GetFestival($id: ID!) {
    getFestival(id: $id) {
      id
      _version
      subID
    }
  }
`

exports.handler = async (event) => {

  const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY","STRIPE_ENDPOINT_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

  const stripeSecret = Parameters.find(p => p.Name === '/amplify/d2roywvsx7rezb/dev/AMPLIFY_stripeWebhook_STRIPE_SECRET_KEY').Value;
  const endPointSecret = Parameters.find(p => p.Name === '/amplify/d2roywvsx7rezb/dev/AMPLIFY_stripeWebhook_STRIPE_ENDPOINT_SECRET').Value;

  // Initialize Stripe with the secret key
  const stripe = new Stripe(stripeSecret, { apiVersion: '2020-08-27' });

  const sig = event.headers['Stripe-Signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endPointSecret);
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if(stripeEvent.type === "customer.subscription.deleted") {
    console.log("Subscription deleted: ", stripeEvent)
    const session = stripeEvent.data.object;
    console.log("Session: ", session)
    const eventID = session.metadata.eventID;
    console.log("EventID", eventID)
    const subID = session.id

  } else if (stripeEvent.type === 'checkout.session.completed') {

    const session = stripeEvent.data.object;
    console.log("Checkout session completed!: ", session)
    const eventID = session.metadata.eventID;
    console.log("EventID", eventID)
    console.log("Trying to get event via axios...")
    let version;

    try {
      const response = await axios({
        url: GRAPHQL_API_ENDPOINT,
        method: 'post',
        headers: {
          'x-api-key': GRAPHQL_API_KEY,
        },
        data: {
          query: print(getFestivalQuery),
          variables: {
            id: eventID
          }
        },
      });
      console.log(response);
      let { data } = response.data;

      if (data?.errors) {
        console.error('GraphQL errors:', data?.errors);
      } else {
        console.log("Event:", JSON.stringify(data?.getFestival));
        console.log("Event version:", data?.getFestival._version)
        version = data?.getFestival._version;
      }
    } catch (e) {
      console.log("Error getting event:", e)
      return { statusCode: 500, body: `Error getting event ${e?.message}` };
    }
    console.log("Session subscription: ", session.subscription)
    try {
      const updatedEvent = {
        id: eventID,
        hasPaid: true,
        _version: version,
        subID: session.subscription
      }

      const response = await axios({
        url: GRAPHQL_API_ENDPOINT,
        method: 'post',
        headers: {
          'x-api-key': GRAPHQL_API_KEY,
        },
        data: {
          query: print(updateFestivalMutation),
          variables: {
            input: updatedEvent,
          },
        },
      });

      console.log(response);

      const { data } = response.data;
      if (data?.errors) {
        console.error('GraphQL errors:', data?.errors);
      } else {
        console.log("Event:", JSON.stringify(data?.updateFestival));
      }

    } catch (e) {
      console.log("Error updating event", e)
      return { statusCode: 500, body: `Error updating Event ${e?.message}` };
    }
  }

  return { statusCode: 200, body: 'Success' };
};