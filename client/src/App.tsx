import './App.css'
import Navbar from '../src/componentes/Nav/Navbar.tsx'
import Home from '../src/componentes/home/Home.tsx'
import Carrusel from './componentes/slider/carrusel.tsx'

function App() {
  return (
    <>
      <Navbar />
      <Carrusel />
      <Home />

    </>
  )
}

export default App
