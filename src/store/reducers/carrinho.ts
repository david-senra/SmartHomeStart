import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoType } from '../../App'

type CarrinhoState = {
  itens: ProdutoType[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload

      if (state.itens.find((product) => product.id === produto.id)) {
        alert('Produto já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
