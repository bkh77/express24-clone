import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useMyContext } from '../../context/Context'
import SearchInput from './SearchInput'
import userIcon from '../../assets/user.svg'
import logo from '../../assets/logo.svg'

export default function Navbar() {
  const { openModal } = useMyContext()
  return (
    <div className="flex justify-between fixed top-0 bg-white w-full z-50">
      <div className="border  border-gray-100 flex items-center space-x-6 p-4 w-11/12">
        <img className="w-44 mr-10" src={logo} alt="logo" />

        <SearchInput />

        <div className="bg-gray-200 rounded-xl py-3 transition px-4 cursor-pointer hover:bg-gray-300 truncate">
          <HiOutlineLocationMarker className="w-5 h-5 inline-block mr-2" />
          Мирабад район, Амира Темура проспект
        </div>
      </div>
      <div
        onClick={openModal}
        className="text-gray-400 flex flex-col items-center justify-center w-[130px] cursor-pointer"
      >
        <img className="w-6 h-6" src={userIcon} alt="user icon" />
        <p>Профиль</p>
      </div>
    </div>
  )
}
