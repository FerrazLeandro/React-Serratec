import { Link } from "react-router-dom"

const Erro = () => {
    return (
        <>
        <ul>
            <li>
                <Link to='/'>🏠 Home</Link>
            </li>
            <li>
                <Link to='/galeria'>📸 Galeria</Link>
            </li>
            <li>
                <Link to='/contato'>📞 Contato</Link>
            </li>
        </ul>
            <h1>Erro 404 ❌</h1>
            <p>Página não encontrada</p>
        </>
    )
}

    export default Erro