import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/inicio.jsx'
import { Login } from '../pages/Login.jsx'
import { Perfil } from '../pages/Perfil.jsx'
import { Dashboard } from '../pages/dashboard.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
