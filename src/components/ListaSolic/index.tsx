import React, { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import Pusher, { Channel } from 'pusher-js'
import {
  DivGeral,
  ListaSolicitacoes,
  CardSolicitacao,
  TextoCarregando,
  TextoListaVazia,
  GridCabecalho,
  GridCabecalhoSolto,
  GridItemsPedido,
  GridCabecalhoItemsPedido,
  LinhaCabecalhoItems,
  LinhaCabecalhoItemsUltimo,
  DivSugestFornecedoresObs,
  DivGridCabecalho,
  BoxTextoSugest,
  IconeTranca,
  IconeDiv,
  IconeExcelDiv,
  IconeExcelImg,
  IconeEntregueDiv,
  IconeEntregueImg,
  LinhaDiv,
  ItemCheckDiv,
  ItemCheckDivCaminhao,
  ItemCheckImg,
  DivTraco,
  DivEntregue,
  IconeLapisDiv,
  IconeLapisImg,
  IconeCancelarImg,
  IconeConfirmarImg,
  SelectEdicaoEmpresa,
  InputDataLimite,
  InputQuantidade,
  InputUnidade,
  InputDescricao,
  TextoDescricaoItem,
  TextoObservacaoItem,
  InputCentroCusto,
  InputSugest,
  ItemCabecalhoSituacao,
  InputObservacaoItem,
  ItemCaminhaokImg,
  TextoCabecalhoDescObs,
  CoverPopupDiv,
  PopupDiv,
  CabecarioPopup,
  TextoPopUp,
  BotoesPopUp,
  BotaoConfirmar,
  BotaoVoltar
} from './styles'
import FechaduraAberta from '../../assets/images/destrancado.png'
import FechaduraFechada from '../../assets/images/trancado.png'
import IconeExcel from '../../assets/images/excelicon.png'
import IconeEntregue from '../../assets/images/iconeEntregue.png'
import IconeCheckItem from '../../assets/images/checkItemIcon.png'
import IconeUncheckItem from '../../assets/images/uncheckItemIcon.png'
import IconeLapisEditar from '../../assets/images/pencilEditIcon.png'
import IconeCaminhaoEntrega from '../../assets/images/truckgreen.png'
import WhiteCover from '../../assets/images/whitecover.png'
import InfoData from '../../info_data.json'
Pusher.logToConsole = true
const pusher = new Pusher('cbf75472b9e1dfb532eb', {
  cluster: 'sa1',
  forceTLS: true
})
let channel: Channel

const ListaSolicitacao = ({ nomeusur = '', nivelusur = 0 }) => {
  class Compra {
    id: number
    quantidade: number
    unidade: string
    descricao: string
    centrocusto: string
    observacao: string
    status: string
    editandoQuantidade: boolean
    novaQuantidade: number
    editandoUnidade: boolean
    novaUnidade: string
    editandoDescricao: boolean
    novaDescricao: string
    editandoCentroDeCusto: boolean
    novoCentroCusto: string
    novaObservacao: string
    editandoObservacao: boolean
    requisicao: string

    constructor(data: {
      id: number
      quantidade: number
      unidade: string
      descricao: string
      centrocusto: string
      observacao: string
      status: string
      editandoQuantidade: boolean
      novaQuantidade: number
      editandoUnidade: boolean
      novaUnidade: string
      editandoDescricao: boolean
      novaDescricao: string
      editandoCentroDeCusto: boolean
      novoCentroCusto: string
      novaObservacao: string
      editandoObservacao: boolean
      requisicao: string
    }) {
      this.id = data.id
      this.quantidade = data.quantidade
      this.unidade = data.unidade
      this.descricao = data.descricao
      this.centrocusto = data.centrocusto
      this.observacao = data.observacao
      this.status = data.status
      this.editandoQuantidade = data.editandoQuantidade
      this.novaQuantidade = data.novaQuantidade
      this.editandoUnidade = data.editandoUnidade
      this.novaUnidade = data.novaUnidade
      this.editandoDescricao = data.editandoDescricao
      this.novaDescricao = data.novaDescricao
      this.editandoCentroDeCusto = data.editandoCentroDeCusto
      this.novoCentroCusto = data.novoCentroCusto
      this.editandoObservacao = data.editandoObservacao
      this.novaObservacao = data.novaObservacao
      this.status = data.status
      this.requisicao = data.requisicao
    }
  }
  class Solicitacao {
    id: string
    usuario: string
    sugestfornecedor: string
    obsFinal: string
    data_solicitacao: string
    dataLimite: string
    empresa: string
    itens: Compra[]
    statusSolicitacao: string
    isCardOpen: boolean
    altura: number
    editandoEmpresa: boolean
    novaEmpresa: string
    editandoDataLimite: boolean
    novaDataLimite: string
    editandoSugFor: boolean
    novaSugFor: string
    editandoObsFinal: boolean
    novaObsFinal: string
    podeDestrancar: boolean
    requisicao: string

    constructor(data: {
      id: string
      usuario: string
      sugestfornecedor: string
      obsFinal: string
      data_solicitacao: string
      dataLimite: string
      empresa: string
      itens: Compra[]
      statusSolicitacao: string
      isCardOpen: boolean
      altura: number
      editandoEmpresa: boolean
      novaEmpresa: string
      editandoDataLimite: boolean
      novaDataLimite: string
      editandoSugFor: boolean
      novaSugFor: string
      editandoObsFinal: boolean
      novaObsFinal: string
      podeDestrancar: boolean
      requisicao: string
    }) {
      this.id = data.id
      this.usuario = data.usuario
      this.sugestfornecedor = data.sugestfornecedor
      this.obsFinal = data.obsFinal
      this.data_solicitacao = data.data_solicitacao
      this.dataLimite = data.dataLimite
      this.empresa = data.empresa
      this.itens = data.itens
      this.statusSolicitacao = data.statusSolicitacao
      this.isCardOpen = data.isCardOpen
      this.altura = data.altura
      this.editandoEmpresa = data.editandoEmpresa
      this.novaEmpresa = data.novaEmpresa
      this.editandoDataLimite = data.editandoDataLimite
      this.novaDataLimite = data.novaDataLimite
      this.editandoSugFor = data.editandoSugFor
      this.novaSugFor = data.novaSugFor
      this.editandoObsFinal = data.editandoObsFinal
      this.novaObsFinal = data.novaObsFinal
      this.podeDestrancar = data.podeDestrancar
      this.requisicao = data.requisicao
    }
  }
  const listaCentrosCusto = [
    '03 - ADMINISTRATIVO',
    '04 - RESERVA TÉCNICA',
    '05 - OBRAS FINALIZADAS',
    '20 - PIRAPORA DO BOM JESUS',
    '22 - COMERCIAL',
    '34 - EMPRÉSTIMOS',
    '35 - MACACOS/CAPELA DE SÃO SEBASTIÃO',
    '38 - MORRO DO PILAR/INTENDENTE CAMARA',
    '42 - CAMARGOS',
    '48 - ENCARGOS BANCARIOS',
    '51 - CONGONHAS HOTEL DO JUCÃO',
    '52 - SANTA BÁRBARA/IGREJA MATRIZ DE SANTO ANTÔNIO',
    '53 - CMD MERCADO MUNICIPAL',
    '54 - SERRO',
    '55 - SERRO',
    '56 - BH - RESIDENCIAL ARTHUR BERNARDES',
    '57 - CATAS ALTAS IGREJA MATRIZ DE SANTO ANTÔNIO',
    '98 - DIRETORIA & TECNOLOGIAS',
    '99 - OBRAS DE PEQUENO PORTE'
  ]
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [atualizacaoRecebida, setAtualizacaoRecebida] = useState<boolean>(false)
  const [listaCardsOpen, setListaCardsOpen] = useState<string[]>([])
  const [popUpOpen, SetPopupOpen] = useState<boolean>(false)
  const [popupType, setPopupType] = useState<string>('')
  const [popUpConfirmationPedido, setPopupConfirmationPedido] =
    useState<string>('')
  const [ListaPedidos, SetListaPedidos] = useState<Solicitacao[]>([])
  const [SituacaoExibicao, SetSituacaoExibicao] = useState<string>('carregando')
  async function gerarArquivoExcel(solicitacaoId: string) {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestSpreadsheet&access=${nivelusur}&solicitacaoId=${solicitacaoId}`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.split(';')[0] == 'link_criado') {
      const link_download = resposta.split(';')[1]

      const linkElement = document.createElement('a')
      linkElement.href = link_download
      document.body.appendChild(linkElement)
      linkElement.click()
      document.body.removeChild(linkElement)
    }
    // OR you can save/write file locally.
    // fs.writeFileSync(outputFilename, response.data)
    // const blob = new Blob(respostaEnvio, {
    //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
    // })
    // const buffer = await blob.arrayBuffer()
  }
  const atualizarSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `atualizacaoSolicitacao;${nivelusur}`
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('atualizacao_realizada')) {
      return 'ok'
    } else if (resposta.includes('solicitacao_trancada')) {
      return 'solicitacao_trancada'
    } else if (resposta.includes('solicitacao_aberta')) {
      return 'solicitacao_aberta'
    } else {
      return 'erro'
    }
  }
  const fecharItemNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `fecharItemSolicitacao`
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('atualizacao_realizada')) {
      return 'ok'
    } else {
      return 'erro'
    }
  }
  const verificarSeItemFinalizado = async (
    solicitacao: Solicitacao,
    id_item: string
  ) => {
    solicitacao.requisicao = `verificarItemFinalizado;${id_item}`
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('item_liberado')) {
      return 'ok'
    } else if (resposta.includes('item_ja_finalizado')) {
      return 'erro_ja_finalizado'
    } else {
      return 'erro'
    }
  }
  const fecharSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `fecharSolicitacao`
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('finalizacao_realizada')) {
      return 'ok'
    } else {
      return 'erro'
    }
  }
  const trancarSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = 'trancarSolicitacao'
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacao)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('trancamento_realizado')) {
      return 'sucesso'
    } else if (resposta.includes('trancamento_arquivos_distintos')) {
      return 'erro_arquivos_distintos'
    } else {
      return 'erro_resposta'
    }
  }
  const solicitarPedidos = async () => {
    console.log(listaCardsOpen)
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestSolicCompras&access=${nivelusur}&user=${nomeusur}`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    const json_resposta = JSON.parse(resposta)
    const solicitacoes_json = json_resposta.Solicitacoes
    if (Object.keys(solicitacoes_json).length === 0) {
      SetSituacaoExibicao('listaVazia')
    } else {
      const dados_solicitacoes: Solicitacao[] = []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const [key, value] of Object.entries<any>(solicitacoes_json)) {
        const resposta = listaCardsOpen.includes(key)
        console.log(listaCardsOpen)
        const solicitacao = {
          id: key,
          usuario: value.usuario,
          sugestfornecedor: value.sugestfornecedor,
          obsFinal: value.obsFinal,
          data_solicitacao: value.data_solicitacao,
          dataLimite: value.dataLimite,
          empresa: value.empresa,
          itens: value.itens,
          statusSolicitacao: value.statusSolicitacao,
          isCardOpen: resposta,
          altura: 0,
          editandoEmpresa: false,
          novaEmpresa: value.empresa,
          editandoDataLimite: false,
          novaDataLimite: value.dataLimiteObra,
          editandoSugFor: false,
          novaSugFor: value.sugestfornecedor,
          editandoObsFinal: false,
          novaObsFinal: value.obsFinal,
          podeDestrancar: value.podeDestrancar,
          requisicao: value.requisicao
        }
        const numeroItens = solicitacao.itens.length
        let linhasSugForn = 0
        let linhasobs = 0
        if (solicitacao.sugestfornecedor != '') {
          if (
            solicitacao.sugestfornecedor.indexOf('\n') == -1 &&
            solicitacao.sugestfornecedor.length < 91
          ) {
            linhasSugForn = 1
          } else {
            const textos_isolado_fornec: string[] =
              solicitacao.sugestfornecedor.split(/\r\n|\r|\n/)
            const numero_quebras_fornec = textos_isolado_fornec.length
            let numero_linhas_corridas_forn = 0
            textos_isolado_fornec.forEach((texto) => {
              texto.length >= 91 && (numero_linhas_corridas_forn += 1)
            })
            linhasSugForn =
              numero_linhas_corridas_forn + numero_quebras_fornec / 1.65
          }
        }
        if (solicitacao.obsFinal != '') {
          if (
            solicitacao.obsFinal.indexOf('\n') == -1 &&
            solicitacao.obsFinal.length < 91
          ) {
            linhasobs = 1
          } else {
            const textos_isolados: string[] =
              solicitacao.obsFinal.split(/\r\n|\r|\n/)
            const numero_quebras = textos_isolados.length
            let numero_linhas_corridas_obs = 0
            textos_isolados.forEach((texto) => {
              texto.length >= 91 && (numero_linhas_corridas_obs += 1)
            })
            linhasobs = numero_linhas_corridas_obs + numero_quebras / 1.65
          }
        }
        solicitacao.altura = linhasSugForn + linhasobs + numeroItens
        dados_solicitacoes.push(solicitacao)
        solicitacao.isCardOpen = resposta
        SetListaPedidos(dados_solicitacoes)
        SetSituacaoExibicao('listaCarregada')
      }
    }
  }
  if (firstLoad) {
    channel = pusher.subscribe('cantaria-websocket')
    channel.bind('update_system', () => setAtualizacaoRecebida(true))
    setFirstLoad(false)
    solicitarPedidos()
  }
  if (atualizacaoRecebida) {
    solicitarPedidos()
    setAtualizacaoRecebida(false)
  }
  const getMinimumDate = () => {
    const today = new Date()
    const minimumDate = new Date(today.getTime() + 1000 * 60 * 60 * 72)
    const dd = String(minimumDate.getDate()).padStart(2, '0')
    const mm = String(minimumDate.getMonth() + 1).padStart(2, '0')
    const yyyy = minimumDate.getFullYear()

    const finalDate = yyyy + '-' + mm + '-' + dd
    return finalDate
  }
  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  const atualizarAposFecharSolicitacao = async () => {
    await delay(5000)
    solicitarPedidos()
  }
  const returnFromPopUp = () => {
    setPopupConfirmationPedido('')
    SetPopupOpen(false)
    setPopupType('')
    document.body.style.overflowY = 'visible'
  }
  const returnFromPopUpWithUpdate = () => {
    setPopupConfirmationPedido('')
    SetPopupOpen(false)
    setPopupType('')
    document.body.style.overflowY = 'visible'
    solicitarPedidos()
  }
  const toggleCard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let id_elemento = ''
    if (e.currentTarget.parentElement != null) {
      id_elemento = e.currentTarget.parentElement.id
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (elemento.isCardOpen) {
      elemento.isCardOpen = false
      const nova_lista_cards_open = [...listaCardsOpen]
      const nova_lista_filtrada = nova_lista_cards_open.filter(
        (elemento) => elemento != id_elemento
      )
      setListaCardsOpen(nova_lista_filtrada)
    } else {
      elemento.isCardOpen = true
      const nova_lista_cards_open = [...listaCardsOpen]
      nova_lista_cards_open.push(id_elemento)
      setListaCardsOpen(nova_lista_cards_open)
    }
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    SetListaPedidos(nova_lista)
  }
  const textoSituacao = (situacao: string) => {
    if (situacao == 'aberto') {
      return 'ABERTO'
    } else if (situacao == 'andamento') {
      return 'ANDAMENTO'
    } else if (situacao == 'entregue') {
      return 'ENTREGUE'
    }
  }
  const clickFechadura = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    console.log(listaCardsOpen)
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const situacao = elemento.statusSolicitacao
    if (situacao == 'aberto') {
      const respostaTrancamentoServidor = trancarSolicitacaoNoServidor(elemento)
      if ((await respostaTrancamentoServidor) == 'sucesso') {
        elemento.statusSolicitacao = 'andamento'
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (
        (await respostaTrancamentoServidor) == 'erro_arquivos_distintos'
      ) {
        SetPopupOpen(true)
        setPopupType('arquivos_distintos')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if ((await respostaTrancamentoServidor) == 'erro_resposta') {
        console.log('erro ao tentar contato com o servidor!')
      }
    } else {
      const novoElemento = elemento
      novoElemento.statusSolicitacao = 'aberto'
      const resposta_servidor = atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_recebida = await resposta_servidor
      if (resposta_recebida == 'ok') {
        elemento.statusSolicitacao = 'aberto'
        elemento.itens.forEach((item) => (item.status = 'aberto'))
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_recebida == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_recebida == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    }
  }
  const definirPedidoEntregueSistema = async (id_pedido: string) => {
    const id_elemento = id_pedido
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.statusSolicitacao = 'entregue'
    const resposta_atualizacao_servidor = fecharSolicitacaoNoServidor(elemento)
    const resposta_recebida = await resposta_atualizacao_servidor
    if (resposta_recebida == 'ok') {
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
      setPopupConfirmationPedido('')
      SetPopupOpen(false)
      setPopupType('')
      document.body.style.overflowY = 'visible'
      atualizarAposFecharSolicitacao()
    } else {
      console.log('Erro!')
    }
  }
  const definirPedidoEntregue = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    SetPopupOpen(true)
    setPopupType('confirmacao_pedido')
    setPopupConfirmationPedido(id_elemento)
    document.body.style.overflowY = 'hidden'
  }
  const baixarExcelPedido = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    gerarArquivoExcel(id_elemento)
  }
  const marcarItemPedido = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let id_elemento = ''
    if (e.currentTarget.parentElement != null) {
      id_elemento = e.currentTarget.parentElement.id
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const id_item = e.currentTarget.id
    function isItem(compra: Compra) {
      return compra.id == parseInt(id_item)
    }
    const array_itens = elemento.itens
    const indice_item = array_itens.findIndex(isItem)
    const item_encontrado = array_itens.filter(isItem)[0]
    if (item_encontrado.status == 'aberto') {
      item_encontrado.status = 'entregue'
    } else {
      const verificaoItemFinalizado = verificarSeItemFinalizado(
        elemento,
        String(item_encontrado.id)
      )
      const resposta_requisicao = await verificaoItemFinalizado
      if (resposta_requisicao == 'ok') {
        item_encontrado.status = 'aberto'
      } else if (resposta_requisicao == 'erro_ja_finalizado') {
        SetPopupOpen(true)
        setPopupType('item_finalizado')
        const solicitaoItem = `${id_elemento};${item_encontrado.descricao}`
        setPopupConfirmationPedido(solicitaoItem)
        document.body.style.overflowY = 'hidden'
        return
      } else if (resposta_requisicao == 'erro') {
        return
      }
    }
    const novoElemento = elemento
    novoElemento.itens.splice(indice_item, 1)
    novoElemento.itens.splice(indice_item, 0, item_encontrado)
    let haItensNaoAbertos = true
    const itensNaoAbertos: Compra[] = []
    novoElemento.itens.filter(
      (item) => item.status != 'aberto' && itensNaoAbertos.push(item)
    )
    haItensNaoAbertos = itensNaoAbertos.length > 0
    haItensNaoAbertos
      ? (novoElemento.podeDestrancar = false)
      : (novoElemento.podeDestrancar = true)
    const resposta_atualizacao_servidor =
      atualizarSolicitacaoNoServidor(novoElemento)
    const resposta_servidor = await resposta_atualizacao_servidor
    if (resposta_servidor == 'ok') {
      haItensNaoAbertos
        ? (elemento.podeDestrancar = false)
        : (elemento.podeDestrancar = true)
      elemento.itens.splice(indice_item, 1)
      elemento.itens.splice(indice_item, 0, item_encontrado)
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_servidor == 'solicitacao_trancada') {
      SetPopupOpen(true)
      setPopupType('solicitacao_trancada')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else if (resposta_servidor == 'solicitacao_aberta') {
      console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    } else {
      console.log('Erro!')
    }
  }
  const finalizarItemPedido = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let id_elemento = ''
    if (e.currentTarget.parentElement != null) {
      id_elemento = e.currentTarget.parentElement.id
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const id_item = e.currentTarget.id
    function isItem(compra: Compra) {
      return compra.id == parseInt(id_item)
    }
    const array_itens = elemento.itens
    const indice_item = array_itens.findIndex(isItem)
    const item_encontrado = array_itens.filter(isItem)[0]
    if (item_encontrado.status == 'entregue') {
      item_encontrado.status = 'finalizado'
    } else {
      item_encontrado.status = 'entregue'
    }
    const novoElemento = elemento
    novoElemento.itens.splice(indice_item, 1)
    novoElemento.itens.splice(indice_item, 0, item_encontrado)
    novoElemento.podeDestrancar = false
    let haItensNaoFinalizados = true
    const itensNaoFinalizados: Compra[] = []
    novoElemento.itens.filter(
      (item) => item.status != 'finalizado' && itensNaoFinalizados.push(item)
    )
    haItensNaoFinalizados = itensNaoFinalizados.length > 0
    if (haItensNaoFinalizados) {
      novoElemento.podeDestrancar = false
      const resposta_atualizacao_servidor = fecharItemNoServidor(novoElemento)
      const resposta_recebida = await resposta_atualizacao_servidor
      if (resposta_recebida == 'ok') {
        elemento.podeDestrancar = false
        haItensNaoFinalizados && (elemento.podeDestrancar = false)
        elemento.itens.splice(indice_item, 1)
        elemento.itens.splice(indice_item, 0, item_encontrado)
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
        if (!haItensNaoFinalizados) {
          atualizarAposFecharSolicitacao()
        }
      } else {
        console.log('Erro!')
      }
    } else {
      document.body.style.overflowY = 'hidden'
      item_encontrado.status = 'entregue'
      elemento.itens.splice(indice_item, 1)
      elemento.itens.splice(indice_item, 0, item_encontrado)
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
      SetPopupOpen(true)
      setPopupType('confirmacao_pedido')
      setPopupConfirmationPedido(id_elemento)
    }
  }
  const handleEmpresaSolicitacao = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | ChangeEvent<HTMLSelectElement>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | any,
    acao: string
  ) => {
    let id_elemento = e.currentTarget.id
    if (acao == 'empresaAlterada') {
      id_elemento = id_elemento.split('input')[0]
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (acao == 'confirmarEdicao') {
      const novoElemento = elemento
      novoElemento.editandoEmpresa = false
      novoElemento.empresa = elemento.novaEmpresa
      const resposta_atualizacao_servidor =
        atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_servidor = await resposta_atualizacao_servidor
      if (resposta_servidor == 'ok') {
        elemento.editandoEmpresa = false
        elemento.empresa = elemento.novaEmpresa
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_servidor == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_servidor == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    } else {
      if (acao == 'editarEmpresa') {
        elemento.editandoEmpresa = true
      } else if (acao == 'empresaAlterada') {
        elemento.novaEmpresa = e.currentTarget.value
        e.currentTarget.value = elemento.novaEmpresa
      } else if (acao == 'cancelarEdicao') {
        elemento.editandoEmpresa = false
        elemento.novaEmpresa = elemento.empresa
      }
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputMudanca: any =
        e.currentTarget.parentElement?.previousElementSibling
          ?.previousElementSibling
      inputMudanca.value = elemento.empresa
    }
  }
  const handleDataLimiteSolicitacao = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | ChangeEvent<HTMLInputElement>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | any,
    acao: string
  ) => {
    let id_elemento = e.currentTarget.id
    if (acao == 'dataLimiteAlterada') {
      id_elemento = id_elemento.split('input')[0]
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (acao == 'confirmarEdicao') {
      const novoElemento = elemento
      novoElemento.editandoDataLimite = false
      novoElemento.dataLimite = elemento.novaDataLimite
      const resposta_atualizacao_servidor =
        atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_servidor = await resposta_atualizacao_servidor
      if (resposta_servidor == 'ok') {
        elemento.editandoDataLimite = false
        elemento.dataLimite = elemento.novaDataLimite
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_servidor == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_servidor == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    } else {
      if (acao == 'editarDataLimite') {
        elemento.editandoDataLimite = true
        const anoDataFormatada = elemento.dataLimite.split('/')[2]
        const mesDataFormatada = elemento.dataLimite.split('/')[1]
        const diaDataFormatada = elemento.dataLimite.split('/')[0]
        const dataFormatada =
          anoDataFormatada + '-' + mesDataFormatada + '-' + diaDataFormatada
        const inputMudanca: any =
          e.currentTarget.parentElement?.previousElementSibling
            ?.previousElementSibling
        inputMudanca.value = dataFormatada
        elemento.novaDataLimite = elemento.dataLimite
      } else if (acao == 'dataLimiteAlterada') {
        const novaData = e.currentTarget.value
        const anoData = novaData.split('-')[0]
        const mesData = novaData.split('-')[1]
        const diaData = novaData.split('-')[2]
        const dataFormatada = diaData + '/' + mesData + '/' + anoData
        elemento.novaDataLimite = dataFormatada
        e.currentTarget.value = novaData
      } else if (acao == 'cancelarEdicao') {
        elemento.editandoDataLimite = false
        elemento.novaDataLimite = elemento.dataLimite
      }
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    }
  }
  const handleSugFornSolicitacao = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | ChangeEvent<HTMLInputElement>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | any,
    acao: string
  ) => {
    let id_elemento = e.currentTarget.id
    if (acao == 'sugFornAlterada') {
      id_elemento = id_elemento.split('input')[0]
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (acao == 'confirmarEdicaoSugForn') {
      const novoElemento = elemento
      novoElemento.editandoSugFor = false
      novoElemento.sugestfornecedor = novoElemento.novaSugFor
      const resposta_atualizacao_servidor =
        atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_servidor = await resposta_atualizacao_servidor
      if (resposta_servidor == 'ok') {
        elemento.editandoSugFor = false
        elemento.sugestfornecedor = elemento.novaSugFor
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_servidor == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_servidor == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    } else {
      if (acao == 'editarSugForn') {
        elemento.editandoSugFor = true
      } else if (acao == 'sugFornAlterada') {
        const novaSugForn = e.currentTarget.value
        elemento.novaSugFor = novaSugForn
        e.currentTarget.value = novaSugForn
      } else if (acao == 'cancelarEdicaoSugForn') {
        elemento.editandoSugFor = false
        elemento.novaSugFor = elemento.sugestfornecedor
      }
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputMudanca: any =
        e.currentTarget.parentElement?.previousElementSibling
      inputMudanca.value = elemento.sugestfornecedor
    }
  }
  const handleObsFinalSolicitacao = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | ChangeEvent<HTMLInputElement>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | any,
    acao: string
  ) => {
    let id_elemento = e.currentTarget.id
    if (acao == 'obsFinalAlterada') {
      id_elemento = id_elemento.split('input')[0]
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (acao == 'confirmarEdicaoObsFinal') {
      const novoElemento = elemento
      novoElemento.editandoObsFinal = false
      novoElemento.obsFinal = novoElemento.novaObsFinal
      const resposta_atualizacao_servidor =
        atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_servidor = await resposta_atualizacao_servidor
      if (resposta_servidor == 'ok') {
        elemento.editandoObsFinal = false
        elemento.obsFinal = elemento.novaObsFinal
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_servidor == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_servidor == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    } else {
      if (acao == 'editarObsFinal') {
        elemento.editandoObsFinal = true
      } else if (acao == 'obsFinalAlterada') {
        const novaObsFinal = e.currentTarget.value
        elemento.novaObsFinal = novaObsFinal
        e.currentTarget.value = novaObsFinal
      } else if (acao == 'cancelarEdicaoObsFinal') {
        elemento.editandoObsFinal = false
        elemento.novaObsFinal = elemento.obsFinal
      }
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputMudanca: any =
        e.currentTarget.parentElement?.previousElementSibling
      inputMudanca.value = elemento.obsFinal
    }
  }
  const handleAlteracaoItem = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | ChangeEvent<HTMLInputElement>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | any,
    acao: string
  ) => {
    let inputMudanca: any = ''
    let novoValorInput: string | number = ''
    const id_elemento = e.currentTarget.id.split(';')[0]
    const id_item = e.currentTarget.id.split(';')[1]
    let valor_atribuivel = ''
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    let elemento = nova_lista.filter(isElement)[0]
    function isItem(compra: Compra) {
      return compra.id == parseInt(id_item)
    }
    const array_itens = elemento.itens
    const indice_item = array_itens.findIndex(isItem)
    const item_encontrado = array_itens.filter(isItem)[0]
    if (
      acao == 'confirmarEdicaoQuantidade' ||
      acao == 'confirmarEdicaoUnidade' ||
      acao == 'confirmarEdicaoDescricao' ||
      acao == 'confirmarEdicaoCentroCusto' ||
      acao == 'confirmarEdicaoObservacao'
    ) {
      const novoItem = item_encontrado
      if (acao == 'confirmarEdicaoQuantidade') {
        novoItem.editandoQuantidade = false
        novoItem.quantidade = novoItem.novaQuantidade
        inputMudanca =
          e.currentTarget.parentElement?.previousElementSibling
            ?.previousElementSibling
        novoValorInput = novoItem.quantidade
      } else if (acao == 'confirmarEdicaoUnidade') {
        novoItem.editandoUnidade = false
        novoItem.unidade = novoItem.novaUnidade
      } else if (acao == 'confirmarEdicaoDescricao') {
        novoItem.editandoDescricao = false
        novoItem.descricao = novoItem.novaDescricao
      } else if (acao == 'confirmarEdicaoCentroCusto') {
        novoItem.editandoCentroDeCusto = false
        novoItem.centrocusto = novoItem.novoCentroCusto
      } else if (acao == 'confirmarEdicaoObservacao') {
        novoItem.editandoObservacao = false
        novoItem.observacao = novoItem.novaObservacao
      }
      const novoElemento = elemento
      novoElemento.itens.splice(indice_item, 1)
      novoElemento.itens.splice(indice_item, 0, novoItem)
      const resposta_atualizacao_servidor =
        atualizarSolicitacaoNoServidor(novoElemento)
      const resposta_servidor = await resposta_atualizacao_servidor
      if (resposta_servidor == 'ok') {
        elemento = novoElemento
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_servidor == 'solicitacao_trancada') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else if (resposta_servidor == 'solicitacao_aberta') {
        console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
      } else {
        console.log('Erro!')
      }
    } else {
      if (acao == 'editarQuantidade') {
        item_encontrado.editandoQuantidade = true
        novoValorInput = String(item_encontrado.quantidade)
        inputMudanca =
          e.currentTarget.parentElement?.previousElementSibling
            .previousElementSibling
        inputMudanca.value = novoValorInput
      } else if (acao == 'quantidadeAlterada') {
        const novaQuantidadeRecebida = e.currentTarget.value
        item_encontrado.novaQuantidade = novaQuantidadeRecebida
        e.currentTarget.value = novaQuantidadeRecebida
      } else if (acao == 'cancelarEdicaoQuantidade') {
        item_encontrado.editandoQuantidade = false
        item_encontrado.novaQuantidade = item_encontrado.quantidade
        novoValorInput = String(item_encontrado.quantidade)
        inputMudanca = e.currentTarget.parentElement?.previousElementSibling
      } else if (acao == 'editarUnidade') {
        item_encontrado.editandoUnidade = true
        novoValorInput = String(item_encontrado.unidade)
        inputMudanca =
          e.currentTarget.parentElement?.previousElementSibling
            .previousElementSibling
        if (novoValorInput == 'und') {
          novoValorInput = 'Und'
          inputMudanca.value = novoValorInput
        } else {
          inputMudanca.value = novoValorInput
        }
      } else if (acao == 'unidadeAlterada') {
        const novaUnidadeRecebida = e.currentTarget.value
        if (novaUnidadeRecebida == 'Und') {
          e.currentTarget.value = 'Und'
          item_encontrado.novaUnidade = 'und'
        } else {
          item_encontrado.novaUnidade = novaUnidadeRecebida
          e.currentTarget.value = novaUnidadeRecebida
        }
      } else if (acao == 'cancelarEdicaoUnidade') {
        item_encontrado.editandoUnidade = false
        item_encontrado.novaUnidade = item_encontrado.unidade
      } else if (acao == 'editarDescricao') {
        item_encontrado.editandoDescricao = true
        valor_atribuivel = item_encontrado.descricao
        const inputMudanca: any =
          e.currentTarget.parentElement?.previousElementSibling
            .previousElementSibling
        inputMudanca.value = valor_atribuivel
      } else if (acao == 'descricaoAlterada') {
        const novaDescricaoRecebida = e.currentTarget.value
        item_encontrado.novaDescricao = novaDescricaoRecebida
        e.currentTarget.value = novaDescricaoRecebida
      } else if (acao == 'cancelarEdicaoDescricao') {
        item_encontrado.editandoDescricao = false
        item_encontrado.novaDescricao = item_encontrado.descricao
      } else if (acao == 'editarCentroCusto') {
        item_encontrado.editandoCentroDeCusto = true
        valor_atribuivel = item_encontrado.centrocusto
        const inputMudanca: any =
          e.currentTarget.parentElement?.previousElementSibling
            .previousElementSibling
        inputMudanca.value = valor_atribuivel
      } else if (acao == 'centroCustoAlterado') {
        const novoCentroCustoRecebido = e.currentTarget.value
        item_encontrado.novoCentroCusto = novoCentroCustoRecebido
        e.currentTarget.value = novoCentroCustoRecebido
      } else if (acao == 'cancelarEdicaoCentroCusto') {
        item_encontrado.editandoCentroDeCusto = false
        item_encontrado.novoCentroCusto = item_encontrado.centrocusto
      } else if (acao == 'editarObservacao') {
        item_encontrado.editandoObservacao = true
        valor_atribuivel = item_encontrado.observacao
        const inputMudanca: any =
          e.currentTarget.parentElement?.previousElementSibling
            .previousElementSibling
        inputMudanca.value = valor_atribuivel
      } else if (acao == 'observacaoAlterada') {
        const novaObservacaoRecebida = e.currentTarget.value
        item_encontrado.novaObservacao = novaObservacaoRecebida
        e.currentTarget.value = novaObservacaoRecebida
      } else if (acao == 'cancelarEdicaoObservacao') {
        item_encontrado.editandoObservacao = false
        item_encontrado.novaObservacao = item_encontrado.observacao
      }
      elemento.itens.splice(indice_item, 1)
      elemento.itens.splice(indice_item, 0, item_encontrado)
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    }
  }
  return (
    <>
      <DivGeral className={popUpOpen ? 'noScrolling' : ''}>
        <h1>Solicitações de Compra de Materiais e/ou Serviços</h1>
        <br></br>
        {SituacaoExibicao == 'carregando' && (
          <TextoCarregando>Carregando...</TextoCarregando>
        )}
        {SituacaoExibicao == 'listaVazia' && (
          <TextoListaVazia>Não há solicitações para exibir.</TextoListaVazia>
        )}
        {SituacaoExibicao == 'listaCarregada' && (
          <ListaSolicitacoes>
            <GridCabecalhoSolto>
              <li>
                <b>Nº Solic:</b>
              </li>
              <li>
                <b>Data Solicit:</b>
              </li>
              <li>
                <b>Solicitante:</b>
              </li>
              <li>
                <b>Empresa:</b>
              </li>
              <li>
                <b>Data Limite:</b>
              </li>
              <li>
                <b>Situação:</b>
              </li>
            </GridCabecalhoSolto>
            {ListaPedidos.map((pedido) => (
              <LinhaDiv
                key={pedido.id}
                usuario={nivelusur == 2 ? 'restrito' : 'completo'}
              >
                <CardSolicitacao
                  key={pedido.id}
                  tamanho={pedido.altura}
                  id={pedido.id}
                  className={`${pedido.isCardOpen ? 'open' : 'closed'} ${pedido.obsFinal == '' && pedido.sugestfornecedor == '' ? 'noBoxes' : 'boxes'}`}
                >
                  <GridCabecalho
                    id={pedido.id}
                    situacaoPedido={pedido.statusSolicitacao}
                  >
                    <li onClick={(e) => toggleCard(e)}>
                      <p>{pedido.id}</p>
                    </li>
                    <li onClick={(e) => toggleCard(e)}>
                      <p>{pedido.data_solicitacao}</p>
                    </li>
                    <li onClick={(e) => toggleCard(e)}>
                      <p>{pedido.usuario}</p>
                    </li>
                    <li
                      onClick={(e) =>
                        (nivelusur >= 3 ||
                          (nivelusur == 2 &&
                            pedido.statusSolicitacao != 'aberto')) &&
                        toggleCard(e)
                      }
                      className={
                        nivelusur == 2 && pedido.statusSolicitacao == 'aberto'
                          ? 'editar'
                          : ''
                      }
                      style={{
                        cursor:
                          nivelusur >= 3 ||
                          (nivelusur == 2 &&
                            pedido.statusSolicitacao != 'aberto')
                            ? 'pointer'
                            : 'default'
                      }}
                    >
                      <SelectEdicaoEmpresa
                        id={pedido.id + 'input' + 'empresa'}
                        style={{
                          visibility:
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoEmpresa == true
                              ? 'visible'
                              : 'hidden'
                        }}
                        onChange={(e) =>
                          handleEmpresaSolicitacao(e, 'empresaAlterada')
                        }
                        empresaSelecionada={pedido.empresa}
                      >
                        <option value="Cantaria">Cantaria</option>
                        <option value="Santa Bárbara">Santa Bárbara</option>
                      </SelectEdicaoEmpresa>
                      <p
                        style={{
                          visibility:
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoEmpresa == true
                              ? 'hidden'
                              : 'visible'
                        }}
                        className="empresa"
                      >
                        {pedido.empresa}{' '}
                      </p>
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoEmpresa != true && (
                          <IconeLapisDiv>
                            <IconeLapisImg
                              id={pedido.id}
                              src={IconeLapisEditar}
                              onClick={(e) =>
                                handleEmpresaSolicitacao(e, 'editarEmpresa')
                              }
                            ></IconeLapisImg>
                          </IconeLapisDiv>
                        )}
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoEmpresa == true &&
                        pedido.empresa != pedido.novaEmpresa && (
                          <IconeConfirmarImg
                            id={pedido.id}
                            src={IconeCheckItem}
                            onClick={(e) =>
                              handleEmpresaSolicitacao(e, 'confirmarEdicao')
                            }
                            className="editandoEmpresa"
                          ></IconeConfirmarImg>
                        )}
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoEmpresa == true && (
                          <IconeCancelarImg
                            id={pedido.id}
                            src={IconeUncheckItem}
                            onClick={(e) =>
                              handleEmpresaSolicitacao(e, 'cancelarEdicao')
                            }
                            className={
                              pedido.empresa == pedido.novaEmpresa
                                ? 'editandoEmpresa'
                                : ''
                            }
                          ></IconeCancelarImg>
                        )}
                    </li>
                    <li
                      onClick={(e) =>
                        (nivelusur >= 3 ||
                          (nivelusur == 2 &&
                            pedido.statusSolicitacao != 'aberto')) &&
                        toggleCard(e)
                      }
                      className={
                        nivelusur == 2 && pedido.statusSolicitacao == 'aberto'
                          ? 'editar'
                          : ''
                      }
                      style={{
                        cursor:
                          nivelusur >= 3 ||
                          (nivelusur == 2 &&
                            pedido.statusSolicitacao != 'aberto')
                            ? 'pointer'
                            : 'default'
                      }}
                    >
                      <InputDataLimite
                        id={pedido.id + 'input' + 'dataLimite'}
                        style={{
                          visibility:
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoDataLimite == true
                              ? 'visible'
                              : 'hidden'
                        }}
                        type={'date'}
                        min={getMinimumDate()}
                        onChange={(e) =>
                          handleDataLimiteSolicitacao(e, 'dataLimiteAlterada')
                        }
                      ></InputDataLimite>
                      <p
                        style={{
                          visibility:
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoDataLimite == true
                              ? 'hidden'
                              : 'visible'
                        }}
                        className="dataLimite"
                      >
                        {pedido.dataLimite}{' '}
                      </p>
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoDataLimite != true && (
                          <IconeLapisDiv>
                            <IconeLapisImg
                              id={pedido.id}
                              src={IconeLapisEditar}
                              onClick={(e) =>
                                handleDataLimiteSolicitacao(
                                  e,
                                  'editarDataLimite'
                                )
                              }
                            ></IconeLapisImg>
                          </IconeLapisDiv>
                        )}
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoDataLimite == true &&
                        pedido.dataLimite != pedido.novaDataLimite && (
                          <IconeConfirmarImg
                            id={pedido.id}
                            src={IconeCheckItem}
                            onClick={(e) =>
                              handleDataLimiteSolicitacao(e, 'confirmarEdicao')
                            }
                          ></IconeConfirmarImg>
                        )}
                      {nivelusur == 2 &&
                        pedido.statusSolicitacao == 'aberto' &&
                        pedido.editandoDataLimite == true && (
                          <IconeCancelarImg
                            id={pedido.id}
                            src={IconeUncheckItem}
                            onClick={(e) =>
                              handleDataLimiteSolicitacao(e, 'cancelarEdicao')
                            }
                            className="cancelarEdicaoDataLimite"
                          ></IconeCancelarImg>
                        )}
                    </li>
                    <ItemCabecalhoSituacao
                      className={
                        (pedido.statusSolicitacao == 'andamento' &&
                          nivelusur == 2) ||
                        (nivelusur == 3 &&
                          pedido.podeDestrancar == true &&
                          (pedido.statusSolicitacao == 'aberto' ||
                            pedido.statusSolicitacao == 'andamento'))
                          ? 'noPointer'
                          : ''
                      }
                      onClick={(e) =>
                        (nivelusur > 3 ||
                          pedido.statusSolicitacao == 'entregue' ||
                          (pedido.statusSolicitacao == 'aberto' &&
                            nivelusur == 2) ||
                          (nivelusur == 3 && pedido.podeDestrancar == false)) &&
                        toggleCard(e)
                      }
                    >
                      <b>
                        <p
                          className={
                            pedido.statusSolicitacao == 'andamento'
                              ? 'andamentoCompleto'
                              : ''
                          }
                        >
                          {textoSituacao(pedido.statusSolicitacao)}{' '}
                        </p>
                        <p
                          className={
                            pedido.statusSolicitacao == 'andamento'
                              ? 'andamentoAbreviado'
                              : 'naoAndamentoAbreviado'
                          }
                        >
                          AND
                        </p>
                        {nivelusur == 3 &&
                          pedido.statusSolicitacao != 'entregue' &&
                          pedido.podeDestrancar == true && (
                            <IconeDiv>
                              <IconeTranca
                                id={pedido.id}
                                src={
                                  pedido.statusSolicitacao == 'aberto'
                                    ? FechaduraAberta
                                    : FechaduraFechada
                                }
                                onClick={clickFechadura}
                              ></IconeTranca>
                            </IconeDiv>
                          )}
                        {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'andamento' && (
                            <IconeEntregueDiv>
                              <IconeEntregueImg
                                id={pedido.id}
                                src={IconeEntregue}
                                onClick={definirPedidoEntregue}
                              ></IconeEntregueImg>
                            </IconeEntregueDiv>
                          )}
                      </b>
                    </ItemCabecalhoSituacao>
                  </GridCabecalho>
                  <DivGridCabecalho
                    id={pedido.id + 'class'}
                    tamanho={pedido.altura}
                    className={pedido.isCardOpen ? 'open' : 'closed'}
                  >
                    <GridCabecalhoItemsPedido id={pedido.id}>
                      <LinhaCabecalhoItems>
                        <b>Qtd.</b>
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItems>
                        <b>Und.</b>
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItems>
                        <TextoCabecalhoDescObs>Descrição</TextoCabecalhoDescObs>
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItems>
                        <b>C. Custo</b>
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItemsUltimo>
                        <TextoCabecalhoDescObs>
                          Observação
                        </TextoCabecalhoDescObs>
                      </LinhaCabecalhoItemsUltimo>
                    </GridCabecalhoItemsPedido>
                    {pedido.itens.map((item) => (
                      <GridItemsPedido
                        key={item.id}
                        className={`classeItems ${
                          pedido.statusSolicitacao != 'aberto' &&
                          item.status == 'entregue' &&
                          'boldText'
                        }`}
                      >
                        <li
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto'
                              ? 'editar'
                              : ''
                          }
                        >
                          <InputQuantidade
                            id={pedido.id + ';' + item.id + ';' + 'quantidade'}
                            type={'number'}
                            style={{
                              visibility:
                                nivelusur == 2 &&
                                pedido.statusSolicitacao == 'aberto' &&
                                item.editandoQuantidade == true
                                  ? 'visible'
                                  : 'hidden'
                            }}
                            onChange={(e) =>
                              handleAlteracaoItem(e, 'quantidadeAlterada')
                            }
                          ></InputQuantidade>
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          item.editandoQuantidade == true ? (
                            ''
                          ) : (
                            <p>{item.quantidade}</p>
                          )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoQuantidade != true && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'quantidade'
                                  }
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleAlteracaoItem(e, 'editarQuantidade')
                                  }
                                  className="lapisMenor"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoQuantidade == true &&
                            item.quantidade != item.novaQuantidade &&
                            item.novaQuantidade != 0 && (
                              <IconeConfirmarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'quantidade'
                                }
                                src={IconeCheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'confirmarEdicaoQuantidade'
                                  )
                                }
                                className="itemButtom quantidade"
                              ></IconeConfirmarImg>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoQuantidade == true && (
                              <IconeCancelarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'quantidade'
                                }
                                src={IconeUncheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'cancelarEdicaoQuantidade'
                                  )
                                }
                                className="itemButtom quantidade"
                              ></IconeCancelarImg>
                            )}
                        </li>
                        <li
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto'
                              ? 'editar'
                              : ''
                          }
                        >
                          <InputUnidade
                            id={pedido.id + ';' + item.id + ';' + 'unidade'}
                            style={{
                              visibility:
                                nivelusur == 2 &&
                                pedido.statusSolicitacao == 'aberto' &&
                                item.editandoUnidade == true
                                  ? 'visible'
                                  : 'hidden'
                            }}
                            onChange={(e) =>
                              handleAlteracaoItem(e, 'unidadeAlterada')
                            }
                          >
                            <option value="Und">Und</option>
                            <option value="Kg">Kg</option>
                            <option value="L">L</option>
                            <option value="scs">scs</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="m²">m²</option>
                          </InputUnidade>
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          item.editandoUnidade == true ? (
                            ''
                          ) : (
                            <p>{item.unidade}</p>
                          )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoUnidade != true && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={
                                    pedido.id + ';' + item.id + ';' + 'unidade'
                                  }
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleAlteracaoItem(e, 'editarUnidade')
                                  }
                                  className="lapisMenor"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoUnidade == true &&
                            item.unidade != item.novaUnidade && (
                              <IconeConfirmarImg
                                id={pedido.id + ';' + item.id + ';' + 'unidade'}
                                src={IconeCheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'confirmarEdicaoUnidade'
                                  )
                                }
                                className="itemButtom unidade"
                              ></IconeConfirmarImg>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoUnidade == true && (
                              <IconeCancelarImg
                                id={pedido.id + ';' + item.id + ';' + 'unidade'}
                                src={IconeUncheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'cancelarEdicaoUnidade'
                                  )
                                }
                                className="itemButtom unidade"
                              ></IconeCancelarImg>
                            )}
                        </li>
                        <li
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto'
                              ? 'editar'
                              : ''
                          }
                        >
                          <InputDescricao
                            id={pedido.id + ';' + item.id + ';' + 'descricao'}
                            style={{
                              visibility:
                                nivelusur == 2 &&
                                pedido.statusSolicitacao == 'aberto' &&
                                item.editandoDescricao == true
                                  ? 'visible'
                                  : 'hidden'
                            }}
                            onChange={(e) =>
                              handleAlteracaoItem(e, 'descricaoAlterada')
                            }
                          ></InputDescricao>
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          item.editandoDescricao == true ? (
                            ''
                          ) : (
                            <TextoDescricaoItem
                              textoDescricao={item.descricao}
                              larguraTexto={item.descricao.length}
                              className={
                                item.descricao.length > 25
                                  ? 'descricaoOverflow'
                                  : ''
                              }
                              id={'textoDescricaoOverflow'}
                            >
                              {item.descricao}
                            </TextoDescricaoItem>
                          )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoDescricao != true && (
                              <IconeLapisDiv
                                className={`lapisMenor ${
                                  item.descricao.length > 25
                                    ? 'descricaoOverflow'
                                    : ''
                                }`}
                              >
                                <IconeLapisImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'descricao'
                                  }
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleAlteracaoItem(e, 'editarDescricao')
                                  }
                                  className={`lapisMenor ${
                                    item.descricao.length > 25
                                      ? 'descricaoOverflow'
                                      : ''
                                  }`}
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoDescricao == true &&
                            item.descricao != item.novaDescricao &&
                            item.novaDescricao != '' && (
                              <IconeConfirmarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'descricao'
                                }
                                src={IconeCheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'confirmarEdicaoDescricao'
                                  )
                                }
                                className="confirmarDescricao"
                              ></IconeConfirmarImg>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoDescricao == true && (
                              <IconeCancelarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'descricao'
                                }
                                src={IconeUncheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'cancelarEdicaoDescricao'
                                  )
                                }
                                className={
                                  item.descricao != item.novaDescricao &&
                                  item.novaDescricao != ''
                                    ? 'uhu'
                                    : 'cancelarDescricao'
                                }
                              ></IconeCancelarImg>
                            )}
                        </li>
                        <li
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto'
                              ? 'editar'
                              : ''
                          }
                        >
                          <InputCentroCusto
                            id={pedido.id + ';' + item.id + ';' + 'centroCusto'}
                            style={{
                              visibility:
                                nivelusur == 2 &&
                                pedido.statusSolicitacao == 'aberto' &&
                                item.editandoCentroDeCusto == true
                                  ? 'visible'
                                  : 'hidden'
                            }}
                            onChange={(e) =>
                              handleAlteracaoItem(e, 'centroCustoAlterado')
                            }
                          >
                            {listaCentrosCusto.map((centroCusto) => (
                              <option
                                key={centroCusto}
                                value={centroCusto.split(' - ')[0]}
                              >
                                {centroCusto}
                              </option>
                            ))}
                          </InputCentroCusto>
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          item.editandoCentroDeCusto == true ? (
                            ''
                          ) : (
                            <p>{item.centrocusto}</p>
                          )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoCentroDeCusto != true && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'centroCusto'
                                  }
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleAlteracaoItem(e, 'editarCentroCusto')
                                  }
                                  className="lapisMenor"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoCentroDeCusto == true &&
                            item.centrocusto != item.novoCentroCusto && (
                              <IconeConfirmarImg
                                id={
                                  pedido.id +
                                  ';' +
                                  item.id +
                                  ';' +
                                  'centroCusto'
                                }
                                src={IconeCheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'confirmarEdicaoCentroCusto'
                                  )
                                }
                                className="itemButtom centrocusto"
                              ></IconeConfirmarImg>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoCentroDeCusto == true && (
                              <IconeCancelarImg
                                id={
                                  pedido.id +
                                  ';' +
                                  item.id +
                                  ';' +
                                  'centroCusto'
                                }
                                src={IconeUncheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'cancelarEdicaoCentroCusto'
                                  )
                                }
                                className="itemButtom centrocusto"
                              ></IconeCancelarImg>
                            )}
                        </li>
                        <li
                          className={`textoObservacaoItem ${nivelusur > 2 && 'visualizacao'}
                            ${
                              nivelusur == 2 &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }`}
                        >
                          <InputObservacaoItem
                            id={pedido.id + ';' + item.id + ';' + 'observacao'}
                            style={{
                              visibility:
                                nivelusur == 2 &&
                                pedido.statusSolicitacao == 'aberto' &&
                                item.editandoObservacao == true
                                  ? 'visible'
                                  : 'hidden'
                            }}
                            onChange={(e) =>
                              handleAlteracaoItem(e, 'observacaoAlterada')
                            }
                          ></InputObservacaoItem>
                          {nivelusur == 2 && item.editandoObservacao == true ? (
                            ''
                          ) : (
                            <p
                              className={`textoObservacaoItem ${nivelusur > 2 && 'visualizacao'}`}
                            >
                              <TextoObservacaoItem
                                textoObservacao={item.observacao}
                                larguraTexto={item.observacao.length}
                                className={
                                  item.observacao.length > 41
                                    ? 'textoObsOverflow'
                                    : ''
                                }
                                id={'textoObservacaoOverflow'}
                              >
                                {item.observacao}
                              </TextoObservacaoItem>
                            </p>
                          )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoObservacao != true && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'observacao'
                                  }
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleAlteracaoItem(e, 'editarObservacao')
                                  }
                                  className="lapisMenor"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoObservacao == true &&
                            item.observacao != item.novaObservacao && (
                              <IconeConfirmarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'observacao'
                                }
                                src={IconeCheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'confirmarEdicaoObservacao'
                                  )
                                }
                                className="confirmarEdicaoObservacao"
                              ></IconeConfirmarImg>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoObservacao == true && (
                              <IconeCancelarImg
                                id={
                                  pedido.id + ';' + item.id + ';' + 'observacao'
                                }
                                src={IconeUncheckItem}
                                onClick={(e) =>
                                  handleAlteracaoItem(
                                    e,
                                    'cancelarEdicaoObservacao'
                                  )
                                }
                                className={
                                  item.observacao != item.novaObservacao
                                    ? 'uhu'
                                    : 'cancelarEdicaoObservacao'
                                }
                              ></IconeCancelarImg>
                            )}
                        </li>
                        {nivelusur == 3 &&
                          pedido.statusSolicitacao != 'aberto' &&
                          pedido.statusSolicitacao != 'entregue' &&
                          item.status != 'finalizado' && (
                            <ItemCheckDivCaminhao id={pedido.id}>
                              <ItemCaminhaokImg
                                id={String(item.id)}
                                src={
                                  item.status == 'aberto'
                                    ? IconeCaminhaoEntrega
                                    : IconeUncheckItem
                                }
                                onClick={marcarItemPedido}
                                className={
                                  item.status == 'entregue' ? 'andamento' : ''
                                }
                              ></ItemCaminhaokImg>
                            </ItemCheckDivCaminhao>
                          )}
                        {nivelusur == 2 &&
                          pedido.statusSolicitacao != 'aberto' &&
                          pedido.statusSolicitacao != 'entregue' &&
                          item.status != 'aberto' && (
                            <ItemCheckDiv id={pedido.id}>
                              <ItemCheckImg
                                id={String(item.id)}
                                src={
                                  item.status == 'finalizado'
                                    ? IconeUncheckItem
                                    : IconeCheckItem
                                }
                                onClick={finalizarItemPedido}
                                className={
                                  item.status == 'finalizado'
                                    ? 'finalizado'
                                    : ''
                                }
                              ></ItemCheckImg>
                            </ItemCheckDiv>
                          )}
                        {pedido.statusSolicitacao != 'aberto' &&
                          pedido.statusSolicitacao != 'entregue' &&
                          (item.status == 'entregue' ||
                            item.status == 'finalizado') && (
                            <DivEntregue id={pedido.id}></DivEntregue>
                          )}
                        {pedido.statusSolicitacao != 'aberto' &&
                          pedido.statusSolicitacao != 'entregue' &&
                          item.status == 'finalizado' && (
                            <DivTraco
                              id={pedido.id}
                              tipoUsuario={
                                nivelusur == 2 ? 'solicitante' : 'comprador'
                              }
                            ></DivTraco>
                          )}
                      </GridItemsPedido>
                    ))}

                    <GridItemsPedido
                      className={`gridFake ${(pedido.obsFinal != '' || pedido.sugestfornecedor != '') && 'obsOrSugest'}`}
                    ></GridItemsPedido>
                    {pedido.sugestfornecedor != '' && (
                      <DivSugestFornecedoresObs>
                        <div>
                          <b>Sug. Forn:</b>
                        </div>
                        <BoxTextoSugest
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoSugFor == true
                              ? 'editando'
                              : ''
                          }
                        >
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          pedido.editandoSugFor == true ? (
                            ''
                          ) : (
                            <p>{pedido.sugestfornecedor}</p>
                          )}
                          <InputSugest
                            id={pedido.id}
                            className={
                              nivelusur == 2 &&
                              pedido.statusSolicitacao == 'aberto' &&
                              pedido.editandoSugFor == true
                                ? 'open'
                                : 'closed'
                            }
                            onChange={(e) =>
                              handleSugFornSolicitacao(e, 'sugFornAlterada')
                            }
                          ></InputSugest>
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoSugFor != true &&
                            pedido.sugestfornecedor != '' && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={pedido.id}
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleSugFornSolicitacao(e, 'editarSugForn')
                                  }
                                  className="ObsSugForn"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoSugFor == true && (
                              <IconeLapisDiv>
                                <IconeCancelarImg
                                  id={pedido.id}
                                  src={IconeUncheckItem}
                                  onClick={(e) =>
                                    handleSugFornSolicitacao(
                                      e,
                                      'cancelarEdicaoSugForn'
                                    )
                                  }
                                  className={'SuggestionEdition'}
                                ></IconeCancelarImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoSugFor == true &&
                            pedido.sugestfornecedor != pedido.novaSugFor && (
                              <IconeLapisDiv>
                                <IconeConfirmarImg
                                  id={pedido.id}
                                  src={IconeCheckItem}
                                  onClick={(e) =>
                                    handleSugFornSolicitacao(
                                      e,
                                      'confirmarEdicaoSugForn'
                                    )
                                  }
                                  className={'SuggestionEdition'}
                                ></IconeConfirmarImg>
                              </IconeLapisDiv>
                            )}
                        </BoxTextoSugest>
                      </DivSugestFornecedoresObs>
                    )}
                    {pedido.obsFinal != '' && (
                      <DivSugestFornecedoresObs>
                        <div>
                          <b>Observação:</b>
                        </div>
                        <BoxTextoSugest
                          className={
                            nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoObsFinal == true
                              ? 'editando'
                              : ''
                          }
                        >
                          {nivelusur == 2 &&
                          pedido.statusSolicitacao == 'aberto' &&
                          pedido.editandoObsFinal == true
                            ? ''
                            : pedido.obsFinal}
                          <InputSugest
                            id={pedido.id}
                            className={
                              nivelusur == 2 &&
                              pedido.statusSolicitacao == 'aberto' &&
                              pedido.editandoObsFinal == true
                                ? 'open'
                                : 'closed'
                            }
                            onChange={(e) =>
                              handleObsFinalSolicitacao(e, 'obsFinalAlterada')
                            }
                          ></InputSugest>
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoObsFinal != true &&
                            pedido.obsFinal != '' && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={pedido.id}
                                  src={IconeLapisEditar}
                                  onClick={(e) =>
                                    handleObsFinalSolicitacao(
                                      e,
                                      'editarObsFinal'
                                    )
                                  }
                                  className="ObsSugForn"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoObsFinal == true && (
                              <IconeLapisDiv>
                                <IconeCancelarImg
                                  id={pedido.id}
                                  src={IconeUncheckItem}
                                  onClick={(e) =>
                                    handleObsFinalSolicitacao(
                                      e,
                                      'cancelarEdicaoObsFinal'
                                    )
                                  }
                                  className={'SuggestionEdition'}
                                ></IconeCancelarImg>
                              </IconeLapisDiv>
                            )}
                          {nivelusur == 2 &&
                            pedido.statusSolicitacao == 'aberto' &&
                            pedido.editandoObsFinal == true &&
                            pedido.obsFinal != pedido.novaObsFinal && (
                              <IconeLapisDiv>
                                <IconeConfirmarImg
                                  id={pedido.id}
                                  src={IconeCheckItem}
                                  onClick={(e) =>
                                    handleObsFinalSolicitacao(
                                      e,
                                      'confirmarEdicaoObsFinal'
                                    )
                                  }
                                  className={'SuggestionEdition'}
                                ></IconeConfirmarImg>
                              </IconeLapisDiv>
                            )}
                        </BoxTextoSugest>
                      </DivSugestFornecedoresObs>
                    )}
                  </DivGridCabecalho>
                </CardSolicitacao>
                {nivelusur > 2 && !popUpOpen && (
                  <IconeExcelDiv>
                    <IconeExcelImg
                      id={pedido.id}
                      src={IconeExcel}
                      onClick={(e) => baixarExcelPedido(e)}
                    ></IconeExcelImg>
                  </IconeExcelDiv>
                )}
              </LinhaDiv>
            ))}
          </ListaSolicitacoes>
        )}
      </DivGeral>
      {popUpOpen && (
        <>
          <CoverPopupDiv></CoverPopupDiv>
          <PopupDiv>
            <CabecarioPopup>
              <p>ATENÇÃO:</p>
            </CabecarioPopup>
            {popupType == 'confirmacao_pedido' && (
              <TextoPopUp>
                <p>
                  Confimando o <b>RECEBIMENTO</b> e <b>CONFORMIDADE</b> de
                </p>
                <p>
                  <b>TODOS OS ITENS</b> da solicitação:{' '}
                  <b>{popUpConfirmationPedido}</b>
                </p>
                <br></br>
                <p className="warning">
                  <b>Após a confirmação, esta solicitação será arquivada!</b>
                </p>
                <br></br>
                <p>
                  <b>Confirmar?</b>
                </p>
              </TextoPopUp>
            )}
            {popupType == 'solicitacao_trancada' && (
              <TextoPopUp>
                <p>
                  A solicitação <b>{popUpConfirmationPedido}</b> foi colocada em
                  andamento recentemente!
                </p>
                <br></br>
                <p>
                  <b>
                    Se for necessário alterar um campo, entre em contato com o/a
                    comprador(a).
                  </b>
                </p>
                <br></br>
              </TextoPopUp>
            )}
            {popupType == 'arquivos_distintos' && (
              <TextoPopUp>
                <p>
                  A solicitação <b>{popUpConfirmationPedido}</b> foi editada
                  recentemente!
                </p>
                <br></br>
                <p>
                  <b>
                    Verifique novamente os dados da Solicitação antes de tentar
                    dar andamento novamente.
                  </b>
                </p>
                <br></br>
              </TextoPopUp>
            )}
            {popupType == 'item_finalizado' && (
              <TextoPopUp>
                <p>
                  O item <b>{popUpConfirmationPedido.split(';')[1]}</b> da
                  solicitação <b>{popUpConfirmationPedido.split(';')[0]}</b> já
                  foi confirmado como <b>ENTREGUE</b> recentemente!
                </p>
                <br></br>
                <p>
                  <b>
                    Se necessário, entre em contato com o Solicitador da Compra!
                  </b>
                </p>
                <br></br>
              </TextoPopUp>
            )}
            {popupType == 'confirmacao_pedido' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUp}>Voltar</BotaoVoltar>
                <BotaoConfirmar
                  onClick={() =>
                    definirPedidoEntregueSistema(popUpConfirmationPedido)
                  }
                >
                  Confirmar
                </BotaoConfirmar>
              </BotoesPopUp>
            )}
            {popupType == 'solicitacao_trancada' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUpWithUpdate}>
                  Voltar
                </BotaoVoltar>
              </BotoesPopUp>
            )}
            {popupType == 'arquivos_distintos' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUpWithUpdate}>
                  Voltar
                </BotaoVoltar>
              </BotoesPopUp>
            )}
            {popupType == 'item_finalizado' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUpWithUpdate}>
                  Voltar
                </BotaoVoltar>
              </BotoesPopUp>
            )}
          </PopupDiv>
        </>
      )}
    </>
  )
}

export default ListaSolicitacao
