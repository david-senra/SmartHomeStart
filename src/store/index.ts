import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

// Para acessar os itens: (importar o RootReducer e o useSelector)
// const itens = useSelector(state: RootReducer => state.carrinho.itens)

// Para chamar uma action: (importar o UseDispatch)
// const dispatch = useDispatch()     -- DENTRO DA FUNÇÃO
// dispatch(adicionar(produto))
