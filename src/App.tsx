import { Authenticator } from "@aws-amplify/ui-react";
import Router from "./Router";
import React from "react";
import awsExports from "./aws-exports";
import Amplify from "@aws-amplify/core";
import {AuthModeStrategyType} from "@aws-amplify/datastore";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});
const App = () => {

  return (
    <Authenticator.Provider>
      <Router />
    </Authenticator.Provider>
  );
};

export default App;
