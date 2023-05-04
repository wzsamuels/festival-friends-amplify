import {FaSearch} from "react-icons/all";
import React from "react";

interface SearchButtonProps {
  onClick?: () => void;
  className?: string;
}

const SearchButton = ({onClick, className}: SearchButtonProps) => {
  return (
    <button className={`hover:bg-gray-100 text-green-950 ${className}`} onClick={onClick}>
      <FaSearch/>
    </button>
  );
}

export default SearchButton;