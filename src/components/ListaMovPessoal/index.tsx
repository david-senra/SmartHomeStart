import React, { ChangeEvent } from 'react'
import { useState } from 'react'
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
  IconePDFImg,
  IconePDFDiv,
  IconeExcelImg,
  IconeEntregueDiv,
  IconeEntregueImg,
  IconeCancelarPedImg,
  LinhaDiv,
  ItemCheckDiv,
  DivPrecoFornecedor,
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
  BotaoVoltar,
  TextoItemEntregue,
  DivRelatorioCompleto,
  MenuBotoesTipoSolicitacao,
  TextoEmEntrega,
  TextoSituacaoCabecalho
} from './styles'
import FechaduraAberta from '../../assets/images/destrancado.png'
import FechaduraFechada from '../../assets/images/trancado.png'
import IconeExcel from '../../assets/images/excelicon.png'
import IconeEntregue from '../../assets/images/iconeEntregue.png'
import IconeCancelar from '../../assets/images/cancel.png'
import IconeContrato from '../../assets/images/contract.png'
import IconeReciclar from '../../assets/images/recycle.png'
import IconeCheckItem from '../../assets/images/checkItemIcon.png'
import IconeUncheckItem from '../../assets/images/uncheckItemIcon.png'
import IconeLapisEditar from '../../assets/images/pencilEditIcon.png'
import IconeCaminhaoEntrega from '../../assets/images/truckgreen.png'
import IconePDF from '../../assets/images/pdf.png'
Pusher.logToConsole = true
const pusher = new Pusher('cbf75472b9e1dfb532eb', {
  cluster: 'sa1',
  forceTLS: true
})
let channel: Channel

const ListaSolicitacaoMP = ({ nomeusur = '', nivelusur = 0 }) => {
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
    dataEntregue: string
    dataFinalizado: string
    fornecedor: string
    precoUnitario: number
    precoTotal: number

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
      dataEntregue: string
      dataFinalizado: string
      fornecedor: string
      precoUnitario: number
      precoTotal: number
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
      this.dataEntregue = data.dataEntregue
      this.dataFinalizado = data.dataFinalizado
      this.fornecedor = data.fornecedor
      this.precoUnitario = data.precoUnitario
      this.precoTotal = data.precoTotal
    }
  }
  class AcrescimoCargo {
    id: number
    sigla: string
    quantidade_pedida: number
    status: string

    constructor(data: {
      id: number
      sigla: string
      quantidade_pedida: number
      status: string
    }) {
      this.id = data.id
      this.sigla = data.sigla
      this.quantidade_pedida = data.quantidade_pedida
      this.status = data.status
    }
  }
  class Vaga {
    id: string
    cargo: string
    situacao: string
    nome: string
    rg: string
    cpf: string

    constructor(data: {
      id: string
      cargo: string
      situacao: string
      nome: string
      rg: string
      cpf: string
    }) {
      this.id = data.id
      this.cargo = data.cargo
      this.situacao = data.situacao
      this.nome = data.nome
      this.rg = data.rg
      this.cpf = data.cpf
    }
  }
  class Obra {
    id: number
    municipio: string
    nome: string
    descricao_completa: string
    equipe: Vaga[]

    constructor(data: {
      municipio: string
      nome: string
      descricao_completa: string
      equipe: Vaga[]
      id: number
    }) {
      this.municipio = data.municipio
      this.nome = data.nome
      this.descricao_completa = data.descricao_completa
      this.equipe = data.equipe
      this.id = data.id
    }
  }
  class Solicitacao {
    id: string
    usuario: string
    natureza_solicitacao: string
    data_solicitacao: string
    empresa: string
    obra: Obra
    obra_destino: string
    pedido_abertura_vagas: AcrescimoCargo[]
    pedido_abertura_inclui_admissao: boolean
    pedido_admissao_vagas: []
    pedido_admissao_vagas_inclusao: []
    pedidos_funcionarios: []
    justificativa: string
    observacao_geral: string
    status_solicitacao: string
    isCardOpen: boolean
    altura: number
    obsFinal: string
    statusSolicitacao: string
    podeDestrancar: boolean
    requisicao: string
    todosEntregues: boolean
    itens: Compra[]

    constructor(data: {
      id: string
      usuario: string
      natureza_solicitacao: string
      data_solicitacao: string
      empresa: string
      obra: Obra
      obra_destino: string
      pedido_abertura_vagas: []
      pedido_abertura_inclui_admissao: boolean
      pedido_admissao_vagas: []
      pedido_admissao_vagas_inclusao: []
      pedidos_funcionarios: []
      justificativa: string
      observacao_geral: string
      status_solicitacao: string
      isCardOpen: boolean
      altura: number
      obsFinal: string
      statusSolicitacao: string
      podeDestrancar: boolean
      requisicao: string
      todosEntregues: boolean
      itens: Compra[]
    }) {
      this.id = data.id
      this.usuario = data.usuario
      this.natureza_solicitacao = data.natureza_solicitacao
      this.obsFinal = data.obsFinal
      this.data_solicitacao = data.data_solicitacao
      this.empresa = data.empresa
      this.obra = data.obra
      this.itens = data.itens
      this.statusSolicitacao = data.statusSolicitacao
      this.isCardOpen = data.isCardOpen
      this.altura = data.altura
      this.podeDestrancar = data.podeDestrancar
      this.requisicao = data.requisicao
      this.todosEntregues = data.todosEntregues
      this.obra_destino = data.obra_destino
      this.pedido_abertura_vagas = data.pedido_abertura_vagas
      this.pedido_abertura_inclui_admissao =
        data.pedido_abertura_inclui_admissao
      this.pedido_admissao_vagas = data.pedido_admissao_vagas
      this.pedido_admissao_vagas_inclusao = data.pedido_admissao_vagas_inclusao
      this.pedidos_funcionarios = data.pedidos_funcionarios
      this.justificativa = data.justificativa
      this.observacao_geral = data.observacao_geral
      this.status_solicitacao = data.status_solicitacao
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
  const [situacaoDownloadPlanilhaGeral, setSituacaoDownloadPlanilhaGeral] =
    useState<string>('ocioso')
  const [ListaPedidos, SetListaPedidos] = useState<Solicitacao[]>([])
  const [SituacaoExibicao, SetSituacaoExibicao] = useState<string>('carregando')
  const [TipoSolicitacao, SetTipoSolicitacao] = useState<string>('abertas')
  const [novoFornecedor, SetNovoFornecedor] = useState<string>('')
  const [novoPrecoUnitario, SetNovoPrecoUnitario] = useState<number>(0)
  const [novoPrecoTotal, SetNovoPrecoTotal] = useState<number>(0)
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
  async function gerarArquivoExcelCompleto() {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestPlanilhaSolComprasCompleta`
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
    setSituacaoDownloadPlanilhaGeral('ocioso')
    // OR you can save/write file locally.
    // fs.writeFileSync(outputFilename, response.data)
    // const blob = new Blob(respostaEnvio, {
    //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
    // })
    // const buffer = await blob.arrayBuffer()
  }
  async function gerarArquivoPDF(solicitacaoId: string) {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestPDF&access=${nivelusur}&solicitacaoId=${solicitacaoId}`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.split(';')[0] == 'link_criado') {
      const link_download = resposta.split(';')[1]
      // downloadFile(link_download, 'arquivo')

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
  const mandarEmail = async (
    tipo_email: string,
    id_solicitacao: string,
    id_item = ''
  ) => {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestEnvioEmail&tipoEmail=${tipo_email}&idSolicitacao=${id_solicitacao}&idItem=${id_item}`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('emails_enviados')) {
      return 'ok'
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
  const cancelarItemNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarItemSolicitacao`
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
    if (resposta.includes('cancelamento_realizado')) {
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
  const cancelarSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarSolicitacao`
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
    if (resposta.includes('cancelamento_realizado')) {
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
  const solicitarPedidos = async (tiposolic = '') => {
    if (tiposolic == '') {
      tiposolic = TipoSolicitacao
    }
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestSolicMP&access=${nivelusur}&user=${nomeusur}&tiposolic=${tiposolic}`
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
        const solicitacao = {
          id: key,
          usuario: value.usuario,
          natureza_solicitacao: value.natureza_solicitacao,
          data_solicitacao: value.data_solicitacao,
          empresa: value.empresa,
          obra: value.obra,
          obra_destino: value.obra_destino,
          pedido_abertura_vagas: value.pedido_abertura_vagas,
          pedido_abertura_inclui_admissao:
            value.pedido_abertura_inclui_admissao,
          pedido_admissao_vagas: value.pedido_admissao_vagas,
          pedido_admissao_vagas_inclusao: value.pedido_admissao_vagas_inclusao,
          pedidos_funcionarios: value.pedidos_funcionarios,
          justificativa: value.justificativa,
          observacao_geral: value.observacao_geral,
          status_solicitacao: value.statusSolicitacao,
          isCardOpen: resposta,
          altura: 0,
          obsFinal: value.observacao_geral,
          statusSolicitacao: value.statusSolicitacao,
          podeDestrancar: value.podeDestrancar,
          requisicao: value.requisicao,
          todosEntregues: value.todosEntregues,
          itens: value.itens
        }
        let numeroItens = 0
        if (
          solicitacao.pedido_abertura_vagas != undefined &&
          solicitacao.pedido_abertura_vagas.length > 0
        ) {
          numeroItens += solicitacao.pedido_abertura_vagas.length
        }
        if (
          solicitacao.pedido_admissao_vagas != undefined &&
          solicitacao.pedido_admissao_vagas.length > 0
        ) {
          numeroItens += solicitacao.pedido_admissao_vagas.length
        }
        if (
          solicitacao.pedido_admissao_vagas_inclusao != undefined &&
          solicitacao.pedido_admissao_vagas_inclusao.length > 0
        ) {
          numeroItens += solicitacao.pedido_admissao_vagas_inclusao.length
        }
        if (
          solicitacao.pedidos_funcionarios != undefined &&
          solicitacao.pedidos_funcionarios.length > 0
        ) {
          numeroItens += solicitacao.pedidos_funcionarios.length
        }
        let linhasSugForn = 0
        let linhasobs = 0
        console.log('numeroItens')
        console.log(numeroItens)
        if (solicitacao.justificativa != '') {
          if (
            solicitacao.justificativa.indexOf('\n') == -1 &&
            solicitacao.justificativa.length < 91
          ) {
            linhasSugForn = 1
          } else {
            const textos_isolado_fornec: string[] =
              solicitacao.justificativa.split(/\r\n|\r|\n/)
            const numero_quebras_fornec = textos_isolado_fornec.length
            let numero_linhas_corridas_forn = 0
            textos_isolado_fornec.forEach((texto) => {
              texto.length >= 91 && (numero_linhas_corridas_forn += 1)
            })
            linhasSugForn =
              numero_linhas_corridas_forn + numero_quebras_fornec / 1.65
          }
        }
        console.log('linhasJustif')
        console.log(linhasSugForn)
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
        console.log('linhasObs')
        console.log(linhasobs)
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
  const changeTipoSolicitacao = (tipo: string) => {
    SetSituacaoExibicao('carregando')
    SetTipoSolicitacao(tipo)
    solicitarPedidos(tipo)
  }
  const gerarNomeTipoSolicitacao = (naturezaSolicitacao: string) => {
    if (naturezaSolicitacao == 'AberturaVaga') {
      return 'Abertura de Vagas'
    } else if (naturezaSolicitacao == 'Admissao') {
      return 'Admissão de Pessoal'
    } else if (naturezaSolicitacao == 'Transferencia') {
      return 'Transferência de Obra'
    } else if (naturezaSolicitacao == 'Ferias') {
      return 'Pedido de Férias'
    } else if (naturezaSolicitacao == 'Faltas') {
      return 'Indic. de Faltas'
    } else if (naturezaSolicitacao == 'Adicional') {
      return 'Indicar Horas Extras'
    }
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
  const textoSituacao = (situacao: string, todosEntregues: string) => {
    if (situacao == 'aberto') {
      return 'ABERTO'
    } else if (situacao == 'andamento') {
      if (todosEntregues == 'sim') {
        return 'EM ENTREGA'
      } else if (todosEntregues == 'nao') {
        return 'ANDAMENTO'
      }
    } else if (situacao == 'entregue') {
      return 'CONCLUÍDO'
    } else if (situacao == 'cancelado') {
      return 'CANCELADO'
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
    const dataAgora = new Date()
    const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
    elemento.itens.forEach(
      (item) =>
        item.dataFinalizado == '' && (item.dataFinalizado = dataAgoraBrasil)
    )
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
      mandarEmail('finalizarSolicitacao', elemento.id)
    } else {
      console.log('Erro!')
    }
  }
  const definirCancelamentoPedidoSistema = async (id_pedido: string) => {
    const id_elemento = id_pedido
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.statusSolicitacao = 'cancelado'
    const dataAgora = new Date()
    const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
    elemento.itens.forEach((item) => {
      item.dataFinalizado == '' && (item.dataFinalizado = dataAgoraBrasil)
      item.status = 'cancelado'
    })
    const resposta_atualizacao_servidor =
      cancelarSolicitacaoNoServidor(elemento)
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
      mandarEmail('cancelarSolicitacao', elemento.id)
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
  const cancelarPedido = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    SetPopupOpen(true)
    setPopupType('cancelamento_pedido')
    setPopupConfirmationPedido(id_elemento)
    document.body.style.overflowY = 'hidden'
  }
  const baixarExcelPedido = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    gerarArquivoExcel(id_elemento)
  }
  const baixarExcelTodosPedidos = () => {
    setSituacaoDownloadPlanilhaGeral('baixando')
    gerarArquivoExcelCompleto()
  }
  const baixarPDFPedido = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    gerarArquivoPDF(id_elemento)
  }
  const preMarcarItemPedido = (
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
    const elemento = nova_lista.filter(isElement)[0]
    const id_item = e.currentTarget.id
    function isItem(compra: Compra) {
      return compra.id == parseInt(id_item)
    }
    const array_itens = elemento.itens
    const item_encontrado = array_itens.filter(isItem)[0]
    SetPopupOpen(true)
    setPopupType('entrega_item')
    const solicitaoItem = `${id_elemento};${item_encontrado.descricao};${item_encontrado.quantidade};${item_encontrado.unidade};${item_encontrado.id}`
    setPopupConfirmationPedido(solicitaoItem)
    document.body.style.overflowY = 'hidden'
  }
  const handleNovoFornecedor = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMudanca: any = e.currentTarget
    const novoValor: string = inputMudanca.value
    SetNovoFornecedor(novoValor)
  }
  const handleNovoValorUnitario = (
    e: ChangeEvent<HTMLInputElement>,
    quantidade: number
  ) => {
    const inputMudanca: any = e.currentTarget
    const novoValor: number = parseFloat(inputMudanca.value)
    SetNovoPrecoUnitario(novoValor)
    SetNovoPrecoTotal(quantidade * novoValor)
    const inputValorTotal: any =
      e.currentTarget.parentElement?.nextSibling?.lastChild
    inputValorTotal.value = (quantidade * novoValor).toFixed(2)
  }
  const handleNovoValorTotal = (
    e: ChangeEvent<HTMLInputElement>,
    quantidade: number
  ) => {
    const inputMudanca: any = e.currentTarget
    const novoValor: number = parseFloat(inputMudanca.value)
    SetNovoPrecoTotal(novoValor)
    SetNovoPrecoUnitario(novoValor / quantidade)
    const inputValorUnitario: any =
      e.currentTarget.parentElement?.previousSibling?.lastChild
    inputValorUnitario.value = (novoValor / quantidade).toFixed(2)
  }
  const marcarItemPedido = async (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
    id_texto = '',
    id_item_texto = ''
  ) => {
    console.log(id_texto)
    console.log(id_item_texto)
    let id_elemento = ''
    if (id_texto != '') {
      id_elemento = id_texto
    } else if (e.currentTarget.parentElement != null) {
      id_elemento = e.currentTarget.parentElement.id
    }
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    let id_item = ''
    if (id_item_texto != '') {
      id_item = id_item_texto
    } else if (e.currentTarget.parentElement != null) {
      id_item = e.currentTarget.id
    }
    function isItem(compra: Compra) {
      return compra.id == parseInt(id_item)
    }
    const array_itens = elemento.itens
    const indice_item = array_itens.findIndex(isItem)
    const item_encontrado = array_itens.filter(isItem)[0]
    if (item_encontrado.status == 'aberto') {
      item_encontrado.status = 'entregue'
      item_encontrado.fornecedor = novoFornecedor
      item_encontrado.precoUnitario = novoPrecoUnitario
      item_encontrado.precoTotal = novoPrecoTotal
      const dataAgora = new Date()
      const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
      item_encontrado.dataEntregue = dataAgoraBrasil
      setPopupConfirmationPedido('')
      SetPopupOpen(false)
      setPopupType('')
      SetNovoFornecedor('')
      SetNovoPrecoTotal(0)
      SetNovoPrecoUnitario(0)
      document.body.style.overflowY = 'visible'
    } else {
      const verificaoItemFinalizado = verificarSeItemFinalizado(
        elemento,
        String(item_encontrado.id)
      )
      const resposta_requisicao = await verificaoItemFinalizado
      setPopupConfirmationPedido('')
      SetPopupOpen(false)
      setPopupType('')
      SetNovoFornecedor('')
      SetNovoPrecoTotal(0)
      SetNovoPrecoUnitario(0)
      document.body.style.overflowY = 'visible'
      if (resposta_requisicao == 'ok') {
        item_encontrado.status = 'aberto'
        item_encontrado.fornecedor = ''
        item_encontrado.precoUnitario = 0
        item_encontrado.precoTotal = 0
        item_encontrado.dataEntregue = ''
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
    //   const novoElemento = elemento
    //   novoElemento.itens.splice(indice_item, 1)
    //   novoElemento.itens.splice(indice_item, 0, item_encontrado)
    //   let haItensNaoAbertos = true
    //   let haItensAbertos = true
    //   const itensNaoAbertos: Compra[] = []
    //   const itensAbertos: Compra[] = []
    //   novoElemento.itens.filter(
    //     (item) =>
    //       item.status != 'aberto' &&
    //       item.status != 'cancelado' &&
    //       itensNaoAbertos.push(item)
    //   )
    //   novoElemento.itens.filter(
    //     (item) => item.status == 'aberto' && itensAbertos.push(item)
    //   )
    //   haItensNaoAbertos = itensNaoAbertos.length > 0
    //   haItensAbertos = itensAbertos.length > 0
    //   haItensNaoAbertos
    //     ? (novoElemento.podeDestrancar = false)
    //     : (novoElemento.podeDestrancar = true)
    //   haItensAbertos
    //     ? (novoElemento.todosEntregues = 'nao')
    //     : (novoElemento.todosEntregues = 'sim')
    //   const resposta_atualizacao_servidor =
    //     atualizarSolicitacaoNoServidor(novoElemento)
    //   const resposta_servidor = await resposta_atualizacao_servidor
    //   if (resposta_servidor == 'ok') {
    //     haItensNaoAbertos
    //       ? (elemento.podeDestrancar = false)
    //       : (elemento.podeDestrancar = true)
    //     haItensAbertos
    //       ? (elemento.todosEntregues = 'nao')
    //       : (elemento.todosEntregues = 'sim')
    //     elemento.itens.splice(indice_item, 1)
    //     elemento.itens.splice(indice_item, 0, item_encontrado)
    //     nova_lista.splice(indice_elemento, 1)
    //     nova_lista.splice(indice_elemento, 0, elemento)
    //     SetListaPedidos(nova_lista)
    //     if (item_encontrado.status == 'entregue') {
    //       console.log('mandarEmail')
    //       mandarEmail('marcarItem', elemento.id, item_encontrado.id.toString())
    //     }
    //     atualizarAposFecharSolicitacao()
    //   } else if (resposta_servidor == 'solicitacao_trancada') {
    //     SetPopupOpen(true)
    //     setPopupType('solicitacao_trancada')
    //     setPopupConfirmationPedido(id_elemento)
    //     document.body.style.overflowY = 'hidden'
    //   } else if (resposta_servidor == 'solicitacao_aberta') {
    //     console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    //   } else {
    //     console.log('Erro!')
    //   }
    // }
    const cancelarItemPedido = async (
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
        item_encontrado.status = 'cancelado'
        const dataAgora = new Date()
        const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
        item_encontrado.dataFinalizado = dataAgoraBrasil
      } else {
        item_encontrado.status = 'aberto'
        item_encontrado.dataFinalizado = ''
      }
      const novoElemento = elemento
      novoElemento.itens.splice(indice_item, 1)
      novoElemento.itens.splice(indice_item, 0, item_encontrado)
      let haItensNaoCancelados = true
      const itensNaoCancelados: Compra[] = []
      novoElemento.itens.filter(
        (item) =>
          item.status != 'finalizado' &&
          item.status != 'cancelado' &&
          itensNaoCancelados.push(item)
      )
      haItensNaoCancelados = itensNaoCancelados.length > 0
      if (haItensNaoCancelados) {
        const resposta_atualizacao_servidor =
          cancelarItemNoServidor(novoElemento)
        const resposta_recebida = await resposta_atualizacao_servidor
        if (resposta_recebida == 'ok') {
          elemento.itens.splice(indice_item, 1)
          elemento.itens.splice(indice_item, 0, item_encontrado)
          nova_lista.splice(indice_elemento, 1)
          nova_lista.splice(indice_elemento, 0, elemento)
          SetListaPedidos(nova_lista)
          atualizarAposFecharSolicitacao()
        } else {
          console.log('Erro!')
        }
      } else {
        document.body.style.overflowY = 'hidden'
        item_encontrado.status = 'aberto'
        item_encontrado.dataFinalizado = ''
        elemento.itens.splice(indice_item, 1)
        elemento.itens.splice(indice_item, 0, item_encontrado)
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
        SetPopupOpen(true)
        setPopupType('cancelamento_pedido')
        setPopupConfirmationPedido(id_elemento)
      }
      // const resposta_atualizacao_servidor = cancelarItemNoServidor(novoElemento)
      // const resposta_recebida = await resposta_atualizacao_servidor
      // if (resposta_recebida == 'ok') {
      //   elemento.itens.splice(indice_item, 1)
      //   elemento.itens.splice(indice_item, 0, item_encontrado)
      //   nova_lista.splice(indice_elemento, 1)
      //   nova_lista.splice(indice_elemento, 0, elemento)
      //   SetListaPedidos(nova_lista)
      //   atualizarAposFecharSolicitacao()
      // } else {
      //   console.log('Erro!')
      // }
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
        const dataAgora = new Date()
        const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
        item_encontrado.dataFinalizado = dataAgoraBrasil
      } else {
        item_encontrado.status = 'entregue'
        item_encontrado.dataFinalizado = ''
      }
      const novoElemento = elemento
      novoElemento.itens.splice(indice_item, 1)
      novoElemento.itens.splice(indice_item, 0, item_encontrado)
      novoElemento.podeDestrancar = false
      let haItensNaoFinalizados = true
      const itensNaoFinalizados: Compra[] = []
      novoElemento.itens.filter(
        (item) =>
          item.status != 'finalizado' &&
          item.status != 'cancelado' &&
          itensNaoFinalizados.push(item)
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
        item_encontrado.dataFinalizado = ''
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
    // const handleEmpresaSolicitacao = async (
    //   e:
    //     | React.MouseEvent<HTMLImageElement, MouseEvent>
    //     | ChangeEvent<HTMLSelectElement>
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     | any,
    //   acao: string
    // ) => {
    //   let id_elemento = e.currentTarget.id
    //   if (acao == 'empresaAlterada') {
    //     id_elemento = id_elemento.split('input')[0]
    //   }
    //   const nova_lista = [...ListaPedidos]
    //   function isElement(solicitacao: Solicitacao) {
    //     return solicitacao.id == id_elemento
    //   }
    //   const indice_elemento = nova_lista.findIndex(isElement)
    //   const elemento = nova_lista.filter(isElement)[0]
    //   if (acao == 'confirmarEdicao') {
    //     const novoElemento = elemento
    //     novoElemento.editandoEmpresa = false
    //     novoElemento.empresa = elemento.novaEmpresa
    //     const resposta_atualizacao_servidor =
    //       atualizarSolicitacaoNoServidor(novoElemento)
    //     const resposta_servidor = await resposta_atualizacao_servidor
    //     if (resposta_servidor == 'ok') {
    //       elemento.editandoEmpresa = false
    //       elemento.empresa = elemento.novaEmpresa
    //       nova_lista.splice(indice_elemento, 1)
    //       nova_lista.splice(indice_elemento, 0, elemento)
    //       SetListaPedidos(nova_lista)
    //     } else if (resposta_servidor == 'solicitacao_trancada') {
    //       SetPopupOpen(true)
    //       setPopupType('solicitacao_trancada')
    //       setPopupConfirmationPedido(id_elemento)
    //       document.body.style.overflowY = 'hidden'
    //     } else if (resposta_servidor == 'solicitacao_aberta') {
    //       console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    //     } else {
    //       console.log('Erro!')
    //     }
    //   } else {
    //     if (acao == 'editarEmpresa') {
    //       elemento.editandoEmpresa = true
    //     } else if (acao == 'empresaAlterada') {
    //       elemento.novaEmpresa = e.currentTarget.value
    //       e.currentTarget.value = elemento.novaEmpresa
    //     } else if (acao == 'cancelarEdicao') {
    //       elemento.editandoEmpresa = false
    //       elemento.novaEmpresa = elemento.empresa
    //     }
    //     nova_lista.splice(indice_elemento, 1)
    //     nova_lista.splice(indice_elemento, 0, elemento)
    //     SetListaPedidos(nova_lista)
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const inputMudanca: any =
    //       e.currentTarget.parentElement?.previousElementSibling
    //         ?.previousElementSibling
    //     inputMudanca.value = elemento.empresa
    //   }
    // }
    // const handleDataLimiteSolicitacao = async (
    //   e:
    //     | React.MouseEvent<HTMLImageElement, MouseEvent>
    //     | ChangeEvent<HTMLInputElement>
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     | any,
    //   acao: string
    // ) => {
    //   let id_elemento = e.currentTarget.id
    //   if (acao == 'dataLimiteAlterada') {
    //     id_elemento = id_elemento.split('input')[0]
    //   }
    //   const nova_lista = [...ListaPedidos]
    //   function isElement(solicitacao: Solicitacao) {
    //     return solicitacao.id == id_elemento
    //   }
    //   const indice_elemento = nova_lista.findIndex(isElement)
    //   const elemento = nova_lista.filter(isElement)[0]
    //   if (acao == 'confirmarEdicao') {
    //     const novoElemento = elemento
    //     novoElemento.editandoDataLimite = false
    //     novoElemento.dataLimite = elemento.novaDataLimite
    //     const resposta_atualizacao_servidor =
    //       atualizarSolicitacaoNoServidor(novoElemento)
    //     const resposta_servidor = await resposta_atualizacao_servidor
    //     if (resposta_servidor == 'ok') {
    //       elemento.editandoDataLimite = false
    //       elemento.dataLimite = elemento.novaDataLimite
    //       nova_lista.splice(indice_elemento, 1)
    //       nova_lista.splice(indice_elemento, 0, elemento)
    //       SetListaPedidos(nova_lista)
    //     } else if (resposta_servidor == 'solicitacao_trancada') {
    //       SetPopupOpen(true)
    //       setPopupType('solicitacao_trancada')
    //       setPopupConfirmationPedido(id_elemento)
    //       document.body.style.overflowY = 'hidden'
    //     } else if (resposta_servidor == 'solicitacao_aberta') {
    //       console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    //     } else {
    //       console.log('Erro!')
    //     }
    //   } else {
    //     if (acao == 'editarDataLimite') {
    //       elemento.editandoDataLimite = true
    //       const anoDataFormatada = elemento.dataLimite.split('/')[2]
    //       const mesDataFormatada = elemento.dataLimite.split('/')[1]
    //       const diaDataFormatada = elemento.dataLimite.split('/')[0]
    //       const dataFormatada =
    //         anoDataFormatada + '-' + mesDataFormatada + '-' + diaDataFormatada
    //       const inputMudanca: any =
    //         e.currentTarget.parentElement?.previousElementSibling
    //           ?.previousElementSibling
    //       inputMudanca.value = dataFormatada
    //       elemento.novaDataLimite = elemento.dataLimite
    //     } else if (acao == 'dataLimiteAlterada') {
    //       const novaData = e.currentTarget.value
    //       const anoData = novaData.split('-')[0]
    //       const mesData = novaData.split('-')[1]
    //       const diaData = novaData.split('-')[2]
    //       const dataFormatada = diaData + '/' + mesData + '/' + anoData
    //       elemento.novaDataLimite = dataFormatada
    //       e.currentTarget.value = novaData
    //     } else if (acao == 'cancelarEdicao') {
    //       elemento.editandoDataLimite = false
    //       elemento.novaDataLimite = elemento.dataLimite
    //     }
    //     nova_lista.splice(indice_elemento, 1)
    //     nova_lista.splice(indice_elemento, 0, elemento)
    //     SetListaPedidos(nova_lista)
    //   }
    // }
    // const handleSugFornSolicitacao = async (
    //   e:
    //     | React.MouseEvent<HTMLImageElement, MouseEvent>
    //     | ChangeEvent<HTMLInputElement>
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     | any,
    //   acao: string
    // ) => {
    //   let id_elemento = e.currentTarget.id
    //   if (acao == 'sugFornAlterada') {
    //     id_elemento = id_elemento.split('input')[0]
    //   }
    //   const nova_lista = [...ListaPedidos]
    //   function isElement(solicitacao: Solicitacao) {
    //     return solicitacao.id == id_elemento
    //   }
    //   const indice_elemento = nova_lista.findIndex(isElement)
    //   const elemento = nova_lista.filter(isElement)[0]
    //   if (acao == 'confirmarEdicaoSugForn') {
    //     const novoElemento = elemento
    //     novoElemento.editandoSugFor = false
    //     novoElemento.sugestfornecedor = novoElemento.novaSugFor
    //     const resposta_atualizacao_servidor =
    //       atualizarSolicitacaoNoServidor(novoElemento)
    //     const resposta_servidor = await resposta_atualizacao_servidor
    //     if (resposta_servidor == 'ok') {
    //       elemento.editandoSugFor = false
    //       elemento.sugestfornecedor = elemento.novaSugFor
    //       nova_lista.splice(indice_elemento, 1)
    //       nova_lista.splice(indice_elemento, 0, elemento)
    //       SetListaPedidos(nova_lista)
    //     } else if (resposta_servidor == 'solicitacao_trancada') {
    //       SetPopupOpen(true)
    //       setPopupType('solicitacao_trancada')
    //       setPopupConfirmationPedido(id_elemento)
    //       document.body.style.overflowY = 'hidden'
    //     } else if (resposta_servidor == 'solicitacao_aberta') {
    //       console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    //     } else {
    //       console.log('Erro!')
    //     }
    //   } else {
    //     if (acao == 'editarSugForn') {
    //       elemento.editandoSugFor = true
    //     } else if (acao == 'sugFornAlterada') {
    //       const novaSugForn = e.currentTarget.value
    //       elemento.novaSugFor = novaSugForn
    //       e.currentTarget.value = novaSugForn
    //     } else if (acao == 'cancelarEdicaoSugForn') {
    //       elemento.editandoSugFor = false
    //       elemento.novaSugFor = elemento.sugestfornecedor
    //     }
    //     nova_lista.splice(indice_elemento, 1)
    //     nova_lista.splice(indice_elemento, 0, elemento)
    //     SetListaPedidos(nova_lista)
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const inputMudanca: any =
    //       e.currentTarget.parentElement?.previousElementSibling
    //     inputMudanca.value = elemento.sugestfornecedor
    //   }
    // }
    // const handleObsFinalSolicitacao = async (
    //   e:
    //     | React.MouseEvent<HTMLImageElement, MouseEvent>
    //     | ChangeEvent<HTMLInputElement>
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     | any,
    //   acao: string
    // ) => {
    //   let id_elemento = e.currentTarget.id
    //   if (acao == 'obsFinalAlterada') {
    //     id_elemento = id_elemento.split('input')[0]
    //   }
    //   const nova_lista = [...ListaPedidos]
    //   function isElement(solicitacao: Solicitacao) {
    //     return solicitacao.id == id_elemento
    //   }
    //   const indice_elemento = nova_lista.findIndex(isElement)
    //   const elemento = nova_lista.filter(isElement)[0]
    //   if (acao == 'confirmarEdicaoObsFinal') {
    //     const novoElemento = elemento
    //     novoElemento.editandoObsFinal = false
    //     novoElemento.obsFinal = novoElemento.novaObsFinal
    //     const resposta_atualizacao_servidor =
    //       atualizarSolicitacaoNoServidor(novoElemento)
    //     const resposta_servidor = await resposta_atualizacao_servidor
    //     if (resposta_servidor == 'ok') {
    //       elemento.editandoObsFinal = false
    //       elemento.obsFinal = elemento.novaObsFinal
    //       nova_lista.splice(indice_elemento, 1)
    //       nova_lista.splice(indice_elemento, 0, elemento)
    //       SetListaPedidos(nova_lista)
    //     } else if (resposta_servidor == 'solicitacao_trancada') {
    //       SetPopupOpen(true)
    //       setPopupType('solicitacao_trancada')
    //       setPopupConfirmationPedido(id_elemento)
    //       document.body.style.overflowY = 'hidden'
    //     } else if (resposta_servidor == 'solicitacao_aberta') {
    //       console.log('Erro! Esse pedido ainda não está em andamento no sistema!')
    //     } else {
    //       console.log('Erro!')
    //     }
    //   } else {
    //     if (acao == 'editarObsFinal') {
    //       elemento.editandoObsFinal = true
    //     } else if (acao == 'obsFinalAlterada') {
    //       const novaObsFinal = e.currentTarget.value
    //       elemento.novaObsFinal = novaObsFinal
    //       e.currentTarget.value = novaObsFinal
    //     } else if (acao == 'cancelarEdicaoObsFinal') {
    //       elemento.editandoObsFinal = false
    //       elemento.novaObsFinal = elemento.obsFinal
    //     }
    //     nova_lista.splice(indice_elemento, 1)
    //     nova_lista.splice(indice_elemento, 0, elemento)
    //     SetListaPedidos(nova_lista)
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const inputMudanca: any =
    //       e.currentTarget.parentElement?.previousElementSibling
    //     inputMudanca.value = elemento.obsFinal
    //   }
    // }
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
          console.log(
            'Erro! Esse pedido ainda não está em andamento no sistema!'
          )
        } else {
          console.log('Erro!')
        }
      } else {
        if (acao == 'editarQuantidade') {
          item_encontrado.editandoQuantidade = true
          novoValorInput = item_encontrado.quantidade
          inputMudanca =
            e.currentTarget.parentElement?.previousElementSibling
              .previousElementSibling
          inputMudanca.value = novoValorInput
        } else if (acao == 'quantidadeAlterada') {
          const novaQuantidadeRecebida = parseFloat(e.currentTarget.value)
          item_encontrado.novaQuantidade = novaQuantidadeRecebida
          e.currentTarget.value = novaQuantidadeRecebida
        } else if (acao == 'cancelarEdicaoQuantidade') {
          item_encontrado.editandoQuantidade = false
          item_encontrado.novaQuantidade = item_encontrado.quantidade
          novoValorInput = item_encontrado.quantidade
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
  }
  return (
    <>
      <DivGeral className={popUpOpen ? 'noScrolling' : ''}>
        <h1>Solicitações de Movimentação de Pessoal</h1>
        <br></br>
        {(nomeusur == 'David Senra' ||
          nomeusur == 'Targino Azeredo' ||
          nomeusur == 'Dolores Belico') &&
          SituacaoExibicao == 'listaCarregada' && (
            <>
              <DivRelatorioCompleto>
                <button
                  onClick={() =>
                    situacaoDownloadPlanilhaGeral == 'ocioso' &&
                    baixarExcelTodosPedidos()
                  }
                  className={
                    situacaoDownloadPlanilhaGeral == 'baixando'
                      ? 'desativado'
                      : ''
                  }
                >
                  Baixar Relatório Completo
                </button>
                {situacaoDownloadPlanilhaGeral == 'baixando' && (
                  <h3>Processando... Aguarde...</h3>
                )}
              </DivRelatorioCompleto>
            </>
          )}
        {SituacaoExibicao == 'carregando' && (
          <TextoCarregando>Carregando...</TextoCarregando>
        )}
        {(SituacaoExibicao == 'listaVazia' ||
          SituacaoExibicao == 'listaCarregada') && (
          <MenuBotoesTipoSolicitacao>
            <li>
              <button
                onClick={() => changeTipoSolicitacao('abertas')}
                disabled={TipoSolicitacao == 'abertas'}
                className={TipoSolicitacao == 'abertas' ? 'selected' : ''}
                type="button"
              >
                Abertas
              </button>
            </li>
            <li>
              <button
                onClick={() => changeTipoSolicitacao('fechadas')}
                disabled={TipoSolicitacao == 'fechadas'}
                className={TipoSolicitacao == 'fechadas' ? 'selected' : ''}
                type="button"
              >
                Fechadas
              </button>
            </li>
            <li>
              <button
                onClick={() => changeTipoSolicitacao('todas')}
                disabled={TipoSolicitacao == 'todas'}
                className={TipoSolicitacao == 'todas' ? 'selected' : ''}
                type="button"
              >
                Todas
              </button>
            </li>
          </MenuBotoesTipoSolicitacao>
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
                <b>Tipo de Solicitação:</b>
              </li>
              <li>
                <b>Empresa:</b>
              </li>
              <li className="situacao">
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
                  className={`${pedido.isCardOpen ? 'open' : 'closed'} ${pedido.obsFinal == '' && pedido.justificativa == '' ? 'noBoxes' : 'boxes'}`}
                >
                  <GridCabecalho
                    id={pedido.id}
                    situacaoPedido={pedido.status_solicitacao}
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
                    <li onClick={(e) => toggleCard(e)}>
                      <p>
                        {gerarNomeTipoSolicitacao(pedido.natureza_solicitacao)}
                      </p>
                    </li>
                    <li onClick={(e) => toggleCard(e)}>
                      <p>{pedido.empresa}</p>
                    </li>
                    <ItemCabecalhoSituacao
                      className={
                        (pedido.statusSolicitacao == 'andamento' &&
                          nivelusur == 3) ||
                        (pedido.statusSolicitacao == 'aberto' &&
                          pedido.usuario == nomeusur)
                          ? 'noPointer'
                          : ''
                      }
                      onClick={(e) =>
                        !(
                          (pedido.statusSolicitacao == 'andamento' &&
                            nivelusur == 3) ||
                          (pedido.statusSolicitacao == 'aberto' &&
                            pedido.usuario == nomeusur)
                        ) && toggleCard(e)
                      }
                    >
                      <b>
                        <TextoSituacaoCabecalho
                          className={`${
                            pedido.statusSolicitacao == 'andamento'
                              ? 'andamento'
                              : pedido.statusSolicitacao == 'finalizado'
                                ? 'finalizado'
                                : pedido.statusSolicitacao == 'cancelado'
                                  ? 'cancelado'
                                  : 'aberto'
                          } ${pedido.natureza_solicitacao == 'AberturaVaga' && nivelusur == 4 && pedido.usuario == nomeusur ? 'especialAdm' : ''}`}
                        ></TextoSituacaoCabecalho>
                        {((nivelusur == 3 &&
                          pedido.pedido_abertura_inclui_admissao != true &&
                          pedido.statusSolicitacao != 'finalizado' &&
                          pedido.podeDestrancar == true) ||
                          (nivelusur == 4 &&
                            pedido.natureza_solicitacao == 'AberturaVaga' &&
                            pedido.statusSolicitacao != 'finalizado' &&
                            pedido.podeDestrancar == true)) && (
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
                        {nomeusur == pedido.usuario &&
                          pedido.statusSolicitacao == 'aberto' && (
                            <IconeEntregueDiv>
                              <IconeCancelarPedImg
                                id={pedido.id}
                                src={IconeCancelar}
                                onClick={cancelarPedido}
                              ></IconeCancelarPedImg>
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
                    <div>
                      <br></br>
                      <h3>Pedido de Abertura de Vagas:</h3>
                    </div>
                    <GridCabecalhoItemsPedido
                      id={pedido.id}
                      tipoSolicitacao={pedido.natureza_solicitacao}
                    >
                      <LinhaCabecalhoItems>
                        {pedido.natureza_solicitacao == 'AberturaVaga' && (
                          <b>Obra</b>
                        )}
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItems>
                        {pedido.natureza_solicitacao == 'AberturaVaga' && (
                          <b>Cargo</b>
                        )}
                      </LinhaCabecalhoItems>
                      <LinhaCabecalhoItems
                        className={`${pedido.natureza_solicitacao == 'AberturaVaga' ? 'ultimaLinha' : ''}`}
                      >
                        {pedido.natureza_solicitacao == 'AberturaVaga' && (
                          <b>Quantidade</b>
                        )}
                      </LinhaCabecalhoItems>
                      {/* <LinhaCabecalhoItems> */}
                      {/* <TextoCabecalhoDescObs>Descrição</TextoCabecalhoDescObs> */}
                      {/* </LinhaCabecalhoItems> */}
                      {/* <LinhaCabecalhoItems> */}
                      {/* <b>C. Custo</b> */}
                      {/* </LinhaCabecalhoItems> */}
                      {/* <LinhaCabecalhoItemsUltimo> */}
                      {/* <TextoCabecalhoDescObs> */}
                      {/* Observação */}
                      {/* </TextoCabecalhoDescObs> */}
                      {/* </LinhaCabecalhoItemsUltimo> */}
                    </GridCabecalhoItemsPedido>
                    {pedido.natureza_solicitacao == 'AberturaVaga' &&
                      pedido.pedido_abertura_vagas.length > 0 &&
                      pedido.pedido_abertura_vagas.map((item) => (
                        <GridItemsPedido
                          key={item.id}
                          tipoSolicitacao={pedido.natureza_solicitacao}
                          className={`classeItems ${
                            pedido.statusSolicitacao != 'aberto' &&
                            item.status == 'entregue' &&
                            'boldText'
                          }`}
                        >
                          <li>
                            <p>{pedido.obra.descricao_completa}</p>
                          </li>
                          <li>
                            <p>{item.sigla}</p>
                          </li>
                          <li>
                            <p>{item.quantidade_pedida}</p>
                          </li>
                        </GridItemsPedido>
                      ))}
                    {/* {pedido.itens != undefined &&
                      pedido.itens.length > 0 &&
                      pedido.itens.map((item) => (
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
                              nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }
                          >
                            <InputQuantidade
                              id={
                                pedido.id + ';' + item.id + ';' + 'quantidade'
                              }
                              type={'number'}
                              style={{
                                visibility:
                                  nomeusur == pedido.usuario &&
                                  pedido.statusSolicitacao == 'aberto' &&
                                  item.editandoQuantidade == true
                                    ? 'visible'
                                    : 'hidden'
                              }}
                            ></InputQuantidade>
                            {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoQuantidade == true ? (
                              ''
                            ) : (
                              <p>{item.quantidade.toLocaleString('pt-BR')}</p>
                            )}
                            {pedido.statusSolicitacao == 'aberto' &&
                              item.status != 'cancelado' &&
                              pedido.usuario == nomeusur &&
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
                                    className="lapisMenor"
                                  ></IconeLapisImg>
                                </IconeLapisDiv>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoQuantidade == true &&
                              item.quantidade != item.novaQuantidade &&
                              item.novaQuantidade != 0 && (
                                <IconeConfirmarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'quantidade'
                                  }
                                  src={IconeCheckItem}
                                  className="itemButtom quantidade"
                                ></IconeConfirmarImg>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoQuantidade == true && (
                                <IconeCancelarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'quantidade'
                                  }
                                  src={IconeUncheckItem}
                                  className="itemButtom quantidade"
                                ></IconeCancelarImg>
                              )}
                          </li>
                          <li
                            className={
                              nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }
                          >
                            <InputUnidade
                              id={pedido.id + ';' + item.id + ';' + 'unidade'}
                              style={{
                                visibility:
                                  nomeusur == pedido.usuario &&
                                  pedido.statusSolicitacao == 'aberto' &&
                                  item.editandoUnidade == true
                                    ? 'visible'
                                    : 'hidden'
                              }}
                            >
                              <option value="Und">Und</option>
                              <option value="Kg">Kg</option>
                              <option value="L">L</option>
                              <option value="scs">scs</option>
                              <option value="cm">cm</option>
                              <option value="m">m</option>
                              <option value="m²">m²</option>
                            </InputUnidade>
                            {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoUnidade == true ? (
                              ''
                            ) : (
                              <p>{item.unidade}</p>
                            )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.status != 'cancelado' &&
                              pedido.usuario == nomeusur &&
                              item.editandoUnidade != true && (
                                <IconeLapisDiv>
                                  <IconeLapisImg
                                    id={
                                      pedido.id +
                                      ';' +
                                      item.id +
                                      ';' +
                                      'unidade'
                                    }
                                    src={IconeLapisEditar}
                                    className="lapisMenor"
                                  ></IconeLapisImg>
                                </IconeLapisDiv>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoUnidade == true &&
                              item.unidade != item.novaUnidade && (
                                <IconeConfirmarImg
                                  id={
                                    pedido.id + ';' + item.id + ';' + 'unidade'
                                  }
                                  src={IconeCheckItem}
                                  className="itemButtom unidade"
                                ></IconeConfirmarImg>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoUnidade == true && (
                                <IconeCancelarImg
                                  id={
                                    pedido.id + ';' + item.id + ';' + 'unidade'
                                  }
                                  src={IconeUncheckItem}
                                  className="itemButtom unidade"
                                ></IconeCancelarImg>
                              )}
                          </li>
                          <li
                            className={
                              nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }
                          >
                            <InputDescricao
                              id={pedido.id + ';' + item.id + ';' + 'descricao'}
                              style={{
                                visibility:
                                  nomeusur == pedido.usuario &&
                                  pedido.statusSolicitacao == 'aberto' &&
                                  item.editandoDescricao == true
                                    ? 'visible'
                                    : 'hidden'
                              }}
                            ></InputDescricao>
                            {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoDescricao == true ? (
                              ''
                            ) : (
                              <TextoDescricaoItem
                                textoDescricao={item.descricao}
                                larguraTexto={item.descricao.length}
                                className={
                                  item.descricao.length >= 19
                                    ? 'descricaoOverflow'
                                    : item.descricao.length >= 13
                                      ? 'descricaoOverflowCelular'
                                      : ''
                                }
                                id={'textoDescricaoOverflow'}
                              >
                                {item.descricao}
                              </TextoDescricaoItem>
                            )}
                            {pedido.statusSolicitacao == 'aberto' &&
                              item.status != 'cancelado' &&
                              pedido.usuario == nomeusur &&
                              item.editandoDescricao != true && (
                                <IconeLapisDiv
                                  className={`lapisMenor ${
                                    item.descricao.length > 19
                                      ? 'descricaoOverflow'
                                      : item.descricao.length >= 13
                                        ? 'descricaoOverflowCelular'
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
                                    className={`lapisMenor ${
                                      item.descricao.length > 19
                                        ? 'descricaoOverflow'
                                        : item.descricao.length >= 13
                                          ? 'descricaoOverflowCelular'
                                          : ''
                                    }`}
                                  ></IconeLapisImg>
                                </IconeLapisDiv>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoDescricao == true &&
                              item.descricao != item.novaDescricao &&
                              item.novaDescricao != '' && (
                                <IconeConfirmarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'descricao'
                                  }
                                  src={IconeCheckItem}
                                  className="confirmarDescricao"
                                ></IconeConfirmarImg>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoDescricao == true && (
                                <IconeCancelarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'descricao'
                                  }
                                  src={IconeUncheckItem}
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
                              nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }
                          >
                            <InputCentroCusto
                              id={
                                pedido.id + ';' + item.id + ';' + 'centroCusto'
                              }
                              style={{
                                visibility:
                                  nomeusur == pedido.usuario &&
                                  pedido.statusSolicitacao == 'aberto' &&
                                  item.editandoCentroDeCusto == true
                                    ? 'visible'
                                    : 'hidden'
                              }}
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
                            {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao == 'aberto' &&
                            item.editandoCentroDeCusto == true ? (
                              ''
                            ) : (
                              <p>{item.centrocusto}</p>
                            )}
                            {pedido.statusSolicitacao == 'aberto' &&
                              item.status != 'cancelado' &&
                              pedido.usuario == nomeusur &&
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
                                    className="lapisMenor"
                                  ></IconeLapisImg>
                                </IconeLapisDiv>
                              )}
                            {nomeusur == pedido.usuario &&
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
                                  className="itemButtom centrocusto"
                                ></IconeConfirmarImg>
                              )}
                            {nomeusur == pedido.usuario &&
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
                                  className="itemButtom centrocusto"
                                ></IconeCancelarImg>
                              )}
                          </li>
                          <li
                            className={`textoObservacaoItem ${nivelusur > 2 && 'visualizacao'}
                            ${
                              nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto'
                                ? 'editar'
                                : ''
                            }`}
                          >
                            <InputObservacaoItem
                              id={
                                pedido.id + ';' + item.id + ';' + 'observacao'
                              }
                              style={{
                                visibility:
                                  nomeusur == pedido.usuario &&
                                  pedido.statusSolicitacao == 'aberto' &&
                                  item.editandoObservacao == true
                                    ? 'visible'
                                    : 'hidden'
                              }}
                            ></InputObservacaoItem>
                            {nomeusur == pedido.usuario &&
                            item.editandoObservacao == true ? (
                              ''
                            ) : (
                              <p
                                className={`textoObservacaoItem ${nivelusur > 2 && 'visualizacao'}`}
                              >
                                <TextoObservacaoItem
                                  textoObservacao={item.observacao}
                                  larguraTexto={item.observacao.length}
                                  className={
                                    item.observacao.length > 31
                                      ? 'textoObsOverflow'
                                      : item.observacao.length > 12
                                        ? 'textoObsOverflowCelular'
                                        : ''
                                  }
                                  id={'textoObservacaoOverflow'}
                                >
                                  {item.observacao}
                                </TextoObservacaoItem>
                              </p>
                            )}
                            {pedido.statusSolicitacao == 'aberto' &&
                              item.status != 'cancelado' &&
                              pedido.usuario == nomeusur &&
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
                                    className="lapisMenor"
                                  ></IconeLapisImg>
                                </IconeLapisDiv>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoObservacao == true &&
                              item.observacao != item.novaObservacao && (
                                <IconeConfirmarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'observacao'
                                  }
                                  src={IconeCheckItem}
                                  className="confirmarEdicaoObservacao"
                                ></IconeConfirmarImg>
                              )}
                            {nomeusur == pedido.usuario &&
                              pedido.statusSolicitacao == 'aberto' &&
                              item.editandoObservacao == true && (
                                <IconeCancelarImg
                                  id={
                                    pedido.id +
                                    ';' +
                                    item.id +
                                    ';' +
                                    'observacao'
                                  }
                                  src={IconeUncheckItem}
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
                            item.status != 'cancelado' &&
                            item.status != 'finalizado' && (
                              <ItemCheckDivCaminhao id={pedido.id}>
                                <ItemCaminhaokImg
                                  id={String(item.id)}
                                  src={
                                    item.status == 'aberto'
                                      ? IconeCaminhaoEntrega
                                      : IconeUncheckItem
                                  }
                                  onClick={(e) =>
                                    item.status == 'aberto'
                                      ? preMarcarItemPedido(e)
                                      : marcarItemPedido(e)
                                  }
                                  className={
                                    item.status == 'entregue' ? 'andamento' : ''
                                  }
                                ></ItemCaminhaokImg>
                              </ItemCheckDivCaminhao>
                            )}
                          {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao == 'aberto' &&
                            (item.status == 'aberto' ||
                              item.status == 'cancelado') && (
                              <ItemCheckDiv
                                id={pedido.id}
                                className="checkMark"
                              >
                                <ItemCheckImg
                                  id={String(item.id)}
                                  src={
                                    item.status == 'aberto'
                                      ? IconeCancelar
                                      : IconeReciclar
                                  }
                                ></ItemCheckImg>
                              </ItemCheckDiv>
                            )}
                          {nivelusur >= 3 &&
                            (item.status == 'entregue' || 'finalizado') &&
                            (item.precoUnitario != 0 ||
                              item.fornecedor != '') && (
                              <ItemCheckDiv
                                id={pedido.id}
                                className={`contrato ${item.status == 'finalizado' ? 'itemFinalizado' : ''} ${item.id == pedido.itens.length - 1 ? 'penultimo' : ''} ${item.id == pedido.itens.length ? 'ultimo' : ''}`}
                              >
                                <ItemCheckImg
                                  src={IconeContrato}
                                  className={'contrato'}
                                ></ItemCheckImg>
                                <div>
                                  {item.fornecedor != '' && (
                                    <p>
                                      <b>Fornecedor:</b> {item.fornecedor}
                                    </p>
                                  )}
                                  {item.precoUnitario != 0 && (
                                    <p>
                                      <b>Preço Unit: </b>R${' '}
                                      {item.precoUnitario
                                        .toFixed(2)
                                        .replace('.', ',')}
                                    </p>
                                  )}
                                  {item.precoTotal != 0 && (
                                    <p>
                                      <b>Preço Total: </b>R${' '}
                                      {item.precoTotal
                                        .toFixed(2)
                                        .replace('.', ',')}
                                    </p>
                                  )}
                                </div>
                              </ItemCheckDiv>
                            )}
                          {nomeusur == pedido.usuario &&
                            pedido.statusSolicitacao != 'aberto' &&
                            pedido.statusSolicitacao != 'entregue' &&
                            pedido.statusSolicitacao != 'cancelado' &&
                            item.status != 'cancelado' &&
                            item.status != 'aberto' && (
                              <ItemCheckDiv
                                id={pedido.id}
                                className="checkMark"
                              >
                                <ItemCheckImg
                                  id={String(item.id)}
                                  src={
                                    item.status == 'finalizado'
                                      ? IconeUncheckItem
                                      : IconeCheckItem
                                  }
                                ></ItemCheckImg>
                              </ItemCheckDiv>
                            )}
                          {item.status == 'entregue' &&
                            item.dataEntregue != '' && (
                              <TextoItemEntregue
                                className={
                                  nivelusur == 3 || nomeusur == pedido.usuario
                                    ? 'comprador'
                                    : ''
                                }
                              >
                                <p className="textoEnv">ENV:</p>{' '}
                                <p className="textoE">E:</p>{' '}
                                <p>{item.dataEntregue}</p>
                              </TextoItemEntregue>
                            )}
                          {item.status == 'finalizado' &&
                            item.dataFinalizado != '' && (
                              <TextoItemEntregue
                                className={
                                  nomeusur == pedido.usuario ? 'comprador' : ''
                                }
                              >
                                <p className="textoRec">REC:</p>{' '}
                                <p className="textoR">R:</p>{' '}
                                <p>{item.dataFinalizado}</p>
                              </TextoItemEntregue>
                            )}
                          {(item.status == 'entregue' ||
                            item.status == 'cancelado') && (
                            <TextoEmEntrega
                              className={nivelusur == 2 ? 'comprador' : ''}
                            >
                              {item.status == 'entregue'
                                ? 'EM ENTREGA'
                                : 'CANCELADO'}
                            </TextoEmEntrega>
                          )}
                          {(pedido.statusSolicitacao != 'aberto' ||
                            item.status == 'cancelado') &&
                            pedido.statusSolicitacao != 'entregue' &&
                            (item.status == 'entregue' ||
                              item.status == 'finalizado' ||
                              item.status == 'cancelado') && (
                              <DivEntregue
                                id={pedido.id}
                                tipo={item.status}
                              ></DivEntregue>
                            )}
                          {(pedido.statusSolicitacao != 'aberto' ||
                            item.status == 'cancelado') &&
                            (pedido.statusSolicitacao != 'entregue' ||
                              item.status == 'cancelado') &&
                            (item.status == 'finalizado' ||
                              item.status == 'cancelado') && (
                              <DivTraco
                                id={pedido.id}
                                tipoUsuario={
                                  nomeusur == pedido.usuario &&
                                  (item.status != 'cancelado' ||
                                    pedido.statusSolicitacao == 'aberto')
                                    ? 'solicitante'
                                    : 'comprador'
                                }
                              ></DivTraco>
                            )}
                        </GridItemsPedido>
                      ))} */}
                    {/* <GridItemsPedido
                      className={`gridFake ${pedido.obsFinal != '' && 'obsOrSugest'}`}
                    ></GridItemsPedido> */}
                    {pedido.justificativa != '' && (
                      <DivSugestFornecedoresObs>
                        <div>
                          <b>Justificativa:</b>
                        </div>
                        <BoxTextoSugest>
                          <p>{pedido.justificativa}</p>
                          {pedido.statusSolicitacao == 'aberto' &&
                            pedido.usuario == nomeusur && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={pedido.id}
                                  src={IconeLapisEditar}
                                  className="ObsSugForn"
                                ></IconeLapisImg>
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
                        <BoxTextoSugest>
                          {pedido.obsFinal}
                          {pedido.statusSolicitacao == 'aberto' &&
                            pedido.usuario == nomeusur &&
                            pedido.obsFinal != '' && (
                              <IconeLapisDiv>
                                <IconeLapisImg
                                  id={pedido.id}
                                  src={IconeLapisEditar}
                                  className="ObsSugForn"
                                ></IconeLapisImg>
                              </IconeLapisDiv>
                            )}
                        </BoxTextoSugest>
                      </DivSugestFornecedoresObs>
                    )}
                  </DivGridCabecalho>
                </CardSolicitacao>
                {!popUpOpen && (
                  <IconeExcelDiv>
                    <IconeExcelImg
                      id={pedido.id}
                      src={IconeExcel}
                      onClick={(e) => baixarExcelPedido(e)}
                    ></IconeExcelImg>
                  </IconeExcelDiv>
                )}
                {!popUpOpen && (
                  <IconePDFDiv>
                    <IconePDFImg
                      id={pedido.id}
                      src={IconePDF}
                      onClick={(e) => baixarPDFPedido(e)}
                    ></IconePDFImg>
                  </IconePDFDiv>
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
              {popupType == 'entrega_item' ? (
                <p className="envio">ENVIO DE ITEM:</p>
              ) : (
                <p>ATENÇÃO</p>
              )}
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
            {popupType == 'cancelamento_pedido' && (
              <TextoPopUp>
                <p>
                  Você deseja <b>CANCELAR</b> a solicitação{' '}
                  <b>{popUpConfirmationPedido}</b>?
                </p>
                <br></br>
                <p className="warning">
                  <b>Após o cancelamento, a solicitação será arquivada!</b>
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
            {popupType == 'entrega_item' && (
              <TextoPopUp className="entrega_item">
                <p>Confirme o envio do item:</p>
                <br></br>
                <p>
                  Solicitação: <b>{popUpConfirmationPedido.split(';')[0]}</b>
                </p>
                <p>
                  Item: <b>{popUpConfirmationPedido.split(';')[1]}</b>
                </p>
                <br></br>
                <p>
                  <b className="adicional">
                    Informações adicionais (opcional):
                  </b>
                </p>
                <p>
                  Fornecedor:{' '}
                  <input
                    type="text"
                    className="fornecedor"
                    defaultValue={''}
                    onChange={handleNovoFornecedor}
                  ></input>
                </p>
                <p>
                  Preço Unitário: R${' '}
                  <input
                    type="number"
                    className="precoUnitario"
                    defaultValue={0.0}
                    onChange={(e) =>
                      handleNovoValorUnitario(
                        e,
                        parseFloat(popUpConfirmationPedido.split(';')[2])
                      )
                    }
                  ></input>
                </p>
                <p>
                  Preço Total:{' '}
                  <b>
                    {popUpConfirmationPedido.split(';')[2]}{' '}
                    {popUpConfirmationPedido.split(';')[3]}
                  </b>{' '}
                  x{' '}
                  <b>
                    {novoPrecoUnitario
                      .toFixed(2)
                      .toLocaleString()
                      .replace('.', ',')}
                  </b>{' '}
                  = R${' '}
                  <input
                    type="number"
                    className="precoUnitario"
                    defaultValue={0.0}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleNovoValorTotal(
                        e,
                        parseFloat(popUpConfirmationPedido.split(';')[2])
                      )
                    }
                  ></input>
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
            {popupType == 'cancelamento_pedido' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUp}>Voltar</BotaoVoltar>
                <BotaoConfirmar
                  onClick={() =>
                    definirCancelamentoPedidoSistema(popUpConfirmationPedido)
                  }
                >
                  Confirmar
                </BotaoConfirmar>
              </BotoesPopUp>
            )}
            {popupType == 'entrega_item' && (
              <BotoesPopUp>
                <BotaoVoltar onClick={returnFromPopUp}>Cancelar</BotaoVoltar>
                <BotaoConfirmar
                  id={popUpConfirmationPedido.split(';')[0]}
                  onClick={(e) =>
                    marcarItemPedido(
                      e,
                      popUpConfirmationPedido.split(';')[0],
                      popUpConfirmationPedido.split(';')[4]
                    )
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

export default ListaSolicitacaoMP