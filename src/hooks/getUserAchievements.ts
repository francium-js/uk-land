import { useQuery } from 'react-query'

import { CacheKeys } from 'src/constants'
import getUserAchievementsApi from 'src/services/api/getUserAchievementsApi'

const getUserAchievements = (userName: string) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_ACHIEVEMENTS, userName],
    queryFn: () => getUserAchievementsApi(userName),
  })

  return { isLoading, data }
}

export default getUserAchievements
