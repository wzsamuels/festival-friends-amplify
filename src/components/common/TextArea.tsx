import React from "react";

interface InputProps {
  className?: string;
  [key: string]: any;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={`border border-gray-400 flex-1 focus:border-green-950 focus:outline-0  ${className}`}
      />
    );
  }
);
TextArea.displayName = "Input";
export default TextArea;