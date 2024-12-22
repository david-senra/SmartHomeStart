import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../../containers/Header'
import { ErroSistema } from '../../components/ErroSistema'
import FormularioSolicitacao from '../../components/FormSolic'
import ListaSolicitacao from '../../components/ListaSolic'
import ListaSolicitacaoMP from '../../components/ListaMovPessoal'
import QuadroPessoal from '../../components/QuadroPessoal'
import EditarParam from '../../components/EditarParam'
import FormMovimentacaoPessoal from '../../components/FormMovPessoal'
import { Container, MenuPrincipal, ItemMenuPrincipal } from '../../styles'

const Sistema = () => {
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
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
          <MenuPrincipal className={opcaoCategoria != '' ? 'comTraco' : ''}>
            {nivel_acesso >= 1 && (
              <ItemMenuPrincipal
                onClick={() => {
                  if (opcaoCategoria != 'compras') {
                    setOpcaoCategoria('compras')
                    setOpcao('')
                  }
                }}
                className={opcaoCategoria == 'compras' ? 'ativo' : ''}
              >
                Compras
              </ItemMenuPrincipal>
            )}
            {nivel_acesso_mp >= 1 && (
              <ItemMenuPrincipal
                onClick={() => {
                  if (opcaoCategoria != 'mov_pessoal') {
                    setOpcaoCategoria('mov_pessoal')
                    setOpcao('')
                  }
                }}
                className={opcaoCategoria == 'mov_pessoal' ? 'ativo' : ''}
              >
                Mov. Pessoal
              </ItemMenuPrincipal>
            )}
            {nivel_acesso >= 3 && (
              <ItemMenuPrincipal
                onClick={() => {
                  if (opcaoCategoria != 'configuracoes') {
                    setOpcaoCategoria('configuracoes')
                    setOpcao('')
                  }
                }}
                className={opcaoCategoria == 'configuracoes' ? 'ativo' : ''}
              >
                Configurações
              </ItemMenuPrincipal>
            )}
          </MenuPrincipal>
          <MenuPrincipal>
            {opcaoCategoria == 'compras' &&
              nivel_acesso >= 1 &&
              nivel_acesso != 3 && (
                <ItemMenuPrincipal
                  onClick={() => setOpcao('solicitacao_compra')}
                >
                  Solicitar Compras
                </ItemMenuPrincipal>
              )}
            {opcaoCategoria == 'compras' && nivel_acesso >= 2 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('exibir_solicitacoes_compra')}
              >
                Exibir Solicitações
              </ItemMenuPrincipal>
            )}
            {opcaoCategoria == 'mov_pessoal' &&
              (nivel_acesso_mp == 1 ||
                nivel_acesso_mp == 2 ||
                nivel_acesso_mp >= 4) && (
                <ItemMenuPrincipal
                  onClick={() => setOpcao('solicitar_movimentacao_pessoal')}
                >
                  Solicitar Mov. de Pessoal
                </ItemMenuPrincipal>
              )}
            {opcaoCategoria == 'mov_pessoal' && nivel_acesso_mp >= 1 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('exibir_movimentacao_pessoal')}
              >
                Exibir Solicitações
              </ItemMenuPrincipal>
            )}
            {opcaoCategoria == 'mov_pessoal' && nivel_acesso_mp >= 2 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('exibir_quadro_pessoal')}
              >
                Exibir Quadro de Pessoal
              </ItemMenuPrincipal>
            )}
            {opcaoCategoria == 'configuracoes' && nivel_acesso >= 4 && (
              <ItemMenuPrincipal
                onClick={() => setOpcao('gerenciamento_usuarios')}
              >
                Gerenciar Usuários
              </ItemMenuPrincipal>
            )}
            {opcaoCategoria == 'configuracoes' && nivel_acesso >= 4 && (
              <ItemMenuPrincipal onClick={() => setOpcao('editar_parametros')}>
                Editar Parâmetros
              </ItemMenuPrincipal>
            )}
            {opcaoCategoria == 'configuracoes' && nivel_acesso >= 5 && (
              <ItemMenuPrincipal onClick={() => setOpcao('config_sistema')}>
                Configurações Avançadas
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
