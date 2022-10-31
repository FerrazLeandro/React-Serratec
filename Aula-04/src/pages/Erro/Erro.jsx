import { Link } from "react-router-dom"

const Erro = () => {
    return (
        <>
            <Link to='/' className="link">Home</Link>
            <Link to='/galeria' className="link">Galeria</Link>
            <Link to='/contato' className="link">Contato</Link>
            <h1>Erro 404 :S</h1>
            <p>Página não encontrada</p>
        </>
    )
}

    export default Erro