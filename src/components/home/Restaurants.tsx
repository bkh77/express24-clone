import { FaHeart } from 'react-icons/fa'
import Button from './Button'
import Select from './Select'
import Card from './Card'
import restaurants from '../../data/restaurants.json'
import { useState } from 'react'

export default function Restaurants() {
  const [index, setIndex] = useState(15)
  const [currentCategory, setCurrentCategory] = useState('Еще')
  return (
    <div className="mt-12">
      <h2>Рестораны</h2>

      <div className="mt-6 flex justify-between">
        <div>
          {[
            'Избранные',
            'Uzcard',
            'Новинки',
            'Базары',
            'Fast Food',
            'Национальная',
            'Азиатская',
            'Кофейня',
          ].map((name, index) => (
            <Button
              key={name}
              onClick={() => setCurrentCategory(name)}
              className="focus:bg-yellow-200 m-1"
            >
              {index === 0 && <FaHeart className="inline text-red-500" />}{' '}
              {name}
            </Button>
          ))}
        </div>

        <Select
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {restaurants
          .slice(0, index)
          .filter(
            (item) =>
              currentCategory === 'Еще' || item.tags.includes(currentCategory)
          )
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </div>

      <div className="my-16">
        <Button
          onClick={() => setIndex(restaurants.length + 1)}
          className="w-full font-semibold"
        >
          Показать еще
        </Button>
      </div>
    </div>
  )
}
