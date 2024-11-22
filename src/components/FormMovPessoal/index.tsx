import React from 'react'
import {
  CardAdmissao,
  FormularioCompra,
  DivEmpresa,
  DivObraQuantidade,
  DivQuantidadeVaga,
  DivNomeVaga,
  DivButtonSolicitar,
  DivBotoesConfirmacao,
  DivBotaoNovoPedido,
  DivMensagemErro,
  DivButtonAdicionarItem,
  DivButtonRemoverItem,
  DivListaSolicitacao,
  DivListaAcrescimos,
  GridLista,
  GridItem,
  GridItemCabecalho,
  GridListaCabecalho,
  GridItemCabecalhoUltimo,
  GridItemUltimo,
  TextoComLineBreak,
  DivLineBreak,
  TextoNaoHaVagas,
  TextoNenhumaFalta,
  TextoEstagio,
  ListaFaltasDiasAdicionais,
  ListaFaltasDiasAdicionaisTabela,
  BotaoAdicionarFaltaAdicional,
  BotaoRemoverFaltaAdicional,
  SetDataBotaoRemover
} from './styles'

const FormMovimentacaoPessoal = ({ nomeusur = '' }) => {
  class Vaga {
    id: string
    sigla_cargo: string
    cargo: string
    situacao: string
    nome: string
    rg: string
    cpf: string
    contato: string
    salario_padrao: number
    salario_padrao_obra: number
    salario_especifico: number

    constructor(data: {
      id: string
      sigla_cargo: string
      cargo: string
      situacao: string
      nome: string
      rg: string
      cpf: string
      contato: string
      salario_padrao: number
      salario_padrao_obra: number
      salario_especifico: number
    }) {
      this.id = data.id
      this.sigla_cargo = data.sigla_cargo
      this.cargo = data.cargo
      this.situacao = data.situacao
      this.nome = data.nome
      this.rg = data.rg
      this.cpf = data.cpf
      this.contato = data.contato
      this.salario_padrao = data.salario_padrao
      this.salario_padrao_obra = data.salario_padrao_obra
      this.salario_especifico = data.salario_especifico
    }
  }
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
  class Cargo {
    sigla: string
    nome: string
    completo: string
    numero: number
    salario_padrao: number
    promocoes_possiveis: string[]

    constructor(data: {
      sigla: string
      nome: string
      completo: string
      numero: number
      salario_padrao: number
      promocoes_possiveis: string[]
    }) {
      this.sigla = data.sigla
      this.nome = data.nome
      this.completo = data.completo
      this.numero = data.numero
      this.salario_padrao = data.salario_padrao
      this.promocoes_possiveis = data.promocoes_possiveis
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
  class Obra {
    id: number
    municipio: string
    nome: string
    descricao_completa: string
    cargos_especificos: string[]
    equipe: Vaga[]

    constructor(data: {
      municipio: string
      nome: string
      descricao_completa: string
      cargos_especificos: string[]
      equipe: Vaga[]
      id: number
    }) {
      this.municipio = data.municipio
      this.nome = data.nome
      this.descricao_completa = data.descricao_completa
      this.cargos_especificos = data.cargos_especificos
      this.equipe = data.equipe
      this.id = data.id
    }
  }
  const obraVazia = {
    id: 0,
    municipio: '',
    nome: '',
    descricao_completa: '',
    cargos_especificos: [],
    equipe: []
  }
  const solicitacao_funcionario_inicial = {
    id: '1',
    incluir: false,
    sigla: '',
    quantidade_pedida: 1,
    status: 'aberto',
    codigo_vaga: '',
    tipo_admissao: '',
    nome: '',
    rg: '',
    cpf: '',
    contato: '',
    cargo: '',
    novo_cargo: '',
    possiveis_promocoes: [],
    id_pessoa: '',
    obra_atual: '',
    imediato: true,
    data_transferencia: '',
    data_inicio_ferias: '',
    data_final_ferias: '',
    data_desligamento: '',
    data_falta_atual: '',
    data_adicional_atual: '',
    data_horas_extra_atual: '',
    dia_horas_extra_atual: '',
    horas_extra_data_atual: '',
    faltas: [],
    dias_adicionais: [],
    dias_horas_extras: [],
    remocaoNoDesligamentoTransferencia: false
  }

  const [firstLoad, setFirstLoad] = React.useState<boolean>(true)
  const [contadorRemocao, setContadorRemocao] = React.useState<number>(1)
  const [ResetPedido, SetResetPedido] = React.useState<string>('off')
  const [SituacaoPedido, SetSituacaoPedido] =
    React.useState<string>('solicitando')
  const [empresaSelecionada, setEmpresaSelecionada] = React.useState<string>('')
  const [admissaoNaAbertura, setAdmissaoNaABertura] =
    React.useState<boolean>(false)
  const [
    remocaoNoDesligamentoTransferencia,
    setRemocaoNoDesligamentoTransferencia
  ] = React.useState<boolean>(false)
  const [aberturaNaTransferenciaPromocao, setAberturaNaTransferenciaPromocao] =
    React.useState<boolean>(false)
  const [preNaturezaMovimentacao, setPreNaturezaMovimentacao] =
    React.useState<string>('')
  const [naturezaMovimentacao, setNaturezaMovimentacao] =
    React.useState<string>('')
  const [obrasCantaria, setObrasCantaria] = React.useState<Obra[]>([])
  const [obrasSantaBarbara, setObrasSantaBarbara] = React.useState<Obra[]>([])
  const [pedidoAcrescimoCargos, setPedidoAcrescimoCargos] = React.useState<
    SolicitacaoFuncionario[]
  >([solicitacao_funcionario_inicial])
  const [inclusaoPedidosAdmissaoVaga, setInclusaoPedidosAdmissaoVagas] =
    React.useState<SolicitacaoFuncionario[]>([])
  const [inclusaoPedidosRemocaoVaga, setInclusaoPedidosRemocaoVagas] =
    React.useState<SolicitacaoFuncionario[]>([])
  const [pedidosAdmissaoVaga, setPedidosAdmissaoVagas] = React.useState<
    SolicitacaoFuncionario[]
  >([solicitacao_funcionario_inicial])
  const [pedidosFuncionarios, setPedidosFuncionarios] = React.useState<
    SolicitacaoFuncionario[]
  >([solicitacao_funcionario_inicial])
  const [cargosPossiveis, setCargosPossiveis] = React.useState<Cargo[]>([])
  const [equipeDisponivel, setEquipeDisponivel] = React.useState<Vaga[]>([])
  const [vagasDisponiveis, setVagasDisponiveis] = React.useState<Vaga[]>([])
  const [firstChangeEmpresa, setFirstChangeEmpresa] =
    React.useState<boolean>(true)
  const [firstChangeNaturezaMov, setFirstChangeNaturezaMov] =
    React.useState<boolean>(true)
  const [erroInclusao, setErroInclusao] = React.useState<boolean>(false)
  const [mensagemErroInclusao, setMensagemErroInclusao] =
    React.useState<string>('')
  const [firstChangeObra, setFirstChangeObra] = React.useState<boolean>(true)
  const [obra, setObra] = React.useState<Obra>(obraVazia)
  const [obraDestino, setObraDestino] = React.useState<Obra>(obraVazia)
  const [MensagemErro, SetMensagemErro] = React.useState<string>('')
  const [ObservacaoGeral, setObservacaoGeral] = React.useState<string>('')
  const [JustificativaGeral, setJustificativaGeral] = React.useState<string>('')
  const removerPedidoAcrescimo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (pedidoAcrescimoCargos.length != 1) {
      SetMensagemErro('')
      const id_elemento = e.currentTarget.id
      const nova_lista = [...pedidoAcrescimoCargos]
      const lista_modificada = nova_lista.filter(
        (obj) => obj.id !== id_elemento
      )
      setPedidoAcrescimoCargos(lista_modificada)
    }
  }
  const removerPedidoAdmissao = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (pedidosAdmissaoVaga.length != 1) {
      SetMensagemErro('')
      const id_elemento = e.currentTarget.id
      const nova_lista = [...pedidosAdmissaoVaga]
      const lista_modificada = nova_lista.filter(
        (obj) => obj.id !== id_elemento
      )
      setPedidosAdmissaoVagas(lista_modificada)
    }
  }
  const removerPedidoFunc = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    if (pedidosFuncionarios.length != 1) {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const elemento = nova_lista.filter(isElement)[0]
      const lista_modificada = nova_lista.filter(
        (obj) => obj.id !== id_elemento
      )
      setPedidosFuncionarios(lista_modificada)
      const nova_lista_remocoes = [...inclusaoPedidosRemocaoVaga]
      const lista_modificada_remoces = nova_lista_remocoes.filter(
        (obj) => obj.codigo_vaga !== elemento.id_pessoa
      )
      setInclusaoPedidosRemocaoVagas(lista_modificada_remoces)
    }
  }
  const getMinimumDateFromStart = (startDate: string) => {
    let data_utilizavel
    if (startDate != '') {
      const dia_data = startDate.split('/')[0]
      const mes_data = startDate.split('/')[1]
      const ano_data = startDate.split('/')[2]
      data_utilizavel = new Date(
        parseInt(ano_data),
        parseInt(mes_data) - 1,
        parseInt(dia_data)
      )
    } else {
      data_utilizavel = new Date()
    }
    const minimumDate = new Date(
      data_utilizavel.getTime() + 1000 * 60 * 60 * 120
    )
    const dd = String(minimumDate.getDate()).padStart(2, '0')
    const mm = String(minimumDate.getMonth() + 1).padStart(2, '0')
    const yyyy = minimumDate.getFullYear()

    const finalDate = yyyy + '-' + mm + '-' + dd
    console.log(finalDate)
    return finalDate
  }
  const getMinimumDate = () => {
    const today = new Date()
    const minimumDate = new Date(today.getTime() + 1000 * 60 * 60 * 72)
    const dd = String(minimumDate.getDate()).padStart(2, '0')
    const mm = String(minimumDate.getMonth() + 1).padStart(2, '0')
    const yyyy = minimumDate.getFullYear()

    const finalDate = yyyy + '-' + mm + '-' + dd
    console.log(finalDate)
    return finalDate
  }
  const getTodayDate = () => {
    const today = new Date()
    const minimumDate = new Date(today.getTime())
    const dd = String(minimumDate.getDate()).padStart(2, '0')
    const mm = String(minimumDate.getMonth() + 1).padStart(2, '0')
    const yyyy = minimumDate.getFullYear()

    const finalDate = yyyy + '-' + mm + '-' + dd
    console.log(finalDate)
    return finalDate
  }
  const textoNatureza = (texto: string) => {
    if (texto == 'AberturaVaga') {
      if (admissaoNaAbertura) {
        return 'Abertura de Vagas c/ Admissão de Pessoal'
      } else {
        return 'Abertura de Vagas'
      }
    } else if (texto == 'RemocaoVaga') {
      return 'Remoção de Vagas'
    } else if (texto == 'Admissao') {
      return 'Admissão de Pessoal'
    } else if (texto == 'Transferencia') {
      return 'Transferência de Obra'
    } else if (texto == 'Desligamento') {
      if (remocaoNoDesligamentoTransferencia) {
        return 'Desligamento de Pessoal c/ Remoção de Vagas'
      } else {
        return 'Desligamento de Pessoal'
      }
    } else if (texto == 'Ferias') {
      return 'Pedido de Férias'
    } else if (texto == 'Adicional') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].dias_adicionais.length == 1
      ) {
        return 'Assinalar Dia Adicional'
      } else {
        return 'Assinalar Dias Adicionais'
      }
    } else if (texto == 'Faltas') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].faltas.length == 1
      ) {
        return 'Assinalar Falta'
      } else {
        return 'Assinalar Faltas'
      }
    } else if (texto == 'Promocao') {
      if (pedidosFuncionarios.length == 1) {
        return 'Solicitar Promoção'
      } else {
        return 'Solicitar Promoções'
      }
    } else if (texto == 'HorasExtras') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].dias_horas_extras.length == 1 &&
        pedidosFuncionarios[0].dias_horas_extras[0].horas == '1'
      ) {
        return 'Assinalar Hora Extra'
      } else {
        return 'Assinalar Horas Extras'
      }
    } else {
      return 'MUDE O TEXTO AQUI'
    }
  }
  const textoItens = (texto: string) => {
    if (texto == 'AberturaVaga') {
      if (
        pedidoAcrescimoCargos.length == 1 &&
        pedidoAcrescimoCargos[0].quantidade_pedida == 1
      ) {
        return 'VAGA SOLICITADA:'
      } else {
        return 'VAGAS SOLICITADAS:'
      }
    } else if (texto == 'Transferencia') {
      if (pedidosFuncionarios.length == 1) {
        return 'PEDIDO DE TRANSFERÊNCIA:'
      } else {
        return 'PEDIDOS DE TRANSFERÊNCIA:'
      }
    } else if (texto == 'Desligamento') {
      if (pedidosFuncionarios.length == 1) {
        return 'PEDIDO DE DESLIGAMENTO:'
      } else {
        return 'PEDIDOS DE DESLIGAMENTO:'
      }
    } else if (texto == 'Ferias') {
      if (pedidosFuncionarios.length == 1) {
        return 'PEDIDO DE FÉRIAS:'
      } else {
        return 'PEDIDOS DE FÉRIAS:'
      }
    } else if (texto == 'Faltas') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].faltas.length == 1
      ) {
        return 'FALTA INDICADA:'
      } else {
        return 'FALTAS INDICADAS:'
      }
    } else if (texto == 'Adicional') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].dias_adicionais.length == 1
      ) {
        return 'DIA ADICIONAL ASSINALADO:'
      } else {
        return 'DIAS ADICIONAIS ASSINALADOS:'
      }
    } else if (texto == 'Promocao') {
      if (pedidosFuncionarios.length == 1) {
        return 'PROMOÇÃO SOLICITADA:'
      } else {
        return 'PROMOÇÕES SOLICITADAS:'
      }
    } else if (texto == 'HorasExtras') {
      if (
        pedidosFuncionarios.length == 1 &&
        pedidosFuncionarios[0].dias_horas_extras.length == 1 &&
        pedidosFuncionarios[0].dias_horas_extras[0].horas == '1'
      ) {
        return 'HORA EXTRA ASSINALADA:'
      } else {
        return 'HORAS EXTRAS ASSINALADAS:'
      }
    } else {
      return 'MUDE O TEXTO AQUI'
    }
  }
  const changeObservacao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valor_elemento = e.currentTarget.value
    setObservacaoGeral(valor_elemento)
  }
  const changeJustificativa = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valor_elemento = e.currentTarget.value
    setJustificativaGeral(valor_elemento)
  }
  const changeEmpresa = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const valor_elemento = e.currentTarget.value
    setEmpresaSelecionada(valor_elemento)
    setPreNaturezaMovimentacao('')
    setNaturezaMovimentacao('')
    if (firstChangeEmpresa == false) {
      const inputNaturezaMovimentacao: any =
        e.currentTarget.parentElement?.nextSibling?.lastChild
      console.log(inputNaturezaMovimentacao)
      inputNaturezaMovimentacao.value = ''
    } else {
      setFirstChangeEmpresa(false)
    }
    setFirstChangeNaturezaMov(true)
    setFirstChangeObra(true)
  }
  const changeNaturezaMov = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    setObservacaoGeral('')
    setAdmissaoNaABertura(false)
    const valor_elemento = e.currentTarget.value
    setNaturezaMovimentacao(valor_elemento)
    setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
    setPedidoAcrescimoCargos([solicitacao_funcionario_inicial])
    setObra(obraVazia)
    setInclusaoPedidosAdmissaoVagas([])
    setPedidosFuncionarios([solicitacao_funcionario_inicial])
    if (firstChangeNaturezaMov == false) {
      const inputObra: any =
        e.currentTarget.parentElement?.nextSibling?.lastChild
      inputObra.value = ''
      setObra(obraVazia)
    } else {
      setFirstChangeNaturezaMov(false)
      setNaturezaMovimentacao(valor_elemento)
      setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
      setPedidoAcrescimoCargos([solicitacao_funcionario_inicial])
      setObra(obraVazia)
      setInclusaoPedidosAdmissaoVagas([])
      setPedidosFuncionarios([solicitacao_funcionario_inicial])
    }
    setFirstChangeObra(true)
    setNaturezaMovimentacao(valor_elemento)
    setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
    setPedidoAcrescimoCargos([solicitacao_funcionario_inicial])
    setObra(obraVazia)
    setInclusaoPedidosAdmissaoVagas([])
    setPedidosFuncionarios([solicitacao_funcionario_inicial])
  }
  const changePreNaturezaMov = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    setObservacaoGeral('')
    setAdmissaoNaABertura(false)
    setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
    setPedidoAcrescimoCargos([solicitacao_funcionario_inicial])
    setObra(obraVazia)
    setInclusaoPedidosAdmissaoVagas([])
    setPedidosFuncionarios([solicitacao_funcionario_inicial])
    setNaturezaMovimentacao('')
    setFirstChangeObra(true)
    setPreNaturezaMovimentacao(e.target.value)
  }
  const changeAdmissaoNaAbertura = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    SetMensagemErro('')
    const valor_elemento = e.currentTarget.value
    if (valor_elemento == 'sim') {
      setAdmissaoNaABertura(true)
    } else {
      setAdmissaoNaABertura(false)
    }
  }
  const changeCodigoVaga = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidoAcrescimoCargos]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    console.log(valor_elemento)
    const elemento = nova_lista.filter(isElement)[0]
    if (valor_elemento.split(' - ')[2] != undefined) {
      elemento.sigla =
        valor_elemento.split(' - ')[1] + ' - ' + valor_elemento.split(' - ')[2]
    } else {
      elemento.sigla = valor_elemento.split(' - ')[1]
    }
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidoAcrescimoCargos(nova_lista)
  }
  const changeObra = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const valor_elemento = e.currentTarget.value
    function isElement(obra: Obra) {
      return obra.descricao_completa == valor_elemento
    }
    function isVagaDisponivel(vaga: Vaga) {
      return vaga.situacao == 'disponivel'
    }
    function isVagaOcupada(vaga: Vaga) {
      return vaga.situacao == 'ocupada'
    }
    let obra_encontrada = null
    if (empresaSelecionada == 'Cantaria') {
      obra_encontrada = obrasCantaria.filter(isElement)[0]
      const equipe = obra_encontrada.equipe
      setObra(obra_encontrada)
      const vagas_disponiveis = equipe.filter(isVagaDisponivel)
      const equipe_empregada = equipe.filter(isVagaOcupada)
      setEquipeDisponivel(equipe_empregada)
      setVagasDisponiveis(vagas_disponiveis)
    } else {
      obra_encontrada = obrasSantaBarbara.filter(isElement)[0]
      const equipe = obra_encontrada.equipe
      setObra(obra_encontrada)
      const vagas_disponiveis = equipe.filter(isVagaDisponivel)
      const equipe_empregada = equipe.filter(isVagaOcupada)
      setEquipeDisponivel(equipe_empregada)
      setVagasDisponiveis(vagas_disponiveis)
    }
    if (
      naturezaMovimentacao != 'AberturaVaga' &&
      naturezaMovimentacao != 'Transferencia' &&
      firstChangeObra == false
    ) {
      setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
      const inputVaga: any =
        e.currentTarget.parentElement?.nextSibling?.nextSibling?.nextSibling
          ?.firstChild?.lastChild
      if (inputVaga != null) {
        inputVaga.value = ''
      }
      // inputColaborador.value = ''
    } else if (
      naturezaMovimentacao != 'AberturaVaga' &&
      naturezaMovimentacao != 'Transferencia'
    ) {
      setFirstChangeObra(false)
    }
    if (naturezaMovimentacao == 'Transferencia' && firstChangeObra == false) {
      const inputColaborador: any =
        e.currentTarget.parentElement?.nextSibling?.nextSibling?.lastChild
      if (inputColaborador != null) {
        inputColaborador.value = ''
      }
    } else if (naturezaMovimentacao == 'Transferencia') {
      setFirstChangeObra(false)
    }
    if (naturezaMovimentacao == 'AberturaVaga') {
      const inputCargo: any =
        e.currentTarget.parentElement?.nextSibling?.firstChild?.nextSibling
          ?.firstChild?.lastChild
      const inputQuantCargo: any =
        e.currentTarget.parentElement?.nextSibling?.firstChild?.nextSibling
          ?.lastChild?.lastChild
      if (inputCargo != null) {
        inputCargo.value = ''
      }
      if (inputQuantCargo != null) {
        inputQuantCargo.value = ''
      }
      const inputInclusaoAdmissaoInterno = document.getElementsByClassName(
        'inputQuantidadeVagasAcrescimo'
      )
      const exercicesId: any = Array.from(new Set(inputInclusaoAdmissaoInterno))
      exercicesId.map((inputInclusao: any) => {
        if (inputInclusao != null) {
          inputInclusao.value = '1'
        }
      })
      const inputInclusaoAdmissaoExterno = document.getElementsByClassName(
        'inputIncluirAdmissaoVagas'
      )
      const exercicesIdDois: any = Array.from(
        new Set(inputInclusaoAdmissaoExterno)
      )
      exercicesIdDois.map((inputInclusao: any) => {
        if (inputInclusao != null) {
          inputInclusao.value = 'nao'
        }
      })
      setAdmissaoNaABertura(false)
    }
    console.log(vagasDisponiveis)
    const nova_lista = [...pedidoAcrescimoCargos]
    nova_lista.length = 0
    nova_lista.push(solicitacao_funcionario_inicial)
    setPedidoAcrescimoCargos(nova_lista)
    setPedidosFuncionarios([solicitacao_funcionario_inicial])
    pedidosFuncionarios.map((pedido) => (pedido.novo_cargo = ''))
    const inputInputColaborador =
      document.getElementsByClassName('inputColaborador')
    const exercicesIdTres: any = Array.from(new Set(inputInputColaborador))
    exercicesIdTres.map((inputColaborador: any) => {
      if (inputColaborador != null) {
        inputColaborador.value = ''
      }
    })
    const inputInputImediato = document.getElementsByClassName(
      'inputDesligamentoTransferenciaImediata'
    )
    const exercicesIdQuatro: any = Array.from(new Set(inputInputImediato))
    exercicesIdQuatro.map((inputImediato: any) => {
      if (inputImediato != null) {
        inputImediato.value = 'sim'
      }
    })
    const inputInputRemocao = document.getElementsByClassName(
      'inputDesligamentoTransferenciaRemocao'
    )
    const exercicesIdCinco: any = Array.from(new Set(inputInputRemocao))
    exercicesIdCinco.map((inputRemocao: any) => {
      if (inputRemocao != null) {
        inputRemocao.value = 'nao'
      }
    })

    const inputInputNovoCargo =
      document.getElementsByClassName('inputHoraExtra')
    const exercicesIdSeis: any = Array.from(new Set(inputInputNovoCargo))
    exercicesIdSeis.map((inputNovoCargo: any) => {
      if (inputNovoCargo != null) {
        inputNovoCargo.value = ''
      }
    })
    setInclusaoPedidosRemocaoVagas([])
    setRemocaoNoDesligamentoTransferencia(false)
  }
  const changeObraDestino = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const valor_elemento = e.currentTarget.value
    function isElement(obra: Obra) {
      return obra.descricao_completa == valor_elemento
    }
    let obra_encontrada = obrasCantaria.filter(isElement)[0]
    if (obra_encontrada) {
      setObraDestino(obra_encontrada)
    } else {
      obra_encontrada = obrasSantaBarbara.filter(isElement)[0]
      setObraDestino(obra_encontrada)
    }
    console.log(obra.nome)
    console.log(obraDestino.nome)
  }
  const changeColaboradorSelecionado = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    console.log(valor_elemento)
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.dias_horas_extras = []
    elemento.faltas = []
    elemento.dias_adicionais = []
    let cargos_possiveis: Cargo[] = []
    cargos_possiveis = [...cargosPossiveis]
    cargos_possiveis = cargos_possiveis.filter(
      (cargo) => cargo.sigla == valor_elemento.split(' - ')[0].slice(2, 4)
    )
    elemento.novo_cargo = ''
    elemento.possiveis_promocoes = cargos_possiveis[0].promocoes_possiveis
    elemento.id_pessoa = valor_elemento.split(' - ')[0]
    elemento.nome = valor_elemento.split(' - ')[1]
    if (valor_elemento.split(' - ')[3] != undefined) {
      elemento.cargo =
        valor_elemento.split(' - ')[2] + ' - ' + valor_elemento.split(' - ')[3]
    } else {
      elemento.cargo = valor_elemento.split(' - ')[2]
    }
    nova_lista.map((elemento) => (elemento.novo_cargo = ''))
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
    const inputInputNovoCargo =
      document.getElementsByClassName('inputHoraExtra')
    const exercicesId: any = Array.from(new Set(inputInputNovoCargo))
    exercicesId.map((inputNovoCargo: any) => {
      if (inputNovoCargo != null) {
        inputNovoCargo.value = ''
      }
    })
  }
  const changeInicioFerias = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const ano_data = valor_elemento.split('-')[0]
    const mes_data = valor_elemento.split('-')[1]
    const dia_data = valor_elemento.split('-')[2]
    const data_ptBr = dia_data + '/' + mes_data + '/' + ano_data
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.data_inicio_ferias = data_ptBr
    elemento.data_final_ferias = ''
    const inputInputFinalFerias = document.getElementsByClassName(
      id_elemento + 'finalFerias'
    )
    const exercicesId: any = Array.from(new Set(inputInputFinalFerias))
    exercicesId.map((inputFinalFerias: any) => {
      if (inputFinalFerias != null) {
        inputFinalFerias.value = ''
      }
    })
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeFinalFerias = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const ano_data = valor_elemento.split('-')[0]
    const mes_data = valor_elemento.split('-')[1]
    const dia_data = valor_elemento.split('-')[2]
    const data_ptBr = dia_data + '/' + mes_data + '/' + ano_data
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.data_final_ferias = data_ptBr
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeImediato = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (valor_elemento == 'sim') {
      elemento.imediato = true
      if (naturezaMovimentacao == 'Transferencia') {
        elemento.data_transferencia = ''
      } else {
        elemento.data_desligamento = ''
      }
    } else {
      elemento.imediato = false
    }
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeDataDesligamentoTransferencia = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const ano_data = valor_elemento.split('-')[0]
    const mes_data = valor_elemento.split('-')[1]
    const dia_data = valor_elemento.split('-')[2]
    const data_ptBr = dia_data + '/' + mes_data + '/' + ano_data
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (naturezaMovimentacao == 'Transferencia') {
      elemento.data_transferencia = data_ptBr
    } else if (naturezaMovimentacao == 'Desligamento') {
      elemento.data_desligamento = data_ptBr
    }
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeNovoCargo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.novo_cargo = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeRemocaoVaga = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id.split(';')[0]
    const codigo_vaga_remocao = e.currentTarget.id.split(';')[1]
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    function isVaga(vaga: SolicitacaoFuncionario) {
      return vaga.codigo_vaga == codigo_vaga_remocao
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (valor_elemento == 'sim') {
      elemento.remocaoNoDesligamentoTransferencia = true
      const pedidoRemocaoVaga = {
        id: contadorRemocao.toString(),
        codigo_vaga: elemento.id_pessoa,
        cargo: elemento.cargo,
        incluir: false,
        sigla: '',
        quantidade_pedida: 1,
        status: 'aberto',
        tipo_admissao: '',
        nome: '',
        rg: '',
        cpf: '',
        contato: '',
        novo_cargo: '',
        possiveis_promocoes: [],
        id_pessoa: '',
        obra_atual: '',
        imediato: true,
        data_transferencia: '',
        data_inicio_ferias: '',
        data_final_ferias: '',
        data_desligamento: '',
        data_falta_atual: '',
        data_adicional_atual: '',
        data_horas_extra_atual: '',
        dia_horas_extra_atual: '',
        horas_extra_data_atual: '',
        faltas: [],
        dias_adicionais: [],
        dias_horas_extras: [],
        remocaoNoDesligamentoTransferencia: false
      }
      const nova_lista_remocoes = [...inclusaoPedidosRemocaoVaga]
      nova_lista_remocoes.push(pedidoRemocaoVaga)
      setInclusaoPedidosRemocaoVagas(nova_lista_remocoes)
      setRemocaoNoDesligamentoTransferencia(true)
    } else {
      const nova_lista_remocoes = [...inclusaoPedidosRemocaoVaga]
      const lista_modificada = nova_lista_remocoes.filter(
        (obj) => obj.codigo_vaga !== codigo_vaga_remocao
      )
      setInclusaoPedidosRemocaoVagas(lista_modificada)
      let verificandoRemocoes = false
      elemento.remocaoNoDesligamentoTransferencia = false
      pedidosFuncionarios.map((pedido) => {
        if (pedido.remocaoNoDesligamentoTransferencia == true) {
          verificandoRemocoes = true
        }
      })
      if (verificandoRemocoes == false) {
        setRemocaoNoDesligamentoTransferencia(false)
      }
    }
    remocaoNoDesligamentoTransferencia
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeDataFaltasAdicional = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    function ConversorData(numero: number) {
      if (numero >= 0 && numero < 5) {
        return 'semana'
      } else if (numero == 6) {
        return 'domingo'
      } else {
        return 'sabado'
      }
    }
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const ano_data = valor_elemento.split('-')[0]
    const mes_data = valor_elemento.split('-')[1]
    const dia_data = valor_elemento.split('-')[2]
    const data_ptBr = dia_data + '/' + mes_data + '/' + ano_data
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (naturezaMovimentacao == 'Faltas') {
      elemento.data_falta_atual = data_ptBr
    } else if (naturezaMovimentacao == 'Adicional') {
      elemento.data_adicional_atual = data_ptBr
    } else if (naturezaMovimentacao == 'HorasExtras') {
      const data_determinada: Date = new Date(
        ano_data + '-' + mes_data + '-' + dia_data
      )
      const dia_semana = data_determinada.getDay()
      const tipo_dia_semana = ConversorData(dia_semana)
      console.log(tipo_dia_semana)
      elemento.dia_horas_extra_atual = tipo_dia_semana
      elemento.data_horas_extra_atual = data_ptBr
    }
    console.log(elemento)
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeHorasExtra = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.horas_extra_data_atual = valor_elemento
    console.log(elemento)
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
  }
  const changeVagaSelecionada = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.codigo_vaga = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const changeTipoAdmissao = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.tipo_admissao = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const changeNomeAdmissao = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.nome = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const changeRGAdmissao = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.rg = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const changeCPFAdmissao = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...pedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.cpf = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const changeTipoAdmissaoInclusao = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMensagemErroInclusao('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...inclusaoPedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.tipo_admissao = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setInclusaoPedidosAdmissaoVagas(nova_lista)
  }
  const changeNomeAdmissaoInclusao = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMensagemErroInclusao('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...inclusaoPedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.nome = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setInclusaoPedidosAdmissaoVagas(nova_lista)
  }
  const changeRGAdmissaoInclusao = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMensagemErroInclusao('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...inclusaoPedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.rg = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setInclusaoPedidosAdmissaoVagas(nova_lista)
  }
  const changeCPFAdmissaoInclusao = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMensagemErroInclusao('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...inclusaoPedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.cpf = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setInclusaoPedidosAdmissaoVagas(nova_lista)
  }
  const changeInclusaoAdmissao = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMensagemErroInclusao('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...inclusaoPedidosAdmissaoVaga]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (valor_elemento == 'sim') {
      elemento.incluir = true
    } else {
      elemento.incluir = false
    }
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setInclusaoPedidosAdmissaoVagas(nova_lista)
  }
  const changeQuantidadeVaga = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const valor_elemento = e.currentTarget.value
    e.currentTarget.value = valor_elemento
    const nova_lista = [...pedidoAcrescimoCargos]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.quantidade_pedida = parseInt(valor_elemento)
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidoAcrescimoCargos(nova_lista)
  }
  const adicionarFalta = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (!elemento.faltas.includes(elemento.data_falta_atual)) {
      elemento.faltas.push(elemento.data_falta_atual)
    }
    elemento.data_falta_atual = ''
    nova_lista.map((elemento) => (elemento.data_falta_atual = ''))
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
    const inputInputDataFaltaAdicional = document.getElementsByClassName(
      'inputDataFaltaDiaAdicional'
    )
    const exercicesId: any = Array.from(new Set(inputInputDataFaltaAdicional))
    exercicesId.map((inputFaltaAdicional: any) => {
      if (inputFaltaAdicional != null) {
        inputFaltaAdicional.value = ''
      }
    })
  }
  const adicionarHorasExtras = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    function isDataSelecionada(pedido: DiaHoraExtra) {
      return pedido.dia == elemento.data_horas_extra_atual
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    const dias_repetidos = elemento.dias_horas_extras.filter(isDataSelecionada)
    if (dias_repetidos.length == 0 && elemento.horas_extra_data_atual != '') {
      const dia_a_inserir = {
        id: dias_repetidos.length + 1,
        dia: elemento.data_horas_extra_atual,
        horas: elemento.horas_extra_data_atual
      }
      elemento.dias_horas_extras.push(dia_a_inserir)
    }
    elemento.data_horas_extra_atual = ''
    elemento.horas_extra_data_atual = ''
    elemento.dia_horas_extra_atual = ''
    nova_lista.map((elemento) => {
      elemento.data_horas_extra_atual = ''
      elemento.horas_extra_data_atual = ''
      elemento.dia_horas_extra_atual = ''
    })
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
    const inputInputHoraExtra =
      document.getElementsByClassName('inputHoraExtra')
    const exercicesId: any = Array.from(new Set(inputInputHoraExtra))
    exercicesId.map((inputHoraExtra: any) => {
      if (inputHoraExtra != null) {
        inputHoraExtra.value = ''
      }
    })
    const inputInputDataFaltaAdicional = document.getElementsByClassName(
      'inputDataFaltaDiaAdicional'
    )
    const exercicesIdDois: any = Array.from(
      new Set(inputInputDataFaltaAdicional)
    )
    exercicesIdDois.map((inputFaltaAdicional: any) => {
      if (inputFaltaAdicional != null) {
        inputFaltaAdicional.value = ''
      }
    })
  }
  const adicionarDiaAdicional = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    SetMensagemErro('')
    const id_elemento = e.currentTarget.id
    const nova_lista = [...pedidosFuncionarios]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    if (!elemento.dias_adicionais.includes(elemento.data_adicional_atual)) {
      elemento.dias_adicionais.push(elemento.data_adicional_atual)
    }
    elemento.data_adicional_atual = ''
    nova_lista.map((elemento) => (elemento.data_adicional_atual = ''))
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setPedidosFuncionarios(nova_lista)
    const inputInputDataFaltaAdicional = document.getElementsByClassName(
      'inputDataFaltaDiaAdicional'
    )
    const exercicesId: any = Array.from(new Set(inputInputDataFaltaAdicional))
    exercicesId.map((inputFaltaAdicional: any) => {
      if (inputFaltaAdicional != null) {
        inputFaltaAdicional.value = ''
      }
    })
    console.log(nova_lista)
  }
  const removerDiaAdicional = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id.split(';')[0]
    const data_dia = e.currentTarget.id.split(';')[1]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    if (pedidosFuncionarios.length != 1) {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = nova_lista.findIndex(isElement)
      const elemento = nova_lista.filter(isElement)[0]
      const lista_modificada = elemento.dias_adicionais.filter(
        (obj) => obj !== data_dia
      )
      elemento.dias_adicionais = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    } else {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = 0
      const elemento = nova_lista[0]
      const lista_modificada = elemento.dias_adicionais.filter(
        (obj) => obj !== data_dia
      )
      elemento.dias_adicionais = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    }
  }
  const removerHorasExtras = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id_elemento = e.currentTarget.id.split(';')[0]
    const data_dia = e.currentTarget.id.split(';')[1]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    if (pedidosFuncionarios.length != 1) {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = nova_lista.findIndex(isElement)
      const elemento = nova_lista.filter(isElement)[0]
      const nova_lista_horas_extra = elemento.dias_horas_extras
      const lista_modificada = nova_lista_horas_extra.filter(
        (obj) => obj.dia !== data_dia
      )
      elemento.dias_horas_extras = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    } else {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = 0
      const elemento = nova_lista[0]
      const nova_lista_horas_extra = elemento.dias_horas_extras
      const lista_modificada = nova_lista_horas_extra.filter(
        (obj) => obj.dia !== data_dia
      )
      elemento.dias_horas_extras = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    }
  }
  const removerFalta = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id_elemento = e.currentTarget.id.split(';')[0]
    const data_dia = e.currentTarget.id.split(';')[1]
    function isElement(pedido: SolicitacaoFuncionario) {
      return pedido.id == id_elemento
    }
    if (pedidosFuncionarios.length != 1) {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = nova_lista.findIndex(isElement)
      const elemento = nova_lista.filter(isElement)[0]
      const lista_modificada = elemento.faltas.filter((obj) => obj !== data_dia)
      elemento.faltas = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    } else {
      SetMensagemErro('')
      const nova_lista = [...pedidosFuncionarios]
      const indice_elemento = 0
      const elemento = nova_lista[0]
      const lista_modificada = elemento.faltas.filter((obj) => obj !== data_dia)
      elemento.faltas = lista_modificada
      nova_lista.splice(indice_elemento, 1)
      nova_lista.splice(indice_elemento, 0, elemento)
      setPedidosFuncionarios(nova_lista)
    }
  }
  const adicionarAcrescimoVaga = () => {
    SetMensagemErro('')
    const nova_lista = [...pedidoAcrescimoCargos]
    const ultimo_item = nova_lista.at(-1)
    const id_ultimo = ultimo_item?.id
    let novo_id
    if (id_ultimo != undefined) {
      novo_id = id_ultimo + 1
    } else {
      novo_id = 1
    }
    const novo_acrescimo = {
      id: novo_id.toString(),
      incluir: false,
      sigla: '',
      quantidade_pedida: 1,
      status: '',
      codigo_vaga: '',
      tipo_admissao: '',
      nome: '',
      rg: '',
      cpf: '',
      contato: '',
      cargo: '',
      novo_cargo: '',
      possiveis_promocoes: [],
      id_pessoa: '',
      obra_atual: '',
      imediato: true,
      data_transferencia: '',
      data_inicio_ferias: '',
      data_final_ferias: '',
      data_desligamento: '',
      data_falta_atual: '',
      data_adicional_atual: '',
      data_horas_extra_atual: '',
      dia_horas_extra_atual: '',
      horas_extra_data_atual: '',
      faltas: [],
      dias_adicionais: [],
      dias_horas_extras: [],
      remocaoNoDesligamentoTransferencia: false
    }
    nova_lista.push(novo_acrescimo)
    setPedidoAcrescimoCargos(nova_lista)
  }
  const adicionarAdmissaoVaga = () => {
    SetMensagemErro('')
    const nova_lista = [...pedidosAdmissaoVaga]
    const ultimo_item = nova_lista.at(-1)
    const id_ultimo = ultimo_item?.id
    let novo_id
    if (id_ultimo != undefined) {
      novo_id = id_ultimo + 1
    } else {
      novo_id = 1
    }
    const nova_admissao = {
      id: novo_id.toString(),
      incluir: false,
      sigla: '',
      quantidade_pedida: 1,
      status: '',
      codigo_vaga: '',
      tipo_admissao: '',
      nome: '',
      rg: '',
      cpf: '',
      contato: '',
      cargo: '',
      novo_cargo: '',
      possiveis_promocoes: [],
      id_pessoa: '',
      obra_atual: '',
      imediato: true,
      data_transferencia: '',
      data_inicio_ferias: '',
      data_final_ferias: '',
      data_desligamento: '',
      data_falta_atual: '',
      data_adicional_atual: '',
      data_horas_extra_atual: '',
      dia_horas_extra_atual: '',
      horas_extra_data_atual: '',
      faltas: [],
      dias_adicionais: [],
      dias_horas_extras: [],
      remocaoNoDesligamentoTransferencia: false
    }
    nova_lista.push(nova_admissao)
    setPedidosAdmissaoVagas(nova_lista)
  }
  const adicionarSolicitacaoFuncionario = () => {
    SetMensagemErro('')
    const nova_lista = [...pedidosFuncionarios]
    const ultimo_item = nova_lista.at(-1)
    const id_ultimo = ultimo_item?.id
    let novo_id
    if (id_ultimo != undefined) {
      novo_id = id_ultimo + 1
    } else {
      novo_id = 1
    }
    const nova_admissao = {
      id: novo_id.toString(),
      incluir: false,
      sigla: '',
      quantidade_pedida: 1,
      status: '',
      codigo_vaga: '',
      tipo_admissao: '',
      nome: '',
      rg: '',
      cpf: '',
      contato: '',
      cargo: '',
      novo_cargo: '',
      possiveis_promocoes: [],
      id_pessoa: '',
      obra_atual: '',
      imediato: true,
      data_transferencia: '',
      data_inicio_ferias: '',
      data_final_ferias: '',
      data_desligamento: '',
      data_falta_atual: '',
      data_adicional_atual: '',
      data_horas_extra_atual: '',
      dia_horas_extra_atual: '',
      horas_extra_data_atual: '',
      faltas: [],
      dias_adicionais: [],
      dias_horas_extras: [],
      remocaoNoDesligamentoTransferencia: false
    }
    nova_lista.push(nova_admissao)
    setPedidosFuncionarios(nova_lista)
  }
  const solicitarCompra = () => {
    const texto_erro = document.getElementById('mensagemErro')
    texto_erro?.scrollIntoView()
    if (obra.nome == '') {
      const texto_erro = document.getElementById('mensagemErro')
      texto_erro?.scrollIntoView()
      if (naturezaMovimentacao == 'Transferencia') {
        SetMensagemErro('A obra de origem precisa ser definida!')
      } else {
        SetMensagemErro('A obra precisa ser definida!')
      }
    } else {
      let erro = ''
      if (naturezaMovimentacao == 'AberturaVaga') {
        const conjunto_pedido_abertura_vagas: string[] = []
        pedidoAcrescimoCargos.map((pedido) => {
          if (pedido.sigla == '') {
            erro = 'yes'
            SetMensagemErro('Todos os cargos pedidos devem ser definidos!')
          } else if (pedido.quantidade_pedida < 1) {
            erro = 'yes'
            SetMensagemErro(
              'Todos os cargos pedidos devem ter quantidades definidas!'
            )
          }
          conjunto_pedido_abertura_vagas.push(pedido.sigla)
          const duplicates = conjunto_pedido_abertura_vagas.filter(
            (item, index) =>
              conjunto_pedido_abertura_vagas.indexOf(item) !== index
          )
          if (duplicates.length > 0) {
            erro = 'yes'
            SetMensagemErro('Há vagas repetidas no seu pedido de abertura!')
          }
        })

        if (erro == '') {
          SetMensagemErro('')
          SetSituacaoPedido('confirmando')
        }
      } else if (
        naturezaMovimentacao == 'Admissao' ||
        naturezaMovimentacao == 'RemocaoVaga'
      ) {
        console.log('hi')
        console.log(pedidosAdmissaoVaga)
        console.log(equipeDisponivel)
        const valores_vagas: string[] = []
        pedidosAdmissaoVaga.map((pedido) => {
          if (
            naturezaMovimentacao == 'Admissao' &&
            pedido.codigo_vaga.slice(2, 4) == 'ES'
          ) {
            pedido.tipo_admissao = 'estagiario'
          }
          if (vagasDisponiveis.length == 0) {
            erro = 'yes'
          } else if (pedido.codigo_vaga == '') {
            erro = 'yes'
            if (naturezaMovimentacao == 'Admissao')
              SetMensagemErro(
                'É necessário indicar uma vaga existente para cada admissão pedida!'
              )
            else {
              SetMensagemErro(
                'É necessário indicar uma vaga para cada remoção pedida!'
              )
            }
          } else if (
            naturezaMovimentacao == 'Admissao' &&
            pedido.tipo_admissao == ''
          ) {
            erro = 'yes'
            SetMensagemErro(
              "É preciso assinalar o 'Tipo de Admissão' para todos os pedidos!"
            )
          } else if (naturezaMovimentacao == 'Admissao' && pedido.nome == '') {
            erro = 'yes'
            SetMensagemErro(
              'É preciso indicar um nome para todas as admissões pedidas!'
            )
          } else if (naturezaMovimentacao == 'Admissao' && pedido.rg == '') {
            erro = 'yes'
            SetMensagemErro(
              'É preciso indicar um RG para todas as admissões pedidas!'
            )
          } else if (naturezaMovimentacao == 'Admissao' && pedido.cpf == '') {
            erro = 'yes'
            SetMensagemErro(
              'É preciso indicar um CPF para todas as admissões pedidas!'
            )
          }
          valores_vagas.push(pedido.codigo_vaga)
        })
        const duplicates = valores_vagas.filter(
          (item, index) => valores_vagas.indexOf(item) !== index
        )
        if (duplicates.length > 0) {
          erro = 'yes'
          if (naturezaMovimentacao == 'RemocaoVaga')
            SetMensagemErro(
              'Só é possível fazer um pedido de remoção por vaga!'
            )
          else {
            SetMensagemErro(
              'Só é possível fazer um pedido de admissão por vaga disponível!'
            )
          }
        }
        if (erro == '') {
          SetMensagemErro('')
          SetSituacaoPedido('confirmando')
        }
      } else if (
        naturezaMovimentacao == 'Transferencia' ||
        naturezaMovimentacao == 'Desligamento'
      ) {
        if (
          naturezaMovimentacao == 'Transferencia' &&
          obra.descricao_completa == obraDestino.descricao_completa
        ) {
          erro = 'yes'
          SetMensagemErro('')
        } else {
          const conjunto_Funcionarios: string[] = []
          pedidosFuncionarios.map((pedido) => {
            if (equipeDisponivel.length == 0) {
              erro = 'yes'
              SetMensagemErro('')
            } else if (pedido.id_pessoa == '') {
              erro = 'yes'
              SetMensagemErro(
                'Todos os colaboradores do pedido precisam ser definidos!'
              )
            } else if (
              naturezaMovimentacao == 'Transferencia' &&
              pedido.imediato == false &&
              pedido.data_transferencia == ''
            ) {
              erro = 'yes'
              SetMensagemErro(
                'Todas as datas de transferência precisam estar assinaladas!'
              )
            } else if (
              naturezaMovimentacao == 'Desligamento' &&
              pedido.imediato == false &&
              pedido.data_desligamento == ''
            ) {
              erro = 'yes'
              SetMensagemErro(
                'Todas as datas de desligamento precisam estar assinaladas!'
              )
            }
            conjunto_Funcionarios.push(pedido.id_pessoa)
          })
          const duplicates_conjunto_pessoas = conjunto_Funcionarios.filter(
            (item, index) => conjunto_Funcionarios.indexOf(item) !== index
          )
          if (duplicates_conjunto_pessoas.length > 0) {
            erro = 'yes'
            if (naturezaMovimentacao == 'Transferencia') {
              SetMensagemErro(
                'Só é possível solicitar uma transferência por pessoa!'
              )
            } else {
              SetMensagemErro(
                'Há mais de um pedido de desligamento para a mesma pessoa!'
              )
            }
          }
          if (erro == '') {
            SetMensagemErro('')
            SetSituacaoPedido('confirmando')
          }
        }
        // } else if (erro == 'quantidade') {
        //   SetMensagemErro(
        //     'Todos os itens da lista precisam ter quantidades definidas!'
        //   )
        //   const texto_erro = document.getElementById('mensagemErro')
        //   texto_erro?.scrollIntoView()
        // } else if (erro == 'descricao') {
        //   SetMensagemErro('Todos os itens da lista precisam ter uma descrição!')
        //   const texto_erro = document.getElementById('mensagemErro')
        //   texto_erro?.scrollIntoView()
        // } else if (erro == 'centrocusto') {
        //   SetMensagemErro(
        //     'Todos os itens da lista precisam ter o centro de custo definido!'
        //   )
        //   const texto_erro = document.getElementById('mensagemErro')
        //   texto_erro?.scrollIntoView()
        // } else if (erro == '') {
        //   SetMensagemErro('')
        //   SetSituacaoPedido('confirmando')
        // }
      } else if (naturezaMovimentacao == 'Ferias') {
        const conjunto_Funcionarios: string[] = []
        pedidosFuncionarios.map((pedido) => {
          if (pedido.id_pessoa == '') {
            erro = 'yes'
            SetMensagemErro(
              'Todos os colaboradores do pedido precisam ser definidos!'
            )
          } else if (
            pedido.data_inicio_ferias == '' ||
            pedido.data_final_ferias == ''
          ) {
            erro = 'yes'
            SetMensagemErro(
              'O período completo de férias deve estar assinalado para todos os pedidos!'
            )
          }
          conjunto_Funcionarios.push(pedido.id_pessoa)
        })
        const duplicates_conjunto_pessoas = conjunto_Funcionarios.filter(
          (item, index) => conjunto_Funcionarios.indexOf(item) !== index
        )
        if (duplicates_conjunto_pessoas.length > 0) {
          erro = 'yes'
          SetMensagemErro(
            'Só é possível solicitar um período de férias por pessoa!'
          )
        }
        if (erro == '') {
          SetMensagemErro('')
          SetSituacaoPedido('confirmando')
        }
      } else if (
        naturezaMovimentacao == 'Adicional' ||
        naturezaMovimentacao == 'Faltas' ||
        naturezaMovimentacao == 'HorasExtras'
      ) {
        const conjunto_Funcionarios: string[] = []
        pedidosFuncionarios.map((pedido) => {
          if (pedido.id_pessoa == '') {
            erro = 'yes'
            SetMensagemErro(
              'Todos os colaboradores do pedido precisam ser definidos!'
            )
          } else if (
            naturezaMovimentacao == 'Adicional' &&
            pedido.dias_adicionais.length == 0
          ) {
            erro = 'yes'
            SetMensagemErro(
              'É necessário assinalar pelo menos um dia adicional para cada solicitação pessoal!'
            )
          } else if (
            naturezaMovimentacao == 'Faltas' &&
            pedido.faltas.length == 0
          ) {
            erro = 'yes'
            SetMensagemErro(
              'É necessário assinalar pelo menos uma falta para cada solicitação!'
            )
          } else if (
            naturezaMovimentacao == 'HorasExtras' &&
            pedido.dias_horas_extras.length == 0
          ) {
            erro = 'yes'
            SetMensagemErro(
              'É necessário assinalar pelo menos um dia com horas extras por solicitação!'
            )
          }
          conjunto_Funcionarios.push(pedido.id_pessoa)
        })
        const duplicates_conjunto_pessoas = conjunto_Funcionarios.filter(
          (item, index) => conjunto_Funcionarios.indexOf(item) !== index
        )
        if (duplicates_conjunto_pessoas.length > 0) {
          erro = 'yes'
          SetMensagemErro(
            'Não é permitido repetir a mesma pessoa em mais de uma solicitação!'
          )
        }
        if (erro == '') {
          SetMensagemErro('')
          SetSituacaoPedido('confirmando')
        }
      } else if (naturezaMovimentacao == 'Promocao') {
        const conjunto_Funcionarios: string[] = []
        pedidosFuncionarios.map((pedido) => {
          if (pedido.id_pessoa == '') {
            erro = 'yes'
            SetMensagemErro(
              'Todos os colaboradores do pedido de promoção devem ser definidos!'
            )
          } else if (pedido.novo_cargo == '') {
            erro = 'yes'
            SetMensagemErro(
              'É necessário indicar um novo cargo para todas as promoções pretendidas!'
            )
          } else {
            if (pedido.novo_cargo.includes(pedido.cargo)) {
              erro = 'yes'
              SetMensagemErro(
                'O cargo de promoção deve ser distinto do cargo atual!'
              )
            } else {
              if (
                pedido.id_pessoa.slice(0, 2) + ' - ' + pedido.cargo ==
                pedido.novo_cargo
              ) {
                erro = 'yes'
                SetMensagemErro(
                  'O cargo de promoção deve ser distinto do cargo atual!'
                )
              }
            }
          }
          conjunto_Funcionarios.push(pedido.id_pessoa)
        })
        const duplicates_conjunto_pessoas = conjunto_Funcionarios.filter(
          (item, index) => conjunto_Funcionarios.indexOf(item) !== index
        )
        if (duplicates_conjunto_pessoas.length > 0) {
          erro = 'yes'
          SetMensagemErro(
            'Não é permitido repetir a mesma pessoa em mais de um pedido de promoção!'
          )
        }
        if (erro == '') {
          SetMensagemErro('')
          SetSituacaoPedido('confirmando')
        }
      }
    }
  }
  const inclusaoAdmissao = () => {
    const texto_erro = document.getElementById('mensagemErro')
    texto_erro?.scrollIntoView()
    if (obra.nome == '') {
      const texto_erro = document.getElementById('mensagemErro')
      texto_erro?.scrollIntoView()
      SetMensagemErro('A Obra precisa ser definida!')
    } else {
      let erro = 'hi'
      if (naturezaMovimentacao == 'AberturaVaga') {
        console.log(pedidoAcrescimoCargos)
        const conjuntoPedidosAcrescimos: string[] = []
        pedidoAcrescimoCargos.map((pedido) => {
          if (pedido.sigla == '') {
            erro = 'yes'
            SetMensagemErro('Todos os cargos pedidos devem ser definidos!')
          } else if (pedido.quantidade_pedida < 1) {
            SetMensagemErro(
              'Todos os cargos pedidos devem ter quantidades definidas!'
            )
            erro = 'yes'
          } else {
            erro = ''
          }
          conjuntoPedidosAcrescimos.push(pedido.sigla)
        })
        const duplicates = conjuntoPedidosAcrescimos.filter(
          (item, index) => conjuntoPedidosAcrescimos.indexOf(item) !== index
        )
        if (duplicates.length > 0) {
          erro = 'yes'
          SetMensagemErro('Há vagas repetidas no seu pedido de abertura!')
        }
        if (erro == '') {
          const pedidosCargos: SolicitacaoFuncionario[] = []
          pedidoAcrescimoCargos.map((pedido: SolicitacaoFuncionario) => {
            {
              Array(pedido.quantidade_pedida)
                .fill(0)
                .map((_, i) => {
                  const pedidoCargo = {
                    id: pedido.sigla + i.toString(),
                    incluir: false,
                    codigo_vaga: `${pedido.sigla} #${i + 1}`,
                    tipo_admissao: '',
                    nome: '',
                    rg: '',
                    cpf: '',
                    contato: '',
                    sigla: '',
                    quantidade_pedida: 1,
                    status: '',
                    cargo: '',
                    novo_cargo: '',
                    possiveis_promocoes: [],
                    id_pessoa: '',
                    obra_atual: '',
                    imediato: true,
                    data_transferencia: '',
                    data_inicio_ferias: '',
                    data_final_ferias: '',
                    data_desligamento: '',
                    data_falta_atual: '',
                    data_adicional_atual: '',
                    data_horas_extra_atual: '',
                    dia_horas_extra_atual: '',
                    horas_extra_data_atual: '',
                    faltas: [],
                    dias_adicionais: [],
                    dias_horas_extras: [],
                    remocaoNoDesligamentoTransferencia: false
                  }
                  pedidosCargos.push(pedidoCargo)
                })
            }
          })
          SetMensagemErro('')
          setInclusaoPedidosAdmissaoVagas(pedidosCargos)
          SetSituacaoPedido('incluindoAdmissao')
        }
      }
    }
  }
  const cancelarConfirmacao = () => {
    const inputInclusaoAdmissaoInterno = document.getElementsByClassName(
      'inputInclusaoAdmissaoInterno'
    )
    const exercicesId: any = Array.from(new Set(inputInclusaoAdmissaoInterno))
    exercicesId.map((inputInclusao: any) => (inputInclusao.value = 'nao'))
    SetSituacaoPedido('solicitando')
  }
  const verificarInclusao = () => {
    let erroInclusao = false
    let mensagemErro = ''
    const grupoDePedidos: string[] = []
    inclusaoPedidosAdmissaoVaga.map((pedido) => {
      if (pedido.incluir == true) {
        if (pedido.codigo_vaga.split(' #')[0] == 'Estagiário') {
          pedido.tipo_admissao = 'estagiario'
        }
        if (pedido.tipo_admissao == '') {
          erroInclusao = true
          mensagemErro =
            'É preciso que todos os pedidos selecionados tenham um tipo de admissão.'
        } else if (pedido.nome == '') {
          erroInclusao = true
          mensagemErro =
            'É preciso que todos os pedidos selecionados tenham o nome preenchido.'
        } else if (pedido.rg == '') {
          erroInclusao = true
          mensagemErro =
            'É preciso que todos os pedidos selecionados tenham o RG preenchido.'
        } else if (pedido.cpf == '') {
          erroInclusao = true
          mensagemErro =
            'É preciso que todos os pedidos selecionados tenham o CPF preenchido.'
        }
      }
      if (pedido.incluir == true) {
        grupoDePedidos.push(pedido.id.toString())
      }
    })
    if (grupoDePedidos.length == 0) {
      erroInclusao = true
      mensagemErro =
        "Você não incluiu solicitação de admissão!\nSe desejar, volte e desmarque a opção 'Incluir pedidos de admissão'."
    }
    if (erroInclusao) {
      setErroInclusao(true)
      setMensagemErroInclusao(mensagemErro)
    } else {
      SetSituacaoPedido('confirmando')
    }
  }
  const enviarSolicitacao = async () => {
    const dataAgora = new Date()
    const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
    const horaDataAgora = dataAgora.getHours()
    const minutosDataAgora = dataAgora.getMinutes()
    const horarioAgora = horaDataAgora + ':' + minutosDataAgora
    let novoPedidoAbertura: SolicitacaoFuncionario[] = []
    let novoPedidoSolicitacao: SolicitacaoFuncionario[] = []
    let novoPedidoRemocoes: SolicitacaoFuncionario[] = []
    if (naturezaMovimentacao == 'AberturaVaga') {
      novoPedidoAbertura = pedidoAcrescimoCargos as SolicitacaoFuncionario[]
      if (admissaoNaAbertura) {
        novoPedidoSolicitacao = inclusaoPedidosAdmissaoVaga
      }
    } else if (naturezaMovimentacao == 'RemocaoVaga') {
      novoPedidoRemocoes = pedidosAdmissaoVaga
    } else if (naturezaMovimentacao == 'Admissao') {
      novoPedidoSolicitacao = pedidosAdmissaoVaga
    } else {
      novoPedidoSolicitacao = pedidosFuncionarios
      if (remocaoNoDesligamentoTransferencia) {
        novoPedidoRemocoes = inclusaoPedidosRemocaoVaga
      }
    }
    const jsonSolicitacaoMP = {
      usuario: nomeusur,
      natureza_solicitacao: naturezaMovimentacao,
      data_solicitacao: dataAgoraBrasil,
      horarioSolicitacao: horarioAgora,
      empresa: empresaSelecionada,
      obra: obra,
      obra_destino: obraDestino,
      pedido_abertura_vagas: novoPedidoAbertura,
      pedido_abertura_inclui_admissao: admissaoNaAbertura,
      pedidos_funcionarios: novoPedidoSolicitacao,
      pedidos_remocao: novoPedidoRemocoes,
      pedido_transferencia_promocao_inclui_abertura:
        aberturaNaTransferenciaPromocao,
      pedido_desligamento_transferencia_promocao_inclui_remocao:
        remocaoNoDesligamentoTransferencia,
      observacao_geral: ObservacaoGeral,
      requisicao: 'criacaoSolicitMovPessoal',
      statusSolicitacao: 'aberto',
      isCardOpen: false,
      altura: 0,
      podeDestrancar: true,
      todosEntregues: ''
    }

    // const jsonCompra = {
    //   usuario: nomeusur,
    //   empresa: empresaSelecionada,
    //   itens: listaCompras,
    //   sugestfornecedor: sugestaoFornecedores,
    //   obsFinal: ObservacaoGeral,
    //   dataLimite: dataLimiteFormatada,
    //   data_solicitacao: dataAgoraBrasil,
    //   horarioSolicitacao: horarioAgora,
    //   statusSolicitacao: 'aberto',
    //   isCardOpen: false,
    //   altura: 0,
    //   editandoEmpresa: false,
    //   novaEmpresa: empresaSelecionada,
    //   editandoDataLimite: false,
    //   novaDataLimite: dataLimiteFormatada,
    //   editandoSugFor: false,
    //   novaSugFor: sugestaoFornecedores,
    //   editandoObsFinal: false,
    //   novaObsFinal: ObservacaoGeral,
    //   podeDestrancar: true,
    //   requisicao: 'criacaoSolicitacao'
    // }
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonSolicitacaoMP)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('sol_mp_recebida')) {
      console.log('Sucesso!')
      SetSituacaoPedido('concluido')
      SetResetPedido('on')
      // mandarEmail('criacaoSolicitacaoMP', nomeusur)
    }
  }
  const requisitarInformacoesMP = async () => {
    const respostaEnvio = await fetch(
      `https://davidsenra.pythonanywhere.com/?type=requestInformacoesMP`
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    const json_resposta = JSON.parse(resposta)
    setObrasCantaria(json_resposta.Obras.Cantaria)
    setObrasSantaBarbara(json_resposta.Obras.StaBarbara)
    setCargosPossiveis(json_resposta.Cargos)
  }
  if (firstLoad) {
    setFirstLoad(false)
    requisitarInformacoesMP()
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
  const NovoPedido = () => {
    setEmpresaSelecionada('')
    setAdmissaoNaABertura(false)
    setNaturezaMovimentacao('')
    setPedidoAcrescimoCargos([])
    setInclusaoPedidosAdmissaoVagas([])
    setPedidosAdmissaoVagas([solicitacao_funcionario_inicial])
    setPedidosFuncionarios([solicitacao_funcionario_inicial])
    SetMensagemErro('')
    setObservacaoGeral('')
    SetSituacaoPedido('solicitando')
    SetResetPedido('off')
    setCargosPossiveis([])
    setEquipeDisponivel([])
    setVagasDisponiveis([])
    setFirstChangeEmpresa(true)
    setFirstChangeNaturezaMov(true)
    setErroInclusao(false)
    setMensagemErroInclusao('')
    setFirstChangeObra(true)
    setObra(obraVazia)
    setObraDestino(obraVazia)
    SetMensagemErro('')
    setObservacaoGeral('')
    setJustificativaGeral('')
  }
  return (
    <>
      <FormularioCompra>
        <h1>Solicitar Movimentação de Pessoal</h1>
        <br></br>
        {ResetPedido == 'off' && (
          <div
            style={
              SituacaoPedido == 'solicitando'
                ? { paddingBottom: '150px' }
                : { display: 'none' }
            }
          >
            <DivEmpresa>
              <label>Empresa:</label>
              <select onChange={(e) => changeEmpresa(e)}>
                <option
                  disabled
                  selected
                  value=""
                  style={{ display: 'none' }}
                ></option>
                <option value="Cantaria">Cantaria</option>
                <option value="Santa Bárbara">Santa Bárbara</option>
              </select>
            </DivEmpresa>
            {empresaSelecionada != '' && (
              <>
                <DivEmpresa>
                  <label>Tipo de Solicitação:</label>
                  <select onChange={(e) => changePreNaturezaMov(e)}>
                    empresa:Cantaria
                    <option
                      disabled
                      selected
                      value=""
                      style={{ display: 'none' }}
                    ></option>
                    <option value="AberturaRemocaoVagas">
                      Vagas, Contratação e Desligamento
                    </option>
                    <option value="TransferenciaPromocao">
                      Transferência ou Promoção
                    </option>
                    <option value="FeriasFaltasHorasExtra">
                      Férias, Faltas e Horas Extra
                    </option>
                  </select>
                </DivEmpresa>
              </>
            )}
            {empresaSelecionada != '' &&
              preNaturezaMovimentacao != '' &&
              preNaturezaMovimentacao == 'AberturaRemocaoVagas' && (
                <>
                  <DivEmpresa>
                    <label>Detalhe da Solicitação:</label>
                    <select onChange={(e) => changeNaturezaMov(e)}>
                      empresa:Cantaria
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      <option value="AberturaVaga">Abertura de Vagas</option>
                      <option value="RemocaoVaga">Remoção de Vagas</option>
                      <option value="Admissao">Admissão</option>
                      <option value="Desligamento">Desligamento</option>
                    </select>
                  </DivEmpresa>
                </>
              )}
            {empresaSelecionada != '' &&
              preNaturezaMovimentacao != '' &&
              preNaturezaMovimentacao == 'TransferenciaPromocao' && (
                <>
                  <DivEmpresa>
                    <label>Detalhe da Solicitação:</label>
                    <select onChange={(e) => changeNaturezaMov(e)}>
                      empresa:Cantaria
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      <option value="Transferencia">
                        Transferência de Obra
                      </option>
                      <option value="Promocao">Promoção</option>
                    </select>
                  </DivEmpresa>
                </>
              )}
            {empresaSelecionada != '' &&
              preNaturezaMovimentacao != '' &&
              preNaturezaMovimentacao == 'FeriasFaltasHorasExtra' && (
                <>
                  <DivEmpresa>
                    <label>Detalhe da Solicitação:</label>
                    <select onChange={(e) => changeNaturezaMov(e)}>
                      empresa:Cantaria
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      <option value="Ferias">Solicitar Férias</option>
                      <option value="Faltas">Assinalar Faltas</option>
                      <option value="Adicional">
                        Assinalar Dia(s) Adicional(is)
                      </option>
                      <option value="HorasExtras">
                        Assinalar Horas Extras
                      </option>
                    </select>
                  </DivEmpresa>
                </>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao != 'Transferencia' && (
                <>
                  <DivEmpresa>
                    <label>Obra:</label>
                    <select onChange={(e) => changeObra(e)}>
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      {empresaSelecionada == 'Cantaria' &&
                        obrasCantaria.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                      {empresaSelecionada == 'Santa Bárbara' &&
                        obrasSantaBarbara.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                    </select>
                  </DivEmpresa>
                </>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao == 'AberturaVaga' && (
                <DivListaAcrescimos>
                  <br></br>
                  {pedidoAcrescimoCargos.map((pedido) => (
                    <DivObraQuantidade
                      key={pedido.id}
                      className="acrescimoCargo"
                    >
                      <DivEmpresa className="acrescimoCargo">
                        <label>Cargo:</label>
                        <select
                          id={pedido.id.toString()}
                          onChange={(e) => changeCodigoVaga(e)}
                        >
                          <option
                            disabled
                            selected
                            value=""
                            style={{ display: 'none' }}
                          ></option>
                          {cargosPossiveis.map((cargo) => (
                            <option key={cargo.sigla} value={cargo.completo}>
                              {cargo.completo}
                            </option>
                          ))}
                        </select>
                      </DivEmpresa>
                      <DivQuantidadeVaga className="acrescimoCargo">
                        <label>Qtd. Vagas:</label>
                        <input
                          id={pedido.id.toString()}
                          name="item"
                          type="number"
                          defaultValue={1}
                          required
                          autoComplete="off"
                          onChange={(e) => changeQuantidadeVaga(e)}
                          className={'inputQuantidadeVagasAcrescimo'}
                        ></input>
                      </DivQuantidadeVaga>
                      {pedidoAcrescimoCargos.length > 1 && (
                        <DivButtonRemoverItem>
                          <button
                            id={pedido.id.toString()}
                            type="button"
                            onClick={(e) => removerPedidoAcrescimo(e)}
                          >
                            X
                          </button>
                        </DivButtonRemoverItem>
                      )}
                    </DivObraQuantidade>
                  ))}

                  {obra.nome != '' && (
                    <DivButtonAdicionarItem>
                      <button type="button" onClick={adicionarAcrescimoVaga}>
                        +
                      </button>
                    </DivButtonAdicionarItem>
                  )}
                  <DivQuantidadeVaga className="justificativaObs">
                    <label>Justificativa/Observação:</label>
                    <textarea
                      name="justificativa"
                      className="observacao"
                      autoComplete="off"
                      onChange={(e) => changeObservacao(e)}
                    ></textarea>
                  </DivQuantidadeVaga>
                  <DivEmpresa>
                    <label>Incluir pedidos de admissão para as vagas?</label>
                    <select
                      id="inputIncluirAdmissaoVagas"
                      className="inputIncluirAdmissaoVagas"
                      onChange={(e) => changeAdmissaoNaAbertura(e)}
                    >
                      <option selected value="nao">
                        Não
                      </option>
                      <option value="sim">Sim</option>
                    </select>
                  </DivEmpresa>
                  {/* {admissaoNaAbertura &&
                    pedidoAcrescimoCargos.map((pedido) => (
                      <div key={pedido.id}>
                        {Array(pedido.quantidade_pedida)
                          .fill(0)
                          .map((_, i) => (
                            <DivEmpresa
                              key={i}
                              id="nao"
                              className="acrescimoCargo"
                            >
                              <label>
                                {pedido.sigla.split(' - ')[1]} #{i + 1}?
                              </label>
                              <select
                                onChange={(e) => {
                                  if (e.target.parentElement != null) {
                                    e.target.parentElement.id = e.target.value
                                  }
                                }}
                              >
                                <option selected value="nao">
                                  Não
                                </option>
                                <option value="sim">Sim</option>
                              </select>
                            </DivEmpresa>
                          ))}
                      </div>
                    ))} */}
                </DivListaAcrescimos>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao == 'Admissao' && (
                <>
                  {obra.nome != '' && vagasDisponiveis.length == 0 && (
                    <>
                      <TextoNaoHaVagas className="first">
                        Não há vagas disponíveis na obra selecionada.
                      </TextoNaoHaVagas>
                      <TextoNaoHaVagas>
                        Favor solicitar a abertura das vagas.
                      </TextoNaoHaVagas>
                    </>
                  )}
                  {obra.nome != '' && vagasDisponiveis.length > 0 && (
                    <>
                      <br></br>
                      <br></br>
                    </>
                  )}
                  {obra.nome != '' &&
                    vagasDisponiveis.length > 0 &&
                    pedidosAdmissaoVaga.map((pedido) => (
                      <>
                        <CardAdmissao key={pedido.id} className="admissaoVaga">
                          <DivEmpresa className="admissaoVaga">
                            <label>Vaga Disp:</label>
                            <select
                              id={pedido.id.toString()}
                              defaultValue={pedido.codigo_vaga}
                              onChange={(e) => changeVagaSelecionada(e)}
                            >
                              <option
                                disabled
                                selected
                                style={{ display: 'none' }}
                              ></option>
                              {vagasDisponiveis.map((vaga) => (
                                <option
                                  key={vaga.id}
                                  value={
                                    vaga.cargo.split(' - ')[2] != undefined
                                      ? vaga.id +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[1] +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[2]
                                      : vaga.id +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[1]
                                  }
                                >
                                  {vaga.cargo.split(' - ')[2] != undefined
                                    ? vaga.id +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[1] +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[2]
                                    : vaga.id +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[1]}
                                </option>
                              ))}
                            </select>
                          </DivEmpresa>
                          <DivEmpresa>
                            <label>Tipo de Admissão:</label>
                            {pedido.codigo_vaga != '' &&
                              pedido.codigo_vaga.slice(2, 4) != 'ES' && (
                                <select
                                  id={pedido.id.toString()}
                                  defaultValue={pedido.tipo_admissao}
                                  onChange={(e) => changeTipoAdmissao(e)}
                                >
                                  <option
                                    disabled
                                    selected
                                    defaultValue=""
                                    style={{ display: 'none' }}
                                  ></option>
                                  <option value="CLT">CLT</option>
                                  <option value="MEI">PJ-MEI</option>
                                </select>
                              )}
                            {pedido.codigo_vaga != '' &&
                              pedido.codigo_vaga.slice(2, 4) == 'ES' && (
                                <TextoEstagio>ESTÁGIO</TextoEstagio>
                              )}
                          </DivEmpresa>
                          <DivNomeVaga className="DadosNome">
                            <label>Nome:</label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="text"
                              defaultValue={pedido.nome}
                              required
                              autoComplete="off"
                              onChange={(e) => changeNomeAdmissao(e)}
                            ></input>
                          </DivNomeVaga>
                          <DivNomeVaga className="DadosPessoais">
                            <label>RG:</label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="text"
                              defaultValue={pedido.rg}
                              required
                              autoComplete="off"
                              onChange={(e) => changeRGAdmissao(e)}
                            ></input>
                          </DivNomeVaga>
                          <DivNomeVaga className="DadosPessoais">
                            <label>CPF:</label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="text"
                              defaultValue={pedido.cpf}
                              required
                              autoComplete="off"
                              onChange={(e) => changeCPFAdmissao(e)}
                            ></input>
                          </DivNomeVaga>
                        </CardAdmissao>
                        {pedidosAdmissaoVaga.length > 1 && (
                          <DivButtonRemoverItem>
                            <button
                              id={pedido.id.toString()}
                              type="button"
                              onClick={(e) => removerPedidoAdmissao(e)}
                              className="removerCard"
                            >
                              X
                            </button>
                          </DivButtonRemoverItem>
                        )}
                      </>
                    ))}
                  {obra.nome != '' &&
                    vagasDisponiveis.length > 0 &&
                    pedidosAdmissaoVaga.length < vagasDisponiveis.length && (
                      <DivButtonAdicionarItem>
                        <button type="button" onClick={adicionarAdmissaoVaga}>
                          +
                        </button>
                      </DivButtonAdicionarItem>
                    )}
                </>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao == 'RemocaoVaga' && (
                <>
                  {obra.nome != '' && vagasDisponiveis.length == 0 && (
                    <>
                      <TextoNaoHaVagas className="first">
                        Não há vagas em aberto na obra selecionada.
                      </TextoNaoHaVagas>
                    </>
                  )}
                  {obra.nome != '' && vagasDisponiveis.length > 0 && (
                    <>
                      <br></br>
                      <br></br>
                    </>
                  )}
                  {obra.nome != '' &&
                    vagasDisponiveis.length > 0 &&
                    pedidosAdmissaoVaga.map((pedido) => (
                      <>
                        <CardAdmissao key={pedido.id} className="RemocaoVagas">
                          <DivEmpresa>
                            <label>Vaga:</label>
                            <select
                              id={pedido.id.toString()}
                              defaultValue={pedido.codigo_vaga}
                              onChange={(e) => changeVagaSelecionada(e)}
                            >
                              <option
                                disabled
                                selected
                                style={{ display: 'none' }}
                              ></option>
                              {vagasDisponiveis.map((vaga) => (
                                <option
                                  key={vaga.id}
                                  value={
                                    vaga.cargo.split(' - ')[2] != undefined
                                      ? vaga.id +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[1] +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[2]
                                      : vaga.id +
                                        ' - ' +
                                        vaga.cargo.split(' - ')[1]
                                  }
                                >
                                  {vaga.cargo.split(' - ')[2] != undefined
                                    ? vaga.id +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[1] +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[2]
                                    : vaga.id +
                                      ' - ' +
                                      vaga.cargo.split(' - ')[1]}
                                </option>
                              ))}
                            </select>
                          </DivEmpresa>
                        </CardAdmissao>
                        {pedidosAdmissaoVaga.length > 1 && (
                          <DivButtonRemoverItem>
                            <button
                              className="remocaoVagas"
                              id={pedido.id.toString()}
                              type="button"
                              onClick={(e) => removerPedidoAdmissao(e)}
                            >
                              X
                            </button>
                          </DivButtonRemoverItem>
                        )}
                      </>
                    ))}
                  {obra.nome != '' &&
                    vagasDisponiveis.length > 0 &&
                    pedidosAdmissaoVaga.length < vagasDisponiveis.length && (
                      <DivButtonAdicionarItem>
                        <button type="button" onClick={adicionarAdmissaoVaga}>
                          +
                        </button>
                      </DivButtonAdicionarItem>
                    )}
                  {obra.nome != '' && (
                    <DivQuantidadeVaga className="justificativaObs">
                      <label>Justificativa/Observação:</label>
                      <textarea
                        name="justificativa"
                        className="observacao"
                        autoComplete="off"
                        onChange={(e) => changeObservacao(e)}
                      ></textarea>
                    </DivQuantidadeVaga>
                  )}
                </>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao == 'Transferencia' && (
                <>
                  <DivEmpresa>
                    <label>Obra de Origem:</label>
                    <select onChange={(e) => changeObra(e)}>
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      {empresaSelecionada == 'Cantaria' &&
                        obrasCantaria.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                      {empresaSelecionada == 'Santa Bárbara' &&
                        obrasSantaBarbara.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                    </select>
                  </DivEmpresa>
                  <DivEmpresa>
                    <label>Obra de Destino:</label>
                    <select onChange={(e) => changeObraDestino(e)}>
                      <option
                        disabled
                        selected
                        value=""
                        style={{ display: 'none' }}
                      ></option>
                      {empresaSelecionada == 'Cantaria' &&
                        obrasCantaria.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                      {empresaSelecionada == 'Santa Bárbara' &&
                        obrasSantaBarbara.map((obra) => (
                          <option
                            key={obra.nome}
                            value={obra.descricao_completa}
                          >
                            {obra.descricao_completa}
                          </option>
                        ))}
                    </select>
                  </DivEmpresa>
                </>
              )}
            {naturezaMovimentacao != '' &&
              naturezaMovimentacao != 'Admissao' &&
              naturezaMovimentacao != 'RemocaoVaga' &&
              obra.nome != '' &&
              naturezaMovimentacao != 'AberturaVaga' && <br></br>}
            {naturezaMovimentacao != '' &&
              (naturezaMovimentacao == 'Faltas' ||
                naturezaMovimentacao == 'Adicional' ||
                naturezaMovimentacao == 'HorasExtras' ||
                naturezaMovimentacao == 'Transferencia' ||
                naturezaMovimentacao == 'Promocao' ||
                naturezaMovimentacao == 'Desligamento' ||
                naturezaMovimentacao == 'Ferias') &&
              obra.nome != '' && (
                <>
                  {equipeDisponivel.length > 0 &&
                    pedidosFuncionarios.map((pedido) => (
                      <DivObraQuantidade
                        key={pedido.id}
                        className={`${pedido.imediato == false ? 'comData' : ''} noTopMargin ${naturezaMovimentacao == 'Faltas' || naturezaMovimentacao == 'Adicional' || naturezaMovimentacao == 'HorasExtras' ? 'faltaAdicional' : ''} ${naturezaMovimentacao == 'Promocao' ? 'promocao' : ''} ${pedido.id_pessoa != '' ? 'cardOpenPromocao' : ''}`}
                      >
                        <DivEmpresa
                          className={`${pedido.imediato == false ? 'comData' : ''} noTopMargin colaborador ${naturezaMovimentacao == 'Faltas' || naturezaMovimentacao == 'Adicional' || naturezaMovimentacao == 'HorasExtras' ? 'faltaAdicional' : ''}`}
                        >
                          <label>
                            {pedido.imediato ? 'Colaborador(a)' : 'Col:'}
                          </label>
                          <select
                            id={pedido.id.toString()}
                            defaultValue={pedido.nome}
                            onChange={(e) => changeColaboradorSelecionado(e)}
                            className={`${pedido.imediato == false ? 'comData' : ''} inputColaborador`}
                          >
                            <option
                              disabled
                              selected
                              style={{ display: 'none' }}
                            ></option>
                            {equipeDisponivel.map((pessoa) => (
                              <option
                                key={pessoa.id}
                                value={
                                  pessoa.cargo.split(' - ')[2] != undefined
                                    ? pessoa.id +
                                      ' - ' +
                                      pessoa.nome +
                                      ' - ' +
                                      pessoa.cargo.split(' - ')[1] +
                                      ' - ' +
                                      pessoa.cargo.split(' - ')[2]
                                    : pessoa.id +
                                      ' - ' +
                                      pessoa.nome +
                                      ' - ' +
                                      pessoa.cargo.split(' - ')[1]
                                }
                              >
                                {pessoa.cargo.split(' - ')[2] != undefined
                                  ? pessoa.nome +
                                    ' - ' +
                                    pessoa.cargo.split(' - ')[1] +
                                    ' - ' +
                                    pessoa.cargo.split(' - ')[2]
                                  : pessoa.nome +
                                    ' - ' +
                                    pessoa.cargo.split(' - ')[1]}
                              </option>
                            ))}
                          </select>
                        </DivEmpresa>
                        {naturezaMovimentacao == 'Ferias' && (
                          <DivEmpresa className="noTopMargin">
                            <label>Período:</label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="date"
                              min={getMinimumDate()}
                              required
                              autoComplete="off"
                              onChange={(e) => changeInicioFerias(e)}
                              className={`inputPeriodoFerias ${pedido.id.toString() + 'inicioFerias'}`}
                            ></input>
                            <label> a </label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="date"
                              min={getMinimumDateFromStart(
                                pedido.data_inicio_ferias
                              )}
                              required
                              autoComplete="off"
                              disabled={pedido.data_inicio_ferias == ''}
                              onChange={(e) => changeFinalFerias(e)}
                              className={`inputPeriodoFerias ${pedido.id.toString() + 'finalFerias'}`}
                            ></input>
                          </DivEmpresa>
                        )}
                        {(naturezaMovimentacao == 'Transferencia' ||
                          naturezaMovimentacao == 'Desligamento') && (
                          <DivEmpresa className="noTopMargin">
                            <label className="noBreak">
                              {naturezaMovimentacao == 'Transferencia'
                                ? pedido.imediato
                                  ? 'Transf. Imediata?'
                                  : 'Imediata?'
                                : pedido.imediato
                                  ? 'Desl. Imediato?'
                                  : 'Imediato?'}
                            </label>
                            <select
                              id={pedido.id.toString()}
                              onChange={(e) => changeImediato(e)}
                              className={
                                'inputDesligamentoTransferenciaImediata'
                              }
                            >
                              <option selected value="sim">
                                Sim
                              </option>
                              <option value="nao">Não</option>
                            </select>
                          </DivEmpresa>
                        )}
                        {(naturezaMovimentacao == 'Transferencia' ||
                          naturezaMovimentacao == 'Desligamento') &&
                          pedido.imediato == false && (
                            <DivEmpresa className="noTopMargin">
                              <label>Data:</label>
                              <input
                                id={pedido.id.toString()}
                                name="item"
                                type="date"
                                min={getMinimumDate()}
                                required
                                autoComplete="off"
                                onChange={(e) =>
                                  changeDataDesligamentoTransferencia(e)
                                }
                              ></input>
                            </DivEmpresa>
                          )}
                        {(naturezaMovimentacao == 'Transferencia' ||
                          naturezaMovimentacao == 'Desligamento') && (
                          <DivEmpresa className="noTopMargin">
                            <label className="noBreak">
                              {pedido.imediato ? 'Remover Vaga?' : 'Rem. Vaga?'}
                            </label>
                            <select
                              id={
                                pedido.id.toString() +
                                ';' +
                                pedido.id_pessoa +
                                ';' +
                                pedido.cargo
                              }
                              onChange={(e) => changeRemocaoVaga(e)}
                              className={
                                'inputDesligamentoTransferenciaRemocao'
                              }
                            >
                              <option selected value="nao">
                                Não
                              </option>
                              <option value="sim">Sim</option>
                            </select>
                          </DivEmpresa>
                        )}
                        {(naturezaMovimentacao == 'Faltas' ||
                          naturezaMovimentacao == 'Adicional' ||
                          naturezaMovimentacao == 'HorasExtras') && (
                          <DivEmpresa className="noTopMargin">
                            <label>
                              {naturezaMovimentacao == 'Faltas'
                                ? 'Data da Falta:'
                                : naturezaMovimentacao == 'Adicional'
                                  ? 'Data do Dia Adicional:'
                                  : 'Data das Horas Extras:'}
                            </label>
                            <input
                              id={pedido.id.toString()}
                              name="item"
                              type="date"
                              min={
                                naturezaMovimentacao == 'Adicional' ||
                                naturezaMovimentacao == 'HorasExtras'
                                  ? getTodayDate()
                                  : ''
                              }
                              max={
                                naturezaMovimentacao == 'Faltas'
                                  ? getTodayDate()
                                  : ''
                              }
                              required
                              autoComplete="off"
                              className={'inputDataFaltaDiaAdicional'}
                              onChange={(e) => changeDataFaltasAdicional(e)}
                            ></input>
                            {naturezaMovimentacao == 'Faltas' &&
                              pedido.data_falta_atual != '' && (
                                <BotaoAdicionarFaltaAdicional
                                  id={pedido.id.toString()}
                                  type="button"
                                  onClick={adicionarFalta}
                                >
                                  +
                                </BotaoAdicionarFaltaAdicional>
                              )}
                            {naturezaMovimentacao == 'Adicional' &&
                              pedido.data_adicional_atual != '' && (
                                <BotaoAdicionarFaltaAdicional
                                  id={pedido.id.toString()}
                                  type="button"
                                  onClick={adicionarDiaAdicional}
                                >
                                  +
                                </BotaoAdicionarFaltaAdicional>
                              )}
                            {naturezaMovimentacao == 'HorasExtras' &&
                              pedido.data_horas_extra_atual != '' &&
                              pedido.dia_horas_extra_atual != 'domingo' && (
                                <DivEmpresa className="horasHorasExtras">
                                  {pedido.dia_horas_extra_atual != '' && (
                                    <label>Nº Horas:</label>
                                  )}
                                  {pedido.dia_horas_extra_atual == 'sabado' && (
                                    <select
                                      style={{ textAlign: 'left' }}
                                      id={pedido.id.toString()}
                                      onChange={(e) => changeHorasExtra(e)}
                                      className={'inputHoraExtra'}
                                    >
                                      <option
                                        disabled
                                        selected
                                        style={{ display: 'none' }}
                                      ></option>
                                      <option style={{ textAlign: 'left' }}>
                                        1
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        2
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        3
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        4
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        5
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        6
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        7
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        8
                                      </option>
                                    </select>
                                  )}
                                  {pedido.dia_horas_extra_atual == 'semana' && (
                                    <select
                                      style={{ textAlign: 'left' }}
                                      id={pedido.id.toString()}
                                      onChange={(e) => changeHorasExtra(e)}
                                      className={'inputHoraExtra'}
                                    >
                                      <option
                                        disabled
                                        selected
                                        style={{ display: 'none' }}
                                      ></option>
                                      <option style={{ textAlign: 'left' }}>
                                        1
                                      </option>
                                      <option style={{ textAlign: 'left' }}>
                                        2
                                      </option>
                                    </select>
                                  )}
                                </DivEmpresa>
                              )}
                            {naturezaMovimentacao == 'HorasExtras' &&
                              pedido.data_horas_extra_atual != '' &&
                              pedido.dia_horas_extra_atual != 'domingo' &&
                              pedido.dia_horas_extra_atual != '' && (
                                <BotaoAdicionarFaltaAdicional
                                  id={pedido.id.toString()}
                                  type="button"
                                  onClick={adicionarHorasExtras}
                                >
                                  +
                                </BotaoAdicionarFaltaAdicional>
                              )}
                            {naturezaMovimentacao == 'HorasExtras' &&
                              pedido.data_horas_extra_atual != '' &&
                              pedido.dia_horas_extra_atual == 'domingo' && (
                                <DivEmpresa>
                                  <TextoEstagio className="erroDomingo">
                                    Domingo!
                                  </TextoEstagio>
                                </DivEmpresa>
                              )}
                          </DivEmpresa>
                        )}
                        {(naturezaMovimentacao == 'Faltas' ||
                          naturezaMovimentacao == 'Adicional' ||
                          naturezaMovimentacao == 'HorasExtras') && (
                          <DivEmpresa className="noTopMargin">
                            <label>
                              {naturezaMovimentacao == 'Faltas'
                                ? 'Falta(s):'
                                : naturezaMovimentacao == 'Adicional'
                                  ? 'Dia(s) Adicional(is):'
                                  : 'Dia(s) e Hora(s):'}
                            </label>
                            {naturezaMovimentacao == 'Faltas' &&
                              pedido.faltas.length == 0 && (
                                <TextoNenhumaFalta>
                                  Nenhuma falta adicionada.
                                </TextoNenhumaFalta>
                              )}
                            {naturezaMovimentacao == 'Adicional' &&
                              pedido.dias_adicionais.length == 0 && (
                                <TextoNenhumaFalta>
                                  Nenhum dia adicional incluído.
                                </TextoNenhumaFalta>
                              )}
                            {naturezaMovimentacao == 'HorasExtras' &&
                              pedido.dias_horas_extras.length == 0 && (
                                <TextoNenhumaFalta>
                                  Nenhuma hora extra incluída.
                                </TextoNenhumaFalta>
                              )}
                          </DivEmpresa>
                        )}
                        {naturezaMovimentacao == 'Faltas' &&
                          pedido.faltas.length > 0 && (
                            <ListaFaltasDiasAdicionais
                              className={
                                [5, 8, 11, 14, 17].includes(
                                  pedido.faltas.length
                                )
                                  ? 'what'
                                  : 'flexForm'
                              }
                            >
                              {pedido.faltas.map((falta) => (
                                <SetDataBotaoRemover key={falta}>
                                  <li key={falta}>{falta}</li>
                                  <BotaoRemoverFaltaAdicional
                                    id={pedido.id.toString() + ';' + falta}
                                    type="button"
                                    onClick={removerFalta}
                                  >
                                    X
                                  </BotaoRemoverFaltaAdicional>
                                </SetDataBotaoRemover>
                              ))}
                            </ListaFaltasDiasAdicionais>
                          )}
                        {naturezaMovimentacao == 'Adicional' &&
                          pedido.dias_adicionais.length > 0 && (
                            <ListaFaltasDiasAdicionais
                              className={
                                [5, 8, 11, 14, 17].includes(
                                  pedido.dias_adicionais.length
                                )
                                  ? 'what'
                                  : 'flexForm'
                              }
                            >
                              {pedido.dias_adicionais.map((dia_adicional) => (
                                <SetDataBotaoRemover key={dia_adicional}>
                                  <li key={dia_adicional}>{dia_adicional}</li>
                                  <BotaoRemoverFaltaAdicional
                                    id={
                                      pedido.id.toString() + ';' + dia_adicional
                                    }
                                    type="button"
                                    onClick={removerDiaAdicional}
                                  >
                                    X
                                  </BotaoRemoverFaltaAdicional>
                                </SetDataBotaoRemover>
                              ))}
                            </ListaFaltasDiasAdicionais>
                          )}
                        {naturezaMovimentacao == 'HorasExtras' &&
                          pedido.dias_horas_extras.length > 0 && (
                            <ListaFaltasDiasAdicionais
                              className={`horasExtra ${
                                [5, 8, 11, 14, 17].includes(
                                  pedido.dias_horas_extras.length
                                )
                                  ? 'what'
                                  : 'flexForm'
                              }`}
                            >
                              {pedido.dias_horas_extras.map((dia_h_extra) => (
                                <SetDataBotaoRemover key={dia_h_extra.id}>
                                  <li key={dia_h_extra.id}>
                                    {dia_h_extra.dia} - {dia_h_extra.horas}{' '}
                                    horas
                                  </li>
                                  <BotaoRemoverFaltaAdicional
                                    id={
                                      pedido.id.toString() +
                                      ';' +
                                      dia_h_extra.dia
                                    }
                                    type="button"
                                    onClick={removerHorasExtras}
                                  >
                                    X
                                  </BotaoRemoverFaltaAdicional>
                                </SetDataBotaoRemover>
                              ))}
                            </ListaFaltasDiasAdicionais>
                          )}
                        {naturezaMovimentacao == 'Promocao' &&
                          pedido.id_pessoa != '' && (
                            <DivEmpresa className="noTopMargin">
                              <label>Cargo Atual:</label>
                              <TextoEstagio className="cargoPromocao">
                                {pedido.cargo.split(' - ')[2] != undefined
                                  ? pedido.id_pessoa.slice(2, 4) +
                                    ' - ' +
                                    pedido.cargo.split(' - ')[0] +
                                    ' - ' +
                                    pedido.cargo.split(' - ')[1] +
                                    ' - ' +
                                    pedido.cargo.split(' - ')[2]
                                  : pedido.id_pessoa.slice(2, 4) +
                                    ' - ' +
                                    pedido.cargo}
                              </TextoEstagio>
                            </DivEmpresa>
                          )}
                        {naturezaMovimentacao == 'Promocao' &&
                          pedido.id_pessoa != '' &&
                          pedido.possiveis_promocoes.length > 0 && (
                            <DivEmpresa className="noTopMargin promocao">
                              <label>Novo Cargo:</label>
                              <select
                                className={'inputHoraExtra'}
                                id={pedido.id.toString()}
                                onChange={(e) => changeNovoCargo(e)}
                              >
                                <option
                                  disabled
                                  selected
                                  value=""
                                  style={{ display: 'none' }}
                                ></option>
                                {pedido.possiveis_promocoes.map((cargo) => (
                                  <option key={cargo} value={cargo}>
                                    {cargo}
                                  </option>
                                ))}
                              </select>
                            </DivEmpresa>
                          )}
                        {naturezaMovimentacao == 'Promocao' &&
                          pedido.id_pessoa != '' &&
                          pedido.possiveis_promocoes.length == 0 && (
                            <DivEmpresa className="noTopMargin promocao">
                              <label>Novo Cargo:</label>
                              <TextoEstagio className="erroNiveisPromocao">
                                Não há níveis para promoção deste cargo!
                              </TextoEstagio>
                            </DivEmpresa>
                          )}
                        {naturezaMovimentacao == 'Promocao' &&
                          pedido.id_pessoa != '' &&
                          pedido.possiveis_promocoes.length > 0 && (
                            <DivEmpresa className="noTopMargin">
                              <label>Remover Cargo Atual?</label>
                              <select
                                id={
                                  pedido.id.toString() +
                                  ';' +
                                  pedido.id_pessoa +
                                  ';' +
                                  pedido.cargo
                                }
                                onChange={(e) => changeRemocaoVaga(e)}
                                className={
                                  'inputDesligamentoTransferenciaRemocao'
                                }
                              >
                                <option selected value="nao">
                                  Não
                                </option>
                                <option value="sim">Sim</option>
                              </select>
                            </DivEmpresa>
                          )}
                        {naturezaMovimentacao == 'Promocao' &&
                          pedido.id_pessoa != '' &&
                          pedido.possiveis_promocoes.length == 0 && (
                            <DivEmpresa className="noTopMargin">
                              <TextoEstagio className="erroNiveisPromocao">
                                Favor entrar em contato com a direção, ou
                                solicitar uma transferência de cargo!
                              </TextoEstagio>
                            </DivEmpresa>
                          )}
                        {pedidosFuncionarios.length > 1 && (
                          <DivButtonRemoverItem
                            className={`remocaoSolicFunc ${naturezaMovimentacao == 'Faltas' || naturezaMovimentacao == 'Adicional' || naturezaMovimentacao == 'HorasExtras' ? 'cardFaltasAdicional' : ''} ${naturezaMovimentacao == 'Promocao' ? 'cardPromocao' : ''} `}
                          >
                            <button
                              id={pedido.id.toString()}
                              type="button"
                              onClick={(e) => removerPedidoFunc(e)}
                              className={`remocaoSolicFunc ${naturezaMovimentacao == 'Faltas' || naturezaMovimentacao == 'Adicional' || naturezaMovimentacao == 'HorasExtras' ? 'cardFaltasAdicional' : ''} ${naturezaMovimentacao == 'Promocao' ? 'cardPromocao' : ''} ${pedido.id_pessoa != '' ? 'cardOpenPromocao' : ''}`}
                            >
                              X
                            </button>
                          </DivButtonRemoverItem>
                        )}
                      </DivObraQuantidade>
                    ))}
                  {obra.nome != '' &&
                    equipeDisponivel.length > 0 &&
                    pedidosFuncionarios.length < equipeDisponivel.length && (
                      <DivButtonAdicionarItem>
                        <button
                          type="button"
                          onClick={adicionarSolicitacaoFuncionario}
                        >
                          +
                        </button>
                      </DivButtonAdicionarItem>
                    )}
                  {obra.nome != '' && equipeDisponivel.length == 0 && (
                    <>
                      <TextoNaoHaVagas className="first">
                        {naturezaMovimentacao == 'Transferencia'
                          ? 'Não há trabalhadores registrados na obra de origem.'
                          : 'Não há trabalhadores registrados na obra selecionada.'}
                      </TextoNaoHaVagas>
                      <TextoNaoHaVagas>
                        Favor solicitar a inclusão no banco de dados.
                      </TextoNaoHaVagas>
                    </>
                  )}
                  {naturezaMovimentacao == 'Transferencia' &&
                    obraDestino.nome == obra.nome &&
                    obra.nome != '' &&
                    equipeDisponivel.length > 0 && (
                      <DivEmpresa>
                        <TextoNaoHaVagas className="second">
                          A obra de destino não pode ser igual à obra de origem.
                        </TextoNaoHaVagas>
                      </DivEmpresa>
                    )}
                  {obraDestino.nome != obra.nome &&
                    obra.nome != '' &&
                    equipeDisponivel.length > 0 && (
                      <DivQuantidadeVaga className="justificativaObs">
                        <label>Observação:</label>
                        <textarea
                          name="justificativa"
                          className="observacao"
                          autoComplete="off"
                          onChange={(e) => changeObservacao(e)}
                        ></textarea>
                      </DivQuantidadeVaga>
                    )}
                </>
              )}
            {/* <br></br> */}
            {/* <DivItem className="headerItems">
              <DivItemQuant>
                <label>Qtd:</label>
              </DivItemQuant>
              <DivItemUnid>
                <label>Und:</label>
              </DivItemUnid>
              <DivItemNome>
                <label>Descrição:</label>
              </DivItemNome>
              <DivItemCentroCusto>
                <label>C.Cst:</label>
              </DivItemCentroCusto>
              <DivItemDesc>
                <label>Obs:</label>
              </DivItemDesc>
            </DivItem> */}
            {/* {listaItems.map((item) => (
              <DivItem key={item}>
                <DivItemQuant>
                  <input
                    id={item.toString()}
                    name="item"
                    type="number"
                    step="any"
                    required
                    autoComplete="off"
                    onChange={(e) => changeItemQuantity(e)}
                  ></input>
                </DivItemQuant>
                <DivItemUnid>
                  <select
                    id={item.toString()}
                    name="item"
                    required
                    autoComplete="off"
                    onChange={(e) => changeItemUnidade(e)}
                  >
                    <option value="Und">Und</option>
                    <option value="Kg">Kg</option>
                    <option value="L">L</option>
                    <option value="scs">scs</option>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                    <option value="m²">m²</option>
                  </select>
                </DivItemUnid>
                <DivItemNome>
                  <input
                    id={item.toString()}
                    name="item"
                    type="text"
                    required
                    autoComplete="off"
                    onChange={(e) => changeItemDescription(e)}
                  ></input>
                </DivItemNome>
                <DivItemCentroCusto>
                  <select
                    id={item.toString()}
                    name="item"
                    required
                    autoComplete="off"
                    onChange={(e) => changeItemCentroCusto(e)}
                  >
                    <option
                      disabled
                      selected
                      value=""
                      style={{ display: 'none' }}
                    ></option>
                    {listaCentrosCusto.map((centroCusto) => (
                      <option
                        key={centroCusto}
                        value={centroCusto.split(' - ')[0]}
                      >
                        {centroCusto}
                      </option>
                    ))}
                  </select>
                </DivItemCentroCusto>
                <DivItemDesc>
                  <input
                    id={item.toString()}
                    name="item"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => changeItemObservacao(e)}
                  ></input>
                </DivItemDesc>
                {listaItems.length > 1 && (
                  <DivButtonRemoverItem>
                    <button
                      id={item.toString()}
                      type="button"
                      onClick={(e) => removerItem(e)}
                    >
                      X
                    </button>
                  </DivButtonRemoverItem>
                )}
              </DivItem>
            ))} */}
            {/* <DivButtonAdicionarItem>
              <button type="button" onClick={adicionarItem}>
                +
              </button>
            </DivButtonAdicionarItem> */}
            {/* <DivDataObs> */}
            {/* <br></br>
              <DivSugestaoFornecedores>
                <label>Sugerir Fornecedores (opcional):</label>
              </DivSugestaoFornecedores>
              <DivSugestaoFornecedores>
                <textarea
                  name="sugestaofornecedores"
                  autoComplete="off"
                  onChange={(e) => changeSugestaoFornecedores(e)}
                ></textarea>
              </DivSugestaoFornecedores>
              <br></br>
              <DivObsGeral>
                <label>Observação geral (opcional):</label>
              </DivObsGeral>
              <DivObsGeral>
                <textarea
                  name="obsgeral"
                  autoComplete="off"
                  onChange={(e) => changeObservacao(e)}
                ></textarea>
              </DivObsGeral>
              <br></br> */}
            {/* <DivDataLimite>
                <label>Data Limite na Obra:</label>
                <input
                  name="item"
                  type="date"
                  min={getMinimumDate()}
                  required
                  autoComplete="off"
                  onChange={(e) => changeDataLimite(e)}
                ></input>
              </DivDataLimite> */}
            {/* </DivDataObs> */}
            {naturezaMovimentacao != '' && (
              <DivButtonSolicitar>
                <button
                  type={'button'}
                  onClick={() =>
                    admissaoNaAbertura ? inclusaoAdmissao() : solicitarCompra()
                  }
                >
                  {admissaoNaAbertura ? 'Incluir Admissão' : 'Solicitar'}
                </button>
              </DivButtonSolicitar>
            )}
            <DivMensagemErro id="mensagemErro">
              <p
                style={
                  MensagemErro != ''
                    ? { fontSize: '17px' }
                    : { display: 'none' }
                }
              >
                {MensagemErro}
              </p>
            </DivMensagemErro>
          </div>
        )}
        <div
          style={
            SituacaoPedido == 'incluindoAdmissao'
              ? { paddingBottom: '10px' }
              : { display: 'none' }
          }
        >
          <h2>Inclusão de Admissão para as Vagas</h2>
          <br></br>
          {inclusaoPedidosAdmissaoVaga.map((pedido) => (
            <CardAdmissao key={pedido.id}>
              <DivEmpresa>
                <label>Vaga:</label>
                <TextoEstagio>{pedido.codigo_vaga}</TextoEstagio>
              </DivEmpresa>
              <DivEmpresa>
                <label>Incluir Pedido de Admissão?</label>
                <select
                  id={pedido.id.toString()}
                  onChange={(e) => changeInclusaoAdmissao(e)}
                  className={'inputInclusaoAdmissaoInterno'}
                >
                  <option selected value="nao">
                    Não
                  </option>
                  <option value="sim">Sim</option>
                </select>
              </DivEmpresa>
              {pedido.incluir == true && (
                <DivEmpresa>
                  <label>Tipo de Admissão:</label>
                  {pedido.codigo_vaga != '' &&
                    pedido.codigo_vaga.split(' #')[0] != 'Estagiário' && (
                      <select
                        id={pedido.id.toString()}
                        defaultValue={pedido.tipo_admissao}
                        onChange={(e) => changeTipoAdmissaoInclusao(e)}
                      >
                        <option
                          disabled
                          selected
                          value=""
                          style={{ display: 'none' }}
                        ></option>
                        <option value="CLT">CLT</option>
                        <option value="PJ-MEI">PJ-MEI</option>
                      </select>
                    )}
                  {pedido.codigo_vaga != '' &&
                    pedido.codigo_vaga.split(' #')[0] == 'Estagiário' && (
                      <TextoEstagio>ESTÁGIO</TextoEstagio>
                    )}
                </DivEmpresa>
              )}
              {pedido.incluir == true && (
                <DivNomeVaga className="DadosNome">
                  <label>Nome:</label>
                  <input
                    id={pedido.id.toString()}
                    name="item"
                    type="text"
                    defaultValue={pedido.nome}
                    required
                    autoComplete="off"
                    onChange={(e) => changeNomeAdmissaoInclusao(e)}
                  ></input>
                </DivNomeVaga>
              )}
              {pedido.incluir == true && (
                <DivNomeVaga className="DadosPessoais">
                  <label>RG:</label>
                  <input
                    id={pedido.id.toString()}
                    name="item"
                    type="text"
                    defaultValue={pedido.rg}
                    required
                    autoComplete="off"
                    onChange={(e) => changeRGAdmissaoInclusao(e)}
                  ></input>
                </DivNomeVaga>
              )}
              {pedido.incluir == true && (
                <DivNomeVaga className="DadosPessoais">
                  <label>CPF:</label>
                  <input
                    id={pedido.id.toString()}
                    name="item"
                    type="text"
                    defaultValue={pedido.cpf}
                    required
                    autoComplete="off"
                    onChange={(e) => changeCPFAdmissaoInclusao(e)}
                  ></input>
                </DivNomeVaga>
              )}
            </CardAdmissao>
          ))}
          <DivBotoesConfirmacao className="inclusaoAdmissao">
            <button
              id="botaocancelar"
              type="button"
              onClick={() => {
                setMensagemErroInclusao('')
                cancelarConfirmacao()
              }}
            >
              Voltar
            </button>
            <button
              id="botaoconfirmar"
              className="inclusaoAdmissao"
              type="button"
              onClick={verificarInclusao}
            >
              Solicitar
            </button>
          </DivBotoesConfirmacao>
          {erroInclusao && (
            <TextoNaoHaVagas>{mensagemErroInclusao}</TextoNaoHaVagas>
          )}
        </div>
        {SituacaoPedido == 'confirmando' && (
          <DivListaSolicitacao>
            <h2>Pedido:</h2>
            <br></br>
            <ul>
              <li>
                <b>Solicitante:</b> {nomeusur}
              </li>
              <li>
                <b>Empresa:</b> {empresaSelecionada}
              </li>
              <li>
                <b>Tipo de Solicitação:</b>{' '}
                {textoNatureza(naturezaMovimentacao)}
              </li>
              <br></br>
              {naturezaMovimentacao != 'Admissao' &&
                naturezaMovimentacao != 'RemocaoVaga' && (
                  <li>
                    <b>{textoItens(naturezaMovimentacao)}</b>
                  </li>
                )}
              {naturezaMovimentacao == 'AberturaVaga' && (
                <li>
                  <GridListaCabecalho className="AberturaVagas">
                    <GridItemCabecalho>Obra</GridItemCabecalho>
                    <GridItemCabecalho>Vaga</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      Quantidade:
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'AberturaVaga' &&
                pedidoAcrescimoCargos.map((pedido_acrescimo) => (
                  <li key={pedido_acrescimo.id}>
                    <GridLista className="AberturaVagas">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>
                        {pedido_acrescimo.sigla.split(' - ')[1] != undefined
                          ? pedido_acrescimo.sigla.split(' - ')[0] +
                            ' - ' +
                            pedido_acrescimo.sigla.split(' - ')[1]
                          : pedido_acrescimo.sigla.split(' - ')[0]}
                      </GridItem>
                      <GridItemUltimo>
                        {pedido_acrescimo.quantidade_pedida}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {naturezaMovimentacao == 'Ferias' && (
                <li>
                  <GridListaCabecalho className="Ferias">
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>ID:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>Cargo:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      Período de Férias:
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'Ferias' &&
                pedidosFuncionarios.map((pedido_funcionario) => (
                  <li key={pedido_funcionario.id}>
                    <GridLista className="Ferias">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido_funcionario.id_pessoa}</GridItem>
                      <GridItem>{pedido_funcionario.nome}</GridItem>
                      <GridItem>{pedido_funcionario.cargo}</GridItem>
                      <GridItemUltimo>
                        {pedido_funcionario.data_inicio_ferias +
                          ' - ' +
                          pedido_funcionario.data_final_ferias}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {naturezaMovimentacao == 'Desligamento' && (
                <li>
                  <GridListaCabecalho className="Desligamento">
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>ID:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>Cargo:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      Data do Deslig:
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'Desligamento' &&
                pedidosFuncionarios.map((pedido_funcionario) => (
                  <li key={pedido_funcionario.id}>
                    <GridLista className="Desligamento">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido_funcionario.id_pessoa}</GridItem>
                      <GridItem>{pedido_funcionario.nome}</GridItem>
                      <GridItem>
                        {pedido_funcionario.cargo.split(' - ')[2] != undefined
                          ? pedido_funcionario.cargo.split(' - ')[0] +
                            ' - ' +
                            pedido_funcionario.cargo.split(' - ')[1] +
                            ' - ' +
                            pedido_funcionario.cargo.split(' - ')[2]
                          : pedido_funcionario.cargo}
                      </GridItem>
                      <GridItemUltimo>
                        {pedido_funcionario.imediato
                          ? 'IMEDIATO'
                          : pedido_funcionario.data_desligamento}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {naturezaMovimentacao == 'Transferencia' && (
                <li>
                  <GridListaCabecalho className="Transferencia">
                    <GridItemCabecalho>Obra de Origem:</GridItemCabecalho>
                    <GridItemCabecalho>Obra de Destino:</GridItemCabecalho>
                    <GridItemCabecalho>ID:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>Cargo:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      Data da Transf.
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'Transferencia' &&
                pedidosFuncionarios.map((pedido_funcionario) => (
                  <li key={pedido_funcionario.id}>
                    <GridLista className="Transferencia">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{obraDestino.descricao_completa}</GridItem>
                      <GridItem>{pedido_funcionario.id_pessoa}</GridItem>
                      <GridItem>{pedido_funcionario.nome}</GridItem>
                      <GridItem>{pedido_funcionario.cargo}</GridItem>
                      <GridItemUltimo>
                        {pedido_funcionario.imediato
                          ? 'Imediata'
                          : pedido_funcionario.data_transferencia}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {(naturezaMovimentacao == 'Faltas' ||
                naturezaMovimentacao == 'Adicional' ||
                naturezaMovimentacao == 'HorasExtras') && (
                <li>
                  <GridListaCabecalho
                    className={`FaltasAdicional ${naturezaMovimentacao == 'HorasExtras' ? 'horasExtras' : ''}`}
                  >
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>ID:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>Cargo:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      {naturezaMovimentacao == 'Adicional'
                        ? 'Dias Adicionais:'
                        : naturezaMovimentacao == 'Faltas'
                          ? 'Faltas:'
                          : 'Horas Extras:'}
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {(naturezaMovimentacao == 'Faltas' ||
                naturezaMovimentacao == 'Adicional' ||
                naturezaMovimentacao == 'HorasExtras') &&
                pedidosFuncionarios.map((pedido_funcionario) => (
                  <li key={pedido_funcionario.id}>
                    <GridLista
                      className={`FaltasAdicional ${naturezaMovimentacao == 'HorasExtras' ? 'horasExtras' : ''}`}
                    >
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido_funcionario.id_pessoa}</GridItem>
                      <GridItem>{pedido_funcionario.nome}</GridItem>
                      <GridItem>{pedido_funcionario.cargo}</GridItem>
                      <GridItemUltimo>
                        {naturezaMovimentacao == 'Faltas' && (
                          <ListaFaltasDiasAdicionaisTabela
                            className={
                              [3, 5, 7, 8, 10, 11, 13, 14, 15, 17].includes(
                                pedido_funcionario.faltas.length
                              )
                                ? 'what'
                                : 'flexForm'
                            }
                          >
                            {pedido_funcionario.faltas.map((falta) => (
                              <li key={falta}>{falta}</li>
                            ))}
                          </ListaFaltasDiasAdicionaisTabela>
                        )}
                        {naturezaMovimentacao == 'Adicional' && (
                          <ListaFaltasDiasAdicionaisTabela
                            className={
                              [3, 5, 7, 8, 10, 11, 13, 14, 15, 17].includes(
                                pedido_funcionario.dias_adicionais.length
                              )
                                ? 'what'
                                : 'flexForm'
                            }
                          >
                            {pedido_funcionario.dias_adicionais.map(
                              (dia_adicional) => (
                                <li key={dia_adicional}>{dia_adicional}</li>
                              )
                            )}
                          </ListaFaltasDiasAdicionaisTabela>
                        )}
                        {naturezaMovimentacao == 'HorasExtras' && (
                          <ListaFaltasDiasAdicionaisTabela
                            className={'horasExtras'}
                          >
                            {pedido_funcionario.dias_horas_extras.map(
                              (dia_horas_extras) => (
                                <li key={dia_horas_extras.id}>
                                  {dia_horas_extras.dia} -{' '}
                                  {dia_horas_extras.horas} hs
                                </li>
                              )
                            )}
                          </ListaFaltasDiasAdicionaisTabela>
                        )}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {admissaoNaAbertura && (
                <>
                  <br></br>
                  <br></br>
                </>
              )}
              {(naturezaMovimentacao == 'Admissao' || admissaoNaAbertura) && (
                <li>
                  <b>
                    {(naturezaMovimentacao == 'Admissao' &&
                      pedidosAdmissaoVaga.length == 1) ||
                    (naturezaMovimentacao == 'AberturaVaga' &&
                      inclusaoPedidosAdmissaoVaga.filter(
                        (pedido) => pedido.incluir
                      ).length == 1)
                      ? 'ADMISSÃO SOLICITADA:'
                      : 'ADMISSÕES SOLICITADAS:'}
                  </b>
                </li>
              )}
              {(naturezaMovimentacao == 'Admissao' || admissaoNaAbertura) && (
                <li>
                  <GridListaCabecalho className="Admissao">
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>Vaga:</GridItemCabecalho>
                    <GridItemCabecalho>Regime:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>RG:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>CPF:</GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {admissaoNaAbertura &&
                inclusaoPedidosAdmissaoVaga.map(
                  (pedido) =>
                    pedido.incluir && (
                      <li key={pedido.id}>
                        <GridLista className="Admissao">
                          <GridItem>{obra.descricao_completa}</GridItem>
                          <GridItem>{pedido.codigo_vaga}</GridItem>
                          <GridItem>
                            {pedido.tipo_admissao == 'estagiario'
                              ? 'ESTÁGIO'
                              : pedido.tipo_admissao}
                          </GridItem>
                          <GridItem>{pedido.nome}</GridItem>
                          <GridItem>{pedido.rg}</GridItem>
                          <GridItemUltimo>{pedido.cpf}</GridItemUltimo>
                        </GridLista>
                      </li>
                    )
                )}
              {naturezaMovimentacao == 'Admissao' &&
                pedidosAdmissaoVaga.map((pedido) => (
                  <li key={pedido.id}>
                    <GridLista className="Admissao">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido.codigo_vaga}</GridItem>
                      <GridItem>
                        {pedido.tipo_admissao == 'estagiario'
                          ? 'ESTÁGIO'
                          : pedido.tipo_admissao}
                      </GridItem>
                      <GridItem>{pedido.nome}</GridItem>
                      <GridItem>{pedido.rg}</GridItem>
                      <GridItemUltimo>{pedido.cpf}</GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {naturezaMovimentacao == 'RemocaoVaga' && (
                <li>
                  <b>
                    {(naturezaMovimentacao == 'RemocaoVaga' &&
                      pedidosAdmissaoVaga.length == 1) ||
                    (naturezaMovimentacao == 'RemocaoVaga' &&
                      inclusaoPedidosAdmissaoVaga.filter(
                        (pedido) => pedido.incluir
                      ).length == 1)
                      ? 'REMOÇÃO DE VAGA SOLICITADA:'
                      : 'REMOÇÕES DE VAGA SOLICITADAS:'}
                  </b>
                </li>
              )}
              {naturezaMovimentacao == 'RemocaoVaga' && (
                <li>
                  <GridListaCabecalho className="RemocaoVaga">
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>Cód. da Vaga:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>Cargo:</GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'RemocaoVaga' &&
                pedidosAdmissaoVaga.map((pedido) => (
                  <li key={pedido.id}>
                    <GridLista className="RemocaoVaga">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido.codigo_vaga.split(' - ')[0]}</GridItem>
                      <GridItemUltimo>
                        {pedido.codigo_vaga.split(' - ')[2] != undefined
                          ? pedido.codigo_vaga.split(' - ')[1] +
                            ' - ' +
                            pedido.codigo_vaga.split(' - ')[2]
                          : pedido.codigo_vaga.split(' - ')[1]}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}

              {naturezaMovimentacao == 'Promocao' && (
                <li>
                  <GridListaCabecalho className="Promocao">
                    <GridItemCabecalho>Obra:</GridItemCabecalho>
                    <GridItemCabecalho>ID:</GridItemCabecalho>
                    <GridItemCabecalho>Nome:</GridItemCabecalho>
                    <GridItemCabecalho>Cargo Atual:</GridItemCabecalho>
                    <GridItemCabecalho>Novo Cargo:</GridItemCabecalho>
                    <GridItemCabecalhoUltimo>
                      R. Vaga Orig.?
                    </GridItemCabecalhoUltimo>
                  </GridListaCabecalho>
                </li>
              )}
              {naturezaMovimentacao == 'Promocao' &&
                pedidosFuncionarios.map((pedido) => (
                  <li key={pedido.id}>
                    <GridLista className="Promocao">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido.id_pessoa}</GridItem>
                      <GridItem>{pedido.nome}</GridItem>
                      <GridItem>{pedido.cargo}</GridItem>
                      <GridItem>
                        {pedido.novo_cargo.split(' - ')[2] != undefined
                          ? pedido.novo_cargo.split(' - ')[1] +
                            ' - ' +
                            pedido.novo_cargo.split(' - ')[2]
                          : pedido.novo_cargo.split(' - ')[1]}
                      </GridItem>
                      <GridItemUltimo>
                        {pedido.remocaoNoDesligamentoTransferencia == true
                          ? 'SIM'
                          : 'NÃO'}
                      </GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {naturezaMovimentacao == 'Desligamento' &&
                remocaoNoDesligamentoTransferencia && (
                  <>
                    <br></br>
                    <br></br>
                  </>
                )}
              {naturezaMovimentacao == 'Desligamento' &&
                remocaoNoDesligamentoTransferencia && (
                  <li>
                    <b>
                      {inclusaoPedidosAdmissaoVaga.length == 1
                        ? 'REMOÇÃO DE VAGA SOLICITADA:'
                        : 'REMOÇÕES DE VAGA SOLICITADAS:'}
                    </b>
                  </li>
                )}
              {naturezaMovimentacao == 'Desligamento' &&
                remocaoNoDesligamentoTransferencia && (
                  <li>
                    <GridListaCabecalho className="RemocaoVaga">
                      <GridItemCabecalho>Obra:</GridItemCabecalho>
                      <GridItemCabecalho>Cód. da Vaga:</GridItemCabecalho>
                      <GridItemCabecalhoUltimo>Cargo:</GridItemCabecalhoUltimo>
                    </GridListaCabecalho>
                  </li>
                )}
              {naturezaMovimentacao == 'Desligamento' &&
                remocaoNoDesligamentoTransferencia &&
                inclusaoPedidosRemocaoVaga.map((pedido) => (
                  <li key={pedido.id}>
                    <GridLista className="RemocaoVaga">
                      <GridItem>{obra.descricao_completa}</GridItem>
                      <GridItem>{pedido.codigo_vaga}</GridItem>
                      <GridItemUltimo>{pedido.cargo}</GridItemUltimo>
                    </GridLista>
                  </li>
                ))}
              {/* {listaCompras.map((item) => (
                  <GridLista key={item.id}>
                    <GridItem>
                      {item.quantidade.toLocaleString('pt-BR')}
                    </GridItem>
                    <GridItem>{item.unidade}</GridItem>
                    <GridItem>{item.descricao}</GridItem>
                    <GridItem>{item.centrocusto}</GridItem>
                    <GridItemUltimo>
                      {item.observacao == '' ? '-' : item.observacao}
                    </GridItemUltimo>
                  </GridLista>
                ))} */}
              <br></br>
              <br></br>
              {JustificativaGeral != '' && (
                <DivLineBreak>
                  <TextoComLineBreak>
                    <b>Justificativa:</b>{' '}
                    {JustificativaGeral.indexOf('\n') == -1 &&
                    JustificativaGeral.length < 91
                      ? JustificativaGeral
                      : ''}
                  </TextoComLineBreak>
                  {JustificativaGeral.indexOf('\n') != -1 ||
                  JustificativaGeral.length >= 91 ? (
                    <TextoComLineBreak>{JustificativaGeral}</TextoComLineBreak>
                  ) : (
                    ''
                  )}
                  {JustificativaGeral.indexOf('\n') != -1 ||
                  JustificativaGeral.length >= 91 ||
                  ObservacaoGeral.indexOf('\n') != -1 ||
                  ObservacaoGeral.length >= 91 ? (
                    <br></br>
                  ) : (
                    ''
                  )}
                </DivLineBreak>
              )}
              {ObservacaoGeral != '' && (
                <DivLineBreak>
                  <TextoComLineBreak>
                    <b>
                      {naturezaMovimentacao == 'AberturaVaga'
                        ? 'Justificativa/Observações:'
                        : 'Observações:'}
                      :
                    </b>{' '}
                    {ObservacaoGeral.indexOf('\n') == -1 &&
                    ObservacaoGeral.length < 91
                      ? ObservacaoGeral
                      : ''}
                  </TextoComLineBreak>
                  {ObservacaoGeral.indexOf('\n') != -1 ||
                  ObservacaoGeral.length >= 91 ? (
                    <TextoComLineBreak>
                      <p>{ObservacaoGeral}</p>
                    </TextoComLineBreak>
                  ) : (
                    ''
                  )}
                  {ObservacaoGeral.indexOf('\n') != -1 ||
                  ObservacaoGeral.length >= 91 ? (
                    <br></br>
                  ) : (
                    ''
                  )}
                </DivLineBreak>
              )}
              {/* <li>
                <b>Data Limite:</b> {DataLimite.split('-')[2]}/
                {DataLimite.split('-')[1]}/{DataLimite.split('-')[0]}
              </li>
              <br></br> */}
              <DivBotoesConfirmacao>
                <button
                  id="botaocancelar"
                  type="button"
                  onClick={() => {
                    if (
                      naturezaMovimentacao == 'AberturaVaga' &&
                      admissaoNaAbertura == true
                    ) {
                      SetSituacaoPedido('incluindoAdmissao')
                    } else {
                      cancelarConfirmacao()
                    }
                  }}
                >
                  Voltar
                </button>
                <button
                  id="botaoconfirmar"
                  type="button"
                  onClick={enviarSolicitacao}
                >
                  Confirmar
                </button>
              </DivBotoesConfirmacao>
            </ul>
          </DivListaSolicitacao>
        )}
        {SituacaoPedido == 'concluido' && (
          <div>
            <br></br>
            <h3>Solicitação realizada com sucesso!</h3>
            <ul>
              <br></br>
              <DivBotaoNovoPedido>
                <button type="button" onClick={NovoPedido}>
                  Novo Pedido
                </button>
              </DivBotaoNovoPedido>
            </ul>
          </div>
        )}
      </FormularioCompra>
    </>
  )
}

export default FormMovimentacaoPessoal
