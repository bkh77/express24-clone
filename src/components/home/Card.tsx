import starIcon from '../../assets/star.svg'
import carIcon from '../../assets/car.svg'
import { AiOutlineHeart } from 'react-icons/ai'
import { useMyContext } from '../../context/Context'

type CardProps = {
  id: number
  name: string
  img: string
  brandImg: string
  rating: number
  deliveryPrice: string
  tags: string
}

export default function Card({
  name,
  img,
  brandImg,
  rating,
  deliveryPrice,
  tags,
}: CardProps) {
  const { openModal } = useMyContext()
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer relative">
      <img className="w-full h-[13rem] object-cover" src={img} alt={name} />
      <div className="p-4">
        <p className="text-xl font-semibold leading-3 mb-1">{name}</p>

        <p className="text-gray-500 truncate">{tags}</p>

        <div className="text-xs space-x-2 mt-3 flex items-center">
          <div className="bg-gray-100 py-[6px] px-[10px] rounded-full leading-4 ">
            <img
              className="w-4 h-4 inline mr-1"
              src={starIcon}
              alt="star icon"
            />{' '}
            {rating}
          </div>
          <div className="bg-gray-100 py-[6px] px-[10px] rounded-full leading-4 ">
            <img
              className="w-4 h-4 inline mr-1"
              src={carIcon}
              alt="star icon"
            />
            {deliveryPrice} so'm
          </div>
        </div>
      </div>

      <div className="w-10 h-10 rounded-xl overflow-hidden absolute top-2 right-2">
        <img
          className="w-full h-full object-cover"
          src={brandImg}
          alt="brand img"
        />
      </div>

      <button
        onClick={openModal}
        className="absolute right-4 bottom-[92px] w-[44px] h-[44px] flex justify-center items-center rounded-full shadow-lg bg-white transition-all hover:bg-gray-100"
      >
        <AiOutlineHeart className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  )
}
