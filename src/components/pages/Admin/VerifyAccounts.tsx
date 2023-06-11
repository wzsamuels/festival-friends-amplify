import React, {useEffect, useState} from "react";
import {Profile} from "../../../models";
import {DataStore} from "aws-amplify";
import Toast from "../../common/Toast/Toast";
import getErrorMessage from "../../../lib/getErrorMessage";
import {ToastData} from "../../../types";
import AccountInfo from "./AccountInfo";

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<Profile[]>([]);
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

    try {
      fetchProfiles();
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

  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl">Profiles Needing Verification</h1>
        {unverifiedProfiles.map((profile) =>
          <AccountInfo key={profile.id} profile={profile} onVerify={verifyProfile} />
        )}
        <h2 className="text-lg text-center my-4">
          {unverifiedProfiles.length} profiles to verify
        </h2>
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