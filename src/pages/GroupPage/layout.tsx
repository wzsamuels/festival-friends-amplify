import {Route} from "react-router-dom";
import React from "react";
import {IonContent, IonHeader, IonPage, IonRouterOutlet} from "@ionic/react";
import GroupPage from "./page";
import UniversityPage from "./University/page";
import BrandPage from "./Brands/page";
import Header from "../../components/layout/Header";
import Nav from "../../components/layout/Nav";
import groupNavItems from "./groupNavItems";

const GroupLayout = () => {
  return (
    <IonPage>
      <Header className="shadow-xl">
        <Nav items={groupNavItems} className="flex"/>
      </Header>
      <IonContent>
        <IonRouterOutlet>
          <Route exact path="/groups" component={GroupPage}/>
          <Route path="/groups/university" component={UniversityPage}/>
          <Route path="/groups/brand" component={BrandPage}/>
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  )
}

export default GroupLayout;