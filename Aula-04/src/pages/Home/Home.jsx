import { Link } from "react-router-dom"

const Home = () => { 
    return (
        <>
            <ul>
                <li>
                    <Link to='/galeria'>📸 Galeria</Link>
                </li>
                <li>
                    <Link to='/contato'>📞 Contato</Link>
                </li>
            </ul>
                <h1>🏠 Home</h1>
        </>
    )

}

export default Home