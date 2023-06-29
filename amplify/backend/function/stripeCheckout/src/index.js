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
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const body = JSON.parse(event.body);
    console.log("Body: ", body)
    const price = body.price;
    let customerID = body.customerID;
    const email = body.email;
    const eventID = body.eventID;
    const domain = body.domain;

    const {Parameters} = await (new aws.SSM())
      .getParameters({
          Names: ["STRIPE_SECRET_KEY"].map(secretName => process.env[secretName]),
          WithDecryption: true,
      })
      .promise();

    const stripeSecret = Parameters.find(p => p.Name === process.env.STRIPE_SECRET_KEY).Value;
    const stripe = new Stripe(stripeSecret, {apiVersion: '2020-08-27'});

    // If customerID is not provided, create a new customer
    if (!customerID) {
        const customer = await stripe.customers.create({email:  email});
        customerID = customer.id;
        console.log(`Created new customer with ID: ${customerID}`);
    }

    console.log(`price: ${price}`);

    const session = await stripe.checkout.sessions.create({
        customer: customerID,
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: price,
                quantity: 1
            },
        ],
        mode: 'subscription',
        success_url: `${domain}/submit-event?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domain}/submit-event?canceled=true`,
        metadata: {
            eventID: eventID
        }
    });


    console.log(`session: ${JSON.stringify(session)}`);

    const sessionData = await stripe.checkout.sessions.retrieve(session.id);
    console.log(`sessionData: ${JSON.stringify(sessionData)}`);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify({url: session.url, customerID:  customerID})
    };
};