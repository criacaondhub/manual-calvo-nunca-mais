import { useEffect, useRef, useCallback } from 'react'

export default function SlideContainer({ children, onSlideChange, onNavigate }) {
  const trackRef = useRef(null)
  const currentSlide = useRef(0)
  const wheelLockRef = useRef(false)

  // Sincroniza o índice atual quando o scroll muda por outro motivo
  // (arrasto de trackpad/touch em dispositivos que não passam pelo wheel).
  const syncFromScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const scrollLeft = track.scrollLeft
    const slideWidth = track.clientWidth
    const index = Math.round(scrollLeft / slideWidth)
    if (index !== currentSlide.current) {
      currentSlide.current = index
      onSlideChange?.(index)
    }
  }, [onSlideChange])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        onNavigate?.(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        onNavigate?.(-1)
      }
    }

    const handleWheel = (e) => {
      e.preventDefault()
      if (wheelLockRef.current) return
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (Math.abs(delta) < 12) return
      wheelLockRef.current = true
      onNavigate?.(delta > 0 ? 1 : -1)
      setTimeout(() => {
        wheelLockRef.current = false
      }, 550)
    }

    window.addEventListener('keydown', handleKeyDown)
    track.addEventListener('wheel', handleWheel, { passive: false })
    track.addEventListener('scroll', syncFromScroll, { passive: true })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      track.removeEventListener('wheel', handleWheel)
      track.removeEventListener('scroll', syncFromScroll)
    }
  }, [onNavigate, syncFromScroll])

  return (
    <div ref={trackRef} className="slides-track">
      {children}
    </div>
  )
}
