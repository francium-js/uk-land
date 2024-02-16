import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { Router } from 'src/routes'

import 'src/App.css'
import LoadingPage from 'src/pages/LoadingPage'
import { ModalProvider } from 'src/Context/ModalContext'

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
