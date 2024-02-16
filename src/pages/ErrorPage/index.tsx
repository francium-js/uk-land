import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from 'src/pages/ErrorPage/styles'

const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])

  return (
    <Container>
      <h1 style={{ fontFamily: 'Minecraft' }}>Error 404</h1>
    </Container>
  )
}

export default ErrorPage
