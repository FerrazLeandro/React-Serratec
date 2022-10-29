import { useState } from "react"
import './Contador.css'

function Contador () {

  const [contador, setContador ] = useState(0)
  const [mls, setMls ] = useState()

  function somar () {
    setContador(prevState => prevState + 1)
  }

  function zerar () {
    setContador(0)
    setMls('')
  }

    return (
        <div>
            <h1>Copos: {contador}</h1>
            <h1>Total: 0</h1>
            <button onClick={somar}>Somar</button>
            <button onClick={zerar}>Zerar</button>
            <input type="text" value={mls} onChange={e => setMls(e.target.value)} placeholder='Mls de Agua'/>
            

        </div>
        
    )

}

export default Contador