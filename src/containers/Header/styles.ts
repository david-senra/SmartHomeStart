import styled from 'styled-components'
import { cores } from '../../styles'

export const NomeUsuario = styled.h4`
  position: absolute;
  margin-right: 30px;
  margin-left: 30px;
  padding-top: 70px;
  font-size: 15px;
  font-weight: normal;
  @media only screen and (max-width: 768px) {
    padding-top: 67px;
    font-size: 13px;
  }
`

export const HeaderDiv = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #002060;
  border-bottom-style: solid;
  border-bottom-color: ${cores.corPrincipal};
  padding-bottom: 20px;
  padding-top: 20px;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    padding-left: 50px;
    padding-right: 50px;
    gap: 15px;
    li {
      width: 150px;
      height: 40px;
      button {
        cursor: pointer;
        width: 150px;
        height: 40px;
        background-color: white;
        color: darkblue;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        &:hover {
          background-color: #90d5ff;
        }
        &.ativo {
          cursor: default;
          background-color: #90fff1;
          &:hover {
            background-color: #90fff1;
          }
        }
      }
      &.listaIcone {
        display: flex;
        flex-direction: row;
        justify-items: center;
      }
    }
    &.filaSuperior {
      width: 50%;
      margin: auto;
      padding-bottom: 15px;
      border-bottom: 2px solid gray;
    }
    &.listaIcone {
      display: flex;
      flex-direction: row;
      justify-items: center;
    }
    &.comCasinha {
    }
  }
  &.comCasinha {
    gap: 12px;
    padding-bottom: 38px;
  }
  @media only screen and (max-width: 768px) {
    ul {
      &.listaInferior {
        li {
          button {
            width: 120px;
            font-size: 15px;
          }
        }
        flex-wrap: wrap;
      }
      &.listaIcone {
        flex-wrap: nowrap;
      }
      &.filaSuperior {
        li {
          button {
            width: 22vw;
            font-size: 18px;
          }
        }
      }
    }
  }
`
