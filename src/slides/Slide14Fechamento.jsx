import styles from './Slide14Fechamento.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511988392645&text=Olá%21+Vim+pelo+ebook+e+quero+agendar+uma+consulta+com+o+Dr.+Rafael+Ultramar.&type=phone_number&app_absent=0'

export default function Slide14Fechamento({ active }) {
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

      <div className={styles.top}>
        <Reveal as="p" active={active} index={0} className={styles.kicker}>Controle não é sobre vaidade. É sobre decisão.</Reveal>
        <Reveal as="h2" active={active} index={1} className={styles.title}>
          Ser anti-calvo não é ser contra{' '}<br />quem passa por esse problema.
        </Reveal>
        <Reveal as="p" active={active} index={2} className={styles.lead}>
          É saber que informação + ação podem definir todo o seu futuro.
        </Reveal>
      </div>

      <div className={styles.question}>
        <Reveal as="p" active={active} index={3}>Você vai sentar e assistir à progressão da sua ruína folicular…</Reveal>
        <Reveal as="p" active={active} index={4} className={styles.questionAccent}>Ou vai assumir o comando do processo?</Reveal>
      </div>

      <div className={styles.ctas}>
        <Reveal
          as="a"
          active={active}
          index={5}
          className={styles.ctaPrimary}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar consulta com o Dr. Rafael
        </Reveal>
      </div>
    </section>
  )
}
