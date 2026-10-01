import styles from './Slide11Metodo.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

const CASOS = [
  { grau: '04', antes: '/images/metodo-ultramar/grau04-antes.jpg', depois: '/images/metodo-ultramar/grau04-depois.jpg' },
  { grau: '05', antes: '/images/metodo-ultramar/grau05-antes.jpg', depois: '/images/metodo-ultramar/grau05-depois.jpg' },
  { grau: '06', antes: '/images/metodo-ultramar/grau06-antes.jpg', depois: '/images/metodo-ultramar/grau06-depois.jpg' },
  { grau: '07', antes: '/images/metodo-ultramar/grau07-antes.jpg', depois: '/images/metodo-ultramar/grau07-depois.jpg' },
]

function Frame({ src, label }) {
  return (
    <div className={styles.frame}>
      <img src={src} alt={label} className={styles.img} />
      <span className={styles.frameLabel}>{label}</span>
    </div>
  )
}

export default function Slide11Metodo({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="right" active={active} />
      <div className={styles.header}>
        <Reveal as="p" active={active} index={0} className="eyebrow">Método Ultramar · Transplante Capilar</Reveal>
        <Reveal as="h2" active={active} index={1} className={styles.title}>Resultado elegante, atemporal e extremamente natural.</Reveal>
      </div>

      <div className={styles.grid}>
        {CASOS.map((c, i) => (
          <Reveal as="div" active={active} index={2 + i} className={`glass glass-light ${styles.caso}`} key={c.grau}>
            <span className={styles.grau}>Grau {c.grau}</span>
            <div className={styles.pair}>
              <Frame src={c.antes} label="Antes" />
              <Frame src={c.depois} label="Depois" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
