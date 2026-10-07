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

// `part` divide o slide em dois stories no mobile (ver mobileParts no fim
// do arquivo): 1 = cabeçalho + graus 1–4, 2 = graus 5–7 + leitura da
// escala. Sem `part` (desktop), mostra tudo.
export default function Slide06Norwood({ active, part }) {
  const graus = part === 1 ? GRAUS.slice(0, 4) : part === 2 ? GRAUS.slice(4) : GRAUS
  const fullHeader = part !== 2
  const showCompare = part !== 1
  const scaleBase = fullHeader ? 3 : 1

  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="left" active={active} />

      <div className={styles.content}>
        <div className={styles.header}>
          <Reveal as="p" active={active} index={0} className="eyebrow">
            Escala de Norwood-Hamilton
          </Reveal>
          {fullHeader && (
            <>
              <Reveal as="h2" active={active} index={1} className={styles.title}>
                Calvície é previsível.
              </Reveal>
              <Reveal as="p" active={active} index={2} className={styles.subtitle}>
                Mas é sua decisão diante dela que define o resultado.
              </Reveal>
            </>
          )}
        </div>

        <div className={styles.scale}>
          {graus.map((g, i) => (
            <Reveal as="div" active={active} index={scaleBase + i} className={styles.grauSlot} key={g}>
              <img
                src={`/images/norwood/grau-${g}.svg`}
                alt={`Escala de Norwood-Hamilton — grau ${g}`}
                className={styles.grauImg}
              />
              <span className={styles.grauLabel}>Grau {g}</span>
            </Reveal>
          ))}
        </div>

        {showCompare && (
          <div className={styles.compare}>
            {CARDS.map((c, i) => (
              <Reveal
                as="div"
                active={active}
                index={scaleBase + graus.length + i}
                className={`${styles.card} ${c.alerta ? styles.cardAlert : ''}`}
                key={c.grau}
              >
                <h3 className={`${styles.grade} ${c.alerta ? styles.gradeAlert : ''}`}>{c.grau}</h3>
                <p className={styles.result}>{c.texto}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// No mobile (stories) as 7 figuras não ficam legíveis numa tela só.
Slide06Norwood.mobileParts = [
  (props) => <Slide06Norwood {...props} part={1} />,
  (props) => <Slide06Norwood {...props} part={2} />,
]
