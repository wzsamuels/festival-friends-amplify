import { useAuthenticator } from "@aws-amplify/ui-react";
import React, {lazy, Suspense, useEffect } from "react";

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
const GroupsPage = lazy(() => import("./components/pages/GroupPage/GroupPage"));
const Layout = lazy(() => import("./components/layout/Layout"));
const AccountPage = lazy(
  () => import("./components/pages/AccountPage/AccountPage")
);

//Amplify.Logger.LOG_LEVEL = 'DEBUG';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ImageProvider from "./context/ImageProvider";
/* Theme variables */
import "./theme/variables.css";
// Tailwind CSS
import "./index.css";
import useDataClearedStore from "./stores/dataClearedStore";
import useProfileStore from "./stores/profileStore";
import useFriendStore from "./stores/friendProfileStore";

import useConversationStore from "./stores/conversationStore";

const AppWrapper = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const fetchUserProfile = useProfileStore(state => state.fetchUserProfile)
  const userProfile = useProfileStore(state => state.userProfile)
  const fetchFriendProfiles = useFriendStore(state => state.fetchFriends)
  const fetchConversations = useConversationStore(state => state.fetchConversations)
  const sub = user?.username as string;
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { route } = useAuthenticator((context) => [context.route]);

  useEffect(() => {
    console.log("AppWrapper mounted")
  },[])

  useEffect(() => {
    console.log("sub", sub);
    console.log("route", route)
    console.log("dataCleared", dataCleared)
    if(!dataCleared || !sub || route !== 'authenticated') return;
    fetchUserProfile(sub, route)
  }, [sub, dataCleared, route]);

  useEffect(() => {
    if(!dataCleared || !userProfile) return;

    fetchConversations(userProfile);
    fetchFriendProfiles(userProfile);
  }, [dataCleared, userProfile])

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
      ],
    },
  ]);

  return (
    <ImageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ImageProvider>
  );
};

export default AppWrapper;
