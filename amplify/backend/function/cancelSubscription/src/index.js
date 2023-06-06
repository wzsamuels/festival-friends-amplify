const stripe = require('stripe')('sk_test_51NF0cnIHoFjkR3tBkYPmguoU7Nkg7fQRF5D7PWq56JYqWic9s7yB5eQsWqwYWzQfrDnTB7QAesYOIY1KgAshbdOE00IGaPgHxJ');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  if (!event.body) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 400,
      body: JSON.stringify({error: "event.body is undefined or null"}),
    };
  }
  console.log(`event.body: ${event.body}`);

  const body = JSON.parse(event.body);
  const subID = body.subID;

  try {
    const deletedSubscription = await stripe.subscriptions.del(subID);
  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(deletedSubscription),
     };
  } catch (error) {
    console.log(`error: ${error.message}`);
    console.log(`error: ${error.stack}`);

    return {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 500,
      body: JSON.stringify({error: error.message}),
    };
  }
};
