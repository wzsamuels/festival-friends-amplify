import Header from "../../layout/Header";
import {Outlet} from "react-router-dom";
import React from "react";
import Nav from "../../layout/Nav";
import {NavItem} from "../../../types";

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
      <Outlet/>
    </>
  )
}

export default GroupLayout;