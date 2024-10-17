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
`

export const ItemMenuPrincipal = styled.button`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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
  }
`

export default GlobalStyle
