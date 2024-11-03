import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoDiv = styled.div`
  width: 450px;
  height: 72px;
  margin-right: auto;
  text-align: center;
  background-color: transparent;
  margin-left: 49%;
  transform: translate(-49%, -49%);
  @media only screen and (max-width: 768px) {
    width: 300px;
    min-width: 320px;
    height: 62px;
    margin-left: 45%;
    transform: translate(-45%, -45%);
  }
`

export const LogoButton = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    margin-top: 8px;
  }
`

export const LogoStyle = styled.img`
  margin-top: 30px;
  width: 85%;
  height: 95%;
  background-color: transparent;
  padding-top: 7px;
  @media only screen and (max-width: 768px) {
    height: 70%;
  }
`

export const LogoStyleStaBarbara = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    height: 75%;
  }
`

export const DivStaBarbara = styled.div``
