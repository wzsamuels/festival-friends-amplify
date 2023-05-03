import React from 'react';

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
      className={`border-b border-b-medium-tint focus:border-b-primary-default focus:outline-0 ${className}`}/>
  )
})
Input.displayName = 'Input';
export default Input