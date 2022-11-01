import { Link } from "react-router-dom"

const Galeria = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>🏠 Home</Link>
                </li>
                <li>
                    <Link to='/contato'>📞 Contato</Link>
                </li>
            </ul>
                <h1>📸 Galeria</h1>
        </>
    )
}

export default Galeria