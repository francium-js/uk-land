import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { Router } from './routes'

import LoadingPage from './pages/LoadingPage'
import { ModalProvider } from './Context/ModalContext'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Suspense fallback={<LoadingPage />}>
      <ModalProvider>
        <RouterProvider router={Router} />
      </ModalProvider>
    </Suspense>
  )
}

export default App
