import React, { useEffect, useRef } from "react";
import {NavLink, useLocation} from "react-router-dom";
import {NavItem} from "../../types";
import {v4 as uuidv4} from "uuid";

interface NavProps {
  items: NavItem[];
  className?: string;
}

const Nav = ({items, className} : NavProps) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const activePath = location.pathname;
  const id = useRef<string>(uuidv4());

  const updateUnderlinePosition = () => {
    const activeLink = document.querySelector(`.nav-link-${id.current}[href='${activePath}']`);
    const parent = document.querySelector(`.nav-container-${id.current}`);

    if (underlineRef.current && activeLink && parent) {
      const linkRect = activeLink.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      underlineRef.current.style.left = `${linkRect.left - parentRect.left + window.scrollX}px`;
      underlineRef.current.style.width = `${linkRect.width}px`;
    }
  };


  useEffect(() => {
    updateUnderlinePosition();
  }, [activePath]);

  useEffect(() => {
    const handleResize = () => {
      updateUnderlinePosition();
    };

    if(!window) return;

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  return (
    <div className={`w-full justify-between h-full relative flex-wrap bg-lightYellow ${className} nav-container-${id.current}`}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          className={`nav-link-${id.current} relative flex-1 py-4 px-1 sm:px-2 md:px-4 text-sm sm:text-base flex justify-center`}
          to={item.link}
        >
          {item.content}
        </NavLink>
      ))}
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-0.5 bg-darkGreen transition-all duration-300"
      ></div>
    </div>
  );
};

export default Nav;
