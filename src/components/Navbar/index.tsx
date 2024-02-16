import { useNavBar } from 'src/components/Navbar/useNavbar'

import { RoutesPath } from 'src/routes/routes'

import { Header, HeaderContainer, NavList } from 'src/components/Navbar/styles'

const Navbar = (): JSX.Element => {
  const { navigate, isScrollingUp } = useNavBar()

  return (
    <Header className={isScrollingUp ? '' : 'header hidden'}>
      <HeaderContainer>
        <img onClick={() => navigate('/')} src="assets/logo.svg" />

        <div>
          <NavList>
            <p onClick={() => navigate(RoutesPath.RULES)}>Правила</p>
          </NavList>
        </div>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
