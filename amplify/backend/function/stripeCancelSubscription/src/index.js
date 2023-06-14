/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_SECRET_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
const Stripe = require('stripe');
const aws = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const {Parameters} = await (new aws.SSM())
      .getParameters({
          Names: ["STRIPE_SECRET_KEY"].map(secretName => process.env[secretName]),
          WithDecryption: true,
      })
      .promise();

    const stripeSecret = Parameters.find(p => p.Name === process.env.STRIPE_SECRET_KEY).Value;
    const stripe = new Stripe(stripeSecret, {apiVersion: '2020-08-27'});

    console.log(`EVENT: ${JSON.stringify(event)}`);

    if (!event.body) {
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            statusCode: 400,
            body: JSON.stringify({error: "event.body is undefined or null"}),
        };
    }
    console.log(`event.body: ${event.body}`);

    const body = JSON.parse(event.body);
    const subscriptionID = body.subscriptionID;

    try {
        const deletedSubscription = await stripe.subscriptions.del(subscriptionID);
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            statusCode: 200,
            body: JSON.stringify(deletedSubscription),
        };
    } catch (error) {
        console.log(`error: ${error.message}`);
        console.log(`error: ${error.stack}`);

        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            statusCode: 500,
            body: JSON.stringify({error: error.message}),
        };
    }
};
