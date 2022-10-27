import './Header.css'

function Header (props) {
    return (
        <header className='titulo'>
            <h1>{props.frase}</h1>
        </header>
    )
}

export default Header