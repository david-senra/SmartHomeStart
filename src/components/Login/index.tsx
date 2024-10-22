import React, { useState, useEffect } from 'react'
import {
  LoginDiv,
  UserPassDiv,
  ItemUserPass,
  TextError,
  DivBotaoCadastrarSenha,
  DivBotaoInvisivelHome,
  BotaoCadastrarSenha,
  TextSenha,
  TextSuccess,
  ListaCondicoesSenha
} from './styles'
import { useNavigate } from 'react-router-dom'

function Login() {
  let usuario = ''
  let senha = ''
  let usuarioCadastro = ''
  let senhaCadastro1 = ''
  let senhaCadastro2 = ''
  const navigate = useNavigate()
  const [acesso, setAcesso] = useState(false)
  const [nivel_acesso, setNivelAcesso] = useState(0)
  const [nome_usuario, setNomeUsuario] = useState('')
  const [usuarioId, setUsuarioId] = useState('')
  const [paginaAtual, setPaginaAtual] = useState('login')
  const [passwordOne, setPasswordOne] = useState('')
  const [caracteresEspeciais] = useState(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)
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
  const encriptarSenha = (senhaPura: string | undefined) =>
    crypto.subtle
      .digest('SHA-256', new TextEncoder().encode(senhaPura))
      .then((h) => {
        const hexes = [],
          view = new DataView(h)
        for (let i = 0; i < view.byteLength; i += 4)
          hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8))
        return hexes.join('')
      })
  const togglePage = () => {
    if (paginaAtual == 'login') {
      setPaginaAtual('cadastroSenha')
    } else {
      setPaginaAtual('login')
    }
  }
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
  const checkPasswordOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetErrorMessage()
    const valor = e.target.value
    setPasswordOne(valor)
  }
  const fetchResposta = async () => {
    const dataAgora = new Date()
    const dataAgoraBrasil = dataAgora.toLocaleDateString('pt-Br')
    const diaAgora = dataAgoraBrasil.split('/')[0]
    const mesAgora = dataAgoraBrasil.split('/')[1]
    const anoAgora = dataAgoraBrasil.split('/')[2]
    const horaDataAgora = dataAgora.getHours()
    const minutosDataAgora = dataAgora.getMinutes()
    const dataHorario =
      'h' +
      horaDataAgora +
      'min' +
      minutosDataAgora +
      'dia' +
      diaAgora +
      'mes' +
      mesAgora +
      'ano' +
      anoAgora
    const senhaEncriptada = await encriptarSenha(senha)
    const respostaLogin = await fetch(
      `https://davidsenra.pythonanywhere.com/?datahorario=${dataHorario}&usuario=${usuario}&senha=${senhaEncriptada}`
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
    } else if (resposta.includes('senha_nao_cadastrada')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Usuário ainda não cadastrou uma senha!'
        texto_erro.style.color = 'red'
      }
      return 'nao-encontrado'
    } else if (resposta.includes('erro_senha')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Senha incorreta!'
        texto_erro.style.color = 'red'
      }
      return 'senha_incorreta'
    }
  }
  const fetchRespostaCadastro = async () => {
    const senhaEncriptada = await encriptarSenha(senhaCadastro1)
    console.log(senhaCadastro1)
    console.log(senhaEncriptada)
    const jsonCadastroSenha = {
      requisicao: 'criacaoSenhaUsuario',
      usuario: usuarioCadastro,
      senha: senhaEncriptada
    }
    const respostaLogin = await fetch(
      `https://davidsenra.pythonanywhere.com/`,
      {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonCadastroSenha)
      }
    )
    const corpo_resposta = respostaLogin.text()
    const resposta = (await corpo_resposta).toString()
    if (resposta.includes('sucesso_cadastro')) {
      const texto_sucesso = document.getElementById('text_sucesso')
      if (texto_sucesso != null) {
        texto_sucesso.textContent = 'Senha Cadastrada com Sucesso!'
        texto_sucesso.style.color = 'green'
      }
      setPaginaAtual('cadastrado')
      return 'sucesso'
    } else if (resposta.includes('usuario_ja_cadastrado')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent = 'Usuário já cadastrado!'
        texto_erro.style.color = 'red'
      }
      return 'ja_cadastrado'
    } else if (resposta.includes('nao_encontrado')) {
      const texto_erro = document.getElementById('text_error')
      texto_erro?.scrollIntoView()
      if (texto_erro != null) {
        texto_erro.textContent =
          'Usuário não registrado para cadastro de senha!'
        texto_erro.style.color = 'red'
      }
      return 'nao_encontrado'
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
  async function handleSubmitCriacaoSenha(
    event: React.SyntheticEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      usuarioCad: { value: string }
    } & {
      senhaCad1: { value: string }
    } & {
      senhaCad2: { value: string }
    }
    usuarioCadastro = formElements.usuarioCad.value
    senhaCadastro1 = formElements.senhaCad1.value
    senhaCadastro2 = formElements.senhaCad2.value
    if (senhaCadastro1 != senhaCadastro2) {
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent =
          'Os dois campos de senha precisam ser idênticos!'
        texto_erro.style.color = 'red'
        formElements.senhaCad1.value = ''
        formElements.senhaCad2.value = ''
      }
    } else if (senhaCadastro1.length < 8) {
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent = 'A senha deve possuir pelo menos 8 dígitos!'
        texto_erro.style.color = 'red'
        formElements.senhaCad1.value = ''
        formElements.senhaCad2.value = ''
        setPasswordOne('')
      }
    } else if (/\d/.test(senhaCadastro1) == false) {
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent = 'A senha deve possuir números!'
        texto_erro.style.color = 'red'
        formElements.senhaCad1.value = ''
        formElements.senhaCad2.value = ''
        setPasswordOne('')
      }
    } else if (
      /[A-Z]/.test(senhaCadastro1) &&
      /[a-z]/.test(senhaCadastro1) == false
    ) {
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent =
          'A senha deve possuir letras maiúsculas e minúsculas!'
        texto_erro.style.color = 'red'
        formElements.senhaCad1.value = ''
        formElements.senhaCad2.value = ''
        setPasswordOne('')
      }
    } else if (caracteresEspeciais.test(senhaCadastro1) == false) {
      const texto_erro = document.getElementById('text_error')
      if (texto_erro != null) {
        texto_erro.textContent = 'A senha deve possuir caracteres especiais!'
        texto_erro.style.color = 'red'
        formElements.senhaCad1.value = ''
        formElements.senhaCad2.value = ''
        setPasswordOne('')
      }
    } else {
      const resposta = fetchRespostaCadastro()
      if ((await resposta) == 'sucesso') {
        setPaginaAtual('cadastrado')
      }
      setPasswordOne('')
      formElements.usuarioCad.value = ''
      formElements.senhaCad1.value = ''
      formElements.senhaCad2.value = ''
    }
  }
  return (
    <>
      <DivBotaoInvisivelHome>
        <button onClick={resetMainPage}></button>
      </DivBotaoInvisivelHome>
      {paginaAtual == 'login' && (
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
                  <button>Login</button>
                </ItemUserPass>
              </UserPassDiv>
              <TextError id="text_error"></TextError>
              <DivBotaoCadastrarSenha>
                <BotaoCadastrarSenha type="button" onClick={togglePage}>
                  Cadastrar Senha
                </BotaoCadastrarSenha>
              </DivBotaoCadastrarSenha>
            </form>
          </main>
        </LoginDiv>
      )}
      {paginaAtual == 'cadastroSenha' && (
        <LoginDiv>
          <main>
            <h1>Criação de Senha - Novo Usuário</h1>
            <form onSubmit={handleSubmitCriacaoSenha}>
              <UserPassDiv>
                <ItemUserPass>
                  <input
                    id="usuarioCad"
                    name="usuarioCad"
                    type="text"
                    required
                    autoComplete="off"
                    onChange={resetErrorMessage}
                  ></input>
                  <label>Usuário</label>
                </ItemUserPass>
                <TextSenha>CONDIÇÕES DA SENHA:</TextSenha>
                <ListaCondicoesSenha>
                  <li
                    style={{
                      backgroundColor:
                        passwordOne.length > 7 ? '#90EE90' : '#FFCCCB'
                    }}
                  >
                    <p>8 CARACTERES</p>
                  </li>
                  <li
                    style={{
                      backgroundColor: /\d/.test(passwordOne)
                        ? '#90EE90'
                        : '#FFCCCB'
                    }}
                  >
                    <p>NÚMEROS</p>
                  </li>
                  <li
                    style={{
                      backgroundColor:
                        /[A-Z]/.test(passwordOne) && /[a-z]/.test(passwordOne)
                          ? '#90EE90'
                          : '#FFCCCB'
                    }}
                  >
                    <p>MAIÚSCULAS E MINÚSCULAS</p>
                  </li>
                  <li
                    style={{
                      backgroundColor: caracteresEspeciais.test(passwordOne)
                        ? '#90EE90'
                        : '#FFCCCB'
                    }}
                  >
                    <p>CARACTERES ESPECIAIS</p>
                  </li>
                </ListaCondicoesSenha>
                <ItemUserPass className="senha">
                  <input
                    id="senhaCad1"
                    name="senhaCad1"
                    type="password"
                    required
                    autoComplete="off"
                    onChange={(e) => checkPasswordOne(e)}
                  ></input>
                  <label>Senha</label>
                </ItemUserPass>
                <ItemUserPass className="confirmarSenha">
                  <input
                    id="senhaCad2"
                    name="senhaCad2"
                    type="password"
                    required
                    autoComplete="off"
                    className="confirmarSenha"
                    onChange={resetErrorMessage}
                  ></input>
                  <label className={'confirmarSenha'}>Confirmar Senha</label>
                  <button className={'cadastroSenha'}>Cadastrar</button>
                </ItemUserPass>
              </UserPassDiv>
              <TextError id="text_error"></TextError>
              <DivBotaoCadastrarSenha>
                <BotaoCadastrarSenha type="button" onClick={togglePage}>
                  Fazer Login
                </BotaoCadastrarSenha>
              </DivBotaoCadastrarSenha>
            </form>
          </main>
        </LoginDiv>
      )}
      {paginaAtual == 'cadastrado' && (
        <LoginDiv>
          <main>
            <h1>Criação de Senha - Novo Usuário</h1>
            <div>
              <TextSuccess id="text_sucesso">
                Senha Cadastrada com Sucesso!
              </TextSuccess>
              <DivBotaoCadastrarSenha>
                <BotaoCadastrarSenha type="button" onClick={resetMainPage}>
                  Fazer Login
                </BotaoCadastrarSenha>
              </DivBotaoCadastrarSenha>
            </div>
          </main>
        </LoginDiv>
      )}
    </>
  )
}

export default Login
