import React, { useEffect, useState } from "react";
import { FestivalCreateForm } from "../../../ui-components";
import {CollegeGroup, PrivacySetting, UserProfile} from "../../../models";
import { DataStore } from "aws-amplify";
import colleges from "../../../data/colleges.json";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import * as mutations from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateUserProfileMutation,
  CreateUserProfileInput,
} from "../../../API";
import getErrorMessage from "../../../lib/getErrorMessage";
import mockUserProfiles from '../../../data/profiles.json';
import {getCollegeGroupByEmail} from "../../../services/collegeGroupServices";
import {ToastData} from "../../../types";
import Toast from "../../common/Toast/Toast";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <section className="w-full max-w-xl flex flex-col">
        <h1 className="text-xl md:text-2xl">Verify Profiles</h1>
        <VerifyAccounts />
      </section>
      <section className="w-full max-w-xl my-8">
        <h1 className="text-xl md:text-2xl">Create Festival</h1>
        <FestivalCreateForm />
      </section>
      <section className="w-full max-w-xl my-8">
        <SeedDatabase/>
      </section>
    </div>
  );
};

const ClearDatabase  = async () => {
  return (
    <div>

    </div>
  )
}

export default AdminPage;

const SeedDatabase = () => {
  const seedUserProfiles = async () => {
    try {
      const userProfile = await DataStore.query(UserProfile);
      if(userProfile.length > 0) {
        alert("Database already seeded");
        return;
      }
    } catch (error) {
      console.log("Error seeding database", error);
    }

    mockUserProfiles.map(async (profile) => {
      try {
        const newPrivacySetting =  await DataStore.save(new PrivacySetting({}));
        const collegeGroup = await getCollegeGroupByEmail(profile.email);

        const userProfileInput: CreateUserProfileInput = {
          ...profile,
          ...(collegeGroup && {collegeGroupId: collegeGroup?.id}),
          privacySettingID: newPrivacySetting.id
        }

        const newUserProfile = await API.graphql<GraphQLQuery<CreateUserProfileMutation>>(
          graphqlOperation(mutations.createUserProfile, {
            input: userProfileInput}));

        console.log(`New profile for ${profile.firstName}:`, newUserProfile);

      } catch (error) {
        console.log(getErrorMessage(error));
      }
    })
  }


  const seedCollegeGroups = async () => {
    try {
      const collegeGroups = await DataStore.query(CollegeGroup);
      if(collegeGroups.length > 0) {
        alert("Database already seeded");
        return;
      }
    } catch (error) {
      console.log("Error seeding database", error);
    }

    try {
      const newColleges = await Promise.all(
        colleges.map(async (college) => {
          return await DataStore.save(
            new CollegeGroup({
              name: college.name,
              members: [],
              domain: college.domains[0],
              webPage: college.web_pages[0],
              countryCode: college.alpha_two_code,
            })
          );
        })
      );
      alert(`Database seeded with ${newColleges.length} colleges`);
    } catch (e) {
      console.log("Error seeding database", e);
    }
  };

  return (
    <>
      <h1 className="text-xl md:text-2xl">Seed Database</h1>
      <Button className="my-4" onClick={seedUserProfiles}>Seed User Profiles</Button>
      <Button className="my-4" onClick={seedCollegeGroups}>Seed College Groups</Button>
    </>
  )
}

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
    <div>
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
