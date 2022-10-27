import './Footer.css'

function Footer (props) {
    return (
        <footer className="footer">
            <p>{props.frase}</p>
        </footer>
    )
}

export default Footer