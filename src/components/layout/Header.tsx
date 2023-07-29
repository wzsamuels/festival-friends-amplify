import React from "react";
import AccountButton from "../ui/AccountButton";
import SearchButton from "../ui/SearchButton";
import {Link} from "react-router-dom";
import logo from "../../assests/images/logo1.png"
import icon from "../../assests/images/logo.svg"
import {IonHeader} from "@ionic/react";

interface HeaderProps {
  children?: React.ReactNode;
  secondChild?: React.ReactNode;
  onSearch?: () => void;
  className?: string
}

const Header = ({ children, onSearch, className, secondChild }: HeaderProps) => {
  return (
    <IonHeader className={`w-full bg-lightYellow ${className}`}>
      <div className="flex items-center">
        <Link to="/events" className="mr-1 bg-lightYellow flex justify-center items-center rounded-full font-bold">
          <img src={icon} alt="logo" className="h-full w-full  max-w-[35px] sm:max-w-[45px]" />
          <img src={logo} alt="logo" className="h-full w-full  hidden md:block max-w-[245px]" />
        </Link>
        <div className="flex-1 w-full">{children}</div>
        {onSearch &&
          <SearchButton onClick={onSearch} />
        }
        <AccountButton />
      </div>
      {secondChild}
    </IonHeader>
  );
};

export default Header;
