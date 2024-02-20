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
  margin: -10px;
  overflow: hidden;
  translate: -500px -500px;
  width: 1000px;
  height: 1000px;
  align-items: center;
  position: absolute;
`

export const RoadContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 500px;
  left: 500px;
  translate: -50% -50%;
`

export const IconContainer = styled.div`
  position: absolute;
  top: 500px;
  left: 500px;
  translate: -50% -50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const ContainerImage = styled.div`
  background-image: url('src/assets/minecraftItems/grass_block.png');
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
