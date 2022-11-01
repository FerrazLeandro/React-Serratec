import { Link } from "react-router-dom"

const Contato = () => {

    const contato = {
        id: 1,
        nome: "Leandro",
        idade: 27
    }

    return (
        <>
            <ul>
                <li>
                    <Link to='/'>🏠 Home</Link>
                </li>
                <li>
                    <Link to='/galeria'>📸 Galeria</Link>
                </li>
            </ul>
                <h1>📞 Contato</h1>

                <ol>
                    <li><Link to={`/contato/${contato.id}`} state={{data: contato}}>Leandro Ferraz</Link></li>
                    <li><Link to={`/contato/${contato.id}`}>Kamylla Silva</Link></li>
                    <li><Link to={`/contato/${contato.id}`}>Giovanna Ferraz</Link></li>
                </ol>
        </>
    )
}

export default Contato
