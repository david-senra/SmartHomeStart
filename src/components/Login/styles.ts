import styled from 'styled-components'
import { cores } from '../../styles'

export const LoginDiv = styled.div`
  text-align: center;
  padding-bottom: 10px;
  padding-top: 50px;
  color: ${cores.corPrincipal};
`

export const UserPassDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`

export const ItemUserPass = styled.div`
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 190px;
  position: relative;
  input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
  }
  label {
    font-size: 100%;
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
  }
  button {
    margin-top: 40px;
    width: 80px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #1859c9;
    cursor: pointer;
    &:hover {
      background-color: #1859c9db;
    }
    &.cadastroSenha {
      width: 90px;
    }
  }
  :is(input:focus, input:valid) ~ label {
    transform: translateY(-80%) scale(0.9);
    margin: 0em;
    margin-left: 0;
    padding: 0.4em;
  }
  :is(input:focus, input:valid) {
    border-color: rgb(0, 0, 0);
  }
  &.confirmarSenha {
    margin-top: 5px;
  }
  &.senha {
    margin-top: 30px;
  }
`

export const DivBotaoCadastrarSenha = styled.div`
  border-top: 1px solid;
  width: 180px;
  margin: auto;
`

export const BotaoCadastrarSenha = styled.button`
  margin-top: 20px;
  padding: 7px;
  border: none;
  font-size: 16px;
  background-color: #296e01;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #008631;
  }
`

export const TextError = styled.p`
  color: ${cores.corSecundaria};
  padding-bottom: 5px;
  font-size: 18px;
`

export const TextSuccess = styled.p`
  color: green;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 35px;
  font-size: 22px;
`

export const DivBotaoInvisivelHome = styled.div`
  background-color: transparent;
  position: absolute;
  width: 340px;
  height: 90px;
  padding: 0px;
  margin: 0px;
  top: 10px;
  left: 39vw;
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
