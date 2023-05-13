import { DataStore } from '@aws-amplify/datastore';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import React, {useContext, useEffect} from 'react';
import ProfileUnverified from '../Profile/ProfileUnverified';
import ProfileVerified from '../Profile/ProfileVerified';
import { useUserProfileStore} from "../../../stores/friendProfilesStore";
import Spinner from "../../common/Spinner/Spinner";
import Header from "../../layout/Header";
import DataStoreContext, {DataStoreContextType} from "../../../context/DataStoreContext";
import Loading from "../../common/Loading";

const AccountPage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator(context => [context.route]);
  const loadingUserProfile = useUserProfileStore((state) => state.loadingUserProfile);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const fetchAndObserveUserProfile = useUserProfileStore(
    (state) => state.fetchAndObserveUserProfile,
  );
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType

  useEffect(() => {
    if (user && dataStoreCleared) {
      fetchAndObserveUserProfile(user);
    }
  }, [user, fetchAndObserveUserProfile, dataStoreCleared]);

  useEffect(() => {
    console.log("Loading user profile", loadingUserProfile, "userProfile", userProfile);
  }, [loadingUserProfile, userProfile]);

  const renderPage = () => {
    if(loadingUserProfile || route === 'idle') {
      return <Loading/>
    }

    if(route !== 'authenticated')  {
      return (
        <div className='w-screen h-screen translate-y-[-15%] flex justify-center items-center'>
          <Authenticator />
        </div>
      )
    }

    if (!userProfile) {
      return <ProfileUnverified />;
    }

    if (userProfile?.verified) {
      return <ProfileVerified user={user}/>;

    }

    if (!userProfile?.verified && userProfile?.verifySubmitted) {
      return (
        <div className='w-full max-w-lg p-4'>
          <div>Your profile has been submitted for verification. You&apos;ll receive an email at the address you used to sign up for this account once the process has been completed.</div>
          <div className='my-4'>
            If you&apos;ve received confirmation that your profile has been verified but are still seeing this message, please try refreshing this page.
          </div>
        </div>
      );
    }

    else {
      return <div>Something went wrong</div>;
    }
  };

  return (
    <>
      <Header/>
      {renderPage()}
    </>
  );
};

export default AccountPage;
