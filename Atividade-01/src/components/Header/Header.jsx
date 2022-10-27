import './Header.css'

function Header (props) {
    return (
        <header className='titulo'>{props.frase}</header>
    )
}

export default Header