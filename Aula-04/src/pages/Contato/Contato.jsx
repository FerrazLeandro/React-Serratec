import { Link } from "react-router-dom"

const Contato = () => {
    return (
        <>
            <Link to='/' className="link">Home</Link>
            <Link to='/galeria' className="link">Galeria</Link>
            <Link to='/contato'  className="link">Contato</Link>
            <h1>Contato :D</h1>
        </>
    )
}

export default Contato
