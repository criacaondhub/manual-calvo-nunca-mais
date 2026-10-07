import styles from './Slide09Pilares.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const PILARES = [
  {
    n: '01',
    t: 'Controle da inflamação folicular',
    d: 'Atua no mecanismo da calvície controlando degeneração causada pelo DHT. É a base clínica para modificar a história natural da sua calvície. Dutasterida, Finasterida, Actrisave, Saw Palmetto são exemplos de terapias que cuidam desse problema, em diferentes graus de eficácia.',
  },
  {
    n: '02',
    t: 'Estímulo do desenvolvimento e crescimento do fio',
    d: 'Ativos que estimulam a fase anágena que determina o tempo e intensidade de crescimento do fio capilar. Minoxidil é o principal ativo aqui.',
  },
  {
    n: '03',
    t: 'Terapias coadjuvantes com aminoácidos, minerais, antioxidantes',
    d: 'Melhoram as condições do couro cabeludo, ajuda na circulação local e dá suporte ao crescimento saudável do fio. Oxina Tricogena, Zinco, Biotina, Multivitamínicos entregam esse papel.',
  },
  {
    n: '04',
    t: 'Estímulo direto no couro cabeludo',
    d: 'PRP, MMP, Mesoterapia, um universo de alternativas para estimular e regenerar o folículo atrofiado.',
  },
]

// `part` divide o slide em dois stories no mobile (ver mobileParts no fim
// do arquivo): 1 = cabeçalho + pilares 01–02, 2 = pilares 03–04 +
// fechamento. Sem `part` (desktop), mostra tudo.
export default function Slide09Pilares({ active, part }) {
  const showHeader = part !== 2
  const showFooter = part !== 1
  const pilares = part === 1 ? PILARES.slice(0, 2) : part === 2 ? PILARES.slice(2) : PILARES
  const cardBase = showHeader ? 2 : 0
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
              Medicina capilar séria é <strong>individualizada.</strong><br />
              Não existe bala de prata. Não existe fórmula universal.<br />
              <span>E, principalmente, NÃO EXISTE RESULTADO IMEDIATO.</span>
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
              <p className={styles.cardDesc}>{p.d}</p>
            </Reveal>
          ))}
        </div>

        {showFooter && (
          <div className={styles.footer}>
            <Reveal as="p" active={active} index={footerBase} className={styles.footerLead}>
              Cada caso exige uma abordagem diferente.<br />
              Dosagem, indicação, contraindicação e acompanhamento são determinantes.
            </Reveal>
            <Reveal as="p" active={active} index={footerBase + 1} className={styles.footerNote}>
              Não é "tentar algo qualquer", é implementar um plano baseado em evidência e diagnóstico médico.
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
