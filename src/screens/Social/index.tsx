import MainTitle from 'src/components/MainTitle'
import SocialCard from 'src/components/Social'

import props from 'src/screens/Social/properties.json'

import { Container } from 'src/screens/Social/styles'

const Social = (): JSX.Element => {
  return (
    <>
      <MainTitle text="Соц.мережі UK-LAND" />
      <Container>
        {[...props].map(({ path, icon, title }) => (
          <SocialCard key={title} href={path} img={icon} title={title} />
        ))}
      </Container>
    </>
  )
}

export default Social
