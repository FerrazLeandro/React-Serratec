import { Link } from "react-router-dom"

const Home = () => { 
    return (
        <>
            <Link to='/' className="link">Home</Link>
            <Link to='/galeria' className="link">Galeria</Link>
            <Link to='/contato' className="link">Contato</Link>
            <h1>Home :P</h1>
        </>
    )

}

export default Home