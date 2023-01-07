import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper'
import NavigationButton from './NavigationButton'

import 'swiper/css'

const imgs = [
  'https://cdn.express24.uz/i/567/385/4cIkJ7iqfBOhual1QRc_1.jpg',
  'https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg',
  'https://cdn.express24.uz/i/567/385/ZlVLKYW8-AdywtyncdzS7.jpg',
  'https://cdn.express24.uz/i/567/385/5UNfA3P-QPEZaEfuRhD0y.jpg',
  'https://cdn.express24.uz/i/567/385/phZSLrYq1E6D9_l-Gxn1D.jpg',
  'https://cdn.express24.uz/i/567/385/HJnzvgLmjpQ4YkjNIdznm.jpg',
  'https://cdn.express24.uz/i/567/385/AUGq9BpDdV_4l0VKKqsFY.jpg',
  'https://cdn.express24.uz/i/567/385/GLa-sLmL5ZLixwP8gLQrH.jpg',
  'https://cdn.express24.uz/i/567/385/aKxO7RgSvYBJOXnEpNbyv.jpg',
  'https://cdn.express24.uz/i/567/385/tCQC2WZnp3kIxQl_LSUiE.jpg',
  'https://cdn.express24.uz/i/567/385/AYpapohM1qSGrv5ud_bZv.jpg',
  'https://cdn.express24.uz/i/567/385/71P4AAW-23ZD008AVQVDw.jpg',
]

export default function MainSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay
        spaceBetween={15}
        slidesPerView={6}
      >
        {imgs.map((img) => (
          <SwiperSlide key={img}>
            <img
              className="rounded-xl cursor-pointer"
              src={img}
              alt="slide img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationButton className="absolute -right-5 top-1/3 z-10" />
      <NavigationButton className="absolute -left-5 top-1/3 rotate-180 z-10" />
    </div>
  )
}
