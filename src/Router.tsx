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

import { loader as adminEventLoader} from './components/pages/AdminPage/AdminEventPage'

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
import LoadingState from "./components/ui/LoadingState";
import LayoutErrorBoundary from "./components/ui/LayoutErrorBoundary";
import AdminEventPage from "./components/pages/AdminPage/AdminEventPage";
import AdminLayout from "./components/pages/AdminPage/AdminLayout";
import VerifyAccounts from "./components/pages/AdminPage/VerifyAccounts";
import AdminDatabasePage from "./components/pages/AdminPage/AdminDatabasePage";

const Router = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const fetchUserProfile = useProfileStore(state => state.fetchUserProfile)
  const userProfile = useProfileStore(state => state.userProfile)
  const fetchFriendProfiles = useFriendStore(state => state.fetchFriends)
  const fetchConversations = useConversationStore(state => state.fetchConversations)
  const sub = user?.username as string;
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { route } = useAuthenticator((context) => [context.route]);

  useEffect(() => {
    console.log("Router mounted")
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
      errorElement: <LayoutErrorBoundary/>,
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
          errorElement: <LayoutErrorBoundary/>,
        },
        {
          path: "admin",
          element: <AdminLayout/>,
          children: [
            {
              index: true,
              element: <AdminEventPage/>,
              loader: adminEventLoader
            },
            {
              path: "accounts",
              element: <VerifyAccounts/>
            },
            {
              path: "database",
              element: <AdminDatabasePage/>
            }
          ]
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
      <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingState/></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ImageProvider>
  );
};

export default Router;
