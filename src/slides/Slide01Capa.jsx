import styles from './Slide01Capa.module.css'
import Reveal from '../components/Reveal'
import CalvoNuncaMaisMark from '../components/CalvoNuncaMaisMark'
import SignatureMark from '../components/SignatureMark'

const MANUAL = 'MANUAL'.split('')

export default function Slide01Capa({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      {/* Filtro de nitidez (unsharp mask) — o master da imagem de fundo
          tem só 2000x1100px; isso compensa o esticamento em telas grandes
          e de alta densidade de pixels até recebermos um export maior. */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="capaSharpen">
          <feConvolveMatrix order="3 3" kernelMatrix="0 -0.12 0 -0.12 1.48 -0.12 0 -0.12 0" preserveAlpha="true" />
        </filter>
      </svg>

      <img
        src="/images/capa-bg.webp"
        alt=""
        aria-hidden="true"
        className={styles.bg}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.titleBlock}>
          <Reveal as="div" active={active} index={0} className={styles.kicker}>
            {MANUAL.map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </Reveal>

          <CalvoNuncaMaisMark active={active} delay={0.18} className={styles.mark} />
        </div>

        <Reveal as="p" active={active} index={1} delay={1.55} className={styles.footer}>
          <span>Dr. Rafael Ultramar</span>
          <span className={styles.sep}>&nbsp; · &nbsp;</span>
          <span>Cirurgião especialista em restauração capilar</span>
          <span className={styles.sep}>&nbsp; · &nbsp;</span>
          <span>Clínica Ultramar</span>
        </Reveal>
      </div>

      <SignatureMark active={active} delay={1.9} color="var(--offwhite-1)" className={styles.signature} />
    </section>
  )
}
