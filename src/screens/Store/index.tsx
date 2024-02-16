import { animated } from '@react-spring/web'

import PayForm from 'src/components/PayForm'
import MainTitle from 'src/components/MainTitle'

import { useStore } from 'src/screens/Store/useStore'

import { StoreSection } from 'src/screens/Store/styles'

const Store = (): JSX.Element => {
  const { springProps } = useStore()

  return (
    <StoreSection id="store">
      <MainTitle text="Купити прохідку" icon="assets/fishGif.gif" />
      <animated.div style={{ ...springProps }}>
        <PayForm />
      </animated.div>
    </StoreSection>
  )
}

export default Store
