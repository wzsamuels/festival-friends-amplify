import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MessagePage from './components/pages/MessagePage/MessagePage';
import DataStoreContext from "./context/DataStoreContext";
import ImageProvider from "./context/ImageProvider";
/* Theme variables */
import './theme/variables.css';
import { useUserProfileStore} from "./stores/friendProfilesStore";


// Tailwind CSS
import './index.css'

import ProfilePage from './components/pages/Profile/Profile';
import React, {useEffect, useState} from "react";
import Admin from "./components/pages/AdminPage/Admin";
import FriendsPage from "./components/pages/FriendPage/Friends";
import Events from "./components/pages/EventPage/EventPage";

import AccountSettingsPage from "./components/pages/AccountPage/AccountSettings";
import EventDetailPage from "./components/pages/EventPage/EventDetailPage";

import RidesPage from "./components/pages/RidePage/RidePage";
import GroupsPage from "./components/pages/GroupPage/GroupPage";
import Layout from "./components/layout/Layout";
import AccountPage from "./components/pages/AccountPage";
import {useAuthenticator} from "@aws-amplify/ui-react";

const App = () => {

  const [dataStoreCleared, setDataStoreCleared] = useState(true);
  const saveDataStoreCleared = (value: boolean) => {
    setDataStoreCleared(value)
  }
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { fetchAndObserveUserProfile, userProfile } = useUserProfileStore();

  useEffect(() => {
    if(route === 'authenticated' ) {
      fetchAndObserveUserProfile(user);
    }
  }, [user, route, fetchAndObserveUserProfile]);

  useEffect(() => {
    console.log(userProfile)
  }, [userProfile])


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Events /> },
        {
          path: 'events/:id',
          element: <EventDetailPage />
        },
        {
          path: 'friends',
          element: <FriendsPage />
        },
        {
          path: "messages",
          element: <MessagePage />
        },
        {
          path: 'groups',
          element: <GroupsPage/>
        },
        {
          path: 'account/settings',
          element: <AccountSettingsPage/>
        },
        {
          path: 'account',
          element: <AccountPage />
        },
        {
          path: 'admin',
          element: <Admin/>
        },
        {
          path:'/friends/profile/:profileId',
          element: <ProfilePage/>
        },
        {
          path: 'rides',
          element: <RidesPage/>
        }
      ],
    },
  ])

  return (
    <DataStoreContext.Provider value={{ dataStoreCleared, saveDataStoreCleared }}>
      <ImageProvider>
        <RouterProvider router={router} />
      </ImageProvider>
    </DataStoreContext.Provider>
  );
}

export default App;
