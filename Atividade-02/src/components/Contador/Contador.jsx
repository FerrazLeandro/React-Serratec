import { useState } from "react"
import './Contador.css'

function Contador () {

  const [contador, setContador ] = useState(0)
  const [mls, setMls ] = useState(300)
  const [total, setTotal ] = useState(0)
  const [metaDiaria, setMetaDiaria ] = useState(1000)
  const [mensagem, setMensagem ] = useState()
  const [horario, setHorario] = useState("")

  function somar () { 
    if ((mls > 0)) {
      if ((metaDiaria > 0)) {
        setContador(prevState => prevState + 1)
        setTotal(prevState => prevState + mls)
        setHorario(horario + " " + new Date().toLocaleTimeString())
      } else{
        setMensagem("A quantidade de ML deve ser maior que 0")
      }

      if ((total  + mls) >= metaDiaria) {
        setMensagem("Parabéns, você atingiu sua meta diária de consumo!")
      }
      
      // setHorario(new Date().toLocaleTimeString());
    } else {
      setMensagem("A quantidade de ML deve ser maior que 0")
    }

  }

  function zerar () {
    setContador(0)
    setMls(300)
    setMetaDiaria(1000)
    setTotal(0)
    setMensagem()
    setHorario()
  }

    return (
        <div>
            <h2>Consumo diário de água!</h2>
            <p>Medida do compo em ML:</p>
            <input type="number" min={0} value={mls} onChange={e => setMls(parseInt(e.target.value))} placeholder='Medida'/>
            <p>Meta diária em ML: </p>
            <input type="number" min={0} value={metaDiaria} onChange={e => setMetaDiaria(parseInt(e.target.value))} placeholder='Meta diária'/>
            <div>
              <button onClick={somar}>Somar</button>
              <button onClick={zerar}>Zerar</button>
            <h3>Copos: {contador}</h3>
            <h3>Total de água consumida: {total} ML</h3>
            </div>
            <h4>{mensagem}</h4>
            <p>{horario}</p>
        </div>
        
    )

}

export default Contador