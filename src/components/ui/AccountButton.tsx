import React, {Fragment, useEffect} from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {Auth, DataStore} from "aws-amplify";
import { FaUser } from "react-icons/all";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import Modal from "../common/Modal/Modal";
import Spinner from "../common/Spinner/Spinner";
import useDataClearedStore from "../../stores/dataClearedStore";
import useProfileStore from "../../stores/profileStore";
import useFriendStore from "../../stores/friendProfileStore";
import useConversationStore from "../../stores/conversationStore";
import useEventStore from "../../stores/eventStore";
const AccountButton = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const [ group, setGroup] = React.useState("");
  const setDataCleared = useDataClearedStore(state => state.setDataCleared);
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const clearProfile = useProfileStore(state => state.clearUserProfile);
  const clearFriendProfiles = useFriendStore(state => state.clearFriends);
  const clearConversations = useConversationStore(state => state.clearConversations);
  const friendUnsubscribe = useFriendStore(state => state.friendUnsubscribe);
  const eventsUnsubscribe = useEventStore(state => state.eventsUnsubscribe);

  useEffect(() => {
    if(route !== "authenticated") return;
    Auth.currentAuthenticatedUser()
      .then(user => {
        setGroup(user.signInUserSession.accessToken.payload["cognito:groups"]?.find((group: string) => group === "admin")?.toString() ?? "")
      })
  }, [route])

  const clearStores = () => {
    clearProfile();
    clearFriendProfiles();
    clearConversations();
  }

  // TODO: Move to  a separate file
  const handleSignOut = async () => {
    try {
      console.log("Attempting sign out...");
      setAlertIsOpen(true);
      await signOut();
      console.log("Sign out successful.");
    } catch (e) {
      console.log("Error signing out: ", e);
      return;
    }

    try {
      console.log("Stopping subscriptions...");
      friendUnsubscribe();
      eventsUnsubscribe();
      console.log("subscriptions stopped.");
    } catch (e) {
      console.log("Error stopping subscriptions: ", e);
      return;
    }

    try {
      console.log("Clearing DataStore...");
      setDataCleared(false);
      await DataStore.clear();
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
      console.log("Setting dataCleared to true...");
      setDataCleared(true);
      console.log("dataCleared set to true.");
      setAlertIsOpen(false);
    } catch (e) {
      console.log("Error setting dataCleared: ", e);
    }

    try {
      console.log("Starting datastore...");
      await DataStore.start();
      console.log("Datastore started.");
    } catch (e) {
      console.log("Error starting datastore: ", e);
    }
  };

  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button className="flex justify-center items-center rounded-full">
          <FaUser className="hover:text-darkGreen" />
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
          <Menu.Items className="text-lg flex flex-col absolute right-2 top-10 bg-white transition-all z-50 shadow-dropdown w-[250px]">
            {authStatus === "authenticated" ? (
              <>
                <Menu.Item
                  className="border-b border-b-brandYellow p-2"
                  as="div"
                >
                  {user?.attributes?.email}
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className="hover:bg-brandYellow hover:text-white w-full p-2 "
                    to="/account"
                  >
                    Account
                  </Link>
                </Menu.Item>
                { group === "admin" &&

                  <Menu.Item>
                    <Link
                      className="w-full hover:text-white hover:bg-brandYellow p-2 "
                      to="/admin"
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
                    className="w-full cursor-pointer hover:text-white hover:bg-brandYellow p-2 border-t border-t-darkGreen"
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
          </Menu.Items>
        </Transition>
      </Menu>
      <Modal
        isOpen={alertIsOpen}
        setIsOpen={setAlertIsOpen}
        title="Logging Out..."
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
