import React from "react";
import {Route} from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';
import {IonRouterOutlet} from "@ionic/react";
import AccountProfilePage from "./AccountProfilePage";
import AccountEventPage from "./events/page";
import AccountSettingsPage from "./AccountSettingsPage";

const AccountLayout = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/account" component={AccountProfilePage} />
      <Route path="/account/events" component={AccountEventPage} />
      <Route path="/account/settings" component={AccountSettingsPage} />
    </IonRouterOutlet>
  );
};

export default AccountLayout;
