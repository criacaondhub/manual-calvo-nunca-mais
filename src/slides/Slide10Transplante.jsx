import styles from './Slide10Transplante.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'
import { Scissors, PenTool, Layers, Users, BadgeCheck } from 'lucide-react'

const DIFERENCIAIS = [
  { icon: Scissors, texto: 'Técnica cirúrgica com e sem raspagem do cabelo' },
  { icon: PenTool, texto: ['Visagismo individual para linha frontal', 'perfeita ao seu padrão facial'] },
  { icon: Layers, texto: 'Extrema densidade respeitando naturalidade' },
  { icon: Users, texto: ['Time dedicado para acompanhar', 'seu pós-operatório'] },
  { icon: BadgeCheck, texto: ['Resultado elegante, atemporal', 'e extremamente natural'] },
]

export default function Slide10Transplante({ active }) {
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
      <PatternStrip side="left" active={active} />

      <div className={styles.content}>
        <div className={styles.header}>
          <Reveal as="h2" active={active} index={0} className={styles.title}>
            Transplante Capilar é planejamento,<br />
            <span className={styles.titleAccent}>não improviso.</span>
          </Reveal>
          <Reveal as="p" active={active} index={1} className={styles.subtitle}>
            A técnica FUE extrai unidades foliculares resistentes ao DHT e as
            redistribui nas áreas calvas.
          </Reveal>
        </div>

        <Reveal as="p" active={active} index={2} className={styles.label}>
          Na Clínica Ultramar, trabalhamos com
        </Reveal>

        <div className={styles.grid}>
          {DIFERENCIAIS.map(({ icon: Icon, texto }, i) => (
            <Reveal
              as="div"
              active={active}
              index={3 + i}
              className={`glass ${styles.card}`}
              key={texto}
            >
              <Icon className={styles.icon} size={32} strokeWidth={1.6} aria-hidden="true" />
              <p className={styles.cardText}>
                {Array.isArray(texto)
                  ? texto.map((line, i) => <span key={i}>{line}{i < texto.length - 1 && <br />}</span>)
                  : texto}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" active={active} index={3 + DIFERENCIAIS.length} className={styles.tag}>
          Transplante não interrompe a progressão da calvície.<br />
          Sem tratamento clínico associado, é estratégia incompleta.
        </Reveal>

      </div>
    </section>
  )
}
