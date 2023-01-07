import { FaInstagram, FaTelegramPlane, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-gray-100 h-[180px] mt-8 px-4">
      <div className="max-w-6xl mx-auto text-gray-500 py-10">
        <div className="flex space-x-6">
          <span className="cursor-pointer">О нас</span>
          <span className="cursor-pointer">Контакты</span>
          <span className="cursor-pointer">Пользовательское соглашение</span>
        </div>

        <div className="mt-10 flex max-sm:flex-col justify-between items-center">
          <span className="text-lg">Служба поддержки: +998 71 200 40 01</span>

          <span className="space-x-4">
            <FaInstagram className="w-5 h-5 inline cursor-pointer" />
            <FaFacebookF className="w-4 h-4 inline cursor-pointer" />
            <FaTelegramPlane className="w-5 h-5 inline cursor-pointer" />
            <span>Ⓒ 2023 Express24</span>
          </span>
        </div>
      </div>
    </div>
  )
}
