import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variation?: string;
  [key: string]: any;
}

const Button = ({ children, className, variation, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-md border ${className} ${
        variation === "outline"
          ? "bg-white text-black border-black"
          : "bg-lightYellow text-black border-lightYellow"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
