import play from 'src/assets/cards/play'
import copy from 'src/assets/cards/copy'

import HeroButton from 'src/components/HeroButton'
import { copyText } from 'src/helpers'

import { useMain } from 'src/screens/Main/useMain'

import {
  HeroSection,
  HeroText,
  ButtonsContainer,
  Container,
} from 'src/screens/Main/styles'

const Main = (): JSX.Element => {
  const { props, openModal } = useMain()

  return (
    <HeroSection>
      <Container style={props}>
        <img src="/assets/logo.svg" />
        <ButtonsContainer>
          <HeroButton
            icon={play()}
            onClick={openModal}
            text="Почати грати"
            styles={{ background: '#7F00FF' }}
          />
          <HeroButton
            icon={copy()}
            onClick={() => {
              copyText('ukland.pp.ua')
            }}
            text="Скопіювати IP"
            styles={{ background: 'none', border: '1px solid white' }}
          />
        </ButtonsContainer>
        <HeroText>
          Приватний україномовний сервер на версії Minecraft 1.20.4
        </HeroText>
      </Container>
    </HeroSection>
  )
}

export default Main
