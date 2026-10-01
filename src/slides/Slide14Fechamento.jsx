import styles from './Slide14Fechamento.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

export default function Slide14Fechamento({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="left" active={active} />

      <div className={styles.top}>
        <Reveal as="p" active={active} index={0} className={styles.kicker}>Controle não é sobre vaidade. É sobre decisão.</Reveal>
        <Reveal as="h2" active={active} index={1} className={styles.title}>
          Ser anti-calvo não é ser contra<br />quem passa por esse problema.
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
        <Reveal as="a" active={active} index={5} className={styles.ctaPrimary} href="#pacote-inicial">Adquirir pacote inicial de tratamento</Reveal>
        <Reveal as="a" active={active} index={6} className={styles.ctaSecondary} href="#agendar-consulta">Agendar consulta com o Dr. Rafael</Reveal>
      </div>
    </section>
  )
}
