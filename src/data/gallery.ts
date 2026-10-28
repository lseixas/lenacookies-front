import { asset } from '../lib/asset'

export type GallerySlide = {
  src: string
  alt: string
}

/** Exemplares de cookies ao lado do cardápio */
export const saboresSlides: GallerySlide[] = [
  {
    src: asset('imgs/caixa-cookies-normais.jpeg'),
    alt: 'Caixa aberta com cookies artesanais',
  },
  {
    src: asset('imgs/vasilha-cookies-variados.jpeg'),
    alt: 'Vasilha com cookies variados',
  },
  {
    src: asset('imgs/mao-cookie1.jpeg'),
    alt: 'Cookie artesanal na mão',
  },
  {
    src: asset('imgs/mao-cookie2.jpeg'),
    alt: 'Cookie artesanal — exemplar',
  },
  {
    src: asset('imgs/mao-cookie3.jpeg'),
    alt: 'Cookie artesanal — exemplar',
  },
  {
    src: asset('imgs/mao-cookie4.jpeg'),
    alt: 'Cookie artesanal — exemplar',
  },
  {
    src: asset('imgs/mao-cookie5.jpeg'),
    alt: 'Cookie artesanal — exemplar',
  },
  {
    src: asset('imgs/mesa-vaasilha-cookies2.jpeg'),
    alt: 'Cookies na mesa com vasilha',
  },
]

/** Embalagens: caixas e sacolas (sem plástico) */
export const sacolinhasSlides: GallerySlide[] = [
  {
    src: asset('imgs/caixas-sacolas.jpeg'),
    alt: 'Caixa e sacolas kraft com laço',
  },
  {
    src: asset('imgs/saco-cookies.jpeg'),
    alt: 'Sacolinha kraft com cookies',
  },
  {
    src: asset('imgs/caixa-cookies-fechada.jpeg'),
    alt: 'Caixa de cookies fechada com laço',
  },
]
