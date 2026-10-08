import styles from './Slide13Plano.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const PASSOS = [
  { n: '1', t: 'Diagnóstico com especialista', d: 'Sem achismo, sem Dr. Google. O primeiro passo é consultar um médico de confiança.' },
  { n: '2', t: 'Fase da calvície', d: 'Um exame mostra em que ponto você está. Cada fase pede um caminho diferente.' },
  { n: '3', t: 'Tratamento sob medida', d: 'Proteger o cabelo que você tem vale mais do que reconstruir depois. Cada caso tem seu plano.' },
  { n: '4', t: 'Acompanhamento', d: 'O cuidado não acaba na consulta. Na Clínica Ultramar, o paciente é acompanhado por toda a vida.' },
  { n: '5', t: 'Transplante, se for indicado', d: 'Para recuperar áreas sem cabelo, costuma ser o melhor caminho. Bem planejado, o resultado fica natural.' },
]

export default function Slide13Plano({ active }) {
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
      <div className={styles.header}>
        <Reveal as="h2" active={active} index={0} className={styles.title}>O PLANO ANTI-CALVO</Reveal>
        <Reveal as="p" active={active} index={1} className="eyebrow">Elegância está em antecipar, não em reagir.</Reveal>
      </div>

      <div className={styles.steps}>
        {PASSOS.map((p, i) => (
          <Reveal as="div" active={active} index={2 + i} className={`glass ${styles.step}`} key={p.n}>
            <span className={styles.stepNum}>{p.n}</span>
            <h3 className={styles.stepTitle}>{p.t}</h3>
            <p className={styles.stepDesc}>{p.d}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" active={active} index={PASSOS.length + 2} className={styles.footer}>
        Transplante capilar é para sempre. Antes de operar, confira a experiência e o padrão de trabalho da clínica.
      </Reveal>
    </section>
  )
}
