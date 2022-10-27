import './Bio.css'

function Bio (props) {
    return (
        <main className='bio'>
            <h2>{props.frase}</h2>
            <button>{props.botao}</button>
        </main>

    )
}

export default Bio