import { useEffect, useRef } from 'react'

import AchievementsMap from 'src/components/AchievementsMap'

import { AchievementsContainer } from 'src/pages/AchievementsPage/styles'

import './cssStyles.css'

const AchievementsPage = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const handleScale = (e: WheelEvent) => {
    if (e.ctrlKey || !mapRef.current) return

    const scaleValue = e.deltaY < 0 ? true : false

    mapRef.current.style.scale = !mapRef.current.style.scale.length
      ? 1 + ''
      : mapRef.current!.style.scale

    const currentScale = parseInt(mapRef.current!.style.scale)

    if ((currentScale < 1 && !scaleValue) || (currentScale > 6 && scaleValue)) return

    let howMuchScale = 0.1

    if (currentScale > 3) howMuchScale = 0.4

    if (currentScale > 6) howMuchScale = 0.8

    mapRef.current.style.scale = scaleValue
      ? +mapRef.current.style.scale + howMuchScale + ''
      : +mapRef.current.style.scale - howMuchScale + ''
  }

  const watcherElement = (e: MouseEvent) => {
    if (!mapRef.current) return

    if (e.buttons === 0) {
      mapRef.current.style.cursor = 'grab'

      return
    }

    const [x, y] = mapRef.current!.style.translate.length
      ? mapRef.current!.style.translate.split(' ')
      : '-500px -500px'.split(' ')

    const newX = parseInt(x) + e.movementX + 'px '
    const newY = parseInt(y ?? '0px') + e.movementY + 'px'

    mapRef.current.style.translate = newX + newY
    mapRef.current.style.cursor = 'grabbing'
  }

  useEffect(() => {
    document.body.addEventListener('wheel', handleScale)

    if (mapContainerRef.current) {
      mapContainerRef.current!.addEventListener('mousemove', watcherElement)
    }

    return () => {
      mapContainerRef.current!.removeEventListener('mousemove', watcherElement)
      document.body.removeEventListener('wheel', handleScale)
    }
  }, [])

  return (
    <AchievementsContainer ref={mapContainerRef}>
      <AchievementsMap mapRef={mapRef} />
    </AchievementsContainer>
  )
}

export default AchievementsPage
