import { useEffect, useState } from "react";
import api from "../../services/api";

function Gatinho() {
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
        <main>
            <h1>Use effect with cats</h1>
            {cat.length > 0 ? (
                <>
                    <img src={cat[0].url} alt="gatinho" />
                    <p>{cat.length > 0 && cat[0].url}</p>
                    <a href={cat[0].url}>Link da imagem</a>
                </>
            ) : (
                <h1>Sem Imagem no momento</h1>
            )}
            <div>
                <button onClick={() => getCat()}>Trocar a imagem</button>
            </div>
        </main>
    )
}

export default Gatinho