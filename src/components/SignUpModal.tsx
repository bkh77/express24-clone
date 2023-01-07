import { useState } from 'react'
import { useMyContext } from '../context/Context'
import { FiX } from 'react-icons/fi'
import Button from './home/Button'

export default function SignUpModal() {
  const { isOpen, closeModal } = useMyContext()
  const [phone, setPhone] = useState('')
  return (
    <div
      className={`fixed inset-0 bg-black/30 z-50 flex justify-center items-center transition-all duration-200 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="w-[28rem] bg-white rounded-3xl p-6 relative">
        <h3 className="text-2xl font-bold">Введите номер телефона</h3>
        <p className="text-gray-400">и получите код подтверждения</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            closeModal()
          }}
        >
          <div className="my-6 relative">
            <label className="text-gray-400 text-xs ml-2" htmlFor="phone">
              Номер телефон
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="py-[10px] text-lg mt-1 px-4 border  font-normal border-gray-300 rounded-xl outline-none w-full"
              type="number"
              id="phone"
            />

            {phone && (
              <div
                onClick={() => setPhone('')}
                className="w-4 h-4 flex absolute right-3 top-11 justify-center items-center rounded-full bg-black leading-none cursor-pointer text-white"
              >
                &times;
              </div>
            )}
          </div>

          <div className="text-xs text-gray-400 text-center">
            Нажимая кнопку получить код вы принимаете условия <br />
            <span className="text-sky-500 cursor-pointer">
              пользовательского соглашения
            </span>
          </div>

          <button
            disabled={!phone}
            className={`w-full mt-4 py-3 rounded-xl disabled:bg-gray-200 disabled:text-gray-400 font-bold bg-yellow-400 hover:bg-yellow-500 transition-all`}
          >
            Получит код
          </button>
        </form>
        <div
          onClick={closeModal}
          className="w-10 h-10 absolute top-2 right-2 rounded-full shadow-xl bg-white hover:bg-gray-200 flex justify-center items-center cursor-pointer"
        >
          <FiX className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  )
}
