import styles from './Slide04Promessa.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const ITENS = [
  { n: '01', t: 'Como ela progride', d: 'E por que cada estágio importa.' },
  { n: '02', t: 'O que funciona de verdade', d: 'Vs. o que é marketing barato.' },
  { n: '03', t: 'Quando tratar, quando operar', d: 'E, principalmente, como agir estrategicamente.' },
]

export default function Slide04Promessa({ active }) {
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
          <Reveal as="p" active={active} index={0} className="eyebrow">Aqui você vai entender</Reveal>
          <Reveal as="h2" active={active} index={1} className={styles.headTitle}>
            O que realmente é a calvície
          </Reveal>
          <Reveal as="p" active={active} index={2} className={styles.headSpoiler}>
            Spoiler: não é só "queda de cabelo".
          </Reveal>
        </div>

        <div className={styles.grid}>
          {ITENS.map((item, i) => (
            <Reveal as="div" active={active} index={i + 3} className={`glass ${styles.item}`} key={item.n}>
              <span className={styles.num}>{item.n}</span>
              <div>
                <h3 className={styles.itemTitle}>{item.t}</h3>
                <p className={styles.itemDesc}>{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.footer}>
          <Reveal as="p" active={active} index={ITENS.length + 3} className={styles.statement}>
            Este não é um material sobre vaidade.<br />
            É sobre <strong>controle</strong>. Sobre <strong>presença</strong>. Sobre não deixar sua imagem no improviso.
          </Reveal>
          <Reveal as="p" active={active} index={ITENS.length + 4} className={styles.question}>Se você está lendo isso, parabéns pela decisão.<br />A pergunta é: <span>você vai agir?</span></Reveal>
        </div>
      </div>
    </section>
  )
}
