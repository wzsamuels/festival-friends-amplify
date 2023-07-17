import React, { } from "react";
import Header from "../../components/layout/Header";
import Nav from "../../components/layout/Nav";
import {Outlet} from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';

const NavItems = [
  { content: "Profile", link: "/account" },
  { content: "Events", link: "/account/events" },
  { content: "Settings", link: "/account/settings" }
]

const AccountLayout = () => {
  return (
    <>
      <Header className="shadow-xl">
        <Nav items={NavItems} className="flex"/>
      </Header>
      <Outlet/>
    </>
  );
};

export default AccountLayout;
