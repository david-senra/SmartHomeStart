import React, { useState, useEffect } from 'react'
import { LoginDiv, DivBotaoInvisivelHome } from './styles'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {
  const navigate = useNavigate()
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [tipoLogin, setTipoLogin] = useState('')
  useEffect(() => {
    if (tipoLogin == '/directaccess') {
      navigate('/directaccess')
    } else if (tipoLogin == '/passaccess') {
      navigate('/passaccess')
    }
  })
  const tentativaLogin = async () => {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 300, 'Request timed out')
    })
    const request = fetch('http://192.168.0.143:8585')
    try {
      const response = await Promise.race([timeout, request])
      return setTipoLogin('/directaccess')
    } catch (error) {
      return setTipoLogin('/passaccess')
    }
  }
  if (firstLoad) {
    tentativaLogin()
    setFirstLoad(false)
  }
  return (
    <>
      <DivBotaoInvisivelHome>
        <button></button>
      </DivBotaoInvisivelHome>
      <LoginDiv>
        <main>
          <h1 className="carregando">Inicializando...</h1>
        </main>
      </LoginDiv>
    </>
  )
}

export default SplashScreen
