import { useEffect } from 'react'
import { useModal } from 'src/Context/ModalContext'

import rulesForPay from 'src/locales/rulesForPay.json'

export const useModalPay = () => {
  const bodyElement = document.body
  const { closeModal } = useModal()

  const handleInnerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const [[category, rules]] = Object.entries(rulesForPay)

  useEffect(() => {
    bodyElement.classList.add('modal-open')

    return () => {
      bodyElement.classList.remove('modal-open')
    }
  }, [])

  return { handleInnerClick, closeModal, category, rules }
}
