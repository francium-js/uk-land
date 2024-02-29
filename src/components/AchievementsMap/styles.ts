import styled from 'styled-components'

export const Achievements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.1s ease;
  top: 50%;
  left: 50%;
  overflow: hidden;
  translate: -500px -500px;
  width: 1000px;
  height: 1000px;
  align-items: center;
  position: absolute;
`

export const RoadContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 500px;
  left: 500px;
  translate: -50% -50%;
`

export const IconContainer = styled.div`
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 24px;
  height: 24px;
  translate: -50% -50%;
  cursor: pointer;
  transition: scale 0.3s ease;

  &:hover {
    z-index: 99;
    scale: 1.2;

    & > .achievementsText {
      display: flex;
    }
  }
`

export const Title = styled.div`
  padding: 4px 10px 4px 30px;

  p {
    width: 100%;
    font-size: 8px;
    font-family: 'Minecraft', sans-serif;
  }
`

export const Description = styled.div`
  background-color: #212121;
  padding: 3px 3px;
  border: 0.5px solid #555555;
  border-top: none;

  @media screen and (max-width: 390px) {
    padding: 8px 3px 3px 3px;
  }

  p {
    width: 100%;
    font-size: 8px;
    font-family: 'Minecraft', sans-serif;
  }
`

export const ContainerImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
  }
`
