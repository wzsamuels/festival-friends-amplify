import React, {useEffect, useState} from "react";
import {UserProfile} from "../../../models";
import {DataStore} from "aws-amplify";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import Toast from "../../common/Toast/Toast";
import getErrorMessage from "../../../lib/getErrorMessage";
import {ToastData} from "../../../types";
import AccountInfo from "./AccountInfo";

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<UserProfile[]>([]);
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(UserProfile, (c) => c.and(c => [
        c.verified.eq(false),
        c.verifySubmitted.eq(true)
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

  const verifyProfile = async (profile: UserProfile) => {
    try {
      const latestProfile = await DataStore.query(UserProfile, profile.id);
      if (!latestProfile) {
        throw new Error("No profile found");
      }
      await DataStore.save(
        UserProfile.copyOf(latestProfile, (updated) => {
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
    <div className="w-full items-center flex flex-col">
      <div className="max-w-lg w-full">
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
    </div>
  );
}

export default VerifyAccounts;