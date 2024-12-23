import React, { useState, useEffect } from 'react'
import {
  LoginDiv,
  DivBotaoInvisivelHome,
  UserPassDiv,
  ItemUserPass,
  TextError
} from './styles'
import { useNavigate } from 'react-router-dom'

function TelaLoginSenha() {
  let usuario = ''
  let senha = ''
  const navigate = useNavigate()
  const [acesso, setAcesso] = useState(false)
  const [nivel_acesso, setNivelAcesso] = useState(0)
  const [nivel_acesso_mp, setNivelAcessoMP] = useState(0)
  const [nome_usuario, setNomeUsuario] = useState('')
  const [usuarioId, setUsuarioId] = useState('')
  const [paginaAtual, setPaginaAtual] = useState('login')
  const [situacaoLogin, setSituacaoLogin] = useState('ocioso')
  useEffect(() => {
    if (acesso == true) {
      navigate('/sistema', {
        state: {
          user: usuarioId,
          niv_acesso: nivel_acesso,
          niv_acesso_mp: nivel_acesso_mp,
          nome_user: nome_usuario
        }
      })
    }
  })
  const resetMainPage = () => {
    if (paginaAtual != 'login') {
      setPaginaAtual('login')
    }
    const texto_erro = document.getElementById('text_error')
    if (texto_erro != null) {
      texto_erro.textContent = ''
    }
  }
  const resetErrorMessage = () => {
    const texto_erro = document.getElementById('text_error')
    if (texto_erro != null && texto_erro.textContent != '') {
      texto_erro.textContent = ''
    }
  }
  const fetchResposta = async () => {
    const respostaLogin = await fetch(
      `http://192.168.0.143:8585/?tipo=pedidoacesso&usuario=${usuario}&senha=${senha}`
    )
    const corpo_resposta = respostaLogin.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta == 'usuario_incorreto') {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Usuário incorreto!'
        texto_erro.style.color = 'red'
      }
    } else if (resposta == 'senha_incorreta') {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Senha incorreta!'
        texto_erro.style.color = 'red'
      }
      return 'senha_incorreta'
    } else if (resposta == 'acesso_permitido') {
      const nome_usuario = 'user'
      const nivel_acesso = '4'
      const nivel_acesso_mp = '4'
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent = 'Acesso concedido! Carregando...'
        texto_erro.style.color = 'green'
        setUsuarioId(usuario)
        setNomeUsuario(nome_usuario)
        setNivelAcesso(parseInt(nivel_acesso))
        setNivelAcessoMP(parseInt(nivel_acesso_mp))
        return 'acesso'
      }
    }
  }
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    if (situacaoLogin == 'logando') {
      return
    } else {
      setSituacaoLogin('logando')
      const form = event.currentTarget
      const formElements = form.elements as typeof form.elements & {
        usuario: { value: string }
      } & {
        senha: { value: string }
      }
      usuario = formElements.usuario.value
      senha = formElements.senha.value
      const resposta = fetchResposta()
      if ((await resposta) == 'acesso') {
        setAcesso(true)
      }
      setSituacaoLogin('ocioso')
      formElements.usuario.value = ''
      formElements.senha.value = ''
    }
  }
  return (
    <>
      <DivBotaoInvisivelHome>
        <button onClick={resetMainPage}></button>
      </DivBotaoInvisivelHome>
      <LoginDiv>
        <main>
          <h1>Login:</h1>
          <form onSubmit={handleSubmit}>
            <UserPassDiv>
              <ItemUserPass>
                <input
                  id="usuario"
                  name="usuario"
                  type="text"
                  required
                  autoComplete="off"
                  onChange={resetErrorMessage}
                ></input>
                <label>Usuário</label>
              </ItemUserPass>
              <ItemUserPass>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  autoComplete="off"
                  onChange={resetErrorMessage}
                ></input>
                <label>Senha</label>
                <button
                  className={situacaoLogin == 'logando' ? 'desativado' : ''}
                >
                  Entrar
                </button>
                {situacaoLogin == 'logando' && <h3>Carregando...</h3>}
              </ItemUserPass>
            </UserPassDiv>
            <TextError id="text_error"></TextError>
          </form>
        </main>
      </LoginDiv>
    </>
  )
}

export default TelaLoginSenha
