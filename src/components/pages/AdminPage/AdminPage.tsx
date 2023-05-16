import React, {useEffect, useState} from "react";
import {FestivalCreateForm} from "../../../ui-components";
import {CollegeGroup, UserProfile} from "../../../models";
import {DataStore} from "aws-amplify";
import colleges from "../../../data/colleges.json"
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";

const AdminPage = () => {
  return (
        <div className='flex flex-col items-center justify-center w-full p-4'>
          <section className='w-full max-w-xl flex flex-col'>
            <h1 className='text-xl md:text-2xl'>Verify Profiles</h1>
            <VerifyAccounts/>
          </section>
          <section className='w-full max-w-xl my-8'>
            <h1 className='text-xl md:text-2xl'>Create Festival</h1>
            <FestivalCreateForm/>
          </section>
        </div>
  )
}

export default AdminPage

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<UserProfile[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(UserProfile, c => c.verified.eq(false))
      console.log(response)
      setUnverifiedProfiles(response)
    }
    fetchProfiles()
  }, [])

  const seedDatabase = async () => {
    const newColleges = await Promise.all( colleges.map(async (college) => {
      return await DataStore.save(new CollegeGroup({
        name: college.name,
        members: [],
        domain: college.domains[0],
        webPage: college.web_pages[0],
        countryCode: college.alpha_two_code
      }));
    }))
    alert(`Database seeded with ${newColleges.length} colleges`)
  }

  const verifyProfile = async (profile: UserProfile) => {
    const latestProfile = await DataStore.query(UserProfile, c => c.id.eq(profile.id))
    await DataStore.save(UserProfile.copyOf(latestProfile[0], updated => {updated.verified = true}))
    setUnverifiedProfiles(unverifiedProfiles.filter(p => p.id !== profile.id))
    setMessage('Profile verified');
  }

  return (
    <div>
      {
        unverifiedProfiles.map(profile =>
          <ul key={profile.id}>
            <InputWrapper className='my-4'>
              <Label>Email</Label>
              <div className='text-wrap'>{profile.email}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <Label>Phone Number</Label>
              <div className='text-wrap'>{profile.phone}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <Label>City</Label>
              <div className='text-wrap'>{profile.city}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <Label>State</Label>
              <div className='text-wrap'>{profile.state}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <Label>Zip Code</Label>
              <div className='text-wrap'>{profile.zipcode}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <Label>Address</Label>
              <div className='text-wrap'>{profile.address}</div>
            </InputWrapper>
            <InputWrapper className='my-4'>
              <div  slot='start' className='text-wrap'>School</div><div className='text-wrap'>
              {profile.school}
              </div>
            </InputWrapper>
            <div className='flex justify-center my-4'>
              <Button onClick={() => verifyProfile(profile)}>Verify Profile</Button>
            </div>
          </ul>
        )
      }
      <h2 className='text-lg text-center my-4'>{unverifiedProfiles.length} profiles to verify</h2>
      <h3 className='text-center my-4'>{message}</h3>
      {/*<IonButton onClick={seedDatabase}>Seed Database</IonButton>*/}
    </div>
  )
}