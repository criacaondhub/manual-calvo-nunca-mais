import Reveal from './Reveal'
import styles from './PatternStrip.module.css'

// Faixa decorativa do Pattern da marca (Assets/Pattern.svg, Manual de
// Identidade Visual pág. 19). Fica confinada à margem/gutter do slide
// (sempre mais estreita que o padding do .slide), nunca invadindo a área
// onde o texto começa. Intercala left/right entre os slides.
export default function PatternStrip({ side = 'left', active, opacity = 0.6 }) {
  return (
    <Reveal
      as="img"
      active={active}
      index={0}
      y={0}
      duration={0.9}
      src="/images/pattern.svg"
      alt=""
      aria-hidden="true"
      className={`${styles.strip} ${side === 'right' ? styles.right : styles.left}`}
      style={{ opacity }}
    />
  )
}
