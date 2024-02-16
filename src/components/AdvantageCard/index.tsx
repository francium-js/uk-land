import type { AdvantageCardProps } from 'src/components/AdvantageCard/types'

import TitleDescription from 'src/components/TitleDescription'

import { Container, Text } from 'src/components/AdvantageCard/styles'

const AdvantageCard = ({ text, title, img }: AdvantageCardProps): JSX.Element => {
  return (
    <Container>
      <TitleDescription title={title} leftIcon={img} />
      <Text>{text}</Text>
    </Container>
  )
}

export default AdvantageCard
