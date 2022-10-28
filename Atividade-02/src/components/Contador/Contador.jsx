import { useState } from "react"
import './Contador.css'

function Contador () {

  const [contador, setContador ] = useState(0)
  const [mls, setMls ] = useState(0)

  function somar () {
    setContador(prevState => prevState + 1)
    Number(mls)
    setMls(prevState => prevState + mls)
    console.log(Number(mls))
  }

  function zerar () {
    setContador(0)
    setMls(0)
  }

    return (
        <div>
            <h1>Copos: {contador}</h1>
            <h1>MLs: {mls}</h1>
            <button onClick={somar}>Somar</button>
            <button onClick={zerar}>Zerar</button>
            <input type="number" value={mls} onChange={e => setMls(e.target.value)}/>
            

        </div>
        
    )

}

export default Contador