import {Authenticator} from "@aws-amplify/ui-react";
import AppWrapper from "./AppWrapper";
import React from "react";

const App = () => {
  return (
    <Authenticator.Provider>
      <AppWrapper/>
    </Authenticator.Provider>
  )
}

export default App;

