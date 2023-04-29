import {
  createBrowserRouter,
  RouterProvider, useLocation,
} from "react-router-dom";
import MessagePage from './pages/Messages';
import UserProfileProvider from "./context/UserProfileProvider";
import DataStoreContext from "./context/DataStoreContext";
import ImageProvider from "./context/ImageProvider";
/* Theme variables */
import './theme/variables.css';

// Tailwind CSS
import './index.css'

import ProfilePage from './pages/Profile';
import React, {useEffect, useState} from "react";
import Admin from "./pages/Admin";
import FriendsPage from "./pages/Friends";
import Events from "./pages/Events";

import AccountSettingsPage from "./pages/Account/AccountSettings";
import EventDetailPage from "./pages/Events/EventDetail";

import RidesPage from "./pages/Rides";
import GroupsPage from "./pages/Groups";
import Layout from "./pages/Layout";
import Account from "./pages/Account";

const App = () => {

  const [dataStoreCleared, setDataStoreCleared] = useState(true);
  const saveDataStoreCleared = (value: boolean) => {
    setDataStoreCleared(value)
  }



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
          element: <Account/>
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
      <UserProfileProvider>
        <ImageProvider>
          <RouterProvider router={router} />
        </ImageProvider>
      </UserProfileProvider>
    </DataStoreContext.Provider>
  );
}

export default App;
