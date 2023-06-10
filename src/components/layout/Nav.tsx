import React, { useEffect, useRef } from "react";
import {NavLink, useLocation} from "react-router-dom";
import {NavItem} from "../../types";

interface NavProps {
  items: NavItem[];
  className?: string;
}

const Nav = ({items, className} : NavProps) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const activePath = location.pathname;

  const updateUnderlinePosition = () => {
    const activeLink = document.querySelector(`.nav-link[href='${activePath}']`);
    const parent = document.querySelector('.nav-container');

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`w-full flex justify-between h-full relative flex-wrap ${className} nav-container`}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          className="nav-link relative flex-1 py-4 px-1 sm:px-2 md:px-4 text-sm sm:text-base flex justify-center"
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
