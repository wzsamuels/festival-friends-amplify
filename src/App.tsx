import { Authenticator } from "@aws-amplify/ui-react";
import React, {Suspense, useEffect} from "react";
import awsExports from "./aws-exports";
import Amplify from "@aws-amplify/core";
import {AuthModeStrategyType} from "@aws-amplify/datastore";
import {QueryClient, QueryClientProvider} from "react-query";
import {ErrorBoundary} from "react-error-boundary";
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {App as CapApp} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";

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

let redirectSignIn;
let redirectSignOut;

if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === "android" || Capacitor.getPlatform() === "hybrid") {
  redirectSignIn = "capacitor://localhost/"
  redirectSignOut = "capacitor://localhost/"
} else {
  redirectSignIn = isLocalhost ? localRedirectSignIn : productionRedirectSignIn;
  redirectSignOut = isLocalhost ? localRedirectSignOut : productionRedirectSignOut;
}


const updatedAwsConfig = {
  ...awsExports,

  oauth: {
    ...awsExports.oauth,
    redirectSignIn,
    redirectSignOut
  },
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
}

Amplify.configure(updatedAwsConfig);
const queryClient = new QueryClient();
import Fallback from "./components/ui/Fallback";
import LoadingState from "./components/ui/LoadingState";
import Layout from "./components/layout/Layout";
import {useAuth0} from "@auth0/auth0-react";
import {callbackUri} from "./auth.config";
import {Browser} from "@capacitor/browser";

setupIonicReact();

const App = () => {
  const { handleRedirectCallback } = useAuth0();

  useEffect(() => {
    CapApp.addListener("appUrlOpen", async ({ url }) => {
      console.log("URL OPENED, ", url)
      if (url.startsWith(callbackUri)) {
        if (
          url.includes("state") &&
          (url.includes("code") || url.includes("error"))
        ) {
          await handleRedirectCallback(url);
        }

        await Browser.close();
      }
    });
  }, [handleRedirectCallback]);

  return (
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>
        <IonApp>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingState/></div>}>
              <IonReactRouter>
                <IonRouterOutlet>
                  <Layout/>
                </IonRouterOutlet>
              </IonReactRouter>
            </Suspense>
          </ErrorBoundary>
        </IonApp>
      </QueryClientProvider>
    </Authenticator.Provider>
  );
};

export default App;