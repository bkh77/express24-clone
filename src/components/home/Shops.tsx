import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper'
import { SlArrowRight } from 'react-icons/sl'
import NavigationButton from './NavigationButton'

import 'swiper/css'

const shops = [
  {
    img: 'https://cdn.express24.uz/i/700/700/ZWoE7Fxbyy7y9lbpibC4c.jpg',
    title: 'The Mart',
    category: 'Продукты',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/UisJ9LYLBlZTJhno7i-qm.jpg',
    title: 'Аптека OXYmed ЦУМ',
    category: 'Здоровье',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/cEsbwIGpm2oTXkMwLUC8c.jpg',
    title: 'Touch Of Matcha',
    category: 'Здоровье',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/aNUr-I8it4Kl9TLh0l5al.jpg',
    title: 'GOODVEEN',
    category: 'Цветы',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/upload/iblock/e0f/e0f6675f50817029c8928ee6a40dfa91.png',
    title: 'Приставки от ITV',
    category: 'Электроника',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/5oBvV33wRj8bRJ3gVdm3c.jpg',
    title: 'Аптека OXYmed - Алайский',
    category: 'Здоровье',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/Ea3xcham_0S2g4wCM9Qdp.jpg',
    title: 'Kids plate',
    category: 'Детям',
  },
  {
    img: 'https://cdn.express24.uz/i/700/700/CGsBJe9Oa0pSA7C-L1QZB.jpg',
    title: 'Bookvoed канцтовары',
    category: 'Новинки',
  },
]

export default function Shops() {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2>Магазины</h2>
        <p className="text-gray-500">
          Показать все <SlArrowRight className="inline w-3 h-3" />
        </p>
      </div>
      <div className="relative">
        <Swiper
          modules={[A11y, Autoplay]}
          autoplay
          spaceBetween={15}
          slidesPerView={5}
        >
          {shops.map(({ title, img, category }) => (
            <SwiperSlide key={title}>
              <div className="cursor-pointer">
                <img
                  className="rounded-xl cursor-pointer h-[130px] object-cover"
                  src={img}
                  alt="slide img"
                />
                <p className="mt-1.5 leading-4">{title}</p>
                <p className="text-xs text-gray-500">{category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <NavigationButton className="absolute -right-5 top-1/3 z-10" />
        <NavigationButton className="absolute -left-5 top-1/3 rotate-180 z-10" />
      </div>
    </div>
  )
}
