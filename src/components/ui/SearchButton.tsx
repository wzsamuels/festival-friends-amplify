import { FaSearch } from "react-icons/all";
import React from "react";

interface SearchButtonProps {
  onClick?: () => void;
  className?: string;
}

const SearchButton = ({ onClick, className }: SearchButtonProps) => {
  return (
    <button
      className={`hover:text-darkGreen h-9 w-9 m-1 flex justify-center items-center rounded-full ${className}`}
      onClick={onClick}
    >
      <FaSearch />
    </button>
  );
};

export default SearchButton;
