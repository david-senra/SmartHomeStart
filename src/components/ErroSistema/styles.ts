import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MensagemErro = styled.h1`
  padding-top: 50px;
  width: 555px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: transparent;
`

export const BotaoRetorno = styled(Link)`
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-align: center;
`
