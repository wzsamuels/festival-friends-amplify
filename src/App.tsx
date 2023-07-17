import { Authenticator } from "@aws-amplify/ui-react";
import Router from "./Router";
import React from "react";
import awsExports from "./aws-exports";
import Amplify from "@aws-amplify/core";
import {AuthModeStrategyType} from "@aws-amplify/datastore";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  productionRedirectSignIn,
  localRedirectSignIn,
] = awsExports.oauth.redirectSignIn.split(",");

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsExports.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  },
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
}

Amplify.configure(updatedAwsConfig);

const App = () => {

  return (
    <Authenticator.Provider>
      <Router />
    </Authenticator.Provider>
  );
};

export default App;
