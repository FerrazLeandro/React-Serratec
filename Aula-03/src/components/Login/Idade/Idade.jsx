import { useState } from "react"

const Idade = () => { 
    const [idade, setIdade] = useState("")
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")

    const verificarIdade = () => {
            if ( idade < 18)
            setMensagem(`Olá ${nome}, você é menor de idade!`)
            else {
                setMensagem(`Olá ${nome}, você é maior de idade!`)
            }
    }



    return (
        <div>
            <h1>Teste de Idade :P</h1>
            <p>Nome</p>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <p>Idade</p>
            <input type="number" placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <div>
                <input type="button" value="Verificar" onClick={verificarIdade}/>
            </div>
            <h1>{mensagem}</h1>
        </div>
    ) 
}

export default Idade