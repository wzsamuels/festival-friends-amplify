import React, {useCallback, useEffect} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {
  BsEmojiSmile,
  BsFillChatSquareDotsFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import PulseButton from "../common/PulseButton/PulseButton";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
import { useAuthenticator } from "@aws-amplify/ui-react";
import LandingPage from "../../pages/landing/page";
import useProfileStore from "../../stores/profileStore";
import LoadingState from "../ui/LoadingState";
import AccountUnverified from "../../pages/AccountPage/AccountUnverified";
import Header from "./Header";
import {LocalNotifications} from "@capacitor/local-notifications";
import logo from "../../assests/images/logo.svg";
import {getAllEvents} from "../../services/eventServices";
import {Geolocation} from "@capacitor/geolocation";
import calculateDistance from "../../lib/calculateDistance";
import {App} from "@capacitor/app";
import {Auth} from "@aws-amplify/auth";

const Layout = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { loadingUserProfile, userProfile } = useProfileStore();
  const navigate = useNavigate();
  useEffect(() => {
    document.body.focus();
  }, []);

  App.addListener('appUrlOpen', (data) => {
    console.log("App URL Open: ", data.url)
    navigate("/")
    // Check if URL contains 'myapp'
    if (data.url.includes('eventfriends')) {
      // Handle auth response
      Auth.federatedSignIn();
    }
  });

  const notificationEffect = useCallback(async () => {
    const userCoords = await Geolocation.getCurrentPosition();
    const events = await getAllEvents();
    const now = new Date();
 //   console.log(`${userCoords.coords.latitude}, ${userCoords.coords.longitude}`)

// Set the current date time to the start of the day
    now.setHours(0, 0, 0, 0);

    const eventMap = await Promise.all(events.map(async (event) => {
      if(!(event.latitude && event.longitude)) return false;

      const latitude = event.latitude;
      const longitude = event.longitude;
      const miles = calculateDistance(userCoords.coords.latitude, userCoords.coords.longitude, latitude, longitude)
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      // Set the end date to the end of the day
      endDate.setHours(23, 59, 59, 999);

      // Now check if the 'now' is between the start and end dates
   //   console.log(`Event: ${event.name}, Start Date ${startDate}, End Date ${endDate}, Miles ${miles}`);

      return now >= startDate && now <= endDate && miles < 100;
    }));
    const filteredEvents = events.filter((_, idx) => eventMap[idx]);
    console.log("Filtered Events: ", filteredEvents);
    if(filteredEvents.length === 0) return;

    let text = ""
    for(const event of filteredEvents) {
      text += `${event.name} is happening in ${event.city}, ${event.state}!\n`
    }
    LocalNotifications.requestPermissions().then(res => {
      console.log(res);
      LocalNotifications.schedule({
        notifications: [
          {
            title: "There are events in your area!",
            body: text,
            id: 1,
            // schedule: { at: new Date(Date.now()) }, // 5 seconds from now
            actionTypeId: "",
            extra: null
          }
        ]
      }).then(res => {
        console.log(res);
      });
    })
    new Notification("There are events in your area!", { body: text, icon: logo });

  }, [])

  useEffect(() => {
    if(!userProfile) return;
    notificationEffect();
  }, [userProfile])

  if(userProfile?.verified) {
    return (
      <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
        <div className="pt-9 md:pt-10 pb-footer">
          <Outlet />
        </div>
        <footer className="shadow-dropdown max-h-[56px] fixed  bottom-0 left-0 right-0 flex justify-around items-center p-2 bg-lightYellow">
          <div className="flex flex-1 flex-shrink">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-gray-600"} flex-1`
              }
            >
              <PulseButton className="w-full flex flex-col justify-center items-center">
                <CalendarDaysIcon
                  className="h-5"
                  aria-hidden="true"
                />
                <div className="text-xs sm:text-sm md:text-base">Events</div>
              </PulseButton>
            </NavLink>
          </div>
          <div className="flex flex-1 flex-shrink">
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-gray-600"} flex-1`
              }
            >
              <PulseButton className="w-full flex flex-col justify-center items-center">
                <BsEmojiSmile
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <div className="text-xs sm:text-sm md:text-base">Friends</div>
              </PulseButton>
            </NavLink>
          </div>
          <div className="flex flex-1 flex-shrink">
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-gray-600"} flex-1`
              }
            >
              <PulseButton className="w-full flex flex-col justify-center items-center">
                <BsFillChatSquareDotsFill
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <div className="text-xs sm:text-sm md:text-base">Messages</div>
              </PulseButton>
            </NavLink>
          </div>
          <div className="flex flex-1 flex-shrink">
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-gray-600"} flex-1`
              }
            >
              <PulseButton className="w-full flex flex-col justify-center items-center">
                <BsFillPeopleFill
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
                <div className="text-xs sm:text-sm md:text-base">Groups</div>
              </PulseButton>
            </NavLink>
          </div>
        </footer>
      </div>
    );
  }

  if (loadingUserProfile || route === "idle") {
    return <LoadingState />;
  }

  if(route !== 'authenticated') {
    return (
      <LandingPage/>
    )
  }



  if (!userProfile) {
    return <AccountUnverified />
  }

  if (!userProfile?.verified && userProfile?.submitted) {
    return (
      <>
        <Header className="shadow-xl" />
        <div className="flex w-full h-full justify-center items-center flex-col p-4">
          <div className="max-w-lg">
            <div className="my-4">
              Your profile has been submitted for verification. You&apos;ll
              receive an email at the address you used to sign up for this account
              once the process has been completed.
            </div>
            <div className="my-4">
              If you&apos;ve received confirmation that your profile has been
              verified but are still seeing this message, please try refreshing
              this page.
            </div>
          </div>
        </div>
      </>
    );
  }






};

export default Layout;
