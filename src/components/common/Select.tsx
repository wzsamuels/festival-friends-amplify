import React from "react";

interface SelectProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className={`border border-green-950 rounded ${className}`}
    >
      {children}
    </select>
  )
})

Select.displayName = 'Select'

export default Select
