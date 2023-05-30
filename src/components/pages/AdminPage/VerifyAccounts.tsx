import React, {useEffect, useState} from "react";
import {UserProfile} from "../../../models";
import {DataStore} from "aws-amplify";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import Toast from "../../common/Toast/Toast";
import getErrorMessage from "../../../lib/getErrorMessage";
import {ToastData} from "../../../types";

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
      console.log("Error fetching profiles in AdminPage.tsx", getErrorMessage(e));
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
    <div className="w-full max-w-xl flex flex-col">
      <h1 className="text-xl md:text-2xl">Verify Profiles</h1>
      {unverifiedProfiles.map((profile) => (
        <ul key={profile.id}>
          <InputWrapper className="my-4">
            <Label>Email</Label>
            <div className="text-wrap">{profile.email}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <Label>Phone Number</Label>
            <div className="text-wrap">{profile.phone}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <Label>City</Label>
            <div className="text-wrap">{profile.city}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <Label>State</Label>
            <div className="text-wrap">{profile.state}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <Label>Zip Code</Label>
            <div className="text-wrap">{profile.zipcode}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <Label>Address</Label>
            <div className="text-wrap">{profile.address}</div>
          </InputWrapper>
          <InputWrapper className="my-4">
            <div slot="start" className="text-wrap">
              School
            </div>
            <div className="text-wrap">{profile.school}</div>
          </InputWrapper>
          <div className="flex justify-center my-4">
            <Button onClick={() => verifyProfile(profile)}>
              Verify Profile
            </Button>
          </div>
        </ul>
      ))}
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