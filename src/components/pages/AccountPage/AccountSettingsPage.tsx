import React, {useEffect, useState} from "react";
import {AccountSettings, useAuthenticator} from "@aws-amplify/ui-react";
import {SubmitHandler, useForm} from "react-hook-form";
import Button from "../../common/Button/Button";
import {DataStore} from "@aws-amplify/datastore";
import {PrivacySetting, Profile} from "../../../models";
import LoggedOutState from "../../ui/LoggedOutState";
import UnverifiedState from "../../ui/UnverifiedState";
import useProfileStore from "../../../stores/profileStore";
import LoadingState from "../../ui/LoadingState";
import Toast from "../../common/Toast/Toast";
import {ToastData} from "../../../types";
import Toggle from "../../common/Toggle";

interface Inputs {
  city: boolean
  state: boolean
  school: boolean
  email: boolean
  events: boolean
  rides: boolean
  friends: boolean
  photos: boolean
}

const AccountSettingsPage = () => {
  const userProfile = useProfileStore(state => state.userProfile);
  const { route } = useAuthenticator(context => [context.route])
  if(route !== 'authenticated') return <LoggedOutState/>

  if(!userProfile?.verified) return <UnverifiedState/>

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <section className="my-8 min-w-4xl  max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl my-6">Privacy Settings</h1>
          <div className='flex justify-between'>
            <h2>Profile</h2>
            <div className='flex justify-between'>
            <span className='mx-4'>Public</span>
            <span>Private</span>
            </div>
          </div>
          <div>
            <PrivacySettingForm userProfile={userProfile}/>
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

// TODO: Move to separate file

const PrivacySettingForm = ({userProfile}: { userProfile: Profile | null}) => {
  const [privacySetting, setPrivacySetting] = useState<PrivacySetting>();
  const [loading, setLoading] = useState(false);
  const [toastData, setToastData] = React.useState<ToastData | null>(null);
  const { control, handleSubmit, reset, getValues } = useForm<Inputs>({
    defaultValues: {
      city: privacySetting?.city || false,
      state: privacySetting?.state || false,
      school: privacySetting?.school || false,
      email: privacySetting?.email || false,
      events: privacySetting?.events || false,
      rides: privacySetting?.rides || false,
      friends: privacySetting?.friends || false,
      photos: privacySetting?.photos || false,
    }
  });

  const handlePrivacyUpdate:SubmitHandler<Inputs> = async (data) => {
    if(!privacySetting) return;

    try {
      const updatedPrivacySetting = await DataStore.save(PrivacySetting.copyOf(privacySetting, updated => {
        updated.city = data.city;
        updated.state = data.state;
        updated.school = data.school;
        updated.email = data.email;
        updated.events = data.events;
        updated.rides = data.rides;
        updated.friends = data.friends;
        updated.photos = data.photos;
      }))
      setPrivacySetting(updatedPrivacySetting);
      setToastData({
        message: "Privacy Setting Updated",
        type: "success",
      })
    } catch (e) {
      console.log("Error saving privacy setting", e);
      setToastData({
        message: "Error saving privacy setting",
        type: "error",
      })
    }
  }

  useEffect(() => {
    if(!userProfile || !userProfile) return;

    setLoading(true);
    userProfile.privacySetting
      .then(privacySetting => setPrivacySetting(privacySetting))
    setLoading(false);
  }, [userProfile])

  useEffect(() => {
    if(!privacySetting) return;

    reset({
      city: privacySetting?.city || false,
      state: privacySetting?.state || false,
      school: privacySetting?.school || false,
      email: privacySetting?.email || false,
      events: privacySetting?.events || false,
      rides: privacySetting?.rides || false,
      friends: privacySetting?.friends || false,
      photos: privacySetting?.photos || false,
    });
  }, [privacySetting])

  if(loading) {
    return (
      <div className="flex justify-center items-center">
        <LoadingState/>
      </div>
    )
  }

  if(!privacySetting) {
    return (
      <div className="flex justify-center items-center">
        Privacy Setting Not Found!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(handlePrivacyUpdate)}>
      <Toggle<Inputs> name="city" label="City" control={control} />
      <Toggle<Inputs> name="state" label="State" control={control} />
      <Toggle<Inputs> name="school" label="School" control={control} />
      <Toggle<Inputs> name="email" label="Email" control={control} />
      <Toggle<Inputs> name="events" label="Attending Events" control={control} />
      <Toggle<Inputs> name="rides" label="Rides" control={control} />
      <Toggle<Inputs> name="friends" label="Friends" control={control} />
      <Toggle<Inputs> name="photos" label="Photos" control={control} />
      <Button type='submit'>Update</Button>
      { toastData && (
        <Toast
          toastData={toastData}
          onClose={() => {
            setToastData(null);
          }}
        />
      )}
    </form>
  )
}



export default AccountSettingsPage;
