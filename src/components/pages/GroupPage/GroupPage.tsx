import React, { useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {CollegeGroup} from "../../../models";
import {Link} from "react-router-dom";
import Header from "../../layout/Header";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

const GroupsPage = () => {
  const [collegeGroup, setCollegeGroup] = useState<CollegeGroup>();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { userProfile } = useUserProfileStore()

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
        <div className='bg-[url("/src/images/group.png")] w-full bg-cover flex flex-col items-center justify-center h-full min-h-screen p-2'>
          <div className='text-green-950 font-bold flex flex-col items-center justify-center text-xl md:text-2xl lg:text-3xl bg-white p-4 rounded-xl w-full max-w-4xl '>
            <div className='p-4 m-4  text-center'>
            { collegeGroup && authStatus === 'authenticated' &&
              <span>You are part of the {collegeGroup.name} Community</span>
            }
            {
              !collegeGroup && authStatus === 'authenticated' &&
              <span>
                Our community features is restricted to college students only. If you&apos;re a college student and believe you should be able to access this feature, please contact us.
                </span>
            }
            {
              authStatus !== 'authenticated' &&
              <span>
                Connect with your community
                <Link to='/account' className='bg-primary-default  text-xl text-light-default p-4 rounded-xl'>
                  Sign In
                </Link>
              </span>
            }
            </div>
          </div>
        </div>
    </>
  )
}

export default GroupsPage