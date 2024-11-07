import * as S from './styles'
import { useState } from 'react'

const EditarParam = () => {
  class CentroCusto {
    numero: string
    nome: string
    completo: string

    constructor(data: { numero: string; nome: string; completo: string }) {
      this.numero = data.numero
      this.nome = data.nome
      this.completo = data.completo
    }
  }
  const [listaCentrosCusto, setListaCentrosCusto] = useState<CentroCusto[]>([])
  const [listaUnidades, setListaUnidades] = useState<string[]>([])
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [situacaoExibicaoCentrosCusto, setSituacaoExibicaoCentrosCusto] =
    useState<string>('carregando')
  const [situacaoExibicaoUnidades, setSituacaoExibicaoUnidades] =
    useState<string>('carregando')
  const solicitarParametros = async () => {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestParametros`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    const json_resposta = JSON.parse(resposta)
    const centros_custo_lista = json_resposta.centros_custo
    const unidades_lista = json_resposta.unidades_medida
    if (centros_custo_lista.length === 0) {
      setSituacaoExibicaoCentrosCusto('semCentrosCusto')
    } else {
      const dados_centros_custo: CentroCusto[] = []
      for (const centroCusto of centros_custo_lista) {
        const solicitacao = {
          numero: centroCusto.numero,
          nome: centroCusto.nome,
          completo: centroCusto.completo
        }
        dados_centros_custo.push(solicitacao)
      }
      setListaCentrosCusto(dados_centros_custo)
      setSituacaoExibicaoCentrosCusto('listaCarregada')
    }
    if (unidades_lista.length === 0) {
      setSituacaoExibicaoCentrosCusto('semUnidadesMedida')
    } else {
      const dados_unidades: string[] = []
      for (const unidade of unidades_lista) {
        dados_unidades.push(unidade)
      }
      setListaUnidades(dados_unidades)
      setSituacaoExibicaoUnidades('listaCarregada')
    }
  }
  if (firstLoad) {
    setFirstLoad(false)
    solicitarParametros()
  }
  return (
    <>
      <br></br>
      <h1>Unidades:</h1>
      <br></br>
      {listaUnidades.map((pedido) => (
        <>
          <p>{pedido}</p>
        </>
      ))}
      <br></br>
      <h1>Centros de Custo:</h1>
      <br></br>
      {listaCentrosCusto.map((centro_custo) => (
        <>
          <p>
            {centro_custo.numero} - {centro_custo.nome} ###{' '}
            {centro_custo.completo}
          </p>
        </>
      ))}
    </>
  )
}

export default EditarParam
