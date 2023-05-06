import React, {Fragment, useContext, useEffect} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import DataStoreContext, {DataStoreContextType} from "../../context/DataStoreContext";
import {FaUser} from "react-icons/all";
import {Link} from "react-router-dom";
import {Menu, Transition} from '@headlessui/react'
import Modal from "../common/Modal/Modal";
import {useUserProfileStore} from "../../stores/friendProfilesStore";
import Spinner from "../common/Spinner/Spinner";
const AccountButton = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { saveDataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { reset } = useUserProfileStore();

  const handleSignOut = async () => {
    try {
      signOut()
      saveDataStoreCleared(false);
      setAlertIsOpen(true);
      await DataStore.clear();
      reset();
      setAlertIsOpen(false)
      saveDataStoreCleared(true);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    console.log(authStatus)
  }, [authStatus])

  return (
    <>
    <Menu as='div' className='relative'>
      <Menu.Button className='hover:bg-gray-100 text-green-950'>
        <FaUser />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      <Menu.Items className='text-lg flex flex-col absolute right-2 top-10 bg-white transition-all z-50 shadow-dropdown w-[250px]'>
          {
            authStatus === 'authenticated' ?
              <>
                <Menu.Item   className='border-b border-b-green-950  p-2' as='div'>
                  {user?.attributes?.email}
                </Menu.Item>
                <Menu.Item>
                  <Link className='hover:bg-green-950 hover:text-white w-full  p-2 ' to='/account'>
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className='w-full cursor-pointer hover:bg-green-950 hover:text-white p-2 ' to='/account/settings'>
                    Account Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className='w-full cursor-pointer hover:text-white hover:bg-green-950 p-2 ' to='/admin'>
                    Admin
                  </Link>
                </Menu.Item>
                <Menu.Item><div className='w-full cursor-pointer hover:text-white hover:bg-green-950 p-2 ' onClick={handleSignOut}>Sign Out</div></Menu.Item>
              </>
              :
              <Menu.Item>
                <Link className='w-full cursor-pointer hover:text-white hover:bg-green-950 p-2 ' to='/account'>Login In / Sign Up</Link>
              </Menu.Item>
          }
      </Menu.Items>
      </Transition>
    </Menu>
      <Modal isOpen={alertIsOpen} setIsOpen={setAlertIsOpen} title='Logging Out...'>
        <div className='flex flex-col items-center'>
          <span>Log Out in Progress</span>
          <Spinner/>
        </div>
      </Modal>
    </>
  )
}

export default AccountButton