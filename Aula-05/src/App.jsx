import './App.css'

function App() {

  // const nome1 = "Leandro Ferraz"
  // const nome2 = "Kamylla Silva"
  
  
  // const arrayDeObjetos = [
    //   {nome: "Leandro", id: 1},
  //   {nome: "kamylla", id: 1}
  // ]
  
  // console.log(nomes)
  // console.log(nomes[1])
  // console.log(arrayDeObjetos[0].nome)
  
  const nomes = ["Leandro", "Kamylla", "Giovanna"]

  // Percorrendo array com foreach
  // nomes.forEach(nome => {
  //   console.log(nome)
  // })

  // Percorrendo array com map, que permite criar uma nova lista e joga no console
  const novoArray = nomes.map((nome, index) => {
    if(index > 1) return
    console.log(nome)
    return <h1>nome</h1>
  })

  return (
    <>
      <h1>Trabalhando com Arrays e Objetos</h1>
      {/* Foma mais fácil de percorrer lista e colcoar elementos */}
      {nomes.map (item => <h1 key={item}>{item}</h1>)}
    </>
  )
}

export default App
