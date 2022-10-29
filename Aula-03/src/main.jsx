import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Idade from './components/Login/Idade/Idade'
import Login from './components/Login/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <Idade />
  </React.StrictMode>
)
