import { ReactNode, createContext, useContext, useState } from 'react'
import SignUpModal from '../components/SignUpModal'

type MyContextProviderProps = {
  children: ReactNode
}

type MyContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const MyContext = createContext({} as MyContextType)

export function useMyContext() {
  return useContext(MyContext)
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <MyContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <SignUpModal />
    </MyContext.Provider>
  )
}
