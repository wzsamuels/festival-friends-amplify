import {DataStore} from "aws-amplify";
import {Group, PrivacySetting, Profile} from "../../../models";
import mockUserProfiles from "../../../data/profiles.json";
import {getGroupByEmail} from "../../../services/groupServices";
import getErrorMessage from "../../../lib/getErrorMessage";
import colleges from "../../../data/colleges.json";
import Button from "../../common/Button/Button";
import React, {useEffect, useState} from "react";

const SeedDatabase = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    DataStore.query(Group).then(groups => setGroups(groups));
  }, [])

  const seedUserProfiles = async () => {
    try {
      const userProfile = await DataStore.query(Profile);
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
        const collegeGroup = await getGroupByEmail(profile.email);

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
        const newUserProfile = await DataStore.save(new Profile({
          ...profile,
          ...(collegeGroup && {groupID: collegeGroup?.id}),
          privacySetting: newPrivacySetting
        }));

        console.log(`New profile for ${profile.firstName}:`, newUserProfile);

      } catch (error) {
        console.log(getErrorMessage(error));
      }
    })
  }


  const seedGroups = async () => {
    try {
      const collegeGroups = await DataStore.query(Group);
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
          if(!college.name || !college.webPage || !college.domain) {
            console.log("Skipping college with missing data", college);
            return;
          }
          const newGroup = await DataStore.save(
            new Group({
              name: college.name,
              domain: college.domain,
              webPage: college.webPage,
            })
          );
          console.log(`New college group for ${college.name}:`, newGroup);
          return newGroup;
        })
      );
      alert(`Database seeded with ${newColleges.length} colleges`);
    } catch (e) {
      console.log("Error seeding database", e);
    }
  };

  const deleteAllCollegeGroups = async () => {
    let groups = await DataStore.query(Group);
    console.log(`Deleting ${groups.length} college groups`)
    await Promise.all(groups.map(async (group) => {
      const deletedGroup = await DataStore.delete(group);
      console.log(`Deleted ${deletedGroup.name} group`);
    }));
    console.log("Deleted all college groups");
    groups = await DataStore.query(Group);
    console.log(`There are now ${groups.length} college groups`)
  }

  return (
    <>
      <h1 className="text-xl md:text-2xl text-center">Seed Database</h1>
      <section>
        <h2>College Groups</h2>
        <div>{colleges.length} groups in file.</div>
        <div>{groups.length} groups in database.</div>
        <Button onClick={deleteAllCollegeGroups}>Delete All College Groups</Button>
      </section>
      <div className='flex justify-center gap-4'>
        <Button className="my-4" onClick={seedUserProfiles}>Seed User Profiles</Button>
        <Button className="my-4" onClick={seedGroups}>Seed College Groups</Button>
      </div>
    </>
  )
}

export default SeedDatabase;