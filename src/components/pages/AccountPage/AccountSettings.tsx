import React from "react";
import { AccountSettings } from "@aws-amplify/ui-react";
import Header from "../../layout/Header";

const AccountSettingsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-4">
        <section className="my-8 min-w-4xl  max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl my-6">Privacy Settings</h1>
          <h2>Profile</h2>
          <div>
            <form></form>
          </div>
        </section>
        <section className="my-8 min-w-4xl  max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl my-6">Change Password</h1>
          <AccountSettings.ChangePassword />
        </section>
        <section className="my-8 min-w-4xl  max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl my-6">Delete Account</h1>
          <div className="my-6 flex justify-center">
            <AccountSettings.DeleteUser />
          </div>
          <h3 className="text-danger-default my-4 text-xl text-center">
            This action cannot be undone!
          </h3>
        </section>
      </div>
    </>
  );
};

export default AccountSettingsPage;
