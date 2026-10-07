import styles from './Slide06Norwood.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

// Escala de Norwood-Hamilton: 7 graus. SVGs em public/images/norwood/
const GRAUS = [1, 2, 3, 4, 5, 6, 7]

const CARDS = [
  {
    grau: 'Grau 1–2',
    texto: 'Ainda dá tempo de preservar quase tudo.',
    alerta: false,
  },
  {
    grau: 'Grau 5–6',
    texto: 'Você vai precisar reconstruir, e com menos opções.',
    alerta: true,
  },
]

export default function Slide06Norwood({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="left" active={active} />

      <div className={styles.content}>
        <div className={styles.header}>
          <Reveal as="p" active={active} index={0} className="eyebrow">
            Escala de Norwood-Hamilton
          </Reveal>
          <Reveal as="h2" active={active} index={1} className={styles.title}>
            Calvície é previsível.
          </Reveal>
          <Reveal as="p" active={active} index={2} className={styles.subtitle}>
            Mas é sua decisão diante dela que define o resultado.
          </Reveal>
        </div>

        <div className={styles.scale}>
          {GRAUS.map((g, i) => (
            <Reveal as="div" active={active} index={3 + i} className={styles.grauSlot} key={g}>
              <img
                src={`/images/norwood/grau-${g}.svg`}
                alt={`Escala de Norwood-Hamilton — grau ${g}`}
                className={styles.grauImg}
              />
              <span className={styles.grauLabel}>Grau {g}</span>
            </Reveal>
          ))}
        </div>

        <div className={styles.compare}>
          {CARDS.map((c, i) => (
            <Reveal
              as="div"
              active={active}
              index={GRAUS.length + 3 + i}
              className={`${styles.card} ${c.alerta ? styles.cardAlert : ''}`}
              key={c.grau}
            >
              <h3 className={`${styles.grade} ${c.alerta ? styles.gradeAlert : ''}`}>{c.grau}</h3>
              <p className={styles.result}>{c.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
