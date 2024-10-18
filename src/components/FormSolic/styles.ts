import styled from 'styled-components'

export const FormularioCompra = styled.form`
  padding-top: 50px;
  width: 755px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: transparent;
  margin-bottom: 50px;
`

export const DivEmpresa = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 8px;
  label {
    padding-top: 5px;
    font-size: 20px;
  }
  select {
    font-size: 18px;
    padding: 5px;
  }
`

export const GridListaCabecalho = styled.ul`
  justify-content: center;
  display: grid;
  grid-template-columns: 90px 90px 400px 90px 400px;
  margin-top: 10px;
`

export const GridLista = styled.ul`
  justify-content: center;
  display: grid;
  grid-template-columns: 90px 90px 400px 90px 400px;
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
`

export const GridItemCabecalhoUltimo = styled.li`
  font-weight: bold;
  background-color: lightgreen;
  text-align: center;
  border-left: solid black 1px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  border-right: solid black 1px;
`

export const GridItem = styled.li`
  text-align: center;
  border-left: solid black 1px;
  border-bottom: solid black 1px;
`

export const GridItemUltimo = styled.li`
  text-align: center;
  border-left: solid black 1px;
  border-bottom: solid black 1px;
  border-right: solid black 1px;
`

export const DivItem = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 16px;
  &.headerItems {
    height: 35px;
  }
  select,
  label {
    font-size: 18px;
    padding: 5px;
  }
`

export const DivDataObs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

export const DivItemNome = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  input,
  label {
    text-align: center;
    width: 26.5vw;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 18px;
  }
  label {
    padding-left: 3vw;
  }
`

export const DivItemQuant = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: horizontal;
  justify-content: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input,
  label {
    text-align: center;
    width: 4vw;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 18px;
    -moz-appearance: textfield;
  }
  label {
    padding-right: 0px;
    padding-left: 1vw;
  }
`

export const DivItemUnid = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: horizontal;
  justify-content: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  select {
    text-align: center;
    width: 5.8vw;
    padding-left: 15px;
    padding-right: 10px;
    font-size: 18px;
    &:hover {
      text-align: justify;
      text-align: left;
      padding-left: 1vw;
    }
  }
  label {
    text-align: left;
    width: 5.5vw;
    font-size: 18px;
    text-align: left;
    padding-left: 2.4vw;
    padding-right: 0px;
  }
`

export const DivItemDesc = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  input,
  label {
    text-align: center;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 18px;
    width: 32vw;
  }
  label {
    padding-right: 3.8vw;
  }
`

export const DivItemCentroCusto = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  height: 50px;
  overflow-y: visible;
  input,
  select {
    width: 5.5vw;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 18px;
    max-width: 6ch;
    max-height: 100px;
    -moz-appearance: textfield;
    option {
      font-size: 15px;
    }
    &:focus {
      size: 8;
    }
  }
  select {
    margin-right: 10px;
  }
  label {
    padding-right: 2.2vw;
    padding-left: 1.5vw;
  }
`

export const DivObsGeral = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  label {
    padding-top: 5px;
    font-size: 20px;
  }
  textarea {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 18px;
    width: 800px;
    height: 100px;
    text-align: start;
    flex-wrap: wrap;
    resize: none;
  }
`

export const DivSugestaoFornecedores = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  label {
    padding-top: 5px;
    font-size: 20px;
  }
  textarea {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 18px;
    width: 800px;
    height: 80px;
    text-align: start;
    flex-wrap: wrap;
    resize: none;
  }
`

export const DivDataLimite = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  gap: 10px;
  label {
    font-size: 20px;
    padding-top: 5px;
  }
  input {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
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
    width: 50px;
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
    right: 5vw auto;
    margin-top: 5px;
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
  padding-bottom: 100px;
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
  padding-bottom: 100px;
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
