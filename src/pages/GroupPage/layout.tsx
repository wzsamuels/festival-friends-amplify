import Header from "../../components/layout/Header";
import {Route} from "react-router-dom";
import React from "react";
import Nav from "../../components/layout/Nav";
import {NavItem} from "../../types";
import {IonRouterOutlet} from "@ionic/react";
import GroupPage from "./page";
import UniversityPage from "./University/page";
import BrandPage from "./Brands/page";

const navItems: NavItem[] = [
  {link: "university", content: "University"},
  {link: "brand", content: "Influencers"}
]

const GroupLayout = () => {
  return (
    <>
      <Header className="shadow-xl">
        <Nav items={navItems} className="flex"/>
      </Header>
      <IonRouterOutlet>
        <Route exact path="/groups" component={GroupPage}/>
        <Route exact path="/groups/university" component={UniversityPage}/>
        <Route exact path="/groups/brand" component={BrandPage}/>
      </IonRouterOutlet>
    </>
  )
}

export default GroupLayout;