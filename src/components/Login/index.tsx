import React, { useState, useEffect } from 'react'
import { LoginDiv, UserPassDiv, ItemUserPass, TextError } from './styles'
import { useNavigate } from 'react-router-dom'

function Login() {
  let usuario = ''
  let senha = ''
  const navigate = useNavigate()
  const [acesso, setAcesso] = useState(false)
  const [nivel_acesso, setNivelAcesso] = useState(0)
  const [nome_usuario, setNomeUsuario] = useState('')
  const [usuarioId, setUsuarioId] = useState('')
  useEffect(() => {
    if (acesso == true) {
      navigate('/sistema', {
        state: {
          user: usuarioId,
          niv_acesso: nivel_acesso,
          nome_user: nome_usuario
        }
      })
    }
  })
  const fetchResposta = async () => {
    const respostaLogin = await fetch(
      `https://davidsenra.pythonanywhere.com/?usuario=${usuario}&senha=${senha}`
    )
    const corpo_resposta = respostaLogin.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('acesso')) {
      const nome_usuario = resposta.split(';')[1]
      const nivel_acesso = resposta.split(';')[2]
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent = 'Acesso concedido! Carregando...'
        texto_erro.style.color = 'green'
        setUsuarioId(usuario)
        setNomeUsuario(nome_usuario)
        setNivelAcesso(parseInt(nivel_acesso))
        return 'acesso'
      }
      return 'acesso'
    } else if (resposta.includes('nao_encontrado')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Usuário não encontrado!'
        texto_erro.style.color = 'red'
      }
      return 'nao-encontrado'
    } else if (resposta.includes('senha')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Senha incorreta!'
        texto_erro.style.color = 'red'
      }
      return 'senha_incorreta'
    }
  }
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
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
    formElements.usuario.value = ''
    formElements.senha.value = ''
  }
  return (
    <LoginDiv>
      <main>
        <h1>Login no Sistema:</h1>
        <form onSubmit={handleSubmit}>
          <UserPassDiv>
            <ItemUserPass>
              <input
                id="usuario"
                name="usuario"
                type="text"
                required
                autoComplete="off"
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
              ></input>
              <label>Senha</label>
              <button>Login</button>
            </ItemUserPass>
          </UserPassDiv>
          <TextError id="text_error"></TextError>
        </form>
      </main>
    </LoginDiv>
  )
}

export default Login
