import { useState } from 'react'
import Button from './Button'
import { SlArrowRight } from 'react-icons/sl'

type SelectProps = {
  currentCategory: string
  setCurrentCategory: (value: string) => void
}

export default function Select({
  currentCategory,
  setCurrentCategory,
}: SelectProps) {
  const [showSelect, setShowSelect] = useState(false)
  return (
    <div className="relative">
      <Button onClick={() => setShowSelect((prev) => !prev)}>
        {currentCategory}
        <SlArrowRight className="inline rotate-90 w-3 h-3 text-gray-500 ml-4" />{' '}
      </Button>

      <div
        className={`w-[300px] transition-all duration-200 bg-white rounded-xl shadow-2xl absolute top-13 right-0 z-10 overflow-auto ${
          showSelect ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {[
          'Пиццерия',
          'Здоровье',
          'Европейская',
          'Кондитерская',
          'Барбекю',
          'Продукты',
          'Мороженое',
          'ПП',
        ].map((name) => (
          <div
            onClick={() => {
              setShowSelect(false)
              setCurrentCategory(name)
            }}
            className="py-3 border-b border-gray-200 px-4 hover:bg-gray-200 cursor-pointer"
            key={name}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
