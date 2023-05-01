import React, {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode
  className?: string
  variation?: string
  [key: string]: any
}

const Button = ({children, className, variation,...props}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md uppercase ${className} ${variation === 'outline' ? 'bg-light-default text-primary-default' : 'bg-primary-default text-light-default'}`}
    >
      {children}
    </button>
  )
}

export default Button