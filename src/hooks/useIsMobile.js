import { useEffect, useState } from 'react'

// Mesmo breakpoint dos @media (max-width: 768px) dos módulos CSS — abaixo
// dele a apresentação vira "stories" (ver StoriesContainer).
const QUERY = '(max-width: 768px)'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
