import { useState, useCallback, useEffect } from 'react'
import SlideContainer from './components/SlideContainer'
import ProgressIndicator from './components/ProgressIndicator'
import StoriesContainer from './components/StoriesContainer'
import useIsMobile from './hooks/useIsMobile'

import Slide01Capa from './slides/Slide01Capa'
import Slide02Espelho from './slides/Slide02Espelho'
import Slide03Decisao from './slides/Slide03Decisao'
import Slide04Promessa from './slides/Slide04Promessa'
import Slide05Mecanismo from './slides/Slide05Mecanismo'
import Slide06Norwood from './slides/Slide06Norwood'
import Slide07Timing from './slides/Slide07Timing'
import Slide08Marketing from './slides/Slide08Marketing'
import Slide09Pilares from './slides/Slide09Pilares'
import Slide10Transplante from './slides/Slide10Transplante'
import Slide11Metodo from './slides/Slide11Metodo'
import Slide12Vantagem from './slides/Slide12Vantagem'
import Slide13Plano from './slides/Slide13Plano'
import Slide14Fechamento from './slides/Slide14Fechamento'

const SLIDES = [
  Slide01Capa,        // 01 · Capa — "Calvo Nunca Mais"
  Slide02Espelho,      // 02 · O momento silencioso do espelho — "Ignora."
  Slide03Decisao,      // 03 · "Você está calvo por decisão sua" + credencial
  Slide04Promessa,     // 04 · O que você vai entender neste manual
  Slide05Mecanismo,    // 05 · Não é queda de cabelo, é perda de potência (DHT)
  Slide06Norwood,      // 06 · Escala de Norwood-Hamilton
  Slide07Timing,       // 07 · Quem busca ajuda cedo vs. quem espera + identidade
  Slide08Marketing,    // 08 · Medicina não é marketing — mitos vs. realidade
  Slide09Pilares,      // 09 · Os 4 pilares clínicos
  Slide10Transplante,  // 10 · Transplante capilar é planejamento, não improviso
  Slide11Metodo,       // 11 · Método Ultramar — antes/depois graus 04–07
  Slide12Vantagem,     // 12 · O homem que decide cedo sempre tem vantagem
  Slide13Plano,        // 13 · O Plano Anti-Calvo — 5 passos
  Slide14Fechamento,   // 14 · Controle é uma escolha — fechamento + CTAs
]

// No mobile, slides densos demais para uma tela declaram `mobileParts`
// e viram mais de um story.
const MOBILE_SLIDES = SLIDES.flatMap((S) => S.mobileParts ?? [S])

// Retoma a leitura de onde a pessoa parou (recarregar ou voltar outro
// dia). Mobile e desktop têm contagens diferentes, então cada formato
// guarda a própria posição. localStorage pode estar bloqueado (aba
// anônima, dados limpos) — aí simplesmente começa da capa.
const storageKey = (mobile) => `calvo-nunca-mais:slide:${mobile ? 'mobile' : 'desktop'}`

function readSlide(mobile) {
  const total = mobile ? MOBILE_SLIDES.length : SLIDES.length
  try {
    const saved = Number(localStorage.getItem(storageKey(mobile)))
    return Number.isInteger(saved) && saved >= 0 && saved < total ? saved : 0
  } catch {
    return 0
  }
}

export default function App() {
  const isMobile = useIsMobile()
  const [mode, setMode] = useState(isMobile)
  const [currentSlide, setCurrentSlide] = useState(() => readSlide(isMobile))

  // Trocou de formato (girou o tablet, redimensionou a janela): carrega a
  // posição salva do outro formato antes de renderizar.
  if (mode !== isMobile) {
    setMode(isMobile)
    setCurrentSlide(readSlide(isMobile))
  }

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(mode), String(currentSlide))
    } catch {
      /* sem storage: só não lembra a posição */
    }
  }, [mode, currentSlide])

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const navigate = useCallback((direction) => {
    const track = document.querySelector('.slides-track')
    if (!track) return
    const slides = track.querySelectorAll('.slide')
    setCurrentSlide((prev) => {
      const next = prev + direction
      if (next >= 0 && next < SLIDES.length) {
        slides[next].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        return next
      }
      return prev
    })
  }, [])

  if (isMobile) {
    return <StoriesContainer slides={MOBILE_SLIDES} current={currentSlide} onChange={setCurrentSlide} />
  }

  return (
    <>
      <SlideContainer
        initialSlide={currentSlide}
        onSlideChange={handleSlideChange}
        onNavigate={navigate}
        totalSlides={SLIDES.length}
      >
        {SLIDES.map((SlideComponent, index) => (
          <SlideComponent key={index} active={currentSlide === index} />
        ))}
      </SlideContainer>

      <ProgressIndicator current={currentSlide} total={SLIDES.length} />
    </>
  )
}
