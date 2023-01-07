import { ButtonHTMLAttributes } from 'react'
import { SlArrowRight } from 'react-icons/sl'

export default function NavigationButton({
  className,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-9 h-9 rounded-full bg-white shadow-lg flex justify-center items-center hover:text-gray-500 ${className}`}
    >
      <SlArrowRight className="w-3 h-3" />
    </button>
  )
}
