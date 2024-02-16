import { styled } from 'styled-components'

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  &.hidden {
    transform: translateY(-100%);
  }
`
export const HeaderContainer = styled.div`
  padding: 15px 100px;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media screen and (max-width: 750px) {
    padding: 15px 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 15px 20px;
  }

  & > img {
    width: 80px;
    height: 70px;
    &:hover {
      cursor: pointer;
    }
  }

  & > div {
    display: flex;
    gap: 60px;
  }
`

export const NavList = styled.div`
  display: flex;

  & > p {
    font-family: 'Minecraft', sans-serif;
    opacity: 0.8;
    padding: 30px 0px;
    margin: -30px 0px;
    font-weight: 500;
    font-size: 25px;
    transition: opacity 0.1s ease-in-out;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  & > p + p {
    margin-left: 60px;
  }

  @media screen and (max-width: 750px) {
    & > p + p {
      margin-left: 20px;
    }
  }
`
