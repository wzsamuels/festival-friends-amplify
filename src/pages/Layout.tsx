import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon, IonItem, IonLabel,
  IonPage,
  IonRouterOutlet,
  IonToolbar
} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import Tab1 from "./Events";
import Tab2 from "./Friends";
import MessagePage from "./Messages";
import AccountPage from "./Account";
import Admin from "./Admin";
import ProfilePage from "./Profile";
import React from "react";
import {chatboxEllipses, musicalNotes, people, person, settings} from "ionicons/icons";
import Friends from "./Friends";
import FriendsPage from "./Friends";
import Events from "./Events";




const Layout = () => {
  return (
    <IonPage>
      <IonContent>

      </IonContent>
    </IonPage>
  )
}

export default Layout