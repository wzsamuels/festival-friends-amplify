import React from "react";
import AccountButton from "../ui/AccountButton";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({children} : HeaderProps) => {

  return (
    <header className="bg-white shadow-xl w-full flex items-center fixed top-0 z-10">
      <div className='flex-1 w-full'>
        { children }
      </div>
      <AccountButton/>
    </header>

  )
}

export default Header;