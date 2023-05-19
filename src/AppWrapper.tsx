import { useAuthenticator } from "@aws-amplify/ui-react";
import React, {lazy, Suspense, useEffect, useState} from "react";

const MessagePage = lazy(
  () => import("./components/pages/MessagePage/MessagePage")
);
const AdminPage = lazy(() => import("./components/pages/AdminPage/AdminPage"));
const FriendsPage = lazy(() => import("./components/pages/FriendPage/Friends"));
const EventPage = lazy(() => import("./components/pages/EventPage/EventPage"));
const AccountSettingsPage = lazy(
  () => import("./components/pages/AccountPage/AccountSettings")
);
const EventDetailPage = lazy(
  () => import("./components/pages/EventPage/EventDetailPage")
);
const ProfilePage = lazy(() => import("./components/pages/Profile/Profile"));
const RidesPage = lazy(() => import("./components/pages/RidePage/RidePage"));
const GroupsPage = lazy(() => import("./components/pages/GroupPage/GroupPage"));
const Layout = lazy(() => import("./components/layout/Layout"));
const AccountPage = lazy(
  () => import("./components/pages/AccountPage/AccountPage")
);
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DataStoreContext from "./context/DataStoreContext";
import ImageProvider from "./context/ImageProvider";
/* Theme variables */
import "./theme/variables.css";
import { useUserProfileStore } from "./stores/friendProfilesStore";
import awsExports from "./aws-exports";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

// Tailwind CSS
import "./index.css";

const AppWrapper = () => {
  const [dataStoreCleared, setDataStoreCleared] = useState(true);
  const saveDataStoreCleared = (value: boolean) => {
    setDataStoreCleared(value);
  };
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { fetchAndObserveUserProfile, userProfile } = useUserProfileStore();
  const username = user?.username as string;

  useEffect(() => {
    while(!dataStoreCleared) {
      console.log("Waiting for dataStore to clear...");
    }
    fetchAndObserveUserProfile(username, route);

    return () => {
      fetchAndObserveUserProfile(username, route);
    }
  }, [username, route, fetchAndObserveUserProfile]);

  useEffect(() => {
    console.log("User profile: ", userProfile);
  }, [userProfile]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <EventPage />,
        },
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
        {
          path: "groups",
          element: <GroupsPage />,
        },
        {
          path: "account/settings",
          element: <AccountSettingsPage />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
        {
          path: "admin",
          element: <AdminPage />,
        },
        {
          path: "/friends/profile/:profileId",
          element: <ProfilePage />,
        },
        {
          path: "rides",
          element: <RidesPage />,
        },
      ],
    },
  ]);

  return (
    <DataStoreContext.Provider
      value={{ dataStoreCleared, saveDataStoreCleared }}
    >
      <ImageProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ImageProvider>
    </DataStoreContext.Provider>
  );
};

export default AppWrapper;
