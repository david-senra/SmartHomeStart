import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ProdutoType } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<ProdutoType[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api

export default api

// Para acessar a API:
// const { data: produtos, isLoading, error }
// if (isLoading) return <h2>Carregando</h2>
// if (error) return <h2>A requisição não pôde ser realizada</h2>
// state.itens.push(item) OU state.itens = [...itens, jogo] criando um novo estado
