import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import React, { } from "react";
import AccountUnverified from "./AccountUnverified";
import Header from "../../components/layout/Header";
import LoadingState from "../../components/ui/LoadingState";
import useProfileStore from "../../stores/profileStore";
import Nav from "../../components/layout/Nav";
import {Outlet} from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';

const NavItems = [
  { content: "Profile", link: "/account" },
  { content: "Events", link: "/account/events" },
  { content: "Settings", link: "/account/settings" }
]

const AccountLayout = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { loadingUserProfile, userProfile } = useProfileStore();

  const renderPage = () => {
    if (loadingUserProfile || route === "idle") {
      return <LoadingState />;
    }

    if (route !== "authenticated") {
      return (
        <>
          <Header className="shadow-xl" />
          <div className="w-screen h-screen translate-y-[-15%] flex justify-center items-center">
            <Authenticator />
          </div>
        </>
      );
    }

    if (!userProfile) {
      return (
        <>
          <Header className="shadow-xl" />
          <AccountUnverified />
        </>
      )

    }

    if (userProfile?.verified) {
      return (
        <>
          <Header className="shadow-xl">
            <Nav items={NavItems} className="flex"/>
          </Header>

          <Outlet/>
        </>

      );
    }

    if (!userProfile?.verified && userProfile?.submitted) {
      return (
        <>
          <Header className="shadow-xl" />
          <div className="flex w-full h-full justify-center items-center flex-col p-4">
            <div className="max-w-lg">
              <div className="my-4">
                Your profile has been submitted for verification. You&apos;ll
                receive an email at the address you used to sign up for this account
                once the process has been completed.
              </div>
              <div className="my-4">
                If you&apos;ve received confirmation that your profile has been
                verified but are still seeing this message, please try refreshing
                this page.
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div>Something went wrong</div>;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
};

export default AccountLayout;
