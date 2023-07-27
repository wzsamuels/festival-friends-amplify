import { Authenticator } from "@aws-amplify/ui-react";
import React, {lazy, Suspense} from "react";
import awsExports from "./aws-exports";
import Amplify from "@aws-amplify/core";
import {AuthModeStrategyType} from "@aws-amplify/datastore";
import {QueryClient, QueryClientProvider} from "react-query";
import {ErrorBoundary} from "react-error-boundary";
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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
const queryClient = new QueryClient();
import Fallback from "./components/ui/Fallback";
import LoadingState from "./components/ui/LoadingState";
import Layout from "./components/layout/Layout";

setupIonicReact();

const App = () => {
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

/*
 {
                  path: "events/:id",
                  element: <EventDetailPage />,
                },
                {
                  path: "friends",
                  element: <FriendsPage />,
                },
                {
                  path: "messages",
                  element: <MessagePage />,
                },


                  path: "submit-event",
                  element: <SubmitEventPage />,
                },
                {
                  path: "privacy-policy",
                  element: <PolicyPage/>,
                },

                  ]
                },
                {
                  path: "support",
                  element: <SupportPage/>
                },
                {
                  path: "friends/profile/:profileId",
                  element: <ProfilePage />,
                },
                  ],
                },

                ]);
 */