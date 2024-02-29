import { useEffect, useRef } from 'react'

const useAchievementsPage = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const usePositionsRoad = () => {
    const cordsRoad = mapRef.current!.style.translate.length
      ? mapRef.current!.style.translate.split(' ').map(item => parseInt(item))
      : [-500, -500]

    let currentScale = mapRef.current!.style.scale.length
      ? parseInt(mapRef.current!.style.scale)
      : 1

    const handleScale = (e: WheelEvent) => {
      if (e.ctrlKey || !mapRef.current) return

      const scaleValue = e.deltaY < 0 ? true : false

      if ((currentScale < 1 && !scaleValue) || (currentScale > 6 && scaleValue))
        return

      let howMuchScale = 0.1

      if (currentScale > 3) howMuchScale = 0.4

      if (currentScale > 6) howMuchScale = 0.8

      console.log(howMuchScale)

      mapRef.current.style.scale = scaleValue
        ? currentScale + howMuchScale + ''
        : currentScale - howMuchScale + ''

      currentScale = scaleValue
        ? currentScale + howMuchScale
        : currentScale - howMuchScale

      // const { layerX, layerY } = e
      // const beforeScaleEventX = 500 < layerX ? layerX - 500 : -(500 - layerX)
      // const beforeScaleEventY = 500 < layerY ? layerY - 500 : -(500 - layerY)

      // mapRef.current!.addEventListener(
      //   'click',
      //   function handleMouseMove(afterScaleEvent) {
      //     const [cordsBeforeScaleX, cordsBeforeScaleY] = cordsRoad
      //     const { offsetX, offsetY } = afterScaleEvent

      //     const afterScaleEventX = 500 < offsetX ? offsetX - 500 : -(500 - offsetX)
      //     const afterScaleEventY = 500 < offsetY ? offsetY - 500 : -(500 - offsetY)

      //     const newX = cordsBeforeScaleX + (offsetX - layerX) * 2
      //     const newY = cordsBeforeScaleY + (offsetY - layerY) * 2

      //     const newCods = newX + 'px ' + newY + 'px'

      //     mapRef.current!.style.translate = newCods

      //     cordsRoad[0] = newX
      //     cordsRoad[1] = newY

      //     mapRef.current!.removeEventListener('click', handleMouseMove)
      //   },
      // )

      // mapRef.current!.dispatchEvent(
      //   new MouseEvent('click', {
      //     bubbles: true,
      //     cancelable: true,
      //     clientX: e.clientX,
      //     clientY: e.clientY,
      //   }),
      // )
    }

    const moveDivMouse = (e: MouseEvent) => {
      if (!mapRef.current) return

      if (e.buttons === 0) {
        mapRef.current.style.cursor = 'grab'

        return
      }

      const [x, y] = cordsRoad

      const newX = x + e.movementX
      const newY = y + e.movementY

      cordsRoad[0] = newX
      cordsRoad[1] = newY

      mapRef.current.style.translate = newX + 'px ' + newY + 'px'
      mapRef.current.style.cursor = 'grabbing'
    }

    const moveDivTouch = (e: TouchEvent) => {
      if (!mapRef.current) return

      isDragging = true

      const [touch] = e.touches
      const offsetX =
        touch.clientX - parseFloat(getComputedStyle(mapRef.current).left)
      const offsetY =
        touch.clientY - parseFloat(getComputedStyle(mapRef.current).top)

      const moveHandler = (e: TouchEvent) => {
        if (!mapRef.current) return

        if (isDragging) {
          const [touch] = e.touches

          mapRef.current.style.left = touch.clientX - offsetX + 'px'
          mapRef.current.style.top = touch.clientY - offsetY + 'px'
        }
      }
      const endHandler = () => {
        isDragging = false

        document.removeEventListener('touchmove', moveHandler)
        document.removeEventListener('touchend', endHandler)
      }

      document.addEventListener('touchmove', moveHandler)
      document.addEventListener('touchend', endHandler)
    }

    return { moveDivTouch, moveDivMouse, handleScale }
  }
  let isDragging = false

  useEffect(() => {
    const { moveDivTouch, moveDivMouse, handleScale } = usePositionsRoad()

    document.body.addEventListener('wheel', handleScale)
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'

    if (mapContainerRef.current && window.innerWidth > 768)
      mapContainerRef.current!.addEventListener('mousemove', moveDivMouse)

    if (mapRef.current && window.innerWidth < 768) {
      mapContainerRef.current!.addEventListener('touchstart', moveDivTouch)
    }

    return () => {
      if (mapContainerRef.current && window.innerWidth > 768) {
        mapContainerRef.current!.removeEventListener('mousemove', moveDivMouse)
      }

      const newMetaTag = document.createElement('meta')

      newMetaTag.name = 'viewport'
      newMetaTag.content = 'width=device-width, initial-scale=1.0'

      document.head.appendChild(newMetaTag)

      document.body.removeEventListener('wheel', handleScale)
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [])

  return { mapContainerRef, mapRef }
}

export default useAchievementsPage
