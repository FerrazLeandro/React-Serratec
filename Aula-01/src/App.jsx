import './App.css'
import Titulo from './components/Titulo'
import Paragrafo from './components/Paragrafo'

function App() {

  return (
    <>
        <Titulo texto="Eu sou o primero titulo!" cor="red"/>
        <Titulo texto="Eu sou o segundo titulo!" cor="yellow"/>
        <Paragrafo texto="Eu sou um parágrafo!" cor="gray"/>
    </>
  )
}

export default App
