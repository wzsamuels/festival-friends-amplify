import React, {useEffect, useState} from "react";
import {Profile} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import Toast from "../../components/common/Toast/Toast";
import getErrorMessage from "../../lib/getErrorMessage";
import {ToastData} from "../../types";
import AccountInfo from "./AccountInfo";
import {API} from "@aws-amplify/api";

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<Profile[]>([]);
  const [brandProfiles, setBrandProfiles] = useState<Profile[]>([]);
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(Profile, (c) => c.and(c => [
        c.verified.eq(false),
        c.submitted.eq(true)
      ]));
      console.log(response);
      setUnverifiedProfiles(response);
    };

    const fetchBrandProfiles = async () => {
      const response = await DataStore.query(Profile, c => c.brandSubmitted.eq(true))
      console.log("Brand profiles: ", response);
      return response
    }

    try {
      fetchProfiles();
      fetchBrandProfiles().then(profiles => setBrandProfiles(profiles))
    } catch (e) {
      console.log("Error fetching profiles in VerifyAccounts.tsx", getErrorMessage(e));
    }
  }, []);

  const verifyProfile = async (profile: Profile) => {
    try {
      const latestProfile = await DataStore.query(Profile, profile.id);
      if (!latestProfile) {
        throw new Error("No profile found");
      }
      await DataStore.save(
        Profile.copyOf(latestProfile, (updated) => {
          updated.verified = true;
        })
      );

      await API.post("email", "/", {
        body: {
          subject: "Your Event Friends account has been verified!",
          toAddress: [latestProfile.email, "contact@twinsilverdesign.com"],
          emailBody: `
            <html lang="en">
              <body>
                <div>Sign in to your account at <a href='https://www.eventfriends.app/account'>Event Friends</a></div>
              </body>
            </html>
          `
        }
      })

      setUnverifiedProfiles(
        unverifiedProfiles.filter((p) => p.id !== profile.id)
      );
      setToastData({
        message: `Profile ${profile.firstName} ${profile.lastName} verified`,
        type: "success",
      });
    } catch (e) {
      setToastData({
        message: `Error verifying profile ${profile.firstName} ${profile.lastName}`,
        type: "error",
      });
      console.log("Error verifying profile", getErrorMessage(e));
    }
  };

  const approveApplication = async (profile: Profile) => {
    try {
      const latestProfile = await DataStore.query(Profile, profile.id);
      if(!latestProfile) return;
      await DataStore.save(Profile.copyOf(latestProfile, (updated) => {
        updated.brandSubmitted = false;
        updated.groupID = "aff79b4e-3141-4c3a-bdcc-29a1cf4814bc"
      }))
      setBrandProfiles(
        brandProfiles.filter((p) => p.id !== profile.id)
      );

      await API.post("email", "/", {
        body: {
          subject: "Your Event Friends brand / influencer application has been approved!",
          toAddress: [latestProfile.email, "contact@twinsilverdesign.com"],
          emailBody: `
            <html lang="en">
              <body>
                <div>Sign in to your account at <a href='https://www.eventfriends.app/account'>Event Friends</a></div>
              </body>
            </html>
          `
        }
      })

      setToastData({
        message: `Profile ${profile.firstName} ${profile.lastName} verified`,
        type: "success",
      });
    } catch (e) {
      setToastData({
        message: `Error verifying profile ${profile.firstName} ${profile.lastName}`,
        type: "error",
      });
      console.log("Error approving application: ", e)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <h1 className="text-xl md:text-2xl">Profiles Needing Verification</h1>
      <h2 className="text-lg text-center my-4">
        {unverifiedProfiles.length} profile(s) to verify
      </h2>
      {unverifiedProfiles.map((profile) =>
        <AccountInfo key={profile.id} profile={profile} onVerify={verifyProfile} />
      )}
      <h1 className="text-xl md:text-2xl">Brands / Influencers Needing Verification</h1>
      <h2 className="text-lg text-center my-4">
        {brandProfiles.length} application(s) to approve
      </h2>
      {brandProfiles.map((profile) =>
        <AccountInfo key={profile.id} profile={profile} onVerify={approveApplication} />
      )}

      {toastData && (
        <Toast
          toastData={toastData}
          onClose={() => {
            setToastData(null);
          }}
        />
      )}
    </div>
  );
}

export default VerifyAccounts;