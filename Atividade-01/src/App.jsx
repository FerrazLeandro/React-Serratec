import './App.css'
import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header frase='Leandro Ferraz { ... } '/>
      <Bio frase='🌱 Futuro Desenvolvedor FullStack' botao='Saiba Mais'/>
      <Footer frase='© 2022 Leandro Ferraz'/>
    </>
  )
}

export default App
