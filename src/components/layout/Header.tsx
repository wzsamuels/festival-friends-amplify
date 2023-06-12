import React from "react";
import AccountButton from "../ui/AccountButton";
import SearchButton from "../ui/SearchButton";
import {Link} from "react-router-dom";
import logo from "../../images/logo1.jpg"
import logo2 from "../../images/logo2.jpg"
interface HeaderProps {
  children?: React.ReactNode;
  onSearch?: () => void;
}

const Header = ({ children, onSearch }: HeaderProps) => {

  return (
    <header className="bg-white w-full flex items-center fixed top-0 z-10 md:shadow-xl">
      <Link to="/" className="w-[220px] md:w-[245px] mr-1 bg-lightYellow flex justify-center items-center rounded-full font-bold">
        <img src={logo} alt="logo" className="h-full w-full" />
      </Link>
      <div className="flex-1 w-full md:mr-4">{children}</div>
        {onSearch &&
          <div className="mx-1 sm:mx-4 md:mx-4 "><SearchButton onClick={onSearch} />
          </div>
        }
      <div className="mr-2 sm:mx-4 md:mx-4 ">
        <AccountButton />
      </div>
    </header>
  );
};

export default Header;
