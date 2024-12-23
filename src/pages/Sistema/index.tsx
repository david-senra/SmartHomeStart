import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../../containers/Header'
import { HeaderDiv } from '../../containers/Header/styles'
import { ErroSistema } from '../../components/ErroSistema'
import FormularioSolicitacao from '../../components/FormSolic'
import ListaSolicitacao from '../../components/ListaSolic'
import ListaSolicitacaoMP from '../../components/ListaMovPessoal'
import QuadroPessoal from '../../components/QuadroPessoal'
import EditarParam from '../../components/EditarParam'
import FormMovimentacaoPessoal from '../../components/FormMovPessoal'
import {
  Container,
  MenuPrincipal,
  ItemMenuPrincipal,
  IconeSmartHome
} from '../../styles'
import HouseIconImg from '../../assets/images/house-icon.png'

const Sistema = () => {
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [opcaoGeral, setOpcaoGeral] = useState('geral')
  const [opcaoEspecifica, setOpcaoEspecifica] = useState('')
  const [opcaoCategoria, setOpcaoCategoria] = useState('')
  const [opcao, setOpcao] = useState('')
  const location = useLocation()
  // let id_usuario = ''
  let nivel_acesso = 0
  let nivel_acesso_mp = 0
  let nome_usuario = ''
  if (location.state != null) {
    // id_usuario = location.state.user
    nivel_acesso = location.state.niv_acesso
    nivel_acesso_mp = location.state.niv_acesso_mp
    nome_usuario = location.state.nome_user
    console.log(nome_usuario)
    console.log(nivel_acesso)
  }
  if (firstLoad && nivel_acesso >= 1 && nivel_acesso_mp == 0) {
    setOpcaoCategoria('compras')
    setFirstLoad(false)
  }
  if (nivel_acesso == 0) {
    return (
      <>
        <Header></Header>
        <Container>
          <ErroSistema />
        </Container>
      </>
    )
  } else {
    return (
      <>
        <HeaderDiv className={`${opcaoGeral == 'geral' ? 'comCasinha' : ''}`}>
          <ul
            className={`filaSuperior ${opcaoGeral == 'geral' ? 'comCasinha' : ''}`}
          >
            <li>
              <button
                type="button"
                className={opcaoGeral == 'geral' ? 'ativo' : ''}
                onClick={() => opcao != 'geral' && setOpcaoGeral('geral')}
              >
                Geral
              </button>
            </li>
            <li>
              <button
                type="button"
                className={opcaoGeral == 'comodos' ? 'ativo' : ''}
                onClick={() => opcao != 'comodos' && setOpcaoGeral('comodos')}
              >
                Cômodos
              </button>
            </li>
            <li>
              <button
                type="button"
                className={opcaoGeral == 'categorias' ? 'ativo' : ''}
                onClick={() =>
                  opcao != 'categorias' && setOpcaoGeral('categorias')
                }
              >
                Categorias
              </button>
            </li>
            <li>
              <button
                type="button"
                className={opcaoGeral == 'configuracoes' ? 'ativo' : ''}
                onClick={() =>
                  opcao != 'configuracoes' && setOpcaoGeral('configuracoes')
                }
              >
                Configurações
              </button>
            </li>
          </ul>
          {opcaoGeral == 'geral' && (
            <ul className="listaIcone">
              <li className="listaIcone">
                <IconeSmartHome src={HouseIconImg} alt="Icone Smart Home" />
              </li>
            </ul>
          )}
          {opcaoGeral == '' && (
            <ul className="listaInferior">
              <li></li>
            </ul>
          )}
          {opcaoGeral == 'comodos' && (
            <ul className="listaInferior">
              <li>
                <button type="button">Sala</button>
              </li>
              <li>
                <button type="button">Sala de TV</button>
              </li>
              <li>
                <button type="button">Área Externa</button>
              </li>
              <li>
                <button type="button">Quartos</button>
              </li>
              <li>
                <button type="button">Cozinha</button>
              </li>
            </ul>
          )}
          {opcaoGeral == 'categorias' && (
            <ul className="listaInferior">
              <li>
                <button type="button">Iluminação</button>
              </li>
              <li>
                <button type="button">Multimídia</button>
              </li>
              <li>
                <button type="button">Jardinagem</button>
              </li>
              <li>
                <button type="button">Câmeras</button>
              </li>
              <li>
                <button type="button">Outros</button>
              </li>
            </ul>
          )}
          {opcaoGeral == 'configuracoes' && (
            <ul className="listaInferior">
              <li>
                <button type="button">Ações</button>
              </li>
              <li>
                <button type="button">Automações</button>
              </li>
            </ul>
          )}
        </HeaderDiv>
        <Container>
          {opcao == 'solicitacao_compra' && (
            <FormularioSolicitacao nomeusur={nome_usuario} />
          )}
          {opcao == 'exibir_solicitacoes_compra' && (
            <ListaSolicitacao
              nomeusur={nome_usuario}
              nivelusur={nivel_acesso}
            />
          )}
          {opcao == 'solicitar_movimentacao_pessoal' && (
            <FormMovimentacaoPessoal
              nomeusur={nome_usuario}
              nivelusur={nivel_acesso_mp}
            />
          )}
          {opcao == 'exibir_movimentacao_pessoal' && (
            <ListaSolicitacaoMP
              nomeusur={nome_usuario}
              nivelusur={nivel_acesso_mp}
            />
          )}
          {opcao == 'exibir_quadro_pessoal' && (
            <QuadroPessoal
              nomeusur={nome_usuario}
              nivelusur={nivel_acesso_mp}
            />
          )}
          {opcao == 'editar_parametros' && <EditarParam />}
        </Container>
      </>
    )
  }
}

export default Sistema
