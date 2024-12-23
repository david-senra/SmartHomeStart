import React, { useState, useEffect } from 'react'
import { LoginDiv, UserPassDiv, ItemUserPass, TextError } from './styles'
import LogoImg from '../../assets/images/house-icon-blue.png'
import { LogoStyle } from './styles'

function TelaLogin() {
  const [acesso, setAcesso] = useState(false)
  const [situacaoLogin, setSituacaoLogin] = useState('ocioso')
  useEffect(() => {
    if (acesso == true) {
      window.location.href = 'https://smart-home-azesen.vercel.app'
      // window.location.href = 'https://smart-home-azesen.vercel.app/?q=ABC'
    }
  })
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    if (situacaoLogin == 'logando') {
      return
    } else {
      setSituacaoLogin('logando')
      setAcesso(true)
      setSituacaoLogin('ocioso')
    }
  }
  return (
    <>
      <LoginDiv>
        <main>
          <form onSubmit={handleSubmit}>
            <div>
              <LogoStyle src={LogoImg} alt="Logo Smart Home" />
            </div>
            <UserPassDiv>
              <ItemUserPass>
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

export default TelaLogin
