import styled from 'styled-components'
import { cores } from '../../styles'

export const NomeUsuario = styled.h4`
  position: absolute;
  margin-right: 30px;
  margin-left: 30px;
  padding-top: 70px;
  font-size: 15px;
  font-weight: normal;
`

export const Header = styled.header`
  display: flex;
  flex-direction: horizontal;
  background-color: ${cores.corFundo};
  border-bottom-style: solid;
  border-bottom-color: ${cores.corPrincipal};
  padding-bottom: 20px;
  padding-top: 20px;
`
