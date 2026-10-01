import styles from './Slide03Decisao.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

// Entrada de texto em cascata: o título sobe linha a linha (deslocamento
// e duração maiores para dar presença), e o restante do conteúdo segue
// logo atrás com o mesmo stagger.
const STAGGER = 0.12

export default function Slide03Decisao({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="right" active={active} />

      <h2 className={styles.title}>
        <Reveal
          as="span"
          active={active}
          index={0}
          y={40}
          duration={0.8}
          stagger={STAGGER}
          className={styles.titleLine}
        >
          Você está calvo
        </Reveal>
        <Reveal
          as="span"
          active={active}
          index={1}
          y={40}
          duration={0.8}
          stagger={STAGGER}
          className={styles.titleLine}
        >
          por <span className={styles.accent}>decisão sua</span>
        </Reveal>
      </h2>

      <div className={styles.grid}>
        <Reveal
          as="p"
          active={active}
          index={2}
          y={28}
          duration={0.7}
          stagger={STAGGER}
          className={styles.note}
        >
          A calvície não é súbita. Ela é progressiva. Silenciosa.<br />
          E quando finalmente resolve agir? Já perdeu anos de controle.
        </Reveal>
        <div className={styles.rule}>
          <Reveal
            as="p"
            active={active}
            index={3}
            y={28}
            duration={0.7}
            stagger={STAGGER}
            className={styles.ruleLine}
          >
            Tempo é cabelo. <strong>Quem age cedo preserva.</strong>
          </Reveal>
          <Reveal
            as="p"
            active={active}
            index={4}
            y={28}
            duration={0.7}
            stagger={STAGGER}
            className={styles.ruleLine}
          >
            Quem espera… <strong>paga o preço.</strong>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
