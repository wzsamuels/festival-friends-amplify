import { Authenticator } from "@aws-amplify/ui-react";
import AppWrapper from "./AppWrapper";
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
      <AppWrapper />
    </Authenticator.Provider>
  );
};

export default App;
