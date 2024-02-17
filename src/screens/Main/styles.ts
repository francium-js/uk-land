import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/assets/background.gif');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgba(107, 220, 51, 0.02);

  @media screen and (max-width: 390px) {
    padding-top: 50px;
    background-image: none;
    background: linear-gradient(
      25deg,
      rgba(71, 74, 78, 1) 0%,
      rgba(55, 55, 66, 1) 18%,
      rgba(47, 102, 107, 1) 46%,
      rgba(45, 64, 82, 1) 77%,
      rgba(32, 154, 196, 1) 100%
    );
  }
`

export const Container = styled(animated.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`

export const HeroText = styled.p`
  font-family: 'Minecraft', sans-serif;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  font-size: 25px;
  padding: 0px 20px;
  @media screen and (max-width: 390px) {
    font-size: 14px;
    font-weight: 300;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  & > button {
    font-family: 'Minecraft', sans-serif;
  }
`
