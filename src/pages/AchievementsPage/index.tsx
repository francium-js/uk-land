import AchievementsMap from 'src/components/AchievementsMap'

import { AchievementsContainer } from 'src/pages/AchievementsPage/styles'
import useAchievementsPage from 'src/pages/AchievementsPage/useAchievementsPage'

const AchievementsPage = (): JSX.Element => {
  const { mapContainerRef, mapRef } = useAchievementsPage()

  return (
    <AchievementsContainer ref={mapContainerRef}>
      <AchievementsMap mapRef={mapRef} />
    </AchievementsContainer>
  )
}

export default AchievementsPage
