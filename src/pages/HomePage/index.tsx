import { useEffect } from 'react'

import Main from 'src/screens/Main'
import Advantages from 'src/screens/Advantages'
import Store from 'src/screens/Store'
import Social from 'src/screens/Social'

import ModalPay from 'src/components/ModalPay'

import { useModal } from 'src/Context/ModalContext'

const HomePage = (): JSX.Element => {
  const { isModalOpen } = useModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Main />
      <Advantages />
      <Store />
      <Social />
      {isModalOpen && <ModalPay />}
    </div>
  )
}

export default HomePage
