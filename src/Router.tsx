import { useAuthenticator } from "@aws-amplify/ui-react";
import React, {lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
import useEventStore from "./stores/eventStore";
import SubmitEventPage from "./components/pages/SubmitEventPage/SubmitEventPage";
import Fallback from "./components/ui/Fallback";
import AccountLayout from "./components/pages/AccountPage/AccountLayout";
import AccountProfilePage from "./components/pages/AccountPage/AccountProfilePage";
import AccountEventPage from "./components/pages/AccountPage/AccountEventPage";
import Layout from "./components/layout/Layout";
import EventPage from "./components/pages/EventPage/EventPage";
import EventDetailPage from "./components/pages/EventPage/EventDetailPage";
import FriendsPage from "./components/pages/FriendPage/Friends";
import MessagePage from "./components/pages/MessagePage/MessagePage";
import GroupsPage from "./components/pages/GroupPage/GroupPage";
import AccountSettingsPage from "./components/pages/AccountPage/AccountSettingsPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";

const Router = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const fetchUserProfile = useProfileStore(state => state.fetchUserProfile)
  const userProfile = useProfileStore(state => state.userProfile)
  const fetchFriendProfiles = useFriendStore(state => state.fetchFriends)
  const fetchConversations = useConversationStore(state => state.fetchConversations)
  const sub = user?.username as string;
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { route } = useAuthenticator((context) => [context.route]);
  const fetchEvents = useEventStore(state => state.fetchEvents)

  useEffect(() => {
    console.log("Router mounted")
  },[])

  useEffect(() => {
    console.log("sub", sub);
    console.log("route", route)
    console.log("dataCleared", dataCleared)
    if(!dataCleared || !sub || route !== 'authenticated') return;
    fetchEvents();
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
          path: "account",
          element: <AccountLayout />,
          children: [
            {
              index: true,
              element: <AccountProfilePage />,
            },
            {
              path: "events",
              element: <AccountEventPage />,
            },
            {
              path: "settings",
              element: <AccountSettingsPage />,
            }
          ]
        },
        {
          path: "submit-event",
          element: <SubmitEventPage />,
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
    <ErrorBoundary FallbackComponent={Fallback}>
    <ImageProvider>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingState/></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ImageProvider>
    </ErrorBoundary>
  );
};

export default Router;
