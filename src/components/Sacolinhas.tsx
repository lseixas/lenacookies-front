import { sacolinhasSlides } from '../data/gallery'
import { useReveal } from '../hooks/useReveal'
import { PhotoSlideshow } from './PhotoSlideshow'
import './Sacolinhas.css'

export function Sacolinhas() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="sacolinhas" className="sacolinhas page reveal" ref={ref}>
      <div className="sacolinhas__copy">
        <h2>Sacolinhas</h2>
        <p>
          Nossos cookies vão embalados em caixas e sacolas kraft com laço —
          sem plástico —, perfeitas para presentear ou para guardar aquele
          docinho para depois.
        </p>
      </div>

      <PhotoSlideshow
        className="sacolinhas__photo"
        slides={sacolinhasSlides}
        label="Caixas e sacolas"
      />
    </section>
  )
}
