import { api } from 'src/config/ky'

import { FetchEndpoint } from 'src/constants'
import type { getUserAchievementsApiT } from 'src/services/types'

const getUserAchievementsApi = async (
  userName: string,
): Promise<getUserAchievementsApiT> => {
  return api.get(`${FetchEndpoint.ACHIEVEMENTS}?userName=${userName}`).json()
}

export default getUserAchievementsApi
