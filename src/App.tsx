import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import EstiloGlobal from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export default App
