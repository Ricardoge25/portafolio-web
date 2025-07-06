import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-16">
        {/* Aquí puedes agregar más componentes o contenido */}
        <Hero />
        <About />
      </main>
      
    </>
  )
}

export default App
