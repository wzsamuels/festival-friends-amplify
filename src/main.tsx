import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import awsExports from "./aws-exports";
import { Amplify, AuthModeStrategyType } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>
);