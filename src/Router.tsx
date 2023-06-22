import { useAuthenticator } from "@aws-amplify/ui-react";
import React, {Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Tailwind CSS
import "./index.css";
import useDataClearedStore from "./stores/dataClearedStore";
import useProfileStore from "./stores/profileStore";
import useFriendStore from "./stores/friendProfileStore";

import useConversationStore from "./stores/conversationStore";
import LoadingState from "./components/ui/LoadingState";
import LayoutErrorBoundary from "./components/ui/LayoutErrorBoundary";
import AdminEventLayout from "./pages/Admin/Events/AdminEventLayout";
import AdminLayout from "./pages/Admin/AdminLayout";
import VerifyAccounts from "./pages/Admin/VerifyAccounts";
import AdminDatabasePage from "./pages/Admin/AdminDatabasePage";
import useEventStore from "./stores/eventStore";
import SubmitEventPage from "./pages/SubmitEventPage/SubmitEventPage";
import Fallback from "./components/ui/Fallback";
import AccountLayout from "./pages/AccountPage/AccountLayout";
import AccountProfilePage from "./pages/AccountPage/AccountProfilePage";
import AccountEventPage from "./pages/AccountPage/AccountEventPage";
import Layout from "./components/layout/Layout";
import EventPage from "./pages/EventPage/EventPage";
import EventDetailPage from "./pages/EventPage/EventDetailPage";
import FriendsPage from "./pages/FriendPage/Friends";
import MessagePage from "./pages/MessagePage/MessagePage";
import AccountSettingsPage from "./pages/AccountPage/AccountSettingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ApproveEventPage from "./pages/Admin/Events/ApproveEventPage";
import CreateEventPage from "./pages/Admin/Events/CreateEventPage";
import UpdateEventPage from "./pages/Admin/Events/UpdateEventPage";
import DeleteEventPage from "./pages/Admin/Events/DeleteEventPage";
import PolicyPage from "./pages/Policies/page";
import GroupLayout from "./pages/GroupPage/layout";
import UniversityPage from "./pages/GroupPage/University/page";
import GroupPage from "./pages/GroupPage/page";
import BrandPage from "./pages/GroupPage/Brands/page";
import SupportPage from "./pages/support/page";

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
          element: <GroupLayout/>,
          children: [
            {
              index: true,
              element: <GroupPage />
            },
            {
              path: "university",
              element: <UniversityPage/>
            },
            {
              path: "brand",
              element: <BrandPage/>
            }
          ]
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
          path: "privacy-policy",
          element: <PolicyPage/>,
        },
        {
          path: "admin",
          element: <AdminLayout/>,
          children: [
            {
              path: "events",
              element: <AdminEventLayout/>,
              children: [
                {
                  index: true,
                  element: <ApproveEventPage/>
                },
                {
                  path: "create",
                  element: <CreateEventPage/>
                },
                {
                  path: "update",
                  element: <UpdateEventPage/>
                },
                {
                  path: "delete",
                  element: <DeleteEventPage/>
                }
              ]
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
          path: "support",
          element: <SupportPage/>
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
      <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingState/></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
