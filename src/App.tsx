import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sabores } from './components/Sabores'
import { Sacolinhas } from './components/Sacolinhas'
import { Encomendas } from './components/Encomendas'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sabores />
        <Sacolinhas />
        <Encomendas />
      </main>
      <Footer />
    </>
  )
}
