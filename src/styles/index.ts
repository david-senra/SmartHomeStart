import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  corFundo: '#fff',
  corPrincipal: '#000',
  corSecundaria: 'red',
  corTerciaria: 'blue'
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const MenuPrincipal = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: horizontal;
    justify-content: space-around;
    gap: 20px;
  }
  &.comTraco {
    border-bottom: 1px solid black;
    padding-bottom: 15px;
  }
`

export const ItemMenuPrincipal = styled.button`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &.ativo {
    background-color: orange;
    &:hover {
      cursor: default;
      background-color: orange;
    }
  }
`

export const IconeSmartHome = styled.img`
  height: 60px;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  text-align: center;
  margin: auto;
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    padding-bottom: 80px;
    overflow-x: hidden;
    width: 100vw;
    margin-right: calc(100vw - 100%);
    .remove-scrolling {
      overflow-y: hidden;
    }
    @media only screen and (max-width: 768px) {
      padding-bottom: 40px;
      width: 100vw;
      margin-right: calc(100vw - 100%);
    }
  }
`

export default GlobalStyle
