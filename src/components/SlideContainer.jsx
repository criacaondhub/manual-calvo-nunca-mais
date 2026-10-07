import { useEffect, useLayoutEffect, useRef, useCallback } from 'react'

export default function SlideContainer({ children, initialSlide = 0, onSlideChange, onNavigate }) {
  const trackRef = useRef(null)
  const currentSlide = useRef(initialSlide)
  const wheelLockRef = useRef(false)

  // Abre direto no slide salvo (retomar leitura), sem animar a rolagem —
  // um scroll suave passaria pelos slides do meio e o syncFromScroll
  // salvaria posições intermediárias.
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track || initialSlide === 0) return
    track.scrollTo({ left: initialSlide * track.clientWidth, behavior: 'instant' })
    // Só na montagem: depois disso quem manda é o scroll.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
