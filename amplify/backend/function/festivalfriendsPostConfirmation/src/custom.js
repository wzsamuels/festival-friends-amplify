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
      }
    }
  `;

  const createPrivacySettingMutation = gql`
    mutation CreatePrivacySetting($input: CreatePrivacySettingInput!) {
      createPrivacySetting(input: $input) {
        id
      }
    }
  `;

  const userProfile = {
    id: event.request.userAttributes.sub,
    email:event.request.userAttributes.email,
    userID: event.request.userAttributes.sub,
    verified: false,
    verifySubmitted: false,
  };



  const userProfileData = await axios({
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

  console.log(userProfileData)

  const privacySetting= {
    userProfileID: event.request.userAttributes.sub,
    city: true,
    state: true,
    school: true,
    email: true,
    attendingEvents: true,
    rides: true,
    friends: true,
    photos: true,
  }

  const privacySettingData = await axios({
    url: process.env.APPSYNC_API_ENDPOINT,
    method: 'post',
    headers: {
      'x-api-key': process.env.APPSYNC_API_KEY,
    },
    data: {
      query: print(createPrivacySettingMutation),
      variables: {
        input: privacySetting,
      }
    },
  });

  console.log(privacySettingData)

  return event;
}

