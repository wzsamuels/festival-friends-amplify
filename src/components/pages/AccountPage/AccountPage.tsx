import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import React, { } from "react";
import AccountUnverified from "./AccountUnverified";
import AccountVerified from "./AccountVerified";
import Header from "../../layout/Header";
import LoadingState from "../../ui/LoadingState";
import useProfileStore from "../../../stores/profileStore";

const AccountPage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { loadingUserProfile, userProfile } = useProfileStore();

  const renderPage = () => {
    if (loadingUserProfile || route === "idle") {
      return <LoadingState />;
    }

    if (route !== "authenticated") {
      return (
        <>
          <Header />
          <div className="w-screen h-screen translate-y-[-15%] flex justify-center items-center">
            <Authenticator />
          </div>
        </>
      );
    }

    if (!userProfile) {
      return (
        <>
          <Header />
          <AccountUnverified />
        </>
      )

    }

    if (userProfile?.verified) {
      return <AccountVerified user={user} />;
    }

    if (!userProfile?.verified && userProfile?.submitted) {
      return (
        <>
          <Header />
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

export default AccountPage;
