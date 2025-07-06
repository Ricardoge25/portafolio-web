import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-16">
        <Hero />
        {/* Aquí puedes agregar más componentes o contenido */}
      </main>
      
    </>
  )
}

export default App
