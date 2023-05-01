import React, {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import {
  BsEmojiSmile,
  BsFillCarFrontFill,
  BsFillChatSquareDotsFill,
  BsFillPeopleFill,
  BsMusicNoteBeamed
} from "react-icons/bs";
import PulseButton from "../common/PulseButton";

const Layout = () => {

  const location = useLocation();

  useEffect(() => {
    document.body.focus();
  }, []);
  return (
    <div className='min-h-screen h-screen'>
      <Outlet/>
      <footer className="shadow-dropdown fixed bg-white bottom-0 left-0 right-0 flex justify-around items-center">
        <NavLink
          to="/"
          className={({isActive}) => `${isActive ? 'text-primary-default' : 'text-medium-default'} flex-1`}>
          <PulseButton className='w-full flex flex-col justify-center items-center'>
            <BsMusicNoteBeamed aria-hidden="true"/>
            <div>Events</div>
          </PulseButton>
        </NavLink>
        <NavLink
          to="/friends"
          className={({isActive}) => `${isActive ? 'text-primary-default' : 'text-medium-default'} flex-1`}>
          <PulseButton className='w-full flex flex-col justify-center items-center'>
            <BsEmojiSmile aria-hidden="true"/>
            <div>Friends</div>
          </PulseButton>
        </NavLink>
        <NavLink
          to="/messages"
          className={({isActive}) => `${isActive ? 'text-primary-default' : 'text-medium-default'} flex-1`}>
          <PulseButton className='w-full flex flex-col justify-center items-center'>
            <BsFillChatSquareDotsFill aria-hidden="true"/>
            <div>Messages</div>
          </PulseButton>
        </NavLink>
        <NavLink
          to="/groups"
          className={({isActive}) => `${isActive ? 'text-primary-default' : 'text-medium-default'} flex-1`}>
          <PulseButton className='w-full flex flex-col justify-center items-center'>
            <BsFillPeopleFill aria-hidden="true"/>
            <div>Groups</div>
          </PulseButton>
        </NavLink>
        <NavLink
          to="/rides"
          className={({isActive}) => `${isActive ? 'text-primary-default' : 'text-medium-default'} flex-1`}>
          <PulseButton className='w-full flex flex-col justify-center items-center'>
            <BsFillCarFrontFill aria-hidden="true"/>
            <div>Rides</div>
          </PulseButton>
        </NavLink>
      </footer>
    </div>
  )
}

export default Layout;