import './App.css'
import { useState } from 'react';


function App() {
  const [contador, setContador ] = useState(0)

  function somar () {
    setContador(prevState => prevState + 1)
  }

  function zerar () { 
    setContador(0)
  }

  function subtrair () {
    setContador(prevState => prevState - 1)
  }

  function multiplicar () {
    setContador(prevState => prevState * prevState)
  }

  function dividir () {
    setContador(prevState => prevState / 2)
  }
  
  
  return (
    <>
      <h1>Contador:  {contador}</h1>
     <button onClick={somar}>SOMAR</button>
     <button onClick={subtrair}>SUBTRAIR</button>
     <button onClick={zerar}>RESET</button>
     <button onClick={multiplicar}>MULTIPLICAR</button>
     <button onClick={dividir}>DIVISÃO</button>

     <p>Somar: Soma de 1 ao resultado</p>
     <p>Subtrair: Subtrai 1 do resultado</p>
     <p>Multiplicação: Multiplica o resultado por ele mesmo</p>
     <p>Divisão: Divide o resultado por 2</p>
     <p>Reset: Zera o resultado</p>
    </>
  )
}

export default App
