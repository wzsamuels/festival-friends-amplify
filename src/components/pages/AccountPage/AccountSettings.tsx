import React, {useEffect, useState} from "react";
import { AccountSettings } from "@aws-amplify/ui-react";
import Header from "../../layout/Header";
import {Control, Controller, FieldPath, SubmitHandler, useController, useForm} from "react-hook-form";
import {Switch} from "@headlessui/react";
import classNames from "classnames";
import Button from "../../common/Button/Button";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";
import {DataStore} from "aws-amplify";
import {PrivacySetting, UserProfile} from "../../../models";

interface AccountSettingsInputs {
  city: boolean
  state: boolean
  school: boolean
  email: boolean
  attendingEvents: boolean
  rides: boolean
  friends: boolean
  photos: boolean
}

const AccountSettingsPage = () => {
  const [privacySetting, setPrivacySetting] = useState<PrivacySetting>();
  const { userProfile } = useUserProfileStore();


  useEffect(() => {
    if(!userProfile) return;
    const privacySub = DataStore.observeQuery(PrivacySetting, c => c.userProfileID.eq(userProfile?.id)).subscribe(({items}) => {
      setPrivacySetting(items[0]);
      console.log(items[0])
    })
    return () => {
      privacySub.unsubscribe();
    }
  }, [])

  return (
    <>
      <Header />
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
            <PrivacySettingForm userProfile={userProfile} privacySetting={privacySetting}/>
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

const PrivacySettingForm = ({privacySetting, userProfile}: {privacySetting: PrivacySetting | undefined, userProfile: UserProfile | null}) => {
  const { control, handleSubmit, reset, getValues } = useForm<AccountSettingsInputs>({
    defaultValues: {
      city: privacySetting?.city || false,
      state: privacySetting?.state || false,
      school: privacySetting?.school || false,
      email: privacySetting?.email || false,
      attendingEvents: privacySetting?.attendingEvents || false,
      rides: privacySetting?.rides || false,
      friends: privacySetting?.friends || false,
      photos: privacySetting?.photos || false,
    }
  });

  const handlePrivacyUpdate:SubmitHandler<AccountSettingsInputs> = async (data) => {
    console.log(data)
    if(!privacySetting) {
      await DataStore.save(new PrivacySetting({
        userProfileID: userProfile?.id as string,
        city: data.city,
        state: data.state,
        school: data.school,
        email: data.email,
        attendingEvents: data.attendingEvents,
        rides: data.rides,
        friends: data.friends,
        photos: data.photos,
      }))
    } else {
      await DataStore.save(PrivacySetting.copyOf(privacySetting, updated => {
        updated.city = data.city;
        updated.state = data.state;
        updated.school = data.school;
        updated.email = data.email;
        updated.attendingEvents = data.attendingEvents;
        updated.rides = data.rides;
        updated.friends = data.friends;
        updated.photos = data.photos;
      }))
    }
  }

  useEffect(() => {
    if(!privacySetting) return;
    reset({
        city: privacySetting?.city || false,
        state: privacySetting?.state || false,
        school: privacySetting?.school || false,
        email: privacySetting?.email || false,
        attendingEvents: privacySetting?.attendingEvents || false,
        rides: privacySetting?.rides || false,
        friends: privacySetting?.friends || false,
        photos: privacySetting?.photos || false,
    });
    console.log(getValues())
  }, [privacySetting])

  return (
    <form onSubmit={handleSubmit(handlePrivacyUpdate)}>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="city" label="City" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="state" label="State" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="school" label="School" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="email" label="Email" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="attendingEvents" label="Attending Events" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="rides" label="Rides" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="friends" label="Friends" control={control} />
      </Switch.Group>
      <Switch.Group as="div" className='my-4'>
        <Toggle name="photos" label="Photos" control={control} />
      </Switch.Group>
      <Button type='submit'>Update</Button>

    </form>
  )
}

interface ToggleProps {
  name: FieldPath<AccountSettingsInputs>;
  control: Control<AccountSettingsInputs>;
  label: string
}

const Toggle = ({name, control, label}: ToggleProps) => {
  const {
    field: { value, onChange }
  } = useController({name, control});

  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex-grow flex flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
        >
          { label }
        </Switch.Label>
      </span>

      <Switch
        checked={value}
        onChange={onChange}
        className={classNames(
          value ? "bg-green-950" : "bg-blue-700",
          "relative mr-8 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            value ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}

export default AccountSettingsPage;
