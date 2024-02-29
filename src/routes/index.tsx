import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { RoutesPath } from 'src/routes/routes'

const HomePage = lazy(() => import('src/pages/HomePage'))
const NavLayout = lazy(() => import('src/Layouts/NavLayout'))
const RulePage = lazy(() => import('src/pages/RulePage'))
const WikiPage = lazy(() => import('src/pages/WikiPage'))
const AchievementsPage = lazy(() => import('src/pages/AchievementsPage'))
const ErrorPage = lazy(() => import('src/pages/ErrorPage'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.HOME, element: <HomePage /> },
      { path: RoutesPath.RULES, element: <RulePage /> },
      { path: RoutesPath.WIKI, element: <WikiPage /> },
      { path: RoutesPath.WIKI_ACH, element: <AchievementsPage /> },
    ],
  },
])
