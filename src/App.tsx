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
import MessagePage from './pages/Messages';
import AccountPage from './pages/Account'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Tailwind CSS
import './index.css'

import ProfilePage from './pages/Profile';
import React, { useState} from "react";
import Admin from "./pages/Admin";
import FriendsPage from "./pages/Friends";
import Events from "./pages/Events";
import {car, chatboxEllipses, happyOutline, musicalNotes, people} from "ionicons/icons";
import DataStoreContext from './context/DataStoreContext';
import AccountSettingsPage from "./pages/Account/AccountSettings";
import EventDetailPage from "./pages/Events/EventDetail";
import ImageProvider from "./context/ImageProvider";
import RidesPage from "./pages/Rides";
import GroupsPage from "./pages/Groups";
import UserProfileProvider from "./context/UserProfileProvider";

setupIonicReact();

const App: React.FC = () => {
  const [dataStoreCleared, setDataStoreCleared] = useState(true);
  const saveDataStoreCleared = (value: boolean) => {
    setDataStoreCleared(value)
  }

  return (
    <DataStoreContext.Provider value={{ dataStoreCleared, saveDataStoreCleared }}>
      <UserProfileProvider>
        <ImageProvider>
          <IonApp>
            <IonReactRouter>
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/events" render={() => <Events />}>
                  </Route>
                  <Route path='/events/:id' component={EventDetailPage}/>
                  <Route exact path="/friends">
                    <FriendsPage />
                  </Route>
                  <Route exact path="/messages">
                    <MessagePage />
                  </Route>
                  <Route exact path='/account'>
                    <AccountPage />
                  </Route>
                  <Route exact path='/rides'>
                    <RidesPage/>
                  </Route>
                  <Route exact path='/groups'>
                    <GroupsPage/>
                  </Route>
                  <Route path='/account/settings'>
                    <AccountSettingsPage/>
                  </Route>
                  <Route path='/admin'>
                    <Admin/>
                  </Route>
                  <Route path='/friends/profile/:id' component={ProfilePage}/>
                  <Redirect exact from="/" to="/events"  />

                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/events">
                    <IonIcon aria-hidden="true" icon={musicalNotes} />
                    <IonLabel>Events</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/friends">
                    <IonIcon aria-hidden="true" icon={happyOutline} />
                    <IonLabel>Friends</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/messages">
                    <IonIcon aria-hidden="true" icon={chatboxEllipses} />
                    <IonLabel>Messages</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab4" href="/groups">
                    <IonIcon aria-hidden="true" icon={people} />
                    <IonLabel>Groups</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab5" href="/rides">
                    <IonIcon aria-hidden="true" icon={car} />
                    <IonLabel>Rides</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </IonReactRouter>
          </IonApp>
        </ImageProvider>
      </UserProfileProvider>
    </DataStoreContext.Provider>
  );
}

export default App;
