import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../../containers/Header'
import { ErroSistema } from '../../components/ErroSistema'
import FormularioSolicitacao from '../../components/FormSolic'
import ListaSolicitacao from '../../components/ListaSolic'
import ListaSolicitacaoMP from '../../components/ListaMovPessoal'
import EditarParam from '../../components/EditarParam'
import FormMovimentacaoPessoal from '../../components/FormMovPessoal'
import { Container, MenuPrincipal, ItemMenuPrincipal } from '../../styles'

const Sistema = () => {
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
  if (nivel_acesso == 0) {
    return (
      <>
        <Header />
        <Container>
          <ErroSistema />
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Header nomeusur={nome_usuario} />
        <Container>
          <MenuPrincipal>
            {nivel_acesso >= 1 && nivel_acesso != 3 && (
              <ItemMenuPrincipal onClick={() => setOpcao('solicitacao_compra')}>
                Solicitar Compras
              </ItemMenuPrincipal>
            )}
            {nivel_acesso >= 2 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('exibir_solicitacoes_compra')}
              >
                Exibir Solicitações
              </ItemMenuPrincipal>
            )}
            {(nivel_acesso_mp == 2 || nivel_acesso_mp >= 4) && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('solicitar_movimentacao_pessoal')}
              >
                Solicitar Mov. de Pessoal
              </ItemMenuPrincipal>
            )}
            {nivel_acesso_mp >= 2 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('exibir_movimentacao_pessoal')}
              >
                Exibir Mov. de Pessoal
              </ItemMenuPrincipal>
            )}
            {nivel_acesso >= 4 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('gerenciamento_usuarios')}
              >
                Gerenciar Usuários
              </ItemMenuPrincipal>
            )}
            {nivel_acesso >= 4 && (
              <ItemMenuPrincipal onClick={() => setOpcao('editar_parametros')}>
                Editar Parâmetros
              </ItemMenuPrincipal>
            )}
            {nivel_acesso >= 5 && (
              <ItemMenuPrincipal onClick={() => setOpcao('config_sistema')}>
                Configurações
              </ItemMenuPrincipal>
            )}
          </MenuPrincipal>
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
            <FormMovimentacaoPessoal nomeusur={nome_usuario} />
          )}
          {opcao == 'exibir_movimentacao_pessoal' && (
            <ListaSolicitacaoMP
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
