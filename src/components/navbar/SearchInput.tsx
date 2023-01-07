import { FiSearch } from 'react-icons/fi'

export default function SearchInput() {
  return (
    <div className="relative w-2/6">
      <input
        className="py-3 pl-10 pr-12 border border-gray-300 rounded-xl outline-none w-full"
        type="text"
        placeholder="Заведение, блюдо, товар или кухня"
      />
      <FiSearch className="w-4 h-4 absolute top-4 left-4 text-gray-400" />

      <button className="absolute top-2 right-3 py-[6px] transition px-3 bg-yellow-300 hover:bg-yellow-400 rounded-xl">
        Найти
      </button>
    </div>
  )
}
