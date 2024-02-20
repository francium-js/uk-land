import type { AchievementsMapProps } from 'src/components/AchievementsMap/types'

import AchievementsRoad from 'src/assets/SVG/achievements_road_test.svg'

import AchievementsIcon from 'src/assets/SVG/AchievementsIcon'

import {
  Achievements,
  ContainerImage,
  IconContainer,
  RoadContainer,
} from 'src/components/AchievementsMap/styles'

import { ACHIEVEMENTS_ICONS } from 'src/constants'

const AchievementsMap = ({ mapRef }: AchievementsMapProps): JSX.Element => {
  const arrAch = [
    { top: -78, left: 0 },
    { top: -112, left: 0 },
    { top: -146, left: 0 },
    { top: -180, left: 0 },
    { top: -214, left: 0 },
    { top: -163, left: -35 },
    { top: -180, left: -68 },
    { top: -214, left: -68 },
    { top: -248, left: -50 },
    { top: -248, left: -86 },
    { top: -163, left: 34 },
    { top: -180, left: 68 },
    { top: -214, left: 68 },
    { top: -248, left: 68 },
    { top: -282, left: 50 },
    { top: -282, left: 86 },
    { top: -316, left: 50 },
    { top: -10, left: -79 },
    { top: -10, left: -122 },
    { top: -57, left: -122 },
    { top: -57, left: -156 },
    { top: -57, left: -190 },
    { top: -57, left: -224 },
    { top: -57, left: -258 },
    { top: -57, left: -292 },
    { top: -90, left: -156, figure: 'star' },
    { top: -90, left: -190, figure: 'star' },
    { top: -90, left: -224 },
    { top: -90, left: -258 },
    { top: -124, left: -258 },
    { top: -74, left: -327 },
    { top: -40, left: -326, figure: 'oval' },
    { top: 38, left: -122 },
    { top: 38, left: -156 },
    { top: 38, left: -190 },
    { top: 38, left: -224 },
    { top: 38, left: -258 },
    { top: 38, left: -292 },
    { top: 82, left: -122, figure: 'star' },
    { top: 82, left: -157 },
    { top: 82, left: -190, figure: 'star' },
    { top: 82, left: -225 },
    { top: 82, left: -259 },
    { top: 82, left: -292, figure: 'star' },
    { top: 3, left: -336, figure: 'oval' },
    { top: 38, left: -336 },
    { top: 38, left: -370 },
    { top: 72, left: -336, figure: 'star' },
    { top: 106, left: -336, figure: 'star' },
    { top: 140, left: -336 },
    { top: 122, left: -370, figure: 'star' },
    { top: 156, left: -370, figure: 'star' },
    { top: -10, left: 78 },
    { top: -10, left: 122 },
    { top: -56, left: 122 },
    { top: -56, left: 156 },
    { top: -56, left: 190 },
    { top: -56, left: 224 },
    { top: -56, left: 258 },
    { top: -90, left: 122, figure: 'star' },
    { top: -90, left: 156 },
    { top: -90, left: 190 },
    { top: -90, left: 224 },
    { top: -90, left: 258 },
    { top: -124, left: 156 },
    { top: -124, left: 190 },
    { top: -124, left: 224, figure: 'star' },
    { top: -124, left: 258 },
    { top: -158, left: 258 },
    { top: 37, left: 122 },
    { top: 37, left: 156 },
    { top: 37, left: 190 },
    { top: 37, left: 224 },
    { top: 37, left: 258 },
    { top: 71, left: 190, figure: 'star' },
    { top: 71, left: 224 },
    { top: 54, left: 292, figure: 'star' },
    { top: 20, left: 292, figure: 'star' },
    { top: 83, left: 50 },
    { top: 117, left: 50 },
    { top: 165, left: 50 },
    { top: 165, left: 84, figure: 'oval' },
    { top: 165, left: 118, figure: 'oval' },
    { top: 165, left: 152, figure: 'oval' },
    { top: 200, left: 50 },
    { top: 234, left: 33, figure: 'star' },
    { top: 234, left: 67, figure: 'oval' },
    { top: 83, left: -50 },
    { top: 140, left: -27 },
    { top: 140, left: 7, figure: 'star' },
    { top: 140, left: -73 },
    { top: 140, left: -107 },
    { top: 140, left: -141, figure: 'star' },
    { top: 174, left: -73 },
    { top: 174, left: -107 },
    { top: 174, left: -141, figure: 'star' },
    { top: 174, left: -27, figure: 'star' },
    { top: 208, left: -27 },
    { top: 242, left: -27, figure: 'star' },
    { top: 276, left: -27 },
    { top: 225, left: -68 },
    { top: 242, left: -102 },
    { top: 242, left: -136 },
    { top: 242, left: -170, figure: 'star' },
    { top: 242, left: -204, figure: 'star' },
    { top: 208, left: -102 },
    { top: 208, left: -136 },
    { top: 208, left: -170 },
    { top: 208, left: -204 },
  ]

  return (
    <Achievements ref={mapRef}>
      <AchievementsRoad style={{ margin: 10 }} />
      <RoadContainer>
        {arrAch.map(({ top, left, figure, isDone }, i) => (
          <IconContainer key={i} style={{ top, left }}>
            <ContainerImage>
              <AchievementsIcon
                figure={figure ?? ACHIEVEMENTS_ICONS.SQUARE}
                isDone={isDone ?? false}
              />
            </ContainerImage>
          </IconContainer>
        ))}
      </RoadContainer>
    </Achievements>
  )
}

export default AchievementsMap
