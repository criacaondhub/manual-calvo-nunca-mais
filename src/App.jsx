import { useState, useCallback } from 'react'
import SlideContainer from './components/SlideContainer'
import ProgressIndicator from './components/ProgressIndicator'

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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

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

  return (
    <>
      <SlideContainer onSlideChange={handleSlideChange} onNavigate={navigate} totalSlides={SLIDES.length}>
        {SLIDES.map((SlideComponent, index) => (
          <SlideComponent key={index} active={currentSlide === index} />
        ))}
      </SlideContainer>

      <ProgressIndicator current={currentSlide} total={SLIDES.length} />
    </>
  )
}
