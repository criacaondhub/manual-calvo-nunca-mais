import styles from './Slide09Pilares.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const PILARES = [
  {
    n: '01',
    t: 'Frear a queda',
    d: ['Trata a causa principal da calvície,', 'que é um hormônio que enfraquece os fios aos poucos.'],
  },
  {
    n: '02',
    t: 'Estimular o crescimento',
    d: 'Faz o fio nascer mais forte e crescer por mais tempo.',
  },
  {
    n: '03',
    t: 'Nutrir o couro cabeludo',
    d: 'Vitaminas e minerais deixam a pele da cabeça mais saudável para o fio crescer.',
  },
  {
    n: '04',
    t: 'Tratar direto no couro cabeludo',
    d: ['Procedimentos feitos no consultório', 'para reativar folículos enfraquecidos.'],
  },
]

// `part` divide o slide em dois stories no mobile (ver mobileParts no fim
// do arquivo): 1 = cabeçalho + pilares 01–02, 2 = pilares 03–04 +
// fechamento. Sem `part` (desktop), mostra tudo.
export default function Slide09Pilares({ active, part }) {
  const showHeader = part !== 2
  const showFooter = part !== 1
  const pilares = part === 1 ? PILARES.slice(0, 2) : part === 2 ? PILARES.slice(2) : PILARES
  const cardBase = showHeader ? 3 : 0
  const footerBase = cardBase + pilares.length

  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.bgLayer}>
        <Grainient
          color1="#000000"
          color2="#292929"
          color3="#454445"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      <PatternStrip side="right" active={active} />

      <div className={styles.content}>
        {showHeader && (
          <div className={styles.header}>
            <Reveal as="h2" active={active} index={0} className={styles.title}>
              Vou ser direto com você:
            </Reveal>
            <Reveal as="p" active={active} index={1} className={styles.subtitle}>
              Cada cabeça pede um tratamento diferente.<br />
              Não existe fórmula universal e nenhum resultado aparece de um dia para o outro.
            </Reveal>
            <Reveal as="p" active={active} index={2} className={styles.redBox}>
              O tratamento de queda de cabelo costuma trabalhar em 4 frentes:
            </Reveal>
          </div>
        )}

        <div className={styles.grid}>
          {pilares.map((p, i) => (
            <Reveal
              as="div"
              active={active}
              index={cardBase + i}
              className={`glass ${styles.card}`}
              key={p.n}
            >
              <span className={styles.num}>{p.n}</span>
              <h3 className={styles.cardTitle}>{p.t}</h3>
              <p className={styles.cardDesc}>
                {Array.isArray(p.d)
                  ? p.d.map((line, i) => <span key={i}>{line}{i < p.d.length - 1 && <br />}</span>)
                  : p.d}
              </p>
            </Reveal>
          ))}
        </div>

        {showFooter && (
          <div className={styles.footer}>
            <Reveal as="p" active={active} index={footerBase} className={styles.footerLead}>
              O que define o seu plano: dose, indicação e acompanhamento médico.
            </Reveal>
            <Reveal as="p" active={active} index={footerBase + 1} className={styles.footerNote}>
              Chutar tratamentos por conta própria costuma dar errado.<br />
              O caminho certo começa com diagnóstico médico.
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}

// No mobile (stories) o conteúdo não cabe numa tela: vira dois stories.
Slide09Pilares.mobileParts = [
  (props) => <Slide09Pilares {...props} part={1} />,
  (props) => <Slide09Pilares {...props} part={2} />,
]
