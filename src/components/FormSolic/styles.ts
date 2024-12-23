import styled from 'styled-components'

export const FormularioCompra = styled.form`
  padding-top: 50px;
  width: 755px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1.5vw;
  text-align: center;
  background-color: transparent;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    padding-left: 0px;
    padding-right: 2.4vw;
    h1 {
      font-size: 24px;
    }
  }
`

export const DivEmpresa = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  label {
    font-weight: bold;
    padding-top: 5px;
    font-size: 18px;
  }
  select {
    font-size: 18px;
    padding: 5px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    padding-top: 20px;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    label {
      font-weight: bold;
      padding-top: 5px;
      font-size: 18px;
    }
    select {
      font-size: 18px;
      padding: 5px;
    }
  }
`

export const DivListaSolicitacao = styled.div`
  padding-bottom: 100px;
`

export const GridListaCabecalho = styled.ul`
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: 7vw 7vw 24vw 8vw 29vw;
  margin-top: 10px;
  li {
    padding-left: 2px;
    padding-right: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  margin-left: 2.5vw;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    justify-content: center;
    display: grid;
    grid-template-columns: 9vw 9vw 24vw 14vw 25vw;
    margin-right: 10vw;
    margin-left: 0px;
    margin-top: 10px;
    li {
      padding-left: 2px;
      padding-right: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const GridLista = styled.ul`
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: 7vw 7vw 24vw 8vw 29vw;
  li {
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  margin-left: 2.5vw;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    justify-content: center;
    display: grid;
    grid-template-columns: 9vw 9vw 24vw 14vw 25vw;
    margin-right: 15vw;
    margin-left: 0px;
    li {
      padding-left: 2px;
      padding-right: 2px;
      padding-top: 2px;
      padding-bottom: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const DivLineBreak = styled.div`
  max-width: 800px;
`

export const TextoComLineBreak = styled.div`
  white-space: pre-wrap;
`

export const GridItemCabecalho = styled.li`
  font-weight: bold;
  background-color: lightgreen;
  text-align: center;
  border-left: solid black 1px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  @media only screen and (max-width: 768px) {
    font-weight: bold;
    background-color: lightgreen;
    text-align: center;
    font-size: 11px;
    border-left: solid black 1px;
    border-top: solid black 1px;
    border-bottom: solid black 1px;
  }
`

export const GridItemCabecalhoUltimo = styled.li`
  font-weight: bold;
  background-color: lightgreen;
  text-align: center;
  border-left: solid black 1px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  border-right: solid black 1px;
  @media only screen and (max-width: 768px) {
    font-weight: bold;
    background-color: lightgreen;
    text-align: center;
    font-size: 11px;
    border-left: solid black 1px;
    border-top: solid black 1px;
    border-bottom: solid black 1px;
    border-right: solid black 1px;
  }
`

export const GridItem = styled.li`
  text-align: center;
  border-left: solid black 1px;
  border-bottom: solid black 1px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    border-left: solid black 1px;
    border-bottom: solid black 1px;
    font-size: 13px;
  }
`

export const GridItemUltimo = styled.li`
  text-align: center;
  border-left: solid black 1px;
  border-bottom: solid black 1px;
  border-right: solid black 1px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    border-left: solid black 1px;
    border-bottom: solid black 1px;
    border-right: solid black 1px;
    font-size: 13px;
  }
`

export const DivItem = styled.div`
  padding-top: 0.5vw;
  display: grid;
  grid-template-columns: 40px 60px 28vw 52px 34vw 1vw;
  justify-content: center;
  margin-left: 10px;
  height: auto;
  gap: 0.5vw;
  &.headerItems {
    font-size: 18px;
    margin-top: 10px;
  }
  select,
  label {
    padding: 4px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 0.5vw;
    display: grid;
    box-shadow: none;
    grid-template-columns: 35px 55px 20vw 44px 25vw 1vw;
    justify-content: center;
    margin-right: 1.5vw;
    height: auto;
    gap: 1vw;
    font-weight: normal;
    font-size: 5px;
    &.headerItems {
      font-size: 10px;
      margin-top: 0px;
    }
  }
`

export const DivDataObs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DivItemNome = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  input {
    text-align: center;
    font-size: 16px;
    width: 100%;
  }
  label {
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    height: 28px;
    input {
      text-align: center;
      font-size: 12px;
      width: 100%;
      box-shadow: none;
    }
    label {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const DivItemQuant = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    width: 100%;
    text-align: center;
    font-size: 16px;
    -moz-appearance: textfield;
  }
  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    height: 28px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input {
      width: 100%;
      text-align: center;
      box-shadow: none;
      font-size: 12px;
      -moz-appearance: textfield;
    }
    label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const DivItemUnid = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  height: 28px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  select {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }
  label {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 1.2vw;
    font-size: 18px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    select {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 100%;
      font-size: 12px;
      box-shadow: none;
    }
    label {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const DivItemDesc = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  input {
    text-align: center;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
  }
  label {
    text-align: center;
    font-size: 18px;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    height: 28px;
    input {
      text-align: center;
      font-size: 12px;
      width: 100%;
      box-shadow: none;
    }
    label {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const DivItemCentroCusto = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  overflow-y: visible;
  input,
  select {
    width: 100%;
    font-size: 16px;
    padding-left: 0.1vw;
    -moz-appearance: textfield;
    option {
      font-size: 15px;
    }
    &:focus {
      size: 8;
    }
  }
  label {
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    margin-right: 0.5vw;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    overflow-y: visible;
    height: 28px;
    input,
    select {
      width: 100%;
      font-size: 12px;
      padding-left: 0.1vw;
      box-shadow: none;
      -moz-appearance: textfield;
      option {
        font-size: 12px;
      }
      &:focus {
        size: 8;
      }
    }
    label {
      text-align: center;
      width: 100%;
      font-weight: bold;
      font-size: 15px;
      text-align: left;
      margin-right: 0.5vw;
    }
  }
`

export const DivObsGeral = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: row;
  justify-content: center;
  height: auto;
  label {
    font-size: 18px;
    font-weight: bold;
  }
  textarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
    width: 80vw;
    height: 5.2vw;
    min-height: 50px;
    resize: none;
  }
`

export const DivSugestaoFornecedores = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: row;
  justify-content: center;
  height: auto;
  label {
    font-size: 18px;
    font-weight: bold;
  }
  textarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
    width: 80vw;
    height: 5.2vw;
    min-height: 50px;
    resize: none;
  }
`

export const DivDataLimite = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  label {
    font-size: 18px;
    font-weight: bold;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  input {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 18px;
  }
`

export const DivButtonSolicitar = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  button {
    text-align: center;
    margin-top: 30px;
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
  }
`

export const DivButtonAdicionarItem = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  button {
    text-align: center;
    margin-top: 25px;
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #1eba4f;
    cursor: pointer;
    &:hover {
      background-color: #0a8a32;
    }
  }
`

export const DivButtonRemoverItem = styled.div`
  button {
    position: absolute;
    right: 1vw auto;
    margin-top: 2.5px;
    text-align: center;
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #eb4334;
    cursor: pointer;
    &:hover {
      background-color: #8f1106;
    }
  }
`

export const DivBotoesConfirmacao = styled.li`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  #botaoconfirmar {
    text-align: center;
    margin-top: 30px;
    width: 90px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #32cd32;
    cursor: pointer;
    &:hover {
      background-color: #9acd32;
    }
    &.desativado {
      cursor: default;
      background-color: gray;
      &:hover {
        background-color: gray;
      }
    }
  }
  #botaocancelar {
    text-align: center;
    margin-top: 30px;
    width: 90px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #808080;
    cursor: pointer;
    &:hover {
      background-color: #c0c0c0;
    }
  }
`

export const DivBotaoNovoPedido = styled.li`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  button {
    text-align: center;
    margin-top: 30px;
    width: 120px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #808080;
    cursor: pointer;
    &:hover {
      background-color: #c0c0c0;
    }
  }
`

export const DivMensagemErro = styled.div`
  padding-top: 20px;
  p {
    text-align: center;
    color: #8f1106;
  }
`

export const TextoCarregando = styled.h3`
  font-size: 20px;
  color: blue;
  padding: 0px;
  margin: 0px;
  margin-top: 20px;
`
