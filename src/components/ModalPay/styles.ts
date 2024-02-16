import styled from 'styled-components'

export const ModalBackground = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(9, 15, 22, 0.73);
  z-index: 9;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const CloseButton = styled.img`
  float: right;
`

export const ContainerWrapper = styled.div`
  max-width: 800px;
  position: relative;
  margin: 0px 50px;

  @media screen and (max-width: 500px) {
    margin: 0px 20px;
  }
`

export const Container = styled.div`
  height: 500px;
  overflow-y: auto;
  scrollbar-width: thin;
  position: relative;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 2px solid white;
  padding: 60px 60px 60px 60px;

  @media screen and (max-width: 500px) {
    padding: 30px;
  }

  button {
    cursor: pointer;
    font-size: 30px;
    margin-top: 50px;
    background: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid white;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      border-color: #209ac4;
      color: #209ac4;
    }
  }
`

export const Breeze = styled.img`
  position: absolute;
  z-index: 9;
  top: 0px;
  left: 0px;
  translate: -50% -50%;

  @media screen and (max-width: 500px) {
    display: none;
  }

  animation: animation_Breeze 8s infinite ease-in-out;

  @keyframes animation_Breeze {
    0% {
      transform: rotate(20deg) translateY(0px);
    }
    50% {
      transform: rotate(30deg) translateY(-10px);
    }
    100% {
      transform: rotate(20deg) translateY(0px);
    }
  }
`

export const Cloud_1 = styled.img`
  position: absolute;
  z-index: 9;
  right: 0px;
  top: 0px;
  transform: rotate(-25deg);
  translate: 50% -50%;
  @media screen and (max-width: 500px) {
    display: none;
  }

  animation: animation_Cloud_1 6s infinite ease-in-out;
  @keyframes animation_Cloud_1 {
    0% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(20deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Cloud_2 = styled.img`
  position: absolute;
  z-index: 9;
  right: 0px;
  bottom: 0px;
  transform: rotate(-50deg);
  translate: 40% 40%;
  @media screen and (max-width: 500px) {
    display: none;
  }

  animation: animation_Cloud_2 10s infinite ease-in-out;
  @keyframes animation_Cloud_2 {
    0% {
      transform: rotate(10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(-30deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Cloud_3 = styled.img`
  position: absolute;
  z-index: 9;
  left: 0px;
  bottom: 0px;
  transform: rotate(25deg);
  translate: -40% 40%;
  @media screen and (max-width: 500px) {
    display: none;
  }

  animation: animation_Cloud_3 10s infinite ease-in-out;
  @keyframes animation_Cloud_3 {
    0% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(20deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Info = styled.div`
  color: white;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 40px;
  h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: white;
  }
  p + h1 {
    margin-top: 30px;
  }
  p {
    color: white;
    font-size: 18px;
    opacity: 0.9;
  }
`
