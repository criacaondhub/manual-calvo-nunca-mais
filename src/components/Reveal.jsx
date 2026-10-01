import { motion } from 'framer-motion'

// Anima a entrada de texto/elementos quando o slide pai fica ativo no
// scroll horizontal. `index` define a ordem do stagger dentro do slide
// (cada unidade ~ 70ms de atraso). Reanima a cada vez que o slide volta
// a ficar ativo (indo e voltando no scroll).
const EASE = [0.25, 0.46, 0.45, 0.94]

export default function Reveal({
  active,
  index = 0,
  as = 'div',
  y = 22,
  duration = 0.55,
  delay = 0,
  stagger = 0.07,
  className,
  style,
  children,
  ...rest
}) {
  const Tag = motion[as] || motion.div

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      animate={active ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration,
        delay: active ? index * stagger + delay : 0,
        ease: EASE,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
