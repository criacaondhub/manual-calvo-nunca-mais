import styles from './Slide12Vantagem.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

const CEDO = [
  'Preservar',
  'Planejar',
  'Minimizar intervenções',
  'Maximizar naturalidade',
]
const POSTERGAR = [
  'Reconstruir grandes áreas',
  'Usar mais enxertos',
  'Precisar de mais de uma cirurgia',
  'Ter expectativas mais complexas',
]

export default function Slide12Vantagem({ active }) {
  const base = 2

  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="left" active={active} />

      <div className={styles.content}>
        <div className={styles.header}>
          <Reveal as="h2" active={active} index={0} className={styles.title}>
            O homem que decide cedo<br />
            <span className={styles.titleAccent}>sempre tem vantagem.</span>
          </Reveal>
          <Reveal as="p" active={active} index={1} className={styles.subtitle}>
            Quem tem os melhores resultados costuma ter algo em comum: começou cedo.
          </Reveal>
        </div>

        <div className={styles.boxes}>
          <div className={`glass glass-light no-hover ${styles.box}`}>
            <p className={styles.boxHead}>Decidir cedo significa</p>
            <ul className={styles.list}>
              {CEDO.map((t, i) => (
                <Reveal as="li" active={active} index={base + i} key={t}>{t}</Reveal>
              ))}
            </ul>
          </div>

          <div className={`glass glass-light no-hover ${styles.box} ${styles.boxAlert}`}>
            <p className={`${styles.boxHead} ${styles.boxHeadAlert}`}>Postergar significa</p>
            <ul className={styles.list}>
              {POSTERGAR.map((t, i) => (
                <Reveal as="li" active={active} index={base + CEDO.length + i} key={t}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal
          as="p"
          active={active}
          index={base + CEDO.length + POSTERGAR.length}
          className={styles.closing}
        >
          Não fazer nada também é uma escolha, e o cabelo continua caindo enquanto você decide.<br />
          <span className={styles.closingAsk}>Quando a queda avançar, você vai estar preparado?</span>
        </Reveal>
      </div>
    </section>
  )
}
