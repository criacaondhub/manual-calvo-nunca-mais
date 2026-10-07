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

// `part` divide o slide em dois stories no mobile (ver mobileParts no fim
// do arquivo): 1 = cabeçalho + graus 04–05, 2 = graus 06–07. Sem `part`
// (desktop), mostra tudo.
export default function Slide11Metodo({ active, part }) {
  const casos = part === 1 ? CASOS.slice(0, 2) : part === 2 ? CASOS.slice(2) : CASOS
  const showTitle = part !== 2
  const casoBase = showTitle ? 2 : 1

  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="right" active={active} />
      <div className={styles.header}>
        <Reveal as="p" active={active} index={0} className="eyebrow">Método Ultramar · Transplante Capilar</Reveal>
        {showTitle && (
          <Reveal as="h2" active={active} index={1} className={styles.title}>Resultado elegante, atemporal e extremamente natural.</Reveal>
        )}
      </div>

      <div className={styles.grid}>
        {casos.map((c, i) => (
          <Reveal as="div" active={active} index={casoBase + i} className={`glass glass-light ${styles.caso}`} key={c.grau}>
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

// No mobile (stories) os 4 antes/depois ficam pequenos demais numa tela só.
Slide11Metodo.mobileParts = [
  (props) => <Slide11Metodo {...props} part={1} />,
  (props) => <Slide11Metodo {...props} part={2} />,
]
