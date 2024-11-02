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
  max-width: 320px;
  width: 250px;
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
  &.lessTopMargin {
    padding-top: 0px;
    margin-top: 0px;
    button {
      margin-top: 0px;

      &.botaoCadastro {
        width: 90px;
        margin-top: 20px;
      }
    }
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

export const TextSenha = styled.p`
  padding-top: 5px;
  font-size: 13px;
  font-weight: bold;
`

export const ListaCondicoesSenha = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  font-size: 10.5px;
  font-weight: bolder;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90px;
    padding: 5px;
    border: 1px solid;
    border-radius: 10px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 45px;
      font-size: 8px;
      li {
        width: 100%;
        height: 10px;
        padding-right: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          text-align: center;
          margin-right: 2px;
          padding-left: 0px;
          margin-left: 0px;
        }
      }
    }
  }
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
  width: 420px;
  height: 90px;
  padding: 0px;
  margin: 0px;
  top: 50px;
  left: 50%;
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`
