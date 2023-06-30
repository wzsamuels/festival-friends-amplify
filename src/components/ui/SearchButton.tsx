import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

interface SearchButtonProps {
  onClick?: () => void;
  className?: string;
}

const SearchButton = ({ onClick, className }: SearchButtonProps) => {
  return (
    <button
      className={`hover:text-darkGreen h-9 w-9 flex justify-center items-center rounded-full ${className}`}
      onClick={onClick}
    >
      <MagnifyingGlassIcon className='h-5'/>
    </button>
  );
};

export default SearchButton;
