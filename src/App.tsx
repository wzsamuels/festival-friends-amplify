import Fallback from "./components/ui/Fallback";
import LoadingState from "./components/ui/LoadingState";
import Layout from "./components/layout/Layout";
import {useAuth0} from "@auth0/auth0-react";
import {callbackUri} from "./auth.config";
import {Browser} from "@capacitor/browser";
import React, {Suspense, useEffect} from "react";
import awsExports from "./aws-exports";
import Amplify from "@aws-amplify/core";
import {AuthModeStrategyType} from "@aws-amplify/datastore";
import {QueryClient, QueryClientProvider} from "react-query";
import {ErrorBoundary} from "react-error-boundary";
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {App as CapApp} from "@capacitor/app";

const updatedAwsConfig = {
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
}

Amplify.configure(updatedAwsConfig);
const queryClient = new QueryClient();


setupIonicReact();

const App = () => {
  const { handleRedirectCallback } = useAuth0();
 console.log(callbackUri)
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
  );
};

export default App;