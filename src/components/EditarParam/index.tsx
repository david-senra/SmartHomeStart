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
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [situacaoExibicaoCentrosCusto, setSituacaoExibicaoCentrosCusto] =
    useState<string>('carregando')
  const solicitarParametros = async () => {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestParametros`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    const json_resposta = JSON.parse(resposta)
    const centros_custo_lista = json_resposta.centros_custo
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
  }
  return (
    <>
      <h1>Centros de Custo</h1>
    </>
  )
}

export default EditarParam
