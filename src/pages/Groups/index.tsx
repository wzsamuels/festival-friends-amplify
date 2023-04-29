import AccountButton from "../../components/Profile/AccountButton";
import React, {useContext, useEffect, useState} from "react";
import groupImage from "../../images/group.png";
import {useAuthenticator} from "@aws-amplify/ui-react";
import UserProfileContext from "../../context/UserProfileContext";
import {DataStore} from "@aws-amplify/datastore";
import {CollegeGroup} from "../../models";
import {Link} from "react-router-dom";

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
        <div className='bg-[url("/src/images/group.png")] h-screen w-full bg-cover flex flex-col items-center justify-center h-full'>
          <div className='text-primary-default font-bold flex flex-col items-center justify-center text-3xl bg-light-default p-4 rounded-xl'>
            { collegeGroup && authStatus === 'authenticated' &&
              <div>
                You are part of the {collegeGroup.name} Community
              </div>
            }
            {
              !collegeGroup && authStatus === 'authenticated' &&
              <div>
                You are not part of any Community
              </div>
            }
            {
              authStatus === 'unauthenticated' &&
              <>
                <div className='my-4'>Connect with your Community</div>
                <Link to='/account'><button className='my-4'>Sign In</button></Link>
              </>
            }

          </div>
        </div>
  )
}

export default GroupsPage