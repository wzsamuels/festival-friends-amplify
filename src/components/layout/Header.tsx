import React from "react";
import AccountButton from "../ui/AccountButton";
import SearchButton from "../ui/SearchButton";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {Link} from "react-router-dom";

interface HeaderProps {
  children?: React.ReactNode;
  onSearch?: () => void;
}

const Header = ({ children, onSearch }: HeaderProps) => {
  const { route } = useAuthenticator((context) => [context.route]);

  return (
    <header className="bg-white shadow-xl w-full flex items-center fixed  top-0 z-10">
      <Link to="/" className="h-10 w-10 m-1 bg-lightYellow flex justify-center items-center rounded-full font-bold">
        EF
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
