import type { AchievementsMapProps } from 'src/components/AchievementsMap/types'

import useAchievementsMap from 'src/components/AchievementsMap/useAchievementsMap'

import AchievementsRoad from 'src/assets/SVG/AchievementsRoadFinal'
import AchievementsIcon from 'src/assets/SVG/AchievementsIcon'

import {
  Achievements,
  ContainerImage,
  IconContainer,
  RoadContainer,
  Title,
  Description,
} from 'src/components/AchievementsMap/styles'

import { ACHIEVEMENTS_ICONS } from 'src/constants'

import './cssStyles.css'

const AchievementsMap = ({ mapRef }: AchievementsMapProps): JSX.Element => {
  const { updatedData = [], isLoading } = useAchievementsMap()

  return (
    <Achievements ref={mapRef} id={'movableDiv'}>
      <AchievementsRoad />
      {!isLoading && (
        <RoadContainer>
          {updatedData.map(
            ({ top, left, figure, itemIcon, isDone, title, description }) => {
              return (
                <IconContainer key={title} style={{ top, left }}>
                  <ContainerImage
                    style={{
                      backgroundImage: `url(/src/assets/minecraftItems/${itemIcon}.png)`,
                    }}
                  >
                    <AchievementsIcon
                      figure={figure ?? ACHIEVEMENTS_ICONS.SQUARE}
                      isDone={isDone}
                    />
                  </ContainerImage>
                  <div className="achievementsText">
                    <Title
                      style={{ backgroundColor: isDone ? '#AA7E0F' : '#036a96' }}
                    >
                      <p>{title}</p>
                    </Title>
                    <Description>
                      <p
                        style={{ color: figure === 'star' ? '#a800a8' : '#54fc54' }}
                      >
                        {description}
                      </p>
                    </Description>
                  </div>
                </IconContainer>
              )
            },
          )}
        </RoadContainer>
      )}
    </Achievements>
  )
}

export default AchievementsMap
