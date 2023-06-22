import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface NavProps {
  items: NavItem[];
  className?: string;
}

const Nav = ({ items, className }: NavProps) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const activePath = location.pathname;
  const id = useRef<string>(uuidv4());
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateUnderlinePosition = () => {
    const activeLink = document.querySelector(`.nav-link-${id.current}[href='${activePath}']`);
    if (underlineRef.current && activeLink && containerRef.current) {
      const linkRect = activeLink.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      underlineRef.current.style.left = `${linkRect.left - containerRect.left + window.scrollX}px`;
      underlineRef.current.style.width = `${linkRect.width}px`;
    }
  };


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    updateUnderlinePosition();
  }, [activePath, size]);

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
    <div ref={containerRef} className={`w-full justify-between h-full relative flex flex-wrap bg-lightYellow ${className} nav-container-${id.current}`}>
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
