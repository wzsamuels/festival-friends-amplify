import React, { useEffect, useState } from "react";
import { FestivalCreateForm } from "../../../ui-components";
import { CollegeGroup, UserProfile } from "../../../models";
import { DataStore } from "aws-amplify";
import colleges from "../../../data/colleges.json";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import * as mutations from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import {useAuthenticator} from "@aws-amplify/ui-react";
import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateUserProfileMutation,
  CreateUserProfileInput,
  CreatePrivacySettingInput,
  CreatePrivacySettingMutation
} from "../../../API";
import getErrorMessage from "../../../lib/getErrorMessage";
import mockUserProfiles from '../../../data/profiles.json';

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
    </div>
  );
};

export default AdminPage;

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<UserProfile[]>(
    []
  );
  const [message, setMessage] = useState<string>("");
  const { user } = useAuthenticator((context) => [context.user]);
  const username = user?.username as string;
  const email = user?.attributes?.email as string;

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(UserProfile, (c) =>
        c.verified.eq(false)
      );
      console.log(response);
      setUnverifiedProfiles(response);
    };

    try {
      fetchProfiles();
    } catch (e) {
      console.log("Error fetching profiles in AdminPage.tsx", getErrorMessage(e));
    }
  }, []);

  const seedDatabase = async () => {
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
  };

  // TODO: Refactor to separate file
  const seedUserProfiles = async () => {
    mockUserProfiles.map(async (profile) => {
      try {
        const privacySettingInput: CreatePrivacySettingInput = {
          userProfileID: profile.id,
          city: true,
          state: true,
          school: true,
          email: true,
          attendingEvents: true,
          rides: true,
          friends: true,
          photos: true,
        }

        let collegeGroup: CollegeGroup | null = null;
        if (profile.email.endsWith(".edu")) {
          const emailDomain = profile.email.split("@")[1];
          const collegeGroups = await DataStore.query(CollegeGroup, (c) =>
            c.domain.eq(emailDomain)
          );
          collegeGroup = collegeGroups[0];
        }

        const userProfileInput: CreateUserProfileInput = {
          ...profile,
          ...(collegeGroup && {collegeGroupId: collegeGroup?.id})
        }

        const newUserProfile = await API.graphql<GraphQLQuery<CreateUserProfileMutation>>(
          graphqlOperation(mutations.createUserProfile, {
            input: userProfileInput}));

        console.log(`New profile for ${profile.firstName}:`, newUserProfile);

        const newPrivacySetting = await API.graphql<GraphQLQuery<CreatePrivacySettingMutation>>(
          graphqlOperation(mutations.createPrivacySetting, {input: privacySettingInput}));

        console.log(`New privacy setting for ${profile.firstName}:`, newPrivacySetting);

      } catch (error) {
        console.log(getErrorMessage(error));
      }
    })
  }

  const verifyProfile = async (profile: UserProfile) => {
    const latestProfile = await DataStore.query(UserProfile, (c) =>
      c.id.eq(profile.id)
    );
    await DataStore.save(
      UserProfile.copyOf(latestProfile[0], (updated) => {
        updated.verified = true;
      })
    );
    setUnverifiedProfiles(
      unverifiedProfiles.filter((p) => p.id !== profile.id)
    );
    setMessage("Profile verified");
  };

  const createUserProfile = async () => {
    const userProfileInput: CreateUserProfileInput = {
      id: username,
      email: email,
      verified: false,
      verifySubmitted: true
    }
    console.log(userProfileInput)
    try {
      const newUserProfile = await API.graphql<GraphQLQuery<CreateUserProfileMutation>>(
        graphqlOperation(mutations.createUserProfile, {input: userProfileInput}));
      console.log(newUserProfile);
    } catch (error) {
      console.log(getErrorMessage(error));
    }

    const privacySettingInput: CreatePrivacySettingInput = {
      userProfileID: username,
      city: true,
      state: true,
      school: true,
      email: true,
      attendingEvents: true,
      rides: true,
      friends: true,
      photos: true,
    }
    const newPrivacySetting = await API.graphql<GraphQLQuery<CreatePrivacySettingMutation>>(
      graphqlOperation(mutations.createPrivacySetting, {input: privacySettingInput}));
    console.log(newPrivacySetting);
  }

  return (
    <div>
      <Button onClick={createUserProfile}>Create Profile</Button>
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
      <h3 className="text-center my-4">{message}</h3>
      {/*<IonButton onClick={seedDatabase}>Seed Database</IonButton>*/}
      <Button onClick={seedUserProfiles}>Seed Database</Button>
    </div>
  );
};
