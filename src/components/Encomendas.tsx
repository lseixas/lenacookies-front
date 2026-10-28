import { contacts } from '../data/menu'
import { PixelCat } from './PixelCat'
import { useReveal } from '../hooks/useReveal'
import './Encomendas.css'

export function Encomendas() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="encomendas" className="encomendas page reveal" ref={ref}>
      <PixelCat size={88} className="encomendas__cat" pose="sleep" />
      <h2>Encomendas</h2>
      <p>
        Pedidos em grande quantidade devem ser feitos com até 5 dias de
        antecedência e mediante sinal.
      </p>

      <div className="encomendas__actions">
        <a
          className="btn btn-ghost"
          href={contacts.instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          {contacts.instagramHandle}
        </a>
        <a
          className="btn btn-solid"
          href={contacts.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {contacts.whatsappDisplay}
        </a>
      </div>
    </section>
  )
}
