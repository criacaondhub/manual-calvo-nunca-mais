import styles from './Slide05Mecanismo.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const PASSOS = [
  { t: 'DHT', d: 'O corpo produz di-hidrotestosterona, derivada da testosterona.' },
  { t: 'Miniaturização', d: 'O DHT encontra folículos geneticamente predispostos e inicia o processo.' },
  { t: 'Enfraquecimento', d: 'O fio afina. Encurta seu ciclo de crescimento.' },
  { t: 'Desaparecimento', d: 'O folículo morre. A pele fica lisa. Não há medicamento que o traga de volta.' },
]

export default function Slide05Mecanismo({ active }) {
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
        <div className={styles.header}>
          <Reveal as="h2" active={active} index={0} className={styles.title}>Calvície não é queda de cabelo.<br /><span>É perda de potência.</span></Reveal>
          <Reveal as="p" active={active} index={1} className={styles.lead}>
            Todo homem perde fios diariamente , isso é normal. Mas a alopecia androgenética é outra história: um processo
            hormonal e genético programado
          </Reveal>
        </div>

        <div className={styles.flow}>
          {PASSOS.map((p, i) => (
            <Reveal as="div" active={active} index={i + 2} className={`glass ${styles.step}`} key={p.t}>
              <div className={styles.stepHead}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{p.t}</h3>
              </div>
              <p className={styles.stepDesc}>{p.d}</p>
              {i < PASSOS.length - 1 && <span className={styles.arrow} aria-hidden="true">→</span>}
            </Reveal>
          ))}
        </div>

        <Reveal as="p" active={active} index={PASSOS.length + 2} className={styles.footerNote}>
          O fio não "cai". Ele enfraquece!<br />
          Por isso o estágio da sua calvície importa, e muito.
        </Reveal>
      </div>
    </section>
  )
}
