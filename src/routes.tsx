import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginDireto from './pages/LoginDireto'
import LoginSenha from './pages/LoginSenha'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directaccess/" element={<LoginDireto />} />
      <Route path="/passaccess/" element={<LoginSenha />} />
    </Routes>
  )
}

export default Rotas
