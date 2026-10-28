import './Hero.css'

export function Hero() {
  return (
    <section id="topo" className="hero page">
      <div className="hero__copy">
        <p className="hero__eyebrow">Cookies artesanais</p>
        <h1 className="hero__title">Doce Mordida</h1>
        <p className="hero__text">
          Cookies feitos à mão, com massa macia por dentro e crocante por fora.
          Escolha seu sabor favorito.
        </p>
        <a className="btn btn-solid" href="#sabores">
          Ver cardápio
        </a>
      </div>

      <div className="hero__media">
        <div className="frame hero__frame">
          <img
            src="/imgs/mesa-vaasilha-cookies.jpeg"
            alt="Cookies artesanais Doce Mordida em vasilha sobre a mesa"
          />
        </div>
      </div>
    </section>
  )
}
