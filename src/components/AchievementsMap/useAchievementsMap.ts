import { useParams } from 'react-router-dom'

import schema from 'src/components/AchievementsMap/schema.json'

import getUserAchievements from 'src/hooks/getUserAchievements'

const AchievementsMap = () => {
  const { userName } = useParams()

  const { data, isLoading } = getUserAchievements(userName!)

  const updatedData = Object.entries(schema).reduce((battery, [key, value]) => {
    const result = data?.achievements.includes(key)
      ? { ...value, isDone: true }
      : value

    battery.push(result)

    return battery
  }, [])

  return { updatedData, isLoading }
}

export default AchievementsMap
