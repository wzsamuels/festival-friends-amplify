import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
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
setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/events">
              <Tab1 />
            </Route>
            <Route exact path="/friends">
              <Tab2 />
            </Route>
            <Route path="/messages">
              <MessagePage />
            </Route>
            <Route exact path='/account'>
              <AccountPage/>
            </Route>
            <Route exact path='/admin'>
              <Admin/>
            </Route>
            <Route path='/profile/:id' component={ProfilePage}/>          
            <Route exact path="/">
              <Redirect to="/events" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/events">
              <IonIcon aria-hidden="true" icon={musicalNotes} />
              <IonLabel>Events</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href='/account'>
              <IonIcon aria-hidden="true" icon={person} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/friends">
              <IonIcon aria-hidden="true" icon={people} />
              <IonLabel>Friends</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/messages">
              <IonIcon aria-hidden="true" icon={chatboxEllipses} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/admin">
              <IonIcon aria-hidden="true" icon={settings} />
              <IonLabel>Admin</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
