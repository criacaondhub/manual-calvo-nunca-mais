import styles from './Slide02Espelho.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import { Frame, Waves, Sun, Camera } from 'lucide-react'
import Grainient from '../components/Grainient'

const BOXES = [
  { icon: Frame, text: 'Ele está na frente do espelho. Percebe algo diferente.' },
  { icon: Waves, text: 'A linha frontal já não é mais a mesma.' },
  { icon: Sun, text: 'A luz do ambiente denuncia mais couro cabeludo do que deveria.' },
  { icon: Camera, text: 'As fotos começam a incomodar.' },
]

export default function Slide02Espelho({ active }) {
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
        <div className={styles.eyebrowWrap}>
          <Reveal as="h2" active={active} index={0} className={styles.title}>Existe um momento silencioso</Reveal>
        </div>

        <div className={styles.grid}>
          {BOXES.map(({ icon: Icon, text }, i) => (
            <Reveal as="div" active={active} index={i + 1} className={`glass ${styles.card}`} key={text}>
              <Icon className={styles.icon} size={32} strokeWidth={1.6} aria-hidden="true" />
              <p className={styles.cardText}>{text}</p>
            </Reveal>
          ))}
        </div>

        <div className={styles.answer}>
          <Reveal as="p" active={active} index={BOXES.length + 1} className={styles.question}>E o que ele faz?</Reveal>
          <Reveal as="h2" active={active} index={BOXES.length + 2} className={styles.ignore}>Ignora.</Reveal>
        </div>
      </div>
    </section>
  )
}
