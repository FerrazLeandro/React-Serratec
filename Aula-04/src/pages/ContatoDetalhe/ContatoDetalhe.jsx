import { Link, useLocation, useParams } from "react-router-dom"

const ContatoDetalhe = () => {
    const { id } = useParams()
    const { state } = useLocation()
    console.log(state.data)

    const renderizarNome = () => {
        switch (id) {
            case '1':
                return "Leandro Ferraz"
            case '2':
                return "Kamylla Silva"
            case '3':
                return "Giovanna Ferraz"
            default:
                return "Não encontrado!"
        }
    }

    // if(id == '1'){
    //     // Condição if 
    //     return <h1>Contato: Leandro que veio do if</h1>
    // }

    // return (
    //     <h1> 
    //         {/* Operador lógico */}
    //         {id == '2' && "Contato: Kamylla que veio do &&"}
    //         {/* Ternario */}
    //         {id == '3' ? "Contato: Giovanna do operador ternário" : null}
    //     </h1>
    // );

    return (
        <>
            <ul>
                <li>
                    <Link to='/'>🏠 Home</Link>
                </li>
                <li>
                    <Link to='/galeria'>📸 Galeria</Link>
                </li>
                <li>
                    <Link to='/contato'>📞 Contato</Link>
                </li>
            </ul>
            <h1>📞 Contato: {renderizarNome()}</h1>
        </>
    )
}

export default ContatoDetalhe