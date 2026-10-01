import styles from './Slide08Marketing.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import { SprayCan, Pill, Leaf, CalendarClock } from 'lucide-react'

const MITOS = [
  { icon: SprayCan, texto: 'Shampoos "antiqueda milagrosos"' },
  { icon: Pill, texto: 'Vitaminas genéricas' },
  { icon: Leaf, texto: 'Receitas caseiras com babosa e alecrim' },
  { icon: CalendarClock, texto: 'Promessas fantasiosas de "reverter calvície em 30 dias"' },
]

export default function Slide08Marketing({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="left" active={active} />

      <div className={styles.content}>
        <div className={styles.header}>
          <Reveal as="h2" active={active} index={0} className={styles.title}>
            O mercado está cheio de promessas.<br />
            <span className={styles.titleAccent}>Mas Medicina não é marketing.</span>
          </Reveal>
          <Reveal as="p" active={active} index={1} className={styles.subtitle}>
            A internet oferece de tudo
          </Reveal>
        </div>

        <div className={styles.grid}>
          {MITOS.map(({ icon: Icon, texto }, i) => (
            <Reveal
              as="div"
              active={active}
              index={2 + i}
              className={`glass glass-light no-hover ${styles.card}`}
              key={texto}
            >
              <Icon className={styles.icon} size={32} strokeWidth={1.6} aria-hidden="true" />
              <p className={styles.cardText}>{texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
