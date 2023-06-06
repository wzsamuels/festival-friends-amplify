
const stripe = require('stripe')('sk_test_51NF0cnIHoFjkR3tBkYPmguoU7Nkg7fQRF5D7PWq56JYqWic9s7yB5eQsWqwYWzQfrDnTB7QAesYOIY1KgAshbdOE00IGaPgHxJ');
const aws = require('aws-sdk');
const YOUR_DOMAIN = 'http://localhost:5173';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const customerID = body.customerID;
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const returnUrl = YOUR_DOMAIN;

    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerID,
        return_url: returnUrl,
    });

    console.log(`portalSession: ${JSON.stringify(portalSession)}`);

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      },
        body: portalSession.url,
    };
};
