import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        {/* Aquí puedes agregar más secciones como Contacto, etc. */}
      </main>
      
    </>
  )
}

export default App
