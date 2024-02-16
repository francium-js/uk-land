import { useSpring } from '@react-spring/web'

import { useModal } from 'src/Context/ModalContext'

export const useMain = () => {
  const { openModal } = useModal()

  const [props] = useSpring(
    () => ({
      from: {
        transform: 'translateY(4rem)',
        opacity: 0,
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    }),
    [],
  )

  return {
    props,
    openModal,
  }
}
