import { Authenticator } from "@aws-amplify/ui-react";
import Router from "./Router";
import React, {useEffect} from "react";
import useEventStore from "./stores/eventStore";
import awsExports from "./aws-exports";
import {Amplify, AuthModeStrategyType} from "aws-amplify";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});
const App = () => {
  const fetchEvents = useEventStore(state => state.fetchEvents)

  useEffect(() => {
    fetchEvents();
  }, [])

  return (
    <Authenticator.Provider>
      <Router />
    </Authenticator.Provider>
  );
};

export default App;
