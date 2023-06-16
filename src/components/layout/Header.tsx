import React from "react";
import AccountButton from "../ui/AccountButton";
import SearchButton from "../ui/SearchButton";
import {Link} from "react-router-dom";
import logo from "../../assests/images/logo1.png"
import icon from "../../assests/images/logo.svg"
interface HeaderProps {
  children?: React.ReactNode;
  onSearch?: () => void;
  className?: string
}

const Header = ({ children, onSearch, className }: HeaderProps) => {

  return (
    <header className={`w-full flex items-center fixed top-0 z-20 bg-lightYellow ${className}`}>
      <Link to="/" className="mr-1 bg-lightYellow flex justify-center items-center rounded-full font-bold">
        <img src={icon} alt="logo" className="h-full w-full  max-w-[35px] sm:max-w-[45px]" />
        <img src={logo} alt="logo" className="h-full w-full  hidden md:block max-w-[245px]" />
      </Link>
      <div className="flex-1 w-full">{children}</div>
        {onSearch &&
          <div className="mx-2 "><SearchButton onClick={onSearch} />
          </div>
        }
      <div className="mr-2 sm:mx-4 md:mx-4 ">
        <AccountButton />
      </div>
    </header>
  );
};

export default Header;
