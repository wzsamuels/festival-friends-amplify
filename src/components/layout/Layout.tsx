import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  BsEmojiSmile,
  BsFillChatSquareDotsFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import PulseButton from "../common/PulseButton/PulseButton";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";

const Layout = () => {

  useEffect(() => {
    document.body.focus();
  }, []);
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
};

export default Layout;
