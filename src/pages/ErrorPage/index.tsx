import { useEffect } from 'react'
import { Container } from 'src/pages/ErrorPage/styles'

const ErrorPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [])

  return (
    <Container>
      <h1 style={{ fontFamily: 'Minecraft' }}>Error 404</h1>
    </Container>
  )
}

export default ErrorPage
