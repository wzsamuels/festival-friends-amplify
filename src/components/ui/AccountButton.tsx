import React, {Fragment} from "react";
import {DataStore} from "@aws-amplify/datastore";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import Modal from "../common/Modal/Modal";
import Spinner from "../common/Spinner/Spinner";
import useDataClearedStore from "../../stores/dataClearedStore";
import useProfileStore from "../../stores/profileStore";
import useFriendStore from "../../stores/friendProfileStore";
import {UserIcon} from "@heroicons/react/24/solid";
import useQueueStore from "../../stores/queueStore";
import {useAuth0} from "@auth0/auth0-react";
import {Browser} from "@capacitor/browser";
import {callbackUri} from "../../auth.config";
const AccountButton = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const setDataCleared = useDataClearedStore(state => state.setDataCleared);
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);
  const clearProfile = useProfileStore(state => state.clearUserProfile);
  const clearFriendProfiles = useFriendStore(state => state.clearFriends);
  const friendUnsubscribe = useFriendStore(state => state.friendUnsubscribe);
  const unsubscribeProfile = useProfileStore(state => state.unsubscribeProfile);
  const { dataStoreQueue } = useQueueStore();

  const clearStores = () => {
    clearProfile();
    clearFriendProfiles();
  }

  // TODO: Move to  a separate file
  const handleSignOut = async () => {
    setAlertIsOpen(true);

    try {
      console.log("Stopping subscriptions...");
      friendUnsubscribe();
      unsubscribeProfile();
      console.log("subscriptions stopped.");
    } catch (e) {
      console.log("Error stopping subscriptions: ", e);
      return;
    }

    try {
      console.log("Clearing DataStore...");
      setDataCleared(false);
      dataStoreQueue.enqueue(async () => {
        await DataStore.clear();
      });
      console.log("DataStore cleared.");
    } catch (e) {
      console.log("Error clearing DataStore: ", e);
      return;
    }

    try {
      console.log("Clearing stores...");
      clearStores();
      console.log("Stores cleared.");
    } catch (e) {
      console.log("Error clearing stores: ", e);
      return;
    }

    try {
      console.log("Starting datastore...");
      dataStoreQueue.enqueue(async () => {
        await DataStore.start();
      });
      console.log("Datastore started.");
      console.log("Setting dataCleared to true...");
      setDataCleared(true);

    } catch (e) {
      console.log("Error starting datastore: ", e);
    }

    console.log("Attempting sign out...");
    try {
      await logout({
        async openUrl(url) {
          await Browser.open({
            url,
            windowName: "_self",
          });
        },
        logoutParams: {
          returnTo: callbackUri
        }
      });
    } catch(e) {
      console.log("Error logging out: ", e);
    }

    setAlertIsOpen(false);
  };



  return (
    <>
      <Menu as="div" className="relative mr-2 sm:mx-4 md:mx-4">
        <Menu.Button className="flex justify-center items-center rounded-full">
          <UserIcon className="hover:text-darkGreen h-5" />
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
          <Menu.Items className="text-base md:text-lg flex flex-col absolute right-0 top-6 bg-white transition-all z-20 shadow-dropdown min-w-[15rem]">
            {isAuthenticated && user ? (
              <>
                <Menu.Item
                  className="border-b border-b-brandYellow p-2"
                  as="div"
                >
                  {user?.email}
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className="hover:bg-brandYellow hover:text-white w-full p-2 "
                    to="/account"
                  >
                    Account
                  </Link>
                </Menu.Item>
                { user?.email === "wzsamuels@gmail.com" &&

                  <Menu.Item>
                    <Link
                      className="w-full hover:text-white hover:bg-brandYellow p-2 "
                      to="/admin/events"
                    >
                      Admin
                    </Link>
                  </Menu.Item>
                }
                <Menu.Item>
                  <Link
                    className="w-full hover:text-white hover:bg-brandYellow p-2"
                    to="/submit-event"
                  >
                    Submit Event
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <div
                    className="w-full cursor-pointer hover:text-white hover:bg-brandYellow p-2"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </div>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item>
                <Link
                  className="w-full hover:text-white hover:bg-brandYellow p-2 "
                  to="/account"
                >
                  Login In / Sign Up
                </Link>
              </Menu.Item>
            )}
            <div className="p-2 border-t border-t-darkGreen text-sm">
              <Link
                className="underline my-2"
                to="/support"
              >
                Contact Us
              </Link>
              {' '}
                <Link
                  className="underline my-2"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <div className="my-1">&copy; {new Date().getFullYear()} Event Friends</div>
              <div className="text-xs">Website by <a href="https://twinsilverdesign.com" className="underline"  target="_blank" rel="noreferrer">Twin Silver</a></div>
            </div>
          </Menu.Items>

        </Transition>
      </Menu>
      <Modal
        isOpen={alertIsOpen}
        setIsOpen={setAlertIsOpen}
        title="Logging Out..."
        className=" max-w-[200px]"
      >
        <div className="flex flex-col items-center">
          <span>Log Out in Progress</span>
          <Spinner />
        </div>
      </Modal>
    </>
  );
};

export default AccountButton;
