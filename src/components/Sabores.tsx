import { saboresSlides } from '../data/gallery'
import { menuCategories } from '../data/menu'
import { useReveal } from '../hooks/useReveal'
import { PhotoSlideshow } from './PhotoSlideshow'
import './Sabores.css'

export function Sabores() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="sabores" className="sabores page reveal" ref={ref}>
      <h2 className="sabores__title">Sabores</h2>

      <div className="sabores__grid">
        <PhotoSlideshow
          className="sabores__photo"
          slides={saboresSlides}
          label="Exemplares de cookies"
        />

        <div className="sabores__menu">
          {menuCategories.map((category) => (
            <div key={category.title} className="sabores__category">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={`${category.title}-${item.name}`}>
                    <div className="sabores__row">
                      <span className="sabores__name">{item.name}</span>
                      <span className="sabores__dots" aria-hidden="true" />
                      <span className="sabores__price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
