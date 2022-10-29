import './Login.css'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log("Login: " + username)
        console.log("Senha: " + password)
    }

    return (
        <div>
            <h1>Ferraz Software!</h1>
            <h2>Bem Vindo!</h2>
            <h3>Login</h3>
            <input type="text" value={username} placeholder="Digite o login" onChange={e => setUsername(e.target.value)}/>

            <h3>Senha</h3>
            <input type="password" value={password} placeholder="Digite a senha" onChange={e => setPassword(e.target.value)}/>

            <div>
                <input type="button" value="Entrar" onClick={handleLogin}/>
            </div>
        </div>
    )
}   

export default Login