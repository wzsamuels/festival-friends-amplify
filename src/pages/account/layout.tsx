import React from "react";
import {Route} from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';
import {IonContent, IonPage, IonRouterOutlet} from "@ionic/react";
import AccountProfilePage from "./AccountProfilePage";
import AccountEventPage from "./events/page";
import AccountSettingsPage from "./AccountSettingsPage";
import Header from "../../components/layout/Header";
import Nav from "../../components/layout/Nav";

const NavItems = [
  { content: "Profile", link: "/account" },
  { content: "Events", link: "/account/events" },
  { content: "Settings", link: "/account/settings" }
]

const AccountLayout = () => {
  return (
    <IonPage>
      <Header className="shadow-xl">
        <Nav items={NavItems} className="flex"/>
      </Header>
      <IonContent>
        <IonRouterOutlet>
          <Route exact path="/account" component={AccountProfilePage} />
          <Route path="/account/events" component={AccountEventPage} />
          <Route path="/account/settings" component={AccountSettingsPage} />
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default AccountLayout;
