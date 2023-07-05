import { useAuthenticator } from "@aws-amplify/ui-react";
import React, {lazy, Suspense, useEffect} from "react";
import { ErrorBoundary } from "react-error-boundary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Tailwind CSS
import "./index.css";
import useDataClearedStore from "./stores/dataClearedStore";
import useProfileStore from "./stores/profileStore";
import useFriendStore from "./stores/friendProfileStore";
import {QueryClient, QueryClientProvider} from "react-query";

const LoadingState = lazy(() => import("./components/ui/LoadingState"));
const LayoutErrorBoundary = lazy(() => import("./components/ui/LayoutErrorBoundary"));
const AdminEventLayout = lazy(() => import("./pages/Admin/Events/AdminEventLayout"));
const AdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const VerifyAccounts = lazy(() => import("./pages/Admin/VerifyAccounts"));
const AdminDatabasePage = lazy(() => import("./pages/Admin/AdminDatabasePage"));
const SubmitEventPage = lazy(() => import("./pages/SubmitEventPage/SubmitEventPage"));
const Fallback = lazy(() => import("./components/ui/Fallback"));
const AccountLayout = lazy(() => import("./pages/AccountPage/AccountLayout"));
const AccountProfilePage = lazy(() => import("./pages/AccountPage/AccountProfilePage"));
const AccountEventPage = lazy(() => import("./pages/AccountPage/AccountEventPage"));
const Layout = lazy(() => import("./components/layout/Layout"));
const EventPage = lazy(() => import("./pages/EventPage/EventPage"));
const EventDetailPage = lazy(() => import("./pages/EventPage/EventDetailPage"));
const FriendsPage = lazy(() => import("./pages/FriendPage/Friends"));
const MessagePage = lazy(() => import("./pages/MessagePage/MessagePage"));
const AccountSettingsPage = lazy(() => import("./pages/AccountPage/AccountSettingsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CreateEventPage = lazy(() => import("./pages/Admin/Events/CreateEventPage"));
const UpdateEventPage = lazy(() => import("./pages/Admin/Events/UpdateEventPage"));
const DeleteEventPage = lazy(() => import("./pages/Admin/Events/DeleteEventPage"));
const PolicyPage = lazy(() => import("./pages/Policies/page"));
const GroupLayout = lazy(() => import("./pages/GroupPage/layout"));
const UniversityPage = lazy(() => import("./pages/GroupPage/University/page"));
const GroupPage =  lazy(() => import("./pages/GroupPage/page"));
const BrandPage = lazy(() => import("./pages/GroupPage/Brands/page"));
const SupportPage = lazy(() => import("./pages/support/page"));

const queryClient = new QueryClient();

const Router = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const fetchUserProfile = useProfileStore(state => state.fetchUserProfile)
  const userProfile = useProfileStore(state => state.userProfile)
  const fetchFriendProfiles = useFriendStore(state => state.fetchFriends)
  const sub = user?.username as string;
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { route } = useAuthenticator((context) => [context.route]);

  useEffect(() => {
    if(!dataCleared || !sub || route !== 'authenticated') return;

    fetchUserProfile(sub, route)
  }, [sub, dataCleared, route]);

  useEffect(() => {
    if(!dataCleared || !userProfile) return;
    
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
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingState/></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default Router;
