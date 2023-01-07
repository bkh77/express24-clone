import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-gray-100 py-4 px-4 rounded-xl leading-none  transition-all duration-300 hover:bg-gray-200 ${className}`}
    >
      {children}
    </button>
  )
}
