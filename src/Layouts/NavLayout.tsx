import { Outlet } from 'react-router-dom'

import Navbar from 'src/components/Navbar'

const NavLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default NavLayout
