/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY","STRIPE_ENDPOINT_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY","STRIPE_ENDPOINT_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_EVENTFRIENDS_GRAPHQLAPIENDPOINTOUTPUT
	API_EVENTFRIENDS_GRAPHQLAPIIDOUTPUT
	API_EVENTFRIENDS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
const Stripe = require('stripe');
const axios = require("axios");
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const GRAPHQL_API_ENDPOINT = process.env.API_EVENTFRIENDS_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_EVENTFRIENDS_GRAPHQLAPIKEYOUTPUT

const updateEventMutation = gql`
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      id
      name
      genre
      image
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            cancelled
            subscriptionID
            approved
            groupID
            _version
        }
    }
`;

const getEventQuery = gql`
    query GetEvent($id: ID!) {
        getEvent(id: $id) {
            id
            name
            genre
            image
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            subscriptionID
            approved
            groupID
            _version
            cancelled
            updatedAt
            createdAt
        }
    }
`

const getEventBySubID = gql`
    query GetEventBySubID($subscriptionID: String!) {
        eventsBySubscriptionID(subscriptionID: $subscriptionID) {
            items {
                id
                name
                genre
                image
                state
                city
                address
                startDate
                endDate
                type
                description
                url
                customerID
                hasPaid
                subscriptionID
                approved
                groupID
                _version
                cancelled
                updatedAt
                createdAt
                _lastChangedAt
            }
        }
    }
`

exports.handler = async (event) => {

    const {Parameters} = await (new aws.SSM())
      .getParameters({
          Names: ["STRIPE_SECRET_KEY", "STRIPE_ENDPOINT_SECRET"].map(secretName => process.env[secretName]),
          WithDecryption: true,
      })
      .promise();

    const stripeSecret = Parameters.find(p => p.Name === process.env.STRIPE_SECRET_KEY).Value;
    const endPointSecret = Parameters.find(p => p.Name === process.env.STRIPE_ENDPOINT_SECRET).Value;

    // Initialize Stripe with the secret key
    const stripe = new Stripe(stripeSecret, {apiVersion: '2020-08-27'});

    const sig = event.headers['Stripe-Signature'];
    let stripeEvent;

    try {
        stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endPointSecret);
    } catch (err) {
        return {statusCode: 400, body: `Webhook Error: ${err.message}`};
    }

    if (stripeEvent.type === "customer.subscription.deleted") {
        console.log("Subscription deleted: ", stripeEvent)
        const session = stripeEvent.data.object;
        const subscriptionID = session.id

        try {
            let response = await axios({
                url: GRAPHQL_API_ENDPOINT,
                method: 'post',
                headers: {
                    'x-api-key': GRAPHQL_API_KEY,
                },
                data: {
                    query: print(getEventBySubID),
                    variables: {
                        subscriptionID: subscriptionID
                    }
                },
            });

            if (response.data?.errors) {
                console.error('GraphQL errors:', response.data?.errors);
                return {
                    statusCode: 500,
                    body: `GraphQL errors ${JSON.stringify(response.data?.errors)}`
                };
            }
            console.log("Event queried:", JSON.stringify(response.data?.data))
            const event = response.data?.data.eventsBySubscriptionID.items[0];

            const updatedEvent = {
                id: event.id,
                name: event.name,
                genre: event.genre,
                image: event.image,
                state: event.state,
                city: event.city,
                address: event.address,
                startDate: event.startDate,
                endDate: event.endDate,
                type: event.type,
                description: event.description,
                url: event.url,
                customerID: event.customerID,
                hasPaid: event.hasPaid,
                cancelled: true,
                subscriptionID: event.subscriptionID,
                approved: event.approved,
                groupID: event.groupID,
                _version: event._version,
            }

            response = await axios({
                url: GRAPHQL_API_ENDPOINT,
                method: 'post',
                headers: {
                    'x-api-key': GRAPHQL_API_KEY,
                },
                data: {
                    query: print(updateEventMutation),
                    variables: {
                        input: updatedEvent,
                    },
                },
            });
            console.log(response);

            if (response.data?.errors) {
                console.error('GraphQL errors:', response.data?.errors);
                return {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    statusCode: 500,
                    body: `GraphQL errors ${JSON.stringify(response.data?.errors)}`
                };
            }
            console.log("Event updated:", JSON.stringify(response.data?.data));

        } catch (e) {
            console.log("Error updating event:", e)
            return {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                statusCode: 500,
                body: `Error updating event ${e?.message}`
            };
        }

    } else if (stripeEvent.type === 'checkout.session.completed') {

        const session = stripeEvent.data.object;
        console.log("Checkout session completed!: ", session)
        const eventID = session.metadata.eventID;
        console.log("EventID", eventID)

        try {
            let response = await axios({
                url: GRAPHQL_API_ENDPOINT,
                method: 'post',
                headers: {
                    'x-api-key': GRAPHQL_API_KEY,
                },
                data: {
                    query: print(getEventQuery),
                    variables: {
                        id: eventID
                    }
                },
            });
            console.log("Response: ", response);
            let data = response.data;
            console.log("Data: ", JSON.stringify(data))

            if (data?.errors) {
                console.error('GraphQL errors:', data?.errors);
                return {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    statusCode: 500,
                    body: `GraphQL errors ${JSON.stringify(data?.errors)}`
                };
            }
            const event = data?.data.getEvent;
            console.log("Event from query:", JSON.stringify(event));


            const updatedEvent = {
                id: event.id,
                name: event.name,
                genre: event.genre,
                image: event.image,
                state: event.state,
                city: event.city,
                address: event.address,
                startDate: event.startDate,
                endDate: event.endDate,
                type: event.type,
                description: event.description,
                url: event.url,
                customerID: event.customerID,
                hasPaid: true,
                cancelled: event.cancelled,
                subscriptionID: session.subscription,
                approved: true,
                groupID: event.groupID,
                _version: event._version
            }

            response = await axios({
                url: GRAPHQL_API_ENDPOINT,
                method: 'post',
                headers: {
                    'x-api-key': GRAPHQL_API_KEY,
                },
                data: {
                    query: print(updateEventMutation),
                    variables: {
                        input: updatedEvent,
                    },
                },
            });

            console.log("Updated event Response: ", response);
            data = response.data;
            console.log("Updated event data", JSON.stringify(data))

            if (data?.errors) {
                console.error('GraphQL errors:', data?.errors);
                return {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    statusCode: 500,
                    body: `GraphQL errors ${JSON.stringify(data?.errors)}`
                };
            }

            console.log("Session subscription: ", session.subscription)
            const params = {
                Destination: {
                    ToAddresses: ["wzsamuels@gmail.com"],
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: "UTF-8",
                            Data: `<html lang="en">
                                    <body>
                                    <h2>Event Details</h2>                               
                                    <p>Name: ${updatedEvent.name}</p>
                                    <p>Date: ${updatedEvent.startDate} - ${updatedEvent.endDate}</p>
                                    <p>Genre: ${updatedEvent.genre}</p>
                                    <p>City: ${updatedEvent.city}</p>
                                    <p>State: ${updatedEvent.state}</p>
                                    <p>Description: ${updatedEvent.description}</p>
                                    <p>Paid: ${updatedEvent.hasPaid}</p>
                                    <p>Description: ${updatedEvent.description}</p>
                                    <p>Website: ${updatedEvent.url}</p>
                                    <p>Visit <a href="https://eventfriends.app/admin">https://eventfriends.app/admin</a> to approve this event.</p>
                                    </body>
                                    </html>
                                    `
                        },
                    },

                    Subject: { Data: "New Paid Event Needs Approval!" },
                },
                Source: 'auto-mail@twinsilverdesign.com',
            };
            const result = await ses.sendEmail(params).promise();
            console.log("SES Result: ", result)

        } catch (e) {
            console.log("Error getting event:", e)
            return {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                statusCode: 500,
                body: `Error getting event ${e?.message}`
            };
        }
    }

    return {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: 'Success'
    };
};