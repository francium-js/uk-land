import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavBar = () => {
  const navigate = useNavigate()
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos > currentScrollPos

    setIsScrollingUp(isScrollingUp)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return { navigate, isScrollingUp }
}
