import { createContext, useContext, useState } from 'react'

import type {
  ModalProviderProps,
  ModalContextProps,
} from 'src/Context/ModalContext/types'

const defaultValue: ModalContextProps = {
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
}

const ModalContext = createContext<ModalContextProps>(defaultValue)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
