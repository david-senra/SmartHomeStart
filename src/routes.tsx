import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sistema from './pages/Sistema'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sistema/" element={<Sistema />} />
    </Routes>
  )
}

export default Rotas
