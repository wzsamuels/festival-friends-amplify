/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STRIPE_SECRET_KEY
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const stripe = require('stripe')('sk_test_51NF0cnIHoFjkR3tBkYPmguoU7Nkg7fQRF5D7PWq56JYqWic9s7yB5eQsWqwYWzQfrDnTB7QAesYOIY1KgAshbdOE00IGaPgHxJ');

const YOUR_DOMAIN = 'http://localhost:5173';

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const body = JSON.parse(event.body);
  const price = body.price;
  let customerID = body.customerID;
  const email = body.email;
  const eventID = body.eventID;

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
    success_url: `${YOUR_DOMAIN}/submit-event?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}/submit-event?canceled=true`,
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
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({url: session.url, customerID:  customerID})
  };
};
