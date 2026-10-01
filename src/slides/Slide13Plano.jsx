import styles from './Slide13Plano.module.css'
import Reveal from '../components/Reveal'
import PatternStrip from '../components/PatternStrip'

const PASSOS = [
  { n: '1', t: 'Diagnóstico especializado', d: 'Sem suposições. Sem Dr. Google. Primeiro passo: passar com um médico especializado de confiança.' },
  { n: '2', t: 'Definição de estágio', d: 'Exame físico define o grau da calvície, e cada grau exige conduta diferente.' },
  { n: '3', t: 'Tratamento estratégico', d: 'Preservar é melhor que reconstruir. Cada caso precisa ser avaliado e orientado sobre as melhores alternativas.' },
  { n: '4', t: 'Monitoramento', d: 'Dinâmico e constante. Na Clínica Ultramar, nossos pacientes têm suporte clínico vitalício.' },
  { n: '5', t: 'Intervenção cirúrgica, se indicada', d: 'O melhor caminho para restaurar áreas sem cabelo. Bem planejada. Resultado elegante e natural.' },
]

export default function Slide13Plano({ active }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <PatternStrip side="right" active={active} />
      <div className={styles.header}>
        <Reveal as="p" active={active} index={0} className="eyebrow">O Plano Anti-Calvo</Reveal>
        <Reveal as="h2" active={active} index={1} className={styles.title}>Elegância está em antecipar, não em reagir.</Reveal>
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
        Transplante capilar é permanente. Nunca arrisque operar sem ter
        certeza das referências e do padrão de trabalho daquela clínica.
      </Reveal>
    </section>
  )
}
