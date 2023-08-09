import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";
import { domain as auth0Domain, clientId, callbackUri } from "./auth.config";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUri
      }}
      // For using Auth0-React with Ionic on Android and iOS,
      // it's important to use refresh tokens without the fallback
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
