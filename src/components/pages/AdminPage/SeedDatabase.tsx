import {DataStore} from "aws-amplify";
import {CollegeGroup, PrivacySetting, UserProfile} from "../../../models";
import mockUserProfiles from "../../../data/profiles.json";
import {getCollegeGroupByEmail} from "../../../services/collegeGroupServices";
import getErrorMessage from "../../../lib/getErrorMessage";
import colleges from "../../../data/colleges.json";
import Button from "../../common/Button/Button";
import React from "react";

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

        /*
        const userProfileInput: CreateUserProfileInput = {
          ...profile,
          ...(collegeGroup && {collegeGroupId: collegeGroup?.id}),
          privacySettingID: newPrivacySetting.id
        }

        const newUserProfile = await API.graphql<GraphQLQuery<CreateUserProfileMutation>>(
          graphqlOperation(mutations.createUserProfile, {
            input: userProfileInput}));
         */
        const newUserProfile = await DataStore.save(new UserProfile({
          ...profile,
          ...(collegeGroup && {collegeGroupId: collegeGroup?.id}),
          privacySettingID: newPrivacySetting.id
        }));

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

export default SeedDatabase;