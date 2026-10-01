import styles from './Slide07Timing.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'
import Grainient from '../components/Grainient'

const CEDO = [
  'Mantêm área doadora forte para um eventual transplante',
  'Precisam de intervenções menores',
  'Às vezes evitam cirurgia completamente',
]
const ESPERA = [
  'Perdem capacidade de recuperação',
  'Precisam de cirurgias mais extensas (às vezes duas)',
  'Têm menos opções estratégicas',
]

export default function Slide07Timing({ active }) {
  // Os bullets entram em cascata depois do cabeçalho: primeiro a coluna
  // da esquerda, depois a da direita.
  const base = 2

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
          <Reveal as="h2" active={active} index={0} className={styles.title}>
            O erro não está em ter tendência à calvície.
          </Reveal>
          <Reveal as="p" active={active} index={1} className={styles.subtitle}>
            O erro está em não agir enquanto ainda há tempo.
          </Reveal>
        </div>

        <div className={styles.boxes}>
          <div className={`glass ${styles.box}`}>
            <p className={styles.boxHead}>Homens que buscam ajuda cedo</p>
            <ul className={styles.list}>
              {CEDO.map((t, i) => (
                <Reveal as="li" active={active} index={base + i} key={t}>{t}</Reveal>
              ))}
            </ul>
          </div>

          <div className={`glass ${styles.box} ${styles.boxAlert}`}>
            <p className={`${styles.boxHead} ${styles.boxHeadAlert}`}>Homens que esperam</p>
            <ul className={styles.list}>
              {ESPERA.map((t, i) => (
                <Reveal as="li" active={active} index={base + CEDO.length + i} key={t}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal
          as="p"
          active={active}
          index={base + CEDO.length + ESPERA.length}
          className={styles.identity}
        >
          Calvície mexe com identidade. Não é "apenas estética". É presença.
          <strong> Sua imagem comunica antes de você falar uma só palavra.</strong>
        </Reveal>

        <Reveal
          as="p"
          active={active}
          index={base + CEDO.length + ESPERA.length + 1}
          className={styles.tag}
        >
          Você pode até fingir que não importa. Mas importa.
        </Reveal>
      </div>
    </section>
  )
}
