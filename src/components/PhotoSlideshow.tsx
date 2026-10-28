import { useEffect, useEffectEvent, useRef, useState } from 'react'
import type { GallerySlide } from '../data/gallery'
import './PhotoSlideshow.css'

type PhotoSlideshowProps = {
  slides: GallerySlide[]
  className?: string
  intervalMs?: number
  label?: string
}

export function PhotoSlideshow({
  slides,
  className = '',
  intervalMs = 6000,
  label = 'Galeria de fotos',
}: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const touchStartX = useRef<number | null>(null)

  const stopAutoplay = useEffectEvent(() => {
    setAutoplay(false)
  })

  const go = useEffectEvent((next: number, fromUser = false) => {
    if (fromUser) stopAutoplay()
    const len = slides.length
    if (len === 0) return
    setIndex(((next % len) + len) % len)
  })

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return
    const id = window.setInterval(() => go(index + 1), intervalMs)
    return () => window.clearInterval(id)
  }, [index, autoplay, slides.length, intervalMs])

  if (slides.length === 0) return null

  const current = slides[index]

  return (
    <div
      className={`slideshow frame ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current
        const end = e.changedTouches[0]?.clientX
        touchStartX.current = null
        if (start == null || end == null) return
        const delta = end - start
        if (Math.abs(delta) > 40) {
          go(delta < 0 ? index + 1 : index - 1, true)
        }
      }}
    >
      <div className="slideshow__viewport">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            className={`slideshow__img${i === index ? ' is-active' : ''}`}
            src={slide.src}
            alt={i === index ? slide.alt : ''}
            aria-hidden={i !== index}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}
      </div>

      <p className="slideshow__status visually-hidden" aria-live="polite">
        Foto {index + 1} de {slides.length}: {current.alt}
      </p>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="slideshow__nav slideshow__nav--prev"
            aria-label="Foto anterior"
            onClick={() => go(index - 1, true)}
          >
            ‹
          </button>
          <button
            type="button"
            className="slideshow__nav slideshow__nav--next"
            aria-label="Próxima foto"
            onClick={() => go(index + 1, true)}
          >
            ›
          </button>

          <div className="slideshow__dots" role="tablist" aria-label="Escolher foto">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Foto ${i + 1}`}
                className={`slideshow__dot${i === index ? ' is-active' : ''}`}
                onClick={() => go(i, true)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
