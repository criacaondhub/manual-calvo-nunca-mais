import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './StoriesContainer.module.css'

// Navegação mobile no formato "stories": um slide por vez, barras de
// progresso no topo, toque na metade direita avança / esquerda volta,
// swipe horizontal também navega. Só o slide atual fica montado (cada
// slide escuro tem um canvas WebGL — montar os 14 de uma vez estoura o
// limite de contextos do navegador no celular). Slides mais longos que
// a tela rolam na vertical dentro do próprio story.
const SWIPE_MIN = 50
const TAP_BACK_ZONE = 0.3
const EASE = [0.32, 0.72, 0, 1]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%' }),
}

export default function StoriesContainer({ slides, current, onChange }) {
  const [dir, setDir] = useState(1)
  const touchStart = useRef(null)
  const swiped = useRef(false)

  const go = useCallback((delta) => {
    const next = current + delta
    if (next < 0 || next >= slides.length) return
    setDir(delta)
    onChange(next)
  }, [current, slides.length, onChange])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1)
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
    swiped.current = false
  }

  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy) * 1.5) {
      swiped.current = true
      go(dx < 0 ? 1 : -1)
    }
  }

  const onClick = (e) => {
    if (swiped.current) {
      swiped.current = false
      return
    }
    // Links e botões dentro do slide (CTAs do fechamento) não navegam.
    if (e.target.closest('a, button')) return
    const rect = e.currentTarget.getBoundingClientRect()
    go(e.clientX - rect.left < rect.width * TAP_BACK_ZONE ? -1 : 1)
  }

  const Slide = slides[current]

  return (
    <div
      className={`stories ${styles.stories}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
    >
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current}
          className={styles.page}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: EASE }}
        >
          <Slide active />
        </motion.div>
      </AnimatePresence>

      <div className={styles.chrome} aria-hidden="true">
        <div className={styles.bars}>
          {slides.map((_, i) => (
            <span key={i} className={styles.bar}>
              <span className={`${styles.fill} ${i <= current ? styles.filled : ''}`} />
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current === 0 && (
          <motion.p
            className={styles.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            Toque para avançar <span aria-hidden="true">›</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
