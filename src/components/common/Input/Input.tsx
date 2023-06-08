import React from "react";

interface InputProps {
  className?: string;
  [key: string]: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0  ${className}`}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
