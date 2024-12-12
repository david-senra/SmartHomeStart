import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import Pusher, { Channel } from 'pusher-js'
import {
  DivGeral,
  ListaObras,
  CardObra,
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
  TextoSituacaoCabecalho,
  DivBotoesAprovacao,
  LiFaltas,
  TextoObservacaoAberturaRemocao,
  DivTituloSecaoCard
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

const QuadroPessoal = ({ nomeusur = '', nivelusur = 0 }) => {
  class DiaHoraExtra {
    id: number
    dia: string
    horas: string

    constructor(data: { id: number; dia: string; horas: string }) {
      this.id = data.id
      this.dia = data.dia
      this.horas = data.horas
    }
  }
  class SolicitacaoFuncionario {
    id: string
    incluir: boolean
    sigla: string
    quantidade_pedida: number
    status: string
    codigo_vaga: string
    tipo_admissao: string
    nome: string
    rg: string
    cpf: string
    cnpj: string
    telefone: string
    email: string
    contato: string
    cargo: string
    novo_cargo: string
    possiveis_promocoes: string[]
    id_pessoa: string
    obra_atual: string
    imediato: boolean
    data_transferencia: string
    data_inicio_ferias: string
    data_final_ferias: string
    data_desligamento: string
    data_falta_atual: string
    data_adicional_atual: string
    data_horas_extra_atual: string
    dia_horas_extra_atual: string
    horas_extra_data_atual: string
    faltas: string[]
    dias_adicionais: string[]
    dias_horas_extras: DiaHoraExtra[]
    remocaoNoDesligamentoTransferencia: boolean

    constructor(data: {
      id: string
      incluir: boolean
      sigla: string
      quantidade_pedida: number
      status: string
      codigo_vaga: string
      tipo_admissao: string
      nome: string
      rg: string
      cpf: string
      cnpj: string
      telefone: string
      email: string
      contato: string
      cargo: string
      novo_cargo: string
      possiveis_promocoes: string[]
      id_pessoa: string
      obra_atual: string
      imediato: boolean
      data_transferencia: string
      data_inicio_ferias: string
      data_final_ferias: string
      data_desligamento: string
      data_falta_atual: string
      data_adicional_atual: string
      data_horas_extra_atual: string
      dia_horas_extra_atual: string
      horas_extra_data_atual: string
      faltas: string[]
      dias_adicionais: string[]
      dias_horas_extras: DiaHoraExtra[]
      remocaoNoDesligamentoTransferencia: boolean
    }) {
      this.id = data.id
      this.incluir = data.incluir
      this.sigla = data.sigla
      this.quantidade_pedida = data.quantidade_pedida
      this.status = data.status
      this.codigo_vaga = data.codigo_vaga
      this.tipo_admissao = data.tipo_admissao
      this.nome = data.nome
      this.rg = data.rg
      this.cpf = data.cpf
      this.cnpj = data.cnpj
      this.telefone = data.telefone
      this.email = data.email
      this.contato = data.contato
      this.cargo = data.cargo
      this.novo_cargo = data.novo_cargo
      this.possiveis_promocoes = data.possiveis_promocoes
      this.id_pessoa = data.id_pessoa
      this.obra_atual = data.obra_atual
      this.imediato = data.imediato
      this.data_transferencia = data.data_transferencia
      this.data_inicio_ferias = data.data_inicio_ferias
      this.data_final_ferias = data.data_final_ferias
      this.data_desligamento = data.data_desligamento
      this.data_falta_atual = data.data_falta_atual
      this.data_adicional_atual = data.data_adicional_atual
      this.data_horas_extra_atual = data.data_horas_extra_atual
      this.dia_horas_extra_atual = data.dia_horas_extra_atual
      this.horas_extra_data_atual = data.horas_extra_data_atual
      this.faltas = data.faltas
      this.dias_adicionais = data.dias_adicionais
      this.dias_horas_extras = data.dias_horas_extras
      this.remocaoNoDesligamentoTransferencia =
        data.remocaoNoDesligamentoTransferencia
    }
  }
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
  class HorasExtras {
    id: number
    dia: string
    horas: number

    constructor(data: { id: number; dia: string; horas: number }) {
      this.id = data.id
      this.dia = data.dia
      this.horas = data.horas
    }
  }
  class Vaga {
    id: string
    cargo: string
    situacao: string
    nome: string
    rg: string
    cpf: string
    cnpj: string
    telefone: string
    email: string
    inicio_ferias: string
    final_ferias: string
    razao_social: string
    faltas: string[]
    dias_adicionais: string[]
    horas_extra: HorasExtras[]
    data_inicio: string
    salario_padrao: number
    salario_padrao_obra: number
    tipo_contrato: string

    constructor(data: {
      id: string
      cargo: string
      situacao: string
      nome: string
      rg: string
      cpf: string
      cnpj: string
      telefone: string
      email: string
      inicio_ferias: string
      final_ferias: string
      razao_social: string
      faltas: string[]
      dias_adicionais: string[]
      horas_extra: HorasExtras[]
      data_inicio: string
      salario_padrao: number
      salario_padrao_obra: number
      tipo_contrato: string
    }) {
      this.id = data.id
      this.cargo = data.cargo
      this.situacao = data.situacao
      this.nome = data.nome
      this.rg = data.rg
      this.cpf = data.cpf
      this.cnpj = data.cnpj
      this.telefone = data.telefone
      this.email = data.email
      this.razao_social = data.razao_social
      this.inicio_ferias = data.inicio_ferias
      this.final_ferias = data.final_ferias
      this.faltas = data.faltas
      this.dias_adicionais = data.dias_adicionais
      this.horas_extra = data.horas_extra
      this.data_inicio = data.data_inicio
      this.salario_padrao = data.salario_padrao
      this.salario_padrao_obra = data.salario_padrao_obra
      this.tipo_contrato = data.tipo_contrato
    }
  }
  class Quantidade_Vaga {
    id: string
    sigla: string
    cargo: string
    quantidade_total: number
    quantidade_ativa: number
    quantidade_ocupada: number

    constructor(data: {
      id: string
      sigla: string
      cargo: string
      quantidade_total: number
      quantidade_ativa: number
      quantidade_ocupada: number
    }) {
      this.id = data.id
      this.sigla = data.sigla
      this.cargo = data.cargo
      this.quantidade_total = data.quantidade_total
      this.quantidade_ativa = data.quantidade_ativa
      this.quantidade_ocupada = data.quantidade_ocupada
    }
  }
  class SalarioEspecifico {}
  class Obra {
    id: string
    centro_custo: number
    municipio: string
    nome: string
    descricao_completa: string
    equipe: Vaga[]
    quantidades_vagas: Quantidade_Vaga[]
    status_obra: string
    altura: number
    isCardOpen: boolean
    cargos_especificos: string[]
    salarios_padroes_especificos: SalarioEspecifico[]

    constructor(data: {
      centro_custo: number
      municipio: string
      nome: string
      descricao_completa: string
      equipe: Vaga[]
      quantidades_vagas: Quantidade_Vaga[]
      status_obra: string
      id: string
      altura: number
      isCardOpen: boolean
      cargos_especificos: string[]
      salarios_padroes_especificos: SalarioEspecifico[]
    }) {
      this.municipio = data.municipio
      this.nome = data.nome
      this.descricao_completa = data.descricao_completa
      this.equipe = data.equipe
      this.id = data.id
      this.quantidades_vagas = data.quantidades_vagas
      this.status_obra = data.status_obra
      this.centro_custo = data.centro_custo
      this.altura = data.altura
      this.isCardOpen = data.isCardOpen
      this.cargos_especificos = data.cargos_especificos
      this.salarios_padroes_especificos = data.salarios_padroes_especificos
    }
  }
  class ListaObra {
    id: number
    nome: string
    obras: Obra[]

    constructor(data: { id: number; nome: string; obras: Obra[] }) {
      this.id = data.id
      this.nome = data.nome
      this.obras = data.obras
    }
  }
  class Solicitacao {
    id: string
    usuario: string
    natureza_solicitacao: string
    data_solicitacao: string
    empresa: string
    obra: string
    obra_destino: string
    pedido_abertura_vagas: AcrescimoCargo[]
    pedido_abertura_inclui_admissao: boolean
    pedidos_remocao: SolicitacaoFuncionario[]
    pedidos_funcionarios: SolicitacaoFuncionario[]
    pedido_transferencia_promocao_inclui_abertura: boolean
    pedido_desligamento_transferencia_promocao_inclui_remocao: boolean
    observacao_geral: string
    status_solicitacao: string
    isCardOpen: boolean
    altura: number
    obsFinal: string
    statusSolicitacao: string
    podeDestrancar: boolean
    requisicao: string
    todosEntregues: boolean
    data_cancelamento: string
    itens: Compra[]
    admissao_desligamento_cancelados: boolean
    transferencia_promocao_cancelados: boolean
    ferias_faltas_horas_extra_cancelados: boolean
    remocao_rejeitada: boolean
    abertura_rejeitada: boolean
    vagasReservar: string[]

    constructor(data: {
      id: string
      usuario: string
      natureza_solicitacao: string
      data_solicitacao: string
      empresa: string
      obra: string
      obra_destino: string
      pedido_abertura_vagas: []
      pedido_abertura_inclui_admissao: boolean
      pedidos_remocao: SolicitacaoFuncionario[]
      pedidos_funcionarios: []
      pedido_transferencia_promocao_inclui_abertura: boolean
      pedido_desligamento_transferencia_promocao_inclui_remocao: boolean
      observacao_geral: string
      status_solicitacao: string
      isCardOpen: boolean
      altura: number
      obsFinal: string
      statusSolicitacao: string
      podeDestrancar: boolean
      requisicao: string
      todosEntregues: boolean
      data_cancelamento: string
      itens: Compra[]
      admissao_desligamento_cancelados: boolean
      transferencia_promocao_cancelados: boolean
      ferias_faltas_horas_extra_cancelados: boolean
      remocao_rejeitada: boolean
      abertura_rejeitada: boolean
      vagasReservar: string[]
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
      this.data_cancelamento = data.data_cancelamento
      this.obra_destino = data.obra_destino
      this.pedido_abertura_vagas = data.pedido_abertura_vagas
      this.pedido_abertura_inclui_admissao =
        data.pedido_abertura_inclui_admissao
      this.pedidos_remocao = data.pedidos_remocao
      this.pedidos_funcionarios = data.pedidos_funcionarios
      this.pedido_transferencia_promocao_inclui_abertura =
        data.pedido_transferencia_promocao_inclui_abertura
      this.pedido_desligamento_transferencia_promocao_inclui_remocao =
        data.pedido_desligamento_transferencia_promocao_inclui_remocao
      this.observacao_geral = data.observacao_geral
      this.status_solicitacao = data.status_solicitacao
      this.admissao_desligamento_cancelados =
        data.admissao_desligamento_cancelados
      this.transferencia_promocao_cancelados =
        data.transferencia_promocao_cancelados
      this.ferias_faltas_horas_extra_cancelados =
        data.ferias_faltas_horas_extra_cancelados
      this.remocao_rejeitada = data.remocao_rejeitada
      this.abertura_rejeitada = data.abertura_rejeitada
      this.vagasReservar = data.vagasReservar
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
  const [listaCardsOpenStaBarbara, setListaCardsOpenStaBarbara] = useState<
    string[]
  >([])
  const [listaCardsOpenCantaria, setListaCardsOpenCantaria] = useState<
    string[]
  >([])
  const [listaCardsOpen, setListaCardsOpen] = useState<string[]>([])
  const [obrasCantaria, setObrasCantaria] = useState<Obra[]>([])
  const [obrasSantaBarbara, setObrasSantaBarbara] = useState<Obra[]>([])
  const [popUpOpen, SetPopupOpen] = useState<boolean>(false)
  const [popupType, setPopupType] = useState<string>('')
  const [popUpConfirmationPedido, setPopupConfirmationPedido] =
    useState<string>('')
  const [situacaoDownloadPlanilhaGeral, setSituacaoDownloadPlanilhaGeral] =
    useState<string>('ocioso')
  const [ListaPedidos, SetListaPedidos] = useState<Solicitacao[]>([])
  const [SituacaoExibicao, SetSituacaoExibicao] = useState<string>('carregando')
  const [SituacaoExibObrasCantaria, SetSituacaoExibObrasCantaria] =
    useState<string>('carregando')
  const [SituacaoExibObrasStaBarbara, SetSituacaoExibObrasStaBarbara] =
    useState<string>('carregando')
  const [TipoSolicitacao, SetTipoSolicitacao] = useState<string>('abertas')
  const [ListasObras, SetListasObras] = useState<ListaObra[]>([])
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
    solicitacao.requisicao = `atualizacaoSolMov;${nivelusur}`
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
  const admitirNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `admissaoSolMov;${nivelusur}`
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
  const cancelarAdmissaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarAdmissaoSolMov;${nivelusur}`
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
  const desligarNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `desligSolMov;${nivelusur}`
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
  const cancelarDesligNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarDesligSolMov;${nivelusur}`
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
  const cancelarTransfNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarTransfSolMov;${nivelusur}`
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
  const cancelarPromNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `cancelarPromSolMov;${nivelusur}`
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
  const cancelarFaltFeriasHorasNoServidor = async (
    solicitacao: Solicitacao
  ) => {
    solicitacao.requisicao = `cancelarFaFeHoSolMov;${nivelusur}`
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
  const transferirNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `transfSolMov;${nivelusur}`
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
  const promoverNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `promSolMov;${nivelusur}`
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
  const faltasFeriasHorasNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `faltasFeriasHorasSolMov;${nivelusur}`
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
  const criarVagasNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `abrirVagasSolMov;${nivelusur}`
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
  const rejeitarAberturaVagasNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `rejeitarAbertVagasSolMov;${nivelusur}`
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
  const removerVagasNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `removerVagasSolMov;${nivelusur}`
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
  const rejeitarRemocaoVagasNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `rejeitarRemocaoVagasSolMov;${nivelusur}`
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
  const concluirSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `fecharSolMov`
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
  const fecharSolicitacaoNoServidor = async (solicitacao: Solicitacao) => {
    solicitacao.requisicao = `fecharSolicitacaoMov`
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
    solicitacao.requisicao = `cancelarSolMov`
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
    solicitacao.requisicao = 'trancarSolicitacaoMov'
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
          pedidos_funcionarios: value.pedidos_funcionarios,
          pedido_transferencia_promocao_inclui_abertura:
            value.pedido_transferencia_promocao_inclui_abertura,
          pedido_desligamento_transferencia_promocao_inclui_remocao:
            value.pedido_desligamento_transferencia_promocao_inclui_remocao,
          pedidos_remocao: value.pedidos_remocao,
          observacao_geral: value.observacao_geral,
          status_solicitacao: value.statusSolicitacao,
          isCardOpen: resposta,
          altura: 0,
          obsFinal: value.observacao_geral,
          statusSolicitacao: value.statusSolicitacao,
          podeDestrancar: value.podeDestrancar,
          requisicao: value.requisicao,
          todosEntregues: value.todosEntregues,
          itens: [],
          data_cancelamento: value.data_cancelamento,
          admissao_desligamento_cancelados:
            value.admissao_desligamento_cancelados,
          transferencia_promocao_cancelados:
            value.transferencia_promocao_cancelados,
          ferias_faltas_horas_extra_cancelados:
            value.ferias_faltas_horas_extra_cancelados,
          remocao_rejeitada: value.remocao_rejeitada,
          abertura_rejeitada: value.abertura_rejeitada,
          vagasReservar: value.vagasReservar
        }
        let numeroItens = 0
        if (
          solicitacao.pedido_abertura_vagas != undefined &&
          solicitacao.pedido_abertura_vagas.length > 0
        ) {
          numeroItens += solicitacao.pedido_abertura_vagas.length
        }
        if (
          solicitacao.pedidos_remocao != undefined &&
          solicitacao.pedidos_remocao.length > 0
        ) {
          numeroItens += solicitacao.pedidos_remocao.length
        }
        if (
          solicitacao.pedidos_funcionarios != undefined &&
          solicitacao.pedidos_funcionarios.length > 0
        ) {
          numeroItens += solicitacao.pedidos_funcionarios.length
        }
        if (
          solicitacao.pedidos_remocao != undefined &&
          solicitacao.pedidos_remocao.length > 0
        ) {
          numeroItens += solicitacao.pedidos_remocao.length
        }
        if (
          solicitacao.natureza_solicitacao == 'HorasExtras' &&
          solicitacao.pedidos_funcionarios != undefined &&
          solicitacao.pedidos_funcionarios.length > 0
        ) {
          solicitacao.pedidos_funcionarios.map(
            (pedido: { dias_horas_extras: string | any[] }) =>
              (numeroItens += pedido.dias_horas_extras.length)
          )
        }
        if (
          (solicitacao.natureza_solicitacao == 'Desligamento' ||
            solicitacao.natureza_solicitacao == 'Transferencia' ||
            solicitacao.natureza_solicitacao == 'Promocao') &&
          solicitacao.pedido_desligamento_transferencia_promocao_inclui_remocao
        ) {
          numeroItens += 3
        }
        if (
          (solicitacao.natureza_solicitacao == 'Transferencia' ||
            solicitacao.natureza_solicitacao == 'Promocao') &&
          solicitacao.pedido_transferencia_promocao_inclui_abertura
        ) {
          numeroItens += 3
        }
        let linhasobs = 0
        console.log('numeroItens')
        console.log(numeroItens)
        console.log('linhasJustif')
        if (solicitacao.obsFinal != '') {
          if (
            solicitacao.obsFinal.indexOf('\n') == -1 &&
            solicitacao.obsFinal.length < 91
          ) {
            linhasobs = 2
          } else {
            const textos_isolados: string[] =
              solicitacao.obsFinal.split(/\r\n|\r|\n/)
            const numero_quebras = textos_isolados.length
            let numero_linhas_corridas_obs = 2
            textos_isolados.forEach((texto) => {
              texto.length >= 91 && (numero_linhas_corridas_obs += 1)
            })
            linhasobs = numero_linhas_corridas_obs + numero_quebras / 1.65
          }
        }
        console.log('linhasObs')
        console.log(linhasobs)
        solicitacao.altura = linhasobs + numeroItens
        dados_solicitacoes.push(solicitacao)
        solicitacao.isCardOpen = resposta
        SetListaPedidos(dados_solicitacoes)
        SetSituacaoExibicao('listaCarregada')
      }
    }
  }
  const requisitarInformacoesMP = async (tiposolic = '') => {
    if (tiposolic == '') {
      tiposolic = TipoSolicitacao
    }
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestQuadroPessoal&tiposolic=${tiposolic}`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    const json_resposta = JSON.parse(resposta)
    const obrasCantaria = json_resposta.Obras.Cantaria
    const obrasSantaBarbara = json_resposta.Obras.StaBarbara
    const dados_obras_santa_barbara: Obra[] = []
    const dados_obras_cantaria: Obra[] = []
    if (Object.keys(obrasSantaBarbara).length === 0) {
      SetSituacaoExibObrasStaBarbara('listaVazia')
      setObrasSantaBarbara(dados_obras_santa_barbara)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const [key, value] of Object.entries<any>(obrasSantaBarbara)) {
        const obra = {
          id: key,
          municipio: value.municipio,
          nome: value.nome,
          descricao_completa: value.descricao_completa,
          equipe: value.equipe,
          salarios_padroes_especificos: value.salarios_padroes_especificos,
          quantidades_vagas: value.quantidade_equipe,
          status_obra: value.status_obra,
          centro_custo: value.centro_custo,
          isCardOpen: false,
          altura: value.altura,
          cargos_especificos: value.cargos_especificos
        }
        const respostaCardOpen = listaCardsOpenStaBarbara.includes(key)
        obra.isCardOpen = respostaCardOpen
        dados_obras_santa_barbara.push(obra)
        setObrasSantaBarbara(dados_obras_santa_barbara)
        SetSituacaoExibObrasStaBarbara('listaCarregada')
      }
    }
    if (Object.keys(obrasCantaria).length === 0) {
      SetSituacaoExibObrasCantaria('listaVazia')
      setObrasCantaria(dados_obras_cantaria)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const [key, value] of Object.entries<any>(obrasCantaria)) {
        const obra = {
          id: key,
          municipio: value.municipio,
          nome: value.nome,
          descricao_completa: value.descricao_completa,
          equipe: value.equipe,
          salarios_padroes_especificos: value.salarios_padroes_especificos,
          quantidades_vagas: value.quantidade_equipe,
          status_obra: value.status_obra,
          centro_custo: value.centro_custo,
          isCardOpen: false,
          altura: value.altura,
          cargos_especificos: value.cargos_especificos
        }
        const respostaCardOpen = listaCardsOpenCantaria.includes(key)
        obra.isCardOpen = respostaCardOpen
        dados_obras_cantaria.push(obra)
        setObrasCantaria(dados_obras_cantaria)
        SetSituacaoExibObrasCantaria('listaCarregada')
      }
    }
    const listaAleatoria: ListaObra[] = []
    const listaSantaBarbara: ListaObra = {
      id: 1,
      nome: 'StaBarbara',
      obras: obrasSantaBarbara
    }
    const listaCantaria: ListaObra = {
      id: 2,
      nome: 'Cantaria',
      obras: obrasCantaria
    }
    listaAleatoria.push(listaSantaBarbara)
    listaAleatoria.push(listaCantaria)
    SetListasObras(listaAleatoria)
    SetSituacaoExibicao('listaCarregada')
    console.log(ListasObras)
  }
  if (firstLoad) {
    channel = pusher.subscribe('cantaria-websocket')
    channel.bind('update_system', () => setAtualizacaoRecebida(true))
    setFirstLoad(false)
    requisitarInformacoesMP()
  }
  if (atualizacaoRecebida) {
    requisitarInformacoesMP(TipoSolicitacao)
    setAtualizacaoRecebida(false)
  }
  const changeTipoSolicitacao = (tipo: string) => {
    SetSituacaoExibicao('carregando')
    SetTipoSolicitacao(tipo)
    requisitarInformacoesMP(tipo)
  }
  const gerarNomeTipoSolicitacao = (naturezaSolicitacao: string) => {
    if (naturezaSolicitacao == 'AberturaVaga') {
      return 'Abertura de Vagas'
    } else if (naturezaSolicitacao == 'RemocaoVaga') {
      return 'Desativar Vagas'
    } else if (naturezaSolicitacao == 'Admissao') {
      return 'Admissão de Pessoal'
    } else if (naturezaSolicitacao == 'Desligamento') {
      return 'Desligamento'
    } else if (naturezaSolicitacao == 'Transferencia') {
      return 'Transferência de Obra'
    } else if (naturezaSolicitacao == 'Promocao') {
      return 'Promoção'
    } else if (naturezaSolicitacao == 'Ferias') {
      return 'Pedido de Férias'
    } else if (naturezaSolicitacao == 'Faltas') {
      return 'Assinalar Faltas'
    } else if (naturezaSolicitacao == 'Adicional') {
      return 'Assinalar Dias Adic.'
    } else if (naturezaSolicitacao == 'HorasExtras') {
      return 'Horas Extras'
    } else {
      return 'TEXTO AQUI'
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
  const formatarSalario = (salario: number) => {
    const valorFormatado = salario.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    return valorFormatado
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
  const toggleCard = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>,
    centro_custo: number,
    listagem: string
  ) => {
    const centro_custo_elemento = centro_custo
    let nova_lista: Obra[] = []
    if (listagem == 'Cantaria') {
      nova_lista = [...obrasCantaria]
    } else {
      nova_lista = [...obrasSantaBarbara]
    }
    function isElement(obra: Obra) {
      return obra.centro_custo == centro_custo_elemento
    }
    function isListaCantaria(lista: ListaObra) {
      return lista.nome == 'Cantaria'
    }
    function isListaStaBarbara(lista: ListaObra) {
      return lista.nome == 'StaBarbara'
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (elemento.isCardOpen) {
      elemento.isCardOpen = false
      if (listagem == 'Cantaria') {
        const nova_lista_cards_open = [...listaCardsOpenCantaria]
        const nova_lista_filtrada = nova_lista_cards_open.filter(
          (elemento) => elemento != centro_custo_elemento.toString()
        )
        setListaCardsOpenCantaria(nova_lista_filtrada)
        const listas_obras = [...ListasObras]
        const indice_lista = listas_obras.findIndex(isListaCantaria)
        const elemento_lista = listas_obras.filter(isListaCantaria)[0]
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        setObrasCantaria(nova_lista)
        elemento_lista.obras.splice(indice_elemento, 1)
        elemento_lista.obras.splice(indice_elemento, 0, elemento)
        listas_obras.splice(indice_lista, 1)
        listas_obras.splice(indice_lista, 0, elemento_lista)
        SetListasObras(listas_obras)
        console.log(listas_obras)
      } else {
        const nova_lista_cards_open = [...listaCardsOpenStaBarbara]
        const nova_lista_filtrada = nova_lista_cards_open.filter(
          (elemento) => elemento != centro_custo_elemento.toString()
        )
        setListaCardsOpenStaBarbara(nova_lista_filtrada)
        const listas_obras = [...ListasObras]
        const indice_lista = listas_obras.findIndex(isListaStaBarbara)
        const elemento_lista = listas_obras.filter(isListaStaBarbara)[0]
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        setObrasSantaBarbara(nova_lista)
        elemento_lista.obras.splice(indice_elemento, 1)
        elemento_lista.obras.splice(indice_elemento, 0, elemento)
        listas_obras.splice(indice_lista, 1)
        listas_obras.splice(indice_lista, 0, elemento_lista)
        SetListasObras(listas_obras)
        console.log(listas_obras)
      }
    } else {
      elemento.isCardOpen = true
      if (listagem == 'Cantaria') {
        const nova_lista_cards_open = [...listaCardsOpenCantaria]
        nova_lista_cards_open.push(elemento.centro_custo.toString())
        setListaCardsOpenCantaria(nova_lista_cards_open)
        const listas_obras = [...ListasObras]
        const indice_lista = listas_obras.findIndex(isListaCantaria)
        const elemento_lista = listas_obras.filter(isListaCantaria)[0]
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        setObrasCantaria(nova_lista)
        elemento_lista.obras.splice(indice_elemento, 1)
        elemento_lista.obras.splice(indice_elemento, 0, elemento)
        listas_obras.splice(indice_lista, 1)
        listas_obras.splice(indice_lista, 0, elemento_lista)
        SetListasObras(listas_obras)
        console.log(listas_obras)
      } else {
        const nova_lista_cards_open = [...listaCardsOpenStaBarbara]
        nova_lista_cards_open.push(elemento.centro_custo.toString())
        setListaCardsOpenStaBarbara(nova_lista_cards_open)
        const listas_obras = [...ListasObras]
        const indice_lista = listas_obras.findIndex(isListaStaBarbara)
        const elemento_lista = listas_obras.filter(isListaStaBarbara)[0]
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        setObrasSantaBarbara(nova_lista)
        elemento_lista.obras.splice(indice_elemento, 1)
        elemento_lista.obras.splice(indice_elemento, 0, elemento)
        listas_obras.splice(indice_lista, 1)
        listas_obras.splice(indice_lista, 0, elemento_lista)
        SetListasObras(listas_obras)
        console.log(listas_obras)
      }
    }
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
    } else if (situacao == 'pendenteAbertura') {
      return 'PENDENTE'
    } else if (situacao == 'pendenteRemocao') {
      return 'PENDENTE'
    } else if (situacao == 'concluido') {
      return 'CONCLUÍDO'
    } else if (situacao == 'cancelado') {
      return 'CANCELADO'
    }
  }
  const textoTituloSecao = (situacao: string) => {
    if (situacao == 'Desligamento') {
      return 'Pedido de Desligamento:'
    } else if (situacao == 'Transferencia') {
      return 'Pedido de Transferência:'
    } else if (situacao == 'Promocao') {
      return 'Pedido de Promoção:'
    } else if (situacao == 'Ferias') {
      return 'Pedido de Férias:'
    } else if (situacao == 'Faltas') {
      return 'Faltas Indicadas para Assinalar:'
    } else if (situacao == 'Adicional') {
      return 'Dia(s) Adicional(is) para Assinalar:'
    } else if (situacao == 'HorasExtras') {
      return 'Horas Extras para Assinalar:'
    } else {
      return 'TEXTO AQUI'
    }
  }
  const clickFechadura = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
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
  const aprovarPedidoAdmissao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'concluido'
    novoElemento.podeDestrancar = false
    const resposta_servidor = admitirNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'concluido'
      elemento.podeDestrancar = false
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
  const cancelarPedidoAdmissao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (novoElemento.pedido_abertura_inclui_admissao == true) {
      novoElemento.statusSolicitacao = 'concluido'
      novoElemento.admissao_desligamento_cancelados = true
    } else {
      novoElemento.statusSolicitacao = 'cancelado'
    }
    novoElemento.podeDestrancar = false
    const resposta_servidor = cancelarAdmissaoNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (elemento.pedido_abertura_inclui_admissao == true) {
        elemento.statusSolicitacao = 'concluido'
        elemento.admissao_desligamento_cancelados = true
      } else {
        elemento.statusSolicitacao = 'cancelado'
      }
      elemento.podeDestrancar = false
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
  const finalizarPedidoDesligamento = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (
      novoElemento.natureza_solicitacao == 'Desligamento' &&
      novoElemento.pedido_desligamento_transferencia_promocao_inclui_remocao
    ) {
      novoElemento.statusSolicitacao = 'pendenteRemocao'
      novoElemento.podeDestrancar = false
    } else {
      novoElemento.statusSolicitacao = 'concluido'
      novoElemento.podeDestrancar = false
    }
    const resposta_servidor = desligarNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (novoElemento.statusSolicitacao == 'pendenteRemocao') {
        elemento.statusSolicitacao = 'pendenteRemocao'
      } else {
        elemento.statusSolicitacao = 'concluido'
      }
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const cancelarPedidoDesligamento = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'cancelado'
    novoElemento.admissao_desligamento_cancelados = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = cancelarDesligNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'cancelado'
      elemento.admissao_desligamento_cancelados = true
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const cancelarPedidoTransferencia = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'cancelado'
    novoElemento.transferencia_promocao_cancelados = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = cancelarTransfNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'cancelado'
      elemento.transferencia_promocao_cancelados = true
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const cancelarPedidoPromocao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'cancelado'
    novoElemento.transferencia_promocao_cancelados = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = cancelarPromNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'cancelado'
      elemento.transferencia_promocao_cancelados = true
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const cancelarPedidoFaltasFeriasHoras = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'cancelado'
    novoElemento.ferias_faltas_horas_extra_cancelados = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = cancelarFaltFeriasHorasNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'cancelado'
      elemento.ferias_faltas_horas_extra_cancelados = true
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const finalizarPedidoTransferencia = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (
      novoElemento.pedido_desligamento_transferencia_promocao_inclui_remocao
    ) {
      novoElemento.statusSolicitacao = 'pendenteRemocao'
    } else {
      novoElemento.statusSolicitacao = 'concluido'
    }
    novoElemento.podeDestrancar = false
    const resposta_servidor = transferirNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (novoElemento.statusSolicitacao == 'pendenteRemocao') {
        elemento.statusSolicitacao = 'pendenteRemocao'
      } else {
        elemento.statusSolicitacao = 'concluido'
      }
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const finalizarPedidoPromocao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (
      novoElemento.pedido_desligamento_transferencia_promocao_inclui_remocao
    ) {
      novoElemento.statusSolicitacao = 'pendenteRemocao'
    } else {
      novoElemento.statusSolicitacao = 'concluido'
    }
    novoElemento.podeDestrancar = false
    const resposta_servidor = promoverNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (novoElemento.statusSolicitacao == 'pendenteRemocao') {
        elemento.statusSolicitacao = 'pendenteRemocao'
      } else {
        elemento.statusSolicitacao = 'concluido'
      }
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const finalizarPedidoFaltasFeriasHoras = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'concluido'
    novoElemento.podeDestrancar = false
    const resposta_servidor = faltasFeriasHorasNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (novoElemento.statusSolicitacao == 'concluido') {
        elemento.statusSolicitacao = 'concluido'
        elemento.podeDestrancar = false
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      }
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_aberta')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const aprovarPedidoAbertura = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (
      novoElemento.natureza_solicitacao == 'AberturaVaga' &&
      novoElemento.pedido_abertura_inclui_admissao == false
    ) {
      novoElemento.statusSolicitacao = 'concluido'
      novoElemento.podeDestrancar = false
    } else {
      novoElemento.statusSolicitacao = 'andamento'
      novoElemento.podeDestrancar = false
    }
    if (novoElemento.statusSolicitacao == 'andamento') {
      const resposta_servidor = criarVagasNoServidor(novoElemento)
      const resposta_recebida = await resposta_servidor
      if (resposta_recebida == 'ok') {
        elemento.statusSolicitacao = 'andamento'
        elemento.podeDestrancar = false
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
    } else {
      const resposta_servidor = criarVagasNoServidor(novoElemento)
      const resposta_recebida = await resposta_servidor
      if (resposta_recebida == 'ok') {
        elemento.statusSolicitacao = 'concluido'
        elemento.podeDestrancar = false
        nova_lista.splice(indice_elemento, 1)
        nova_lista.splice(indice_elemento, 0, elemento)
        SetListaPedidos(nova_lista)
      } else if (resposta_recebida == 'erro') {
        SetPopupOpen(true)
        setPopupType('solicitacao_trancada')
        setPopupConfirmationPedido(id_elemento)
        document.body.style.overflowY = 'hidden'
      } else {
        console.log('Erro!')
      }
    }
  }
  const rejeitarPedidoAbertura = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'rejeitado'
    novoElemento.abertura_rejeitada = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = rejeitarAberturaVagasNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'rejeitado'
      elemento.abertura_rejeitada = true
      elemento.podeDestrancar = false
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
  const aprovarPedidoRemocao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    novoElemento.statusSolicitacao = 'concluido'
    novoElemento.podeDestrancar = false
    const resposta_servidor = removerVagasNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      elemento.statusSolicitacao = 'concluido'
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_abert')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
    }
  }
  const rejeitarPedidoRemocao = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    const nova_lista = [...ListaPedidos]
    function isElement(solicitacao: Solicitacao) {
      return solicitacao.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const novoElemento = elemento
    if (novoElemento.natureza_solicitacao != 'RemocaoVaga') {
      novoElemento.statusSolicitacao = 'concluido'
    } else {
      novoElemento.statusSolicitacao = 'rejeitado'
    }
    novoElemento.remocao_rejeitada = true
    novoElemento.podeDestrancar = false
    const resposta_servidor = rejeitarRemocaoVagasNoServidor(novoElemento)
    const resposta_recebida = await resposta_servidor
    if (resposta_recebida == 'ok') {
      if (elemento.natureza_solicitacao != 'RemocaoVaga') {
        elemento.statusSolicitacao = 'concluido'
      } else {
        elemento.statusSolicitacao = 'rejeitado'
      }
      elemento.remocao_rejeitada = true
      elemento.podeDestrancar = false
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      SetListaPedidos(nova_lista)
    } else if (resposta_recebida == 'solicitacao_aberta') {
      SetPopupOpen(true)
      setPopupType('solicitacao_abert')
      setPopupConfirmationPedido(id_elemento)
      document.body.style.overflowY = 'hidden'
    } else {
      console.log('Erro!')
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
    elemento.data_cancelamento = dataAgoraBrasil
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
        <h1>Quadro de Pessoal</h1>
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
          <>
            {obrasSantaBarbara.length > 0 && (
              <div>
                <h3>Santa Bárbara</h3>
                <ListaObras>
                  <GridCabecalhoSolto>
                    <li>
                      <b>Nº Centro Custo:</b>
                    </li>
                    <li>
                      <b>Município:</b>
                    </li>
                    <li>
                      <b>Obra:</b>
                    </li>
                    <li className="situacao">
                      <b>Situação:</b>
                    </li>
                  </GridCabecalhoSolto>
                  {obrasSantaBarbara.map((obra) => (
                    <LinhaDiv
                      key={obra.id}
                      usuario={nivelusur == 2 ? 'restrito' : 'completo'}
                    >
                      <CardObra
                        tamanho={obra.altura}
                        id={obra.id}
                        className={`${obra.isCardOpen ? 'open' : 'closed'} boxes`}
                      >
                        <GridCabecalho
                          id={obra.id}
                          onClick={(e) =>
                            toggleCard(e, obra.centro_custo, 'StaBarbara')
                          }
                          situacaoPedido={obra.status_obra}
                        >
                          <li>
                            <p>{obra.centro_custo}</p>
                          </li>
                          <li>
                            <p>{obra.municipio}</p>
                          </li>
                          <li>
                            <p>{obra.nome}</p>
                          </li>
                          <ItemCabecalhoSituacao>
                            <b>
                              <TextoSituacaoCabecalho
                                className={`${
                                  obra.status_obra == 'andamento'
                                    ? 'andamento'
                                    : obra.status_obra == 'pendenteAbertura' ||
                                        obra.status_obra == 'pendenteRemocao'
                                      ? 'pendente'
                                      : obra.status_obra == 'concluido'
                                        ? 'concluido'
                                        : obra.status_obra == 'rejeitado'
                                          ? 'rejeitado'
                                          : obra.status_obra == 'cancelado'
                                            ? 'cancelado'
                                            : 'aberto'
                                }`}
                              ></TextoSituacaoCabecalho>
                            </b>
                          </ItemCabecalhoSituacao>
                        </GridCabecalho>
                        <DivGridCabecalho
                          id={obra.id + 'class'}
                          tamanho={obra.altura}
                          className={obra.isCardOpen ? 'open' : 'closed'}
                        >
                          <DivTituloSecaoCard className="aberturaVagas">
                            <h3>Quadro de Pessoal:</h3>
                          </DivTituloSecaoCard>
                          <GridCabecalhoItemsPedido
                            id={obra.id}
                            tipoSolicitacao={'AberturaVaga'}
                          >
                            <LinhaCabecalhoItems>
                              <b>Cargo</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Nome</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Salário</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Regime</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems className={'ultimaLinha'}>
                              <b>Telefone</b>
                            </LinhaCabecalhoItems>
                          </GridCabecalhoItemsPedido>
                          {obra.equipe.length > 0 &&
                            obra.equipe.map((colaborador) => (
                              <GridItemsPedido
                                key={colaborador.id}
                                tipoSolicitacao={'AberturaVaga'}
                                className={`classeItems ${
                                  obra.status_obra != 'aberto' &&
                                  obra.status_obra == 'entregue' &&
                                  'boldText'
                                }`}
                                numeroFaltasAdicionalHoras={0}
                              >
                                <li>
                                  <p>{colaborador.cargo}</p>
                                </li>
                                <li>
                                  <p>{colaborador.nome}</p>
                                </li>
                                <li>
                                  <p>
                                    {colaborador.salario_padrao_obra == 0
                                      ? formatarSalario(
                                          colaborador.salario_padrao
                                        )
                                      : formatarSalario(
                                          colaborador.salario_padrao_obra
                                        )}
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    {colaborador.tipo_contrato == 'pj'
                                      ? 'PJ-MEI'
                                      : colaborador.tipo_contrato == 'clt'
                                        ? 'CLT'
                                        : colaborador.tipo_contrato == 'estagio'
                                          ? 'ESTÁGIO'
                                          : ''}
                                  </p>
                                </li>
                                <li>
                                  <p>{colaborador.telefone}</p>
                                </li>
                              </GridItemsPedido>
                            ))}
                        </DivGridCabecalho>
                      </CardObra>
                      {!popUpOpen && (
                        <IconeExcelDiv>
                          <IconeExcelImg
                            id={obra.id}
                            src={IconeExcel}
                            onClick={(e) => baixarExcelPedido(e)}
                          ></IconeExcelImg>
                        </IconeExcelDiv>
                      )}
                      {!popUpOpen && (
                        <IconePDFDiv>
                          <IconePDFImg
                            id={obra.id}
                            src={IconePDF}
                            onClick={(e) => baixarPDFPedido(e)}
                          ></IconePDFImg>
                        </IconePDFDiv>
                      )}
                    </LinhaDiv>
                  ))}
                </ListaObras>
              </div>
            )}
            {obrasCantaria.length > 0 && (
              <div>
                <h3>Cantaria</h3>
                <ListaObras>
                  <GridCabecalhoSolto>
                    <li>
                      <b>Nº Centro Custo:</b>
                    </li>
                    <li>
                      <b>Município:</b>
                    </li>
                    <li>
                      <b>Obra:</b>
                    </li>
                    <li className="situacao">
                      <b>Situação:</b>
                    </li>
                  </GridCabecalhoSolto>
                  {obrasCantaria.map((obra) => (
                    <LinhaDiv
                      key={obra.id}
                      usuario={nivelusur == 2 ? 'restrito' : 'completo'}
                    >
                      <CardObra
                        tamanho={obra.altura}
                        id={obra.id}
                        className={`${obra.isCardOpen ? 'open' : 'closed'} boxes`}
                      >
                        <GridCabecalho
                          id={obra.id}
                          onClick={(e) =>
                            toggleCard(e, obra.centro_custo, 'Cantaria')
                          }
                          situacaoPedido={obra.status_obra}
                        >
                          <li>
                            <p>{obra.centro_custo}</p>
                          </li>
                          <li>
                            <p>{obra.municipio}</p>
                          </li>
                          <li>
                            <p>{obra.nome}</p>
                          </li>
                          <ItemCabecalhoSituacao>
                            <b>
                              <TextoSituacaoCabecalho
                                className={`${
                                  obra.status_obra == 'andamento'
                                    ? 'andamento'
                                    : obra.status_obra == 'pendenteAbertura' ||
                                        obra.status_obra == 'pendenteRemocao'
                                      ? 'pendente'
                                      : obra.status_obra == 'concluido'
                                        ? 'concluido'
                                        : obra.status_obra == 'rejeitado'
                                          ? 'rejeitado'
                                          : obra.status_obra == 'cancelado'
                                            ? 'cancelado'
                                            : 'aberto'
                                }`}
                              ></TextoSituacaoCabecalho>
                            </b>
                          </ItemCabecalhoSituacao>
                        </GridCabecalho>
                        <DivGridCabecalho
                          id={obra.id + 'class'}
                          tamanho={obra.altura}
                          className={obra.isCardOpen ? 'open' : 'closed'}
                        >
                          <DivTituloSecaoCard className="aberturaVagas">
                            <h3>Quadro de Pessoal:</h3>
                          </DivTituloSecaoCard>
                          <GridCabecalhoItemsPedido
                            id={obra.id}
                            tipoSolicitacao={'AberturaVaga'}
                          >
                            <LinhaCabecalhoItems>
                              <b>Cargo</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Nome</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Salário</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems>
                              <b>Regime</b>
                            </LinhaCabecalhoItems>
                            <LinhaCabecalhoItems className={'ultimaLinha'}>
                              <b>Telefone</b>
                            </LinhaCabecalhoItems>
                          </GridCabecalhoItemsPedido>
                          {obra.equipe.length > 0 &&
                            obra.equipe.map((colaborador) => (
                              <GridItemsPedido
                                key={colaborador.id}
                                tipoSolicitacao={'AberturaVaga'}
                                className={`classeItems ${
                                  obra.status_obra != 'aberto' &&
                                  obra.status_obra == 'entregue' &&
                                  'boldText'
                                }`}
                                numeroFaltasAdicionalHoras={0}
                              >
                                <li>
                                  <p>{colaborador.cargo}</p>
                                </li>
                                <li>
                                  <p>{colaborador.nome}</p>
                                </li>
                                <li>
                                  <p>
                                    {colaborador.salario_padrao_obra == 0
                                      ? formatarSalario(
                                          colaborador.salario_padrao
                                        )
                                      : formatarSalario(
                                          colaborador.salario_padrao_obra
                                        )}
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    {colaborador.tipo_contrato == 'pj'
                                      ? 'PJ-MEI'
                                      : colaborador.tipo_contrato == 'clt'
                                        ? 'CLT'
                                        : colaborador.tipo_contrato == 'estagio'
                                          ? 'ESTÁGIO'
                                          : ''}
                                  </p>
                                </li>
                                <li>
                                  <p>{colaborador.telefone}</p>
                                </li>
                              </GridItemsPedido>
                            ))}
                        </DivGridCabecalho>
                      </CardObra>
                      {!popUpOpen && (
                        <IconeExcelDiv>
                          <IconeExcelImg
                            id={obra.id}
                            src={IconeExcel}
                            onClick={(e) => baixarExcelPedido(e)}
                          ></IconeExcelImg>
                        </IconeExcelDiv>
                      )}
                      {!popUpOpen && (
                        <IconePDFDiv>
                          <IconePDFImg
                            id={obra.id}
                            src={IconePDF}
                            onClick={(e) => baixarPDFPedido(e)}
                          ></IconePDFImg>
                        </IconePDFDiv>
                      )}
                    </LinhaDiv>
                  ))}
                </ListaObras>
              </div>
            )}
          </>
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

export default QuadroPessoal
