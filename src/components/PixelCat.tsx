import { useEffect, useState } from 'react'
import './PixelCat.css'

type CatPhase = 'idle' | 'turn1' | 'turn2' | 'sleep' | 'stretch'

const FRAMES: Record<CatPhase, string> = {
  idle: '/cat/idle.png',
  turn1: '/cat/turn-1.png',
  turn2: '/cat/turn-2.png',
  sleep: '/cat/sleep.png',
  stretch: '/cat/stretch.png',
}

/** Cycle: idle → turn → sleep (hold) → stretch → idle */
const SEQUENCE: { phase: CatPhase; ms: number }[] = [
  { phase: 'idle', ms: 3200 },
  { phase: 'turn1', ms: 700 },
  { phase: 'turn2', ms: 900 },
  { phase: 'sleep', ms: 5200 },
  { phase: 'stretch', ms: 1400 },
]

type PixelCatProps = {
  size?: number
  className?: string
  alt?: string
  /** Frame fixo — sem animação (ex.: "sleep" em Encomendas) */
  pose?: CatPhase
}

export function PixelCat({
  size = 96,
  className = '',
  alt = 'Gatinho mascote Doce Mordida',
  pose,
}: PixelCatProps) {
  const [index, setIndex] = useState(0)
  const current = SEQUENCE[index]

  useEffect(() => {
    if (pose) return
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % SEQUENCE.length)
    }, current.ms)
    return () => window.clearTimeout(id)
  }, [index, current.ms, pose])

  const src = pose ? FRAMES[pose] : FRAMES[current.phase]

  return (
    <img
      className={`pixel-cat ${className}`.trim()}
      src={src}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
    />
  )
}
