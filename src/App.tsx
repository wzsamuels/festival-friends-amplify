import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonButton, IonButtons, IonFooter,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonTitle, IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {musicalNotes, people, chatboxEllipses, person, settings} from 'ionicons/icons';
import Tab1 from './pages/Events';
import Tab2 from './pages/Friends';
import MessagePage from './pages/Messages';
import AccountPage from './pages/Account'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

import './index.css';
import ProfilePage from './pages/Profile';
import React from "react";
import Admin from "./pages/Admin";
import Layout from "./pages/Layout";
import FriendsPage from "./pages/Friends";
import Events from "./pages/Events";
setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/friends">
              <FriendsPage />
            </Route>
            <Route path="/messages">
              <MessagePage />
            </Route>
            <Route path='/account'>
              <AccountPage/>
            </Route>
            <Route path='/admin'>
              <Admin/>
            </Route>
            <Route path='/friends/profile/:id' component={ProfilePage}/>
            <Route exact path="/">
              <Events/>
            </Route>
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
