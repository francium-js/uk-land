import { api } from 'src/config/ky'

import { FetchEndpoint } from 'src/constants'
import type { getAllUsersApiT } from 'src/services/types'

const getAllUsersApi = async (): Promise<getAllUsersApiT[]> => {
  return api.get(FetchEndpoint.USERS).json()
}

export default getAllUsersApi
