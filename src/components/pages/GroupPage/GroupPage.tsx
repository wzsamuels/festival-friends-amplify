import AccountButton from "../../ui/AccountButton";
import React, {useContext, useEffect, useState} from "react";
import groupImage from "../../../images/group.png";
import {useAuthenticator} from "@aws-amplify/ui-react";
import UserProfileContext from "../../../context/UserProfileContext";
import {DataStore} from "@aws-amplify/datastore";
import {CollegeGroup} from "../../../models";
import {Link} from "react-router-dom";
import Header from "../../layout/Header";

const GroupsPage = () => {
  const [collegeGroup, setCollegeGroup] = useState<CollegeGroup>();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { userProfile } = useContext(UserProfileContext)

  console.log(userProfile);
  useEffect(() => {
    const fetchCollegeGroup = async () => {
      const group = await userProfile?.collegeGroup;
      console.log(group);
      setCollegeGroup(group)
    }

    if (authStatus === 'authenticated' && userProfile?.collegeGroup !== undefined) {
      fetchCollegeGroup()
    }
  }, [userProfile])

  return (
    <>
      <Header/>
        <div className='bg-[url("/src/images/group.png")] h-screen w-full bg-cover flex flex-col items-center justify-center h-full'>
          <div className='text-primary-default font-bold flex flex-col items-center justify-center text-3xl bg-light-default p-4 rounded-xl'>
            { collegeGroup && authStatus === 'authenticated' &&
              <div className='p-4 m-4 max-w-4xl'>
                You are part of the {collegeGroup.name} Community
              </div>
            }
            {
              !collegeGroup && authStatus === 'authenticated' &&
              <div className='p-4 m-4 max-w-4xl'>
                Our community features is restricted to college students only. If you&apos;re a college student and believe you should be able to access this feature, please contact us.
              </div>
            }
            {
              authStatus !== 'authenticated' &&
              <>
                <div className='p-4 m-4 max-w-4xl'>Connect with your community</div>
                <Link to='/account' className='bg-primary-default  text-xl text-light-default p-4 rounded-xl'>
                  Sign In
                </Link>
              </>
            }

          </div>
        </div>
    </>
  )
}

export default GroupsPage