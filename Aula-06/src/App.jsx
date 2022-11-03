import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import api from './services/api'

function App() {
  const [cat, setCat] = useState(0)

  //Só é executado após o componente ser renderizado
  useEffect(() => {
    getCat();
  }, [])

  //Fecth api faz requisições nativas
  //Vamos usar o axios para fazer as requisições - Instalar

  const getCat = async () => {
    const { data } = await api.get("/images/search")
    setCat(data)
  }

  return (
    <>
      <main>
        <h1>Use Effect com Cats</h1>
        {cat.length > 0 ? (
          <>
            <img src={cat[0].url} alt="Gatinho" />
            <p>{cat.length > 0 && cat[0].url}</p>
            <a href={cat[0].url}>Link</a>
          </>
        ) : (
          <h1>Sem Imagem no momento</h1>
        )}
        <div>
          <button onClick={() => getCat()}>Trocar a imagem</button>
        </div>
      </main>
    </>
  )
}

export default App
