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
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-md uppercase border border-primary-default ${className} ${variation === 'outline' ? 'bg-white text-green-950' : 'bg-green-950 text-white'}`}
    >
      {children}
    </button>
  )
}

export default Button