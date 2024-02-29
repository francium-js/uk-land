import type { LegacyRef } from 'react'

export type AchievementsMapProps = {
  mapRef: LegacyRef<HTMLDivElement>
}

export type Achievement = {
  top: number
  left: number
  figure?: string
  itemIcon: string
  title: string
  description: string
  isDone?: boolean
}
