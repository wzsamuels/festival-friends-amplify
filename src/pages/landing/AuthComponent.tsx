import {Authenticator, useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../stores/profileStore";
import LoadingState from "../../components/ui/LoadingState";
import React from "react";
import Header from "../../components/layout/Header";
import AccountUnverified from "../AccountPage/AccountUnverified";

const AuthComponent = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { loadingUserProfile, userProfile } = useProfileStore();

  if (loadingUserProfile || route === "idle") {
    return <LoadingState />;
  }

  if (route !== "authenticated") {
    return (
      <div className="w-screen h-screen translate-y-[-50%] top-1/2 absolute flex justify-center items-center">
        <Authenticator />
      </div>
    );
  }

  if (!userProfile) {
    return <AccountUnverified />
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
  }

  return (
    <div>Something went wrong</div>
  )
}

export default AuthComponent;