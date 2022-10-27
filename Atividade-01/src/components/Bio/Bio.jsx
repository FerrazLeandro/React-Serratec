import './Bio.css'

function Bio (props) {
    return (
        <div className='Bio'>
            <h2>{props.frase}</h2>
            <button>{props.botao}</button>
        </div>

    )
}

export default Bio