import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { getAllUsersApiT } from 'src/services/types'
import useGetAllUsers from 'src/hooks/useGetAllUsers'

const useWikiPage = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')
  const [option, setOption] = useState<string>('optionToDown')

  const { data, isLoading } = useGetAllUsers()

  const sorteredData = useMemo(() => {
    const copyData = data?.slice()

    switch (option) {
      case 'optionToTop':
        return copyData?.sort((a, b) => a.rating - b.rating)
      case 'optionToDown':
        return copyData?.sort((a, b) => b.rating - a.rating)
      case 'optionAbc': {
        const otherNames: getAllUsersApiT[] = []

        const result = copyData
          ?.filter(item => {
            if (!Number.isNaN(+item.userName[0]) || item.userName[0] === '_') {
              otherNames.push(item)

              return false
            }

            return true
          })
          .sort((a, b) => a.userName.localeCompare(b.userName))
          .concat(otherNames)

        return result
      }
      case 'optionCba':
        return copyData?.sort((a, b) => b.userName.localeCompare(a.userName))
      default:
        return copyData
    }
  }, [option, data])

  const filteredData = sorteredData?.filter((item: getAllUsersApiT) =>
    item.userName.toLowerCase().includes(value.toLowerCase()),
  )

  return {
    data: filteredData,
    value,
    option,
    isLoading,
    navigate,
    setValue,
    setOption,
  }
}

export default useWikiPage
