import './App.css'
import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header frase='Header de alguma coisa'/>
      <Bio frase='Bio de alguma coisa' botao='Saiba Mais'/>
      <Footer frase='Footer de alguma frase'/>
    </>
  )
}

export default App
