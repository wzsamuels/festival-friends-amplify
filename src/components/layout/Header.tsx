import React from "react";
import AccountButton from "../ui/AccountButton";
import SearchButton from "../ui/SearchButton";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface HeaderProps {
  children?: React.ReactNode;
  onSearch?: () => void;
}

const Header = ({ children, onSearch }: HeaderProps) => {
  const { route } = useAuthenticator((context) => [context.route]);

  return (
    <header className="bg-white shadow-xl w-full flex items-center fixed  top-0 z-10">
      <div className="flex-1 w-full md:mr-4">{children}</div>
      <div className="[&>*]:p-2 [&>*]:md:p-4 flex">
        {onSearch ? (
          <SearchButton onClick={onSearch} />
        ) : null}
        <AccountButton />
      </div>
    </header>
  );
};

export default Header;
