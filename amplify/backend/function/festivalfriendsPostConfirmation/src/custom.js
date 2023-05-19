/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  console.log(event);
  const createUserProfileMutation = gql`
      mutation CreateUserProfile($input: CreateUserProfileInput!) {
          createUserProfile(input: $input) {
              id
              username
              userID
          }
      }
  `;

  const userProfile = {
    id: event.request.userAttributes.sub,
    email:event.request.userAttributes.email,
    userID: event.request.userAttributes.sub,
    'verified': false,
    'verifySubmitted':false,
  };

  const graphqlData = await axios({
    url: process.env.APPSYNC_API_ENDPOINT,
    method: 'post',
    headers: {
      'x-api-key': process.env.APPSYNC_API_KEY,
    },
    data: {
      query: print(createUserProfileMutation),
      variables: {
        input: userProfile,
      },
    },
  });

  return event;
}

