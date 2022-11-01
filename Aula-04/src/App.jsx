import { Routes, Route } from 'react-router-dom'
import './App.css'
import Contato from './pages/Contato/Contato'
import ContatoDetalhe from './pages/ContatoDetalhe/ContatoDetalhe'
import Erro from './pages/Erro/Erro'
import Galeria from './pages/Galeria/Galeria'
import Home from './pages/Home/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/contato/:id' element={<ContatoDetalhe />} />
      <Route path='/galeria' element={<Galeria />} />
      <Route path='*' element={<Erro />} /> 
    </Routes>
  )
}

export default App
