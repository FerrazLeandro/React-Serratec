import { useState } from 'react'
import './App.css'

function App() {
  const [textoDigitado, setTextoDigitado] = useState('Texto inicial')
  const [textoExibido, setTextoExibido] = useState('Texto inicial 2')

  const handleText = () => {
    console.log(textoDigitado);
    setTextoExibido(textoDigitado)
  }

  const handleTextoDigitado = (texto) => {
    // Forma 1 e 2 de fazer
    //setTextoDigitado(texto)

    // Forma 3 de fazer
    setTextoDigitado(texto.target.value)
  }

  return (
    <>
      <h1>Inputs Controlados</h1>
      {/* Forma 1 de fazer */}
      {/* <input type="text" placeholder='Digite o texto ...' onChange={(texto) => setTextoDigitado(texto.target.value)}/> */}
      
      {/* Forma 2 de fazer */}
      {/* <input type="text" placeholder='Digite o texto ...' onChange={(texto) => handleTextoDigitado(texto.target.value)}/> */}
      
      {/* Forma 3 de fazer */}
      <input type="text" placeholder='Digite o texto ...' onChange={handleTextoDigitado} value={textoDigitado}/>

      <button onClick={handleText}>Enviar</button>
      <h1>Texto ao enviar: {textoExibido}</h1>
      <h1>Texto ao digitar: {textoDigitado}</h1>
    </>
  )
}

export default App
