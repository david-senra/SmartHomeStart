import React from 'react'
import {
  FormularioCompra,
  DivEmpresa,
  DivItem,
  DivItemNome,
  DivItemQuant,
  DivItemDesc,
  DivDataObs,
  DivObsGeral,
  DivDataLimite,
  DivButtonSolicitar,
  DivButtonAdicionarItem,
  DivButtonRemoverItem,
  DivItemCentroCusto,
  DivSugestaoFornecedores,
  DivBotoesConfirmacao,
  DivBotaoNovoPedido,
  DivMensagemErro,
  DivItemUnid,
  DivListaSolicitacao,
  GridLista,
  GridItem,
  GridItemCabecalho,
  GridListaCabecalho,
  GridItemCabecalhoUltimo,
  GridItemUltimo,
  TextoComLineBreak,
  DivLineBreak,
  TextoCarregando
} from './styles'

const FormularioSolicitacao = ({ nomeusur = '' }) => {
  class Compra {
    id: number
    quantidade: number
    unidade: string
    descricao: string
    centrocusto: string
    centrocustoCompleto: string
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
      centrocustoCompleto: string
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
      this.centrocustoCompleto = data.centrocustoCompleto
    }
  }
  const compraInicial = {
    id: 1,
    quantidade: 0,
    unidade: 'und',
    descricao: '',
    centrocusto: '',
    centrocustoCompleto: '',
    observacao: '',
    status: 'aberto',
    editandoQuantidade: false,
    novaQuantidade: 0,
    editandoUnidade: false,
    novaUnidade: 'und',
    editandoDescricao: false,
    novaDescricao: '',
    editandoCentroDeCusto: false,
    novoCentroCusto: '',
    editandoObservacao: false,
    novaObservacao: '',
    requisicao: '',
    dataEntregue: '',
    dataFinalizado: '',
    fornecedor: '',
    precoUnitario: 0,
    precoTotal: 0
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
  const [ResetPedido, SetResetPedido] = React.useState<string>('off')
  const [SituacaoPedido, SetSituacaoPedido] =
    React.useState<string>('solicitando')
  const [empresaSelecionada, setEmpresaSelecionada] =
    React.useState<string>('Cantaria')
  const [DataLimite, SetDataLimite] = React.useState<string>('')
  const [MensagemErro, SetMensagemErro] = React.useState<string>('')
  const [estadoEnvioSolicitacao, setEstadoEnvioSolicitacao] =
    React.useState<string>('ocioso')
  const [ObservacaoGeral, setObservacaoGeral] = React.useState<string>('')
  const [sugestaoFornecedores, setSugestaoFornecedores] =
    React.useState<string>('')
  const [listaItems, setListaItems] = React.useState<number[]>([1])
  const [listaCompras, setListaCompras] = React.useState<Compra[]>([
    compraInicial
  ])
  const adicionarItem = () => {
    let ultimo_item
    if (listaItems.length == 0) {
      ultimo_item = 0
    } else {
      ultimo_item = listaItems.at(-1)
    }
    if (ultimo_item !== undefined && listaItems.length < 20) {
      const nova_lista = [...listaItems]
      nova_lista.push(ultimo_item + 1)
      setListaItems(nova_lista)
      const novaCompra = {
        id: ultimo_item + 1,
        quantidade: 0,
        unidade: 'und',
        descricao: '',
        centrocusto: '',
        centrocustoCompleto: '',
        observacao: '',
        status: 'aberto',
        editandoQuantidade: false,
        novaQuantidade: 0,
        editandoUnidade: false,
        novaUnidade: 'und',
        editandoDescricao: false,
        novaDescricao: '',
        editandoCentroDeCusto: false,
        novoCentroCusto: '',
        editandoObservacao: false,
        novaObservacao: '',
        requisicao: '',
        dataEntregue: '',
        dataFinalizado: '',
        fornecedor: '',
        precoUnitario: 0,
        precoTotal: 0
      }
      const nova_lista_compras = [...listaCompras]
      nova_lista_compras.push(novaCompra)
      setListaCompras(nova_lista_compras)
    }
  }
  const removerItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (listaItems.length != 1) {
      const id_elemento = parseInt(e.currentTarget.id)
      const nova_lista = [...listaItems]
      const lista_modificada = nova_lista.filter((obj) => obj !== id_elemento)
      setListaItems(lista_modificada)
      const nova_lista_compras = [...listaCompras]
      const lista_compras_modificada = nova_lista_compras.filter(
        (obj) => obj.id !== id_elemento
      )
      setListaCompras(lista_compras_modificada)
    }
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
  const changeItemDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id_elemento = parseInt(e.currentTarget.id)
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...listaCompras]
    function isElement(compra: Compra) {
      return compra.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.descricao = valor_elemento
    elemento.novaDescricao = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setListaCompras(nova_lista)
    console.log(listaCompras)
  }
  const changeItemQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id_elemento = parseInt(e.currentTarget.id)
    const valor_elemento = parseFloat(e.currentTarget.value)
    const nova_lista = [...listaCompras]
    function isElement(compra: Compra) {
      return compra.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    console.log(valor_elemento)
    elemento.quantidade = valor_elemento
    elemento.novaQuantidade = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setListaCompras(nova_lista)
    console.log(listaCompras)
  }
  const changeItemUnidade = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id_elemento = parseInt(e.currentTarget.id)
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...listaCompras]
    function isElement(compra: Compra) {
      return compra.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.unidade = valor_elemento
    elemento.novaUnidade = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setListaCompras(nova_lista)
    console.log(listaCompras)
  }
  const changeItemCentroCusto = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id_elemento = parseInt(e.currentTarget.id)
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...listaCompras]
    function isElement(compra: Compra) {
      return compra.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.centrocusto = valor_elemento.split(' - ')[0]
    elemento.novoCentroCusto = valor_elemento.split(' - ')[0]
    elemento.centrocustoCompleto = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setListaCompras(nova_lista)
  }
  const changeItemObservacao = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id_elemento = parseInt(e.currentTarget.id)
    const valor_elemento = e.currentTarget.value
    const nova_lista = [...listaCompras]
    function isElement(compra: Compra) {
      return compra.id == id_elemento
    }
    const indice_elemento = nova_lista.findIndex(isElement)
    const elemento = nova_lista.filter(isElement)[0]
    elemento.observacao = valor_elemento
    elemento.novaObservacao = valor_elemento
    nova_lista.splice(indice_elemento, 1)
    nova_lista.splice(indice_elemento, 0, elemento)
    setListaCompras(nova_lista)
    console.log(listaCompras)
  }
  const changeSugestaoFornecedores = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const valor_elemento = e.currentTarget.value
    setSugestaoFornecedores(valor_elemento)
  }
  const changeObservacao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valor_elemento = e.currentTarget.value
    setObservacaoGeral(valor_elemento)
  }
  const changeDataLimite = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor_elemento = e.currentTarget.value
    SetDataLimite(valor_elemento)
  }
  const changeEmpresa = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor_elemento = e.currentTarget.value
    setEmpresaSelecionada(valor_elemento)
  }
  const solicitarCompra = () => {
    const texto_erro = document.getElementById('mensagemErro')
    texto_erro?.scrollIntoView()
    if (DataLimite == '') {
      const texto_erro = document.getElementById('mensagemErro')
      texto_erro?.scrollIntoView()
      SetMensagemErro('A data limite precisa ser definida!')
    } else {
      let erro = ''
      listaCompras.forEach(function (item) {
        if (item.quantidade == 0) {
          erro = 'quantidade'
        } else if (item.descricao == '') {
          erro = 'descricao'
        } else if (item.centrocusto == '') {
          erro = 'centrocusto'
        }
      })
      if (erro == 'quantidade') {
        SetMensagemErro(
          'Todos os itens da lista precisam ter quantidades definidas!'
        )
        const texto_erro = document.getElementById('mensagemErro')
        texto_erro?.scrollIntoView()
      } else if (erro == 'descricao') {
        SetMensagemErro('Todos os itens da lista precisam ter uma descrição!')
        const texto_erro = document.getElementById('mensagemErro')
        texto_erro?.scrollIntoView()
      } else if (erro == 'centrocusto') {
        SetMensagemErro(
          'Todos os itens da lista precisam ter o centro de custo definido!'
        )
        const texto_erro = document.getElementById('mensagemErro')
        texto_erro?.scrollIntoView()
      } else if (erro == '') {
        SetMensagemErro('')
        SetSituacaoPedido('confirmando')
      }
    }
  }
  const cancelarConfirmacao = () => {
    SetSituacaoPedido('solicitando')
  }
  const enviarSolicitacao = async () => {
    setEstadoEnvioSolicitacao('enviando')
    const anoData = DataLimite.split('-')[0]
    const mesData = DataLimite.split('-')[1]
    const diaData = DataLimite.split('-')[2]
    const dataLimiteFormatada = diaData + '/' + mesData + '/' + anoData
    const dataAgora = new Date()
    const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
    console.log(dataAgoraBrasil)
    const horaDataAgora = dataAgora.getHours()
    const minutosDataAgora = dataAgora.getMinutes()
    const horarioAgora = horaDataAgora + ':' + minutosDataAgora
    const jsonCompra = {
      usuario: nomeusur,
      empresa: empresaSelecionada,
      itens: listaCompras,
      sugestfornecedor: sugestaoFornecedores,
      obsFinal: ObservacaoGeral,
      dataLimite: dataLimiteFormatada,
      data_solicitacao: dataAgoraBrasil,
      horarioSolicitacao: horarioAgora,
      statusSolicitacao: 'aberto',
      isCardOpen: false,
      altura: 0,
      editandoEmpresa: false,
      novaEmpresa: empresaSelecionada,
      editandoDataLimite: false,
      novaDataLimite: dataLimiteFormatada,
      editandoSugFor: false,
      novaSugFor: sugestaoFornecedores,
      editandoObsFinal: false,
      novaObsFinal: ObservacaoGeral,
      podeDestrancar: true,
      requisicao: 'criacaoSolicitacao',
      todosEntregues: 'nao'
    }
    const respostaEnvio = await fetch(
      'https://davidsenra.pythonanywhere.com/',
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonCompra)
      }
    )
    const corpo_resposta = respostaEnvio.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('solicitacao_recebida')) {
      console.log('Sucesso!')
      SetSituacaoPedido('concluido')
      SetResetPedido('on')
      mandarEmail('criacaoSolicitacao', nomeusur)
    }
    setEstadoEnvioSolicitacao('ocioso')
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
    setEmpresaSelecionada('Cantaria')
    SetDataLimite('')
    SetMensagemErro('')
    setObservacaoGeral('')
    setSugestaoFornecedores('')
    setListaItems([1])
    const compraInicial = {
      id: 1,
      quantidade: 0,
      unidade: 'und',
      descricao: '',
      centrocusto: '',
      centrocustoCompleto: '',
      observacao: '',
      status: 'aberto',
      editandoQuantidade: false,
      novaQuantidade: 0,
      editandoUnidade: false,
      novaUnidade: 'und',
      editandoDescricao: false,
      novaDescricao: '',
      editandoCentroDeCusto: false,
      novoCentroCusto: '',
      editandoObservacao: false,
      novaObservacao: '',
      requisicao: '',
      dataEntregue: '',
      dataFinalizado: '',
      fornecedor: '',
      precoUnitario: 0,
      precoTotal: 0
    }
    setListaCompras([compraInicial])
    SetSituacaoPedido('solicitando')
    SetResetPedido('off')
  }
  return (
    <>
      <FormularioCompra>
        <h1>Solicitar Compra de Materiais e/ou Serviços</h1>
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
                <option value="Cantaria">Cantaria</option>
                <option value="Santa Bárbara">Santa Bárbara</option>
              </select>
            </DivEmpresa>
            <br></br>
            <DivItem className="headerItems">
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
            </DivItem>
            {listaItems.map((item) => (
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
                      <option key={centroCusto} value={centroCusto}>
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
            ))}
            <DivButtonAdicionarItem>
              <button type="button" onClick={adicionarItem}>
                +
              </button>
            </DivButtonAdicionarItem>
            <DivDataObs>
              <br></br>
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
              <br></br>
              <DivDataLimite>
                <label>Data Limite na Obra:</label>
                <input
                  name="item"
                  type="date"
                  min={getMinimumDate()}
                  required
                  autoComplete="off"
                  onChange={(e) => changeDataLimite(e)}
                ></input>
              </DivDataLimite>
            </DivDataObs>
            <DivButtonSolicitar>
              <button type={'button'} onClick={solicitarCompra}>
                Solicitar
              </button>
            </DivButtonSolicitar>
            {MensagemErro != '' && (
              <DivMensagemErro id="mensagemErro">
                <p>{MensagemErro}</p>
              </DivMensagemErro>
            )}
          </div>
        )}
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
              <br></br>
              <li>
                <b>Itens:</b>
              </li>
              <li>
                <GridListaCabecalho>
                  <GridItemCabecalho>Qtd:</GridItemCabecalho>
                  <GridItemCabecalho>Und:</GridItemCabecalho>
                  <GridItemCabecalho>Descrição:</GridItemCabecalho>
                  <GridItemCabecalho>C. Custo:</GridItemCabecalho>
                  <GridItemCabecalhoUltimo>Observação:</GridItemCabecalhoUltimo>
                </GridListaCabecalho>
              </li>
              <li>
                {listaCompras.map((item) => (
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
                ))}
              </li>
              <br></br>
              <br></br>
              {sugestaoFornecedores != '' && (
                <DivLineBreak>
                  <TextoComLineBreak>
                    <b>Sugestão de Fornecedores:</b>{' '}
                    {sugestaoFornecedores.indexOf('\n') == -1 &&
                    sugestaoFornecedores.length < 91
                      ? sugestaoFornecedores
                      : ''}
                  </TextoComLineBreak>
                  {sugestaoFornecedores.indexOf('\n') != -1 ||
                  sugestaoFornecedores.length >= 91 ? (
                    <TextoComLineBreak>
                      {sugestaoFornecedores}
                    </TextoComLineBreak>
                  ) : (
                    ''
                  )}
                  {sugestaoFornecedores.indexOf('\n') != -1 ||
                  sugestaoFornecedores.length >= 91 ||
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
                    <b>Observações:</b>{' '}
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
              <li>
                <b>Data Limite:</b> {DataLimite.split('-')[2]}/
                {DataLimite.split('-')[1]}/{DataLimite.split('-')[0]}
              </li>
              <br></br>
              <DivBotoesConfirmacao>
                <button
                  id="botaocancelar"
                  type="button"
                  onClick={cancelarConfirmacao}
                >
                  Voltar
                </button>
                <button
                  id="botaoconfirmar"
                  type="button"
                  onClick={() =>
                    estadoEnvioSolicitacao == 'ocioso' && enviarSolicitacao()
                  }
                  className={
                    estadoEnvioSolicitacao == 'enviando' ? 'desativado' : ''
                  }
                >
                  Confirmar
                </button>
              </DivBotoesConfirmacao>
              {estadoEnvioSolicitacao == 'enviando' && (
                <TextoCarregando>Enviando... Aguarde...</TextoCarregando>
              )}
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

export default FormularioSolicitacao
