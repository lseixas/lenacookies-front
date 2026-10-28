import './Header.css'

const links = [
  { href: '#sabores', label: 'Cardápio' },
  { href: '#sacolinhas', label: 'Sacolas' },
  { href: '#encomendas', label: 'Encomendas' },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner page">
        <a className="site-header__brand" href="#topo" aria-label="Doce Mordida — início">
          <img
            src="/imgs/logo-docemordida.jpeg"
            alt="Doce Mordida"
            className="site-header__logo"
          />
        </a>
        <nav className="site-header__nav" aria-label="Seções">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
