import styled from 'styled-components'

function pegarCorCard(situacao: string, todosEntregues: string) {
  if (situacao == 'aberto') {
    return '#ededed'
  } else if (situacao == 'andamento') {
    if (todosEntregues == 'nao') {
      return 'lightyellow'
    } else if (todosEntregues == 'sim') {
      return '#D4F5DF'
    }
  } else if (situacao == 'entregue') {
    return 'lightgreen'
  } else if (situacao == 'cancelado') {
    return '#FFCCCB'
  }
}

export const DivGeral = styled.div`
  padding-top: 50px;
  width: 755px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: transparent;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
    padding-top: 50px;
    width: 80vw;
    height: 72px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: transparent;
    margin-bottom: 50px;
  }
`

export const ListaSolicitacoes = styled.ul`
  padding-top: 20px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 5px;
  label {
    padding-top: 5px;
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 100px;
    margin-right: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 5px;
    label {
      padding-top: 5px;
      font-size: 20px;
    }
  }
`

export const CardSolicitacao = styled.ul<{ tamanho: number }>`
  max-height: ${(props) => (120 + props.tamanho * 60).toString()}px;
  overflow-x: visible;
  position: relative;
  display: grid;
  justify-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid;
  border-radius: 5px;
  width: 80vw;
  z-index: 2;
  padding-bottom: 20px;
  &.noBoxes {
    padding-bottom: 0px;
  }
  &.open {
  }
  &.closed {
    max-height: 37px;
  }
  transition: ${(props) =>
    props.tamanho < 3
      ? 'max-height 0.5s'
      : 'max-height ' + ((props.tamanho - 3) * 0.05 + 0.5).toString() + 's'};
  @media only screen and (max-width: 768px) {
    max-height: ${(props) => (120 + props.tamanho * 60).toString()}px;
    overflow-x: visible;
    position: relative;
    display: grid;
    justify-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid;
    border-radius: 5px;
    width: 90vw;
    z-index: 2;
    padding-bottom: 20px;
    &.noBoxes {
      padding-bottom: 0px;
    }
    &.open {
    }
    &.closed {
      max-height: 37px;
    }
    transition: ${(props) =>
      props.tamanho < 3
        ? 'max-height 0.5s'
        : 'max-height ' + ((props.tamanho - 3) * 0.05 + 0.5).toString() + 's'};
  }
`

export const DivGridCabecalho = styled.div<{ tamanho: number }>`
  position: relative;
  overflow-y: hidden;
  overflow-x: visible;
  width: 100%;
  z-index: -2;
  &.open {
  }
  &.closed {
  }
  transition: 1s linear;
`

export const GridCabecalho = styled.ul<{
  situacaoPedido: string
  todosEntregues: string
}>`
  cursor: pointer;
  width: 79.7vw;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 34px;
  gap: 3px;
  border-bottom: solid 2px black;
  background-color: ${(props) =>
    pegarCorCard(props.situacaoPedido, props.todosEntregues)};
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  li.editar {
    display: flex;
    flex-direction: row;
    gap: 5px;
    text-align: center;
    align-items: center;
    p {
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
  }
  @media only screen and (max-width: 768px) {
    cursor: pointer;
    width: 89.1vw;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 11vw 13vw 17vw 17vw 13vw 16vw;
    margin-right: 0px;
    padding-right: 0px;
    grid-auto-rows: 34px;
    gap: 3px;
    border-bottom: solid 2px black;
    background-color: ${(props) =>
      pegarCorCard(props.situacaoPedido, props.todosEntregues)};
    li {
      display: flex;
      font-size: 9.5px;
      flex-direction: row;
      justify-content: center;
      justify-items: center;
      text-align: center;
      vertical-align: middle;
      padding-top: 12px;
      padding-bottom: 10px;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        max-width: 36px;
        &.empresa {
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-bottom: 0px;
        }
      }
    }
    li.editar {
      display: flex;
      flex-direction: row;
      gap: 0.5px;
      text-align: center;
      align-items: center;
      justify-content: center;
      justify-items: center;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        max-width: 36px;
        &.dataLimite {
          max-width: 50px;
        }
      }
    }
  }
`

export const GridCabecalhoSolto = styled.ul`
  width: 79.7vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3px;
  margin-bottom: 5px;
  margin-right: 24px;
  @media only screen and (max-width: 768px) {
    width: 89vw;
    display: grid;
    grid-template-columns: 9vw 17vw 13vw 22vw 9.5vw 20vw;
    padding: 1px;
    font-size: 10px;
    gap: 2px;
    margin-bottom: 5px;
    margin-left: 5%;
    margin-right: 0px;
    padding-right: 0px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const GridCabecalhoItemsPedido = styled.ul`
  display: grid;
  grid-template-columns: 6.5vw 6.5vw 16vw 6.5vw 25vw 0.6vw;
  justify-content: center;
  padding-top: 15px;
  margin-right: 0px;
  padding-right: 0px;
  li {
    border-bottom: solid 1px black;
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 13vw 12vw 23vw 12vw 26vw 1vw;
    padding-top: 10px;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 10px;
    li {
      border-bottom: solid 1px black;
      font-size: 10px;
      b {
        font-size: 10px;
      }
    }
  }
`

export const GridItemsPedido = styled.ul`
  display: grid;
  grid-template-columns: 6.5vw 6.5vw 16vw 6.5vw 25vw 0.6vw;
  grid-template-rows: 25px;
  margin-right: 0px;
  padding-right: 0px;
  justify-content: center;
  white-space: nowrap;
  &:nth-last-of-type(2) {
    li {
      border-bottom: none;
    }
  }
  &.gridFake {
    grid-template-rows: 25px;
  }
  &.obsOrSugest {
    grid-template-rows: 10px;
  }
  li {
    display: flex;
    flex-direction: column;
    border-right: solid 1px black;
    border-bottom: solid 1px black;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    &.textoObservacaoItem {
      justify-content: center;
    }
    &.visualizacao {
      justify-content: center;
      text-align: center;
    }
    p {
      &.textoObservacaoItem {
        padding-left: 5px;
        max-width: 23vw;
        overflow-x: hidden;
        justify-content: center;
        display: flex;
      }
      &.visualizacao {
        justify-content: center;
        text-align: center;
      }
    }
    &:last-of-type {
      border-right: 0px;
    }
    &.editar {
      display: flex;
      flex-direction: row;
    }
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 13vw 12vw 23vw 12vw 26vw 1vw;
    grid-template-rows: 25px;
    margin-right: 0px;
    padding-right: 0px;
    justify-content: center;
    white-space: nowrap;
    &:nth-last-of-type(2) {
      li {
        border-bottom: none;
      }
    }
    &.gridFake {
      grid-template-rows: 25px;
    }
    &.obsOrSugest {
      grid-template-rows: 10px;
    }
    li {
      display: flex;
      flex-direction: column;
      border-right: solid 1px black;
      border-bottom: solid 1px black;
      justify-content: center;
      overflow-x: hidden;
      overflow-y: hidden;
      line-height: 1.5;
      text-align: center;
      background-color: transparent;
      &.textoObservacaoItem {
        justify-content: center;
      }
      &.visualizacao {
        justify-content: center;
        text-align: center;
      }
      p {
        font-size: 12px;
        &.textoObservacaoItem {
          padding-left: 5px;
          max-width: 23vw;
          overflow-x: hidden;
          justify-content: center;
          display: flex;
        }
        &.visualizacao {
          justify-content: center;
          text-align: center;
        }
      }
      &:last-of-type {
        border-right: 0px;
      }
      &.editar {
        display: flex;
        flex-direction: row;
      }
    }
  }
`

export const TextoDescricaoItem = styled.p<{
  textoDescricao: string
  larguraTexto: number
}>`
  max-width: 14.5vw;
  &.descricaoOverflow {
    max-width: 14.5vw;
    &:hover {
      &::after {
        content: '${(props) => props.textoDescricao}';
        position: absolute;
        background-color: yellow;
        z-index: 2;
        margin-top: 36px;
        white-space: break-spaces;
        left: 28%;
        padding-left: ${(props) => props.larguraTexto};
        border: solid 1px;
        border-bottom: solid 1px !important;
        padding: 3px;
        transform: translate(-28%, -28%);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    &.descricaoOverflowCelular {
      max-width: 14.5vw;
      &:hover {
        &::after {
          content: '${(props) => props.textoDescricao}';
          display: inline-block;
          overflow-wrap: inherit;
          height: auto;
          max-width: 50vw;
          white-space: break-spaces;
          position: absolute;
          font-size: 10px;
          word-wrap: break-word;
          background-color: yellow;
          z-index: 2;
          margin-top: 30px;
          left: 28%;
          border: solid 1px;
          border-bottom: solid 1px !important;
          padding: 3px;
          transform: translate(-28%, -28%);
        }
      }
    }
    &.descricaoOverflow {
      max-width: 14.5vw;
      &:hover {
        &::after {
          content: '${(props) => props.textoDescricao}';
          display: inline-block;
          overflow-wrap: inherit;
          height: auto;
          max-width: 50vw;
          white-space: break-spaces;
          position: absolute;
          font-size: 10px;
          word-wrap: break-word;
          background-color: yellow;
          z-index: 2;
          margin-top: 30px;
          left: 28%;
          border: solid 1px;
          border-bottom: solid 1px !important;
          padding: 3px;
          transform: translate(-28%, -28%);
        }
      }
    }
  }
`

export const TextoObservacaoItem = styled.p<{
  textoObservacao: string
  larguraTexto: number
}>`
  &.textoObsOverflow#textoObservacaoOverflow {
    max-width: 14.5vw;
    &:hover {
      &::after {
        content: '${(props) => props.textoObservacao}';
        display: inline-block;
        overflow-wrap: inherit;
        height: auto;
        max-width: 500px;
        position: absolute;
        background-color: yellow;
        z-index: 30;
        margin-top: 28px;
        white-space: break-spaces;
        right: 5%;
        border: solid 1px;
        border-bottom: solid 1px !important;
        padding: 2px;
        overflow-y: visible;
        &:last-of-type {
          border-bottom: solid 1px !important;
        }
        transform: translate(-5%, -5%);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    &.textoObsOverflowCelular#textoObservacaoOverflow {
      max-width: 12vw;
      &:hover {
        &::after {
          content: '${(props) => props.textoObservacao}';
          display: inline-block;
          overflow-wrap: inherit;
          height: auto;
          max-width: 400px;
          position: absolute;
          background-color: yellow;
          z-index: 30;
          margin-top: 28px;
          white-space: break-spaces;
          right: 2%;
          border: solid 1px;
          border-bottom: solid 1px !important;
          padding: 2px;
          overflow-y: visible;
          &:last-of-type {
            border-bottom: solid 1px !important;
          }
          transform: translate(-2%, -2%);
        }
      }
    }
    &.textoObsOverflow#textoObservacaoOverflow {
      max-width: 12vw;
      &:hover {
        &::after {
          content: '${(props) => props.textoObservacao}';
          display: inline-block;
          overflow-wrap: inherit;
          height: auto;
          max-width: 400px;
          position: absolute;
          background-color: yellow;
          z-index: 30;
          margin-top: 28px;
          white-space: break-spaces;
          right: 2%;
          border: solid 1px;
          border-bottom: solid 1px !important;
          padding: 2px;
          overflow-y: visible;
          &:last-of-type {
            border-bottom: solid 1px !important;
          }
          transform: translate(-2%, -2%);
        }
      }
    }
  }
`

export const ItemCabecalhoSituacao = styled.li`
  text-align: center;
  display: flex;
  gap: 5px;
  justify-content: center;
  b {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding-right: 5px;
    padding-left: 5px;
    p {
      &.andamentoAbreviado {
        display: none;
      }
      &.naoAndamentoAbreviado {
        display: none;
      }
      &.entregueAbreviado {
        display: none;
      }
      &.naoEntregueAbreviado {
        display: none;
      }
    }
  }
  &.noPointer {
    cursor: default;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    gap: 0.5px;
    justify-content: center;
    justify-items: center;
    b {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      gap: 2px;
      padding-right: 5px;
      padding-left: 5px;
      p {
        &.andamentoAbreviado {
          display: block;
        }
        &.andamentoCompleto {
          display: none;
        }
        &.entregueAbreviado {
          display: block;
        }
        &.entregueCompleto {
          display: none;
        }
      }
    }
    &.noPointer {
      cursor: default;
    }
  }
`

export const DivTraco = styled.div<{
  tipoUsuario: string
}>`
  position: relative;
  right: ${(props) => (props.tipoUsuario == 'solicitante' ? '0.1' : '60.1')}vw;
  width: 60vw;
  bottom: 13.5px;
  border-bottom: solid 2px;
  border-top: hidden 2px;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    position: relative;
    right: ${(props) => (props.tipoUsuario == 'solicitante' ? '0.1' : '85')}vw;
    width: 84vw;
    bottom: 13.5px;
    border-bottom: solid 2px;
    border-top: hidden 2px;
    z-index: -1;
  }
`

export const DivEntregue = styled.div<{ tipo: string }>`
  position: absolute;
  height: 24px;
  width: 60vw;
  left: 9.5vw;
  border-bottom: hidden 2px;
  border-top: hidden 2px;
  background-color: ${(props) =>
    props.tipo == 'entregue' ? '#d2f8d2' : '#FFCCCB'};
  z-index: -1;
  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 24px;
    width: 84vw;
    left: 2vw;
    border-bottom: hidden 2px;
    border-top: hidden 2px;
    background-color: ${(props) =>
      props.tipo == 'entregue' ? '#d2f8d2' : '#FFCCCB'};
    z-index: -1;
  }
`

export const IconeDiv = styled.div`
  z-index: 7;
`

export const IconeTranca = styled.img`
  height: 15px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
    padding-right: 10px;
  }
`

export const IconeExcelDiv = styled.div`
  position: relative;
  top: 7px;
  padding-left: 5px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`

export const IconePDFDiv = styled.div`
  position: relative;
  top: 7px;
  padding-left: 2px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    visibility: hidden;
    width: 0px;
  }
`

export const IconePDFImg = styled.img`
  height: 22px;
  width: 18px;
  margin-top: 2px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
    width: 0px;
  }
`

export const LinhaDiv = styled.div<{ usuario: string }>`
  margin-left: ${(props) => (props.usuario == 'restrito' ? '28' : '28')}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  overflow-x: visible;
`

export const IconeExcelImg = styled.img`
  height: 25px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
    width: 0px;
  }
`

export const IconeEntregueDiv = styled.div`
  z-index: 7;
`

export const IconeEntregueImg = styled.img`
  height: 15px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
  }
`

export const IconeCancelarPedImg = styled.img`
  height: 15px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
  }
`

export const IconeLapisDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 768px) {
    &.descricaoOverflow {
      padding-left: 2vw;
    }
    &.descricaoOverflowCelular {
      padding-left: 2vw;
    }
  }
`

export const IconeConfirmarDiv = styled.div`
  z-index: 7;
  display: block;
`

export const IconeConfirmarImg = styled.img`
  padding-left: 2vw;
  height: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.itemButtom {
    margin-top: 4px;
    padding-left: 3.2vw;
    padding-right: 0.3vw;
    margin-right: 0px;
  }
  &.confirmarDescricao {
    z-index: 7;
    margin-top: 4px;
    padding-left: 13vw;
    padding-right: 0.2vw;
  }
  &.confirmarEdicaoObservacao {
    z-index: 7;
    margin-top: 4px;
    padding-left: 21.5vw;
    padding-right: 0.1vw;
  }
  &.SuggestionEdition {
    position: relative;
    z-index: 15;
    bottom: 39.8px;
    left: 54.4vw;
    margin-right: 8px;
  }
  &.editandoEmpresa {
    padding-left: 2.2vw;
  }
  &.quantidade {
    z-index: 10;
    margin-left: 3vw;
    position: absolute;
    margin-right: 3.8vw;
  }
  &.unidade {
    z-index: 10;
    margin-left: 3.3vw;
    position: absolute;
    margin-right: 3.5vw;
  }
  &.centrocusto {
    z-index: 15;
    position: absolute;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 2vw;
    height: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.itemButtom {
      margin-top: 4px;
      padding-left: 3.2vw;
      padding-right: 0.3vw;
      margin-right: 0px;
    }
    &.confirmarDescricao {
      z-index: 7;
      margin-top: 4px;
      padding-left: 13vw;
      padding-right: 0.2vw;
    }
    &.confirmarEdicaoObservacao {
      z-index: 7;
      margin-top: 4px;
      padding-left: 21.5vw;
      padding-right: 0.1vw;
      height: 13px;
    }
    &.SuggestionEdition {
      position: relative;
      z-index: 15;
      bottom: 39.8px;
      left: 53vw;
      margin-right: 8px;
    }
    &.editandoEmpresa {
      padding-right: 0px;
      padding-left: 0px;
    }
    &.quantidade {
      z-index: 10;
      margin-left: 3vw;
      position: absolute;
      margin-right: 3.8vw;
      height: 13px;
    }
    &.unidade {
      z-index: 10;
      margin-left: 0.1vw;
      position: absolute;
      margin-right: 4.5vw;
    }
    &.centrocusto {
      z-index: 15;
      position: absolute;
    }
  }
`

export const IconeCancelarDiv = styled.div`
  z-index: 7;
  display: block;
`

export const IconeCancelarImg = styled.img`
  height: 15px;
  cursor: pointer;
  &.itemButtom {
    margin-top: 4px;
  }
  &.cancelarDescricao {
    padding-left: 12vw;
    margin-top: 4px;
  }
  &.cancelarEdicaoObservacao {
    padding-left: 22vw;
    margin-top: 4px;
  }
  &.uhu {
    margin-top: 4px;
  }
  &.SuggestionEdition {
    position: relative;
    z-index: 15;
    bottom: 25px;
    left: 58.1vw;
    margin-right: 8px;
  }
  &.editandoEmpresa {
    padding-left: 1vw;
    z-index: 25;
  }
  &.cancelarEdicaoDataLimite {
    z-index: 25;
  }
  &.quantidade {
    margin-left: 4.2vw;
  }
  &.unidade {
    margin-left: 5vw;
  }
  &.centrocusto {
    z-index: 32;
    position: absolute;
    margin-left: 5.5vw;
  }
  @media only screen and (max-width: 768px) {
    height: 15px;
    cursor: pointer;
    &.itemButtom {
      margin-top: 4px;
    }
    &.cancelarDescricao {
      padding-left: 12vw;
      margin-top: 4px;
    }
    &.cancelarEdicaoObservacao {
      padding-left: 22vw;
      margin-top: 4px;
      height: 12px;
    }
    &.uhu {
      padding-right: 8px;
      height: 12px;
    }
    &.SuggestionEdition {
      position: relative;
      z-index: 15;
      bottom: 25px;
      left: 50vw;
      margin-right: 8px;
    }
    &.editandoEmpresa {
      margin-right: 2.5vw;
      z-index: 2;
    }
    &.quantidade {
      margin-left: 8.2vw;
      height: 13px;
      width: 13px;
    }
    &.unidade {
      margin-left: 5.5vw;
    }
    &.centrocusto {
      z-index: 55;
      position: absolute;
      margin-left: 11vw;
    }
  }
`

export const SelectEdicaoEmpresa = styled.select<{
  empresaSelecionada: string
}>`
  position: absolute;
  height: 34px;
  width: ${(props) => (props.empresaSelecionada == 'Cantaria' ? '7' : '7.5')}vw;
  right: ${(props) =>
    props.empresaSelecionada == 'Cantaria' ? '31.8' : '30.5'}vw;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
  option {
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 22px;
    width: 16vw;
    right: 38vw;
    font-size: 10px;
    padding-top: 2px;
    text-align: center;
    option {
      font-size: 10px;
    }
  }
`

export const InputDataLimite = styled.input`
  position: absolute;
  margin-right: 50px;
  width: 120px;
  height: 34px;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin-right: 14vw;
    width: 20vw;
    height: 20px;
    font-size: 10px;
    padding-top: 2px;
    text-align: center;
    z-index: 20;
  }
`

export const InputQuantidade = styled.input`
  position: absolute;
  margin-right: 3vw;
  margin-top: 1px;
  width: 3vw;
  height: 22px;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin-right: 1.5vw;
    margin-top: 1px;
    width: 7vw;
    margin-right: 7vw;
    height: 20px;
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const InputUnidade = styled.select`
  position: absolute;
  margin-right: 2.4vw;
  margin-top: 1px;
  width: 40px;
  height: 22px;
  font-size: 15px;
  padding-top: 0px;
  padding-bottom: 2px;
  text-align: center;
  option {
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    z-index: 54;
    position: absolute;
    margin-right: 16vw;
    margin-top: 1px;
    width: 40px;
    height: 18px;
    font-size: 11px;
    padding-top: 0px;
    padding-bottom: 2px;
    text-align: center;
    option {
      font-size: 11px;
    }
  }
`

export const InputCentroCusto = styled.select`
  position: absolute;
  margin-right: 3vw;
  margin-top: 1px;
  width: 40px;
  height: 22px;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
  option {
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    z-index: 54;
    position: absolute;
    margin-right: 15vw;
    margin-top: 1px;
    width: 38px;
    height: 18px;
    font-size: 12px;
    padding-top: 2px;
    text-align: center;
    option {
      font-size: 12px;
    }
  }
`

export const TextoCabecalhoDescObs = styled.b`
  padding-right: 20px;
`

export const InputDescricao = styled.input`
  position: absolute;
  margin-right: 2.7vw;
  margin-top: 1px;
  width: 13vw;
  height: 22px;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin-right: 8vw;
    margin-top: 1px;
    width: 13vw;
    height: 18px;
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
  }
`

export const InputObservacaoItem = styled.input`
  position: absolute;
  margin-right: 2vw;
  margin-top: 1px;
  width: 21vw;
  height: 22px;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin-right: 6vw;
    margin-top: 1px;
    width: 19vw;
    height: 20px;
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
  }
`

export const IconeLapisImg = styled.img`
  height: 15px;
  cursor: pointer;
  &.lapisMenor {
    height: 12px;
    padding-top: 0px;
    margin-bottom: 5px;
    padding-left: 5px;
  }
  &.ObsSugForn {
    position: relative;
    z-index: 10;
    bottom: -2px;
    left: 57.6vw;
  }
  &.descricaoOverflow {
    background-color: white;
    height: 21px;
    width: 21px;
    padding: 4px;
    margin-left: 0.5vw;
  }
  @media only screen and (max-width: 768px) {
    height: 10px;
    cursor: pointer;
    &.lapisMenor {
      height: 8px;
      padding-top: 0px;
      margin-bottom: 5px;
      padding-left: 5px;
    }
    &.ObsSugForn {
      position: relative;
      z-index: 10;
      bottom: -2px;
      left: 54vw;
    }
    &.descricaoOverflow {
      background-color: white;
      height: 16px;
      width: 16px;
      padding: 4px;
      margin-left: 1.85vw;
      overflow: visible;
    }
    &.descricaoOverflowCelular {
      background-color: white;
      height: 16px;
      width: 16px;
      padding: 4px;
      margin-left: 1.7vw;
      overflow: visible;
    }
  }
`

export const ItemCheckDiv = styled.div`
  position: absolute;
  z-index: 7;
  &.contrato {
    left: 4.75%;
    transform: translate(-4.75%, -4.75%);
    margin-top: 2px;
    div {
      display: none;
    }
    &:hover {
      div {
        background-color: #fffd92;
        position: absolute;
        font-size: 16px;
        display: block;
        left: 1.5vw;
        top: 23px;
        padding: 5px;
        z-index: 50;
        width: max-content;
        border: solid 1px;
        border-radius: 5px;
      }
    }
    &.encurtado {
      &.penultimo {
        &:hover {
          div {
            top: 5px;
          }
        }
      }
      &.ultimo {
        &:hover {
          div {
            top: -15px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    &.contrato {
      left: 3.5%;
    }
  }
  @media only screen and (max-width: 1050px) {
    &.contrato {
      left: 3%;
    }
  }
  @media only screen and (max-width: 800px) {
    &.contrato {
      left: 2%;
    }
  }
  @media only screen and (max-width: 768px) {
    &.contrato {
      left: 5%;
      margin-top: 0px;
    }
  }
`

export const DivPrecoFornecedor = styled.div`
  z-index: 7;
`

export const ItemCheckDivCaminhao = styled.div`
  position: relative;
  z-index: 7;
`

export const ItemCheckImg = styled.img`
  height: 20px;
  width: 18px;
  padding-top: 2px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow-clip-margin: 40px;
  overflow: visible;
  &.contrato {
    cursor: default;
  }
  &.finalizado {
    height: 22px;
    width: 20px;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    z-index: 20;
    height: 19px;
    width: 12.5px;
    right: 0px;
    padding-top: 7px;
    &.finalizado {
      z-index: 20;
      height: 19px;
      width: 12.5px;
    }
  }
`

export const ItemCaminhaokImg = styled.img`
  height: 30px;
  width: 32px;
  padding-top: 2px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow-clip-margin: 40px;
  overflow: visible;
  &.andamento {
    height: 22px;
    width: 20px;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    z-index: 20;
    height: 23px;
    width: 15px;
    right: 0px;
    padding-top: 7px;
    &.andamento {
      z-index: 20;
      height: 18.5px;
      width: 12px;
    }
  }
`

export const DivSugestFornecedoresObs = styled.div`
  display: grid;
  grid-template-columns: 10vw 60vw;
  margin-left: 5vw;
  margin-top: 15px;
  div {
    margin: auto;
  }
  &:last-of-type {
    border-bottom: 5px;
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 19vw 60vw;
    gap: 15px;
    margin-left: 3vw;
    margin-top: 15px;
    margin-right: 10px;
    div {
      b {
        font-size: 12px;
      }
    }
    &:last-of-type {
      border-bottom: 5px;
    }
  }
`

export const BoxTextoObs = styled.div`
  white-space: pre-wrap;
  border: solid 1px black;
  height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    white-space: pre-wrap;
    border: solid 1px black;
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    font-size: 12px;
    p {
      font-size: 12px;
    }
  }
`

export const BoxTextoSugest = styled.div`
  white-space: pre-wrap;
  border: solid 1px black;
  height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  &.editando {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    border: none;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    white-space: pre-wrap;
    border: solid 1px black;
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    font-size: 12px;
    &.editando {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      border: none;
      height: 100%;
    }
  }
`

export const InputSugest = styled.textarea`
  &.open {
    white-space: pre-wrap;
    border: solid 1px black;
    height: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    font-size: 16px;
    text-align: center;
    flex-wrap: wrap;
    resize: none;
  }
  &.closed {
    height: 0px;
    width: 0px;
    display: none;
  }
  @media only screen and (max-width: 768px) {
    &.open {
      white-space: pre-wrap;
      border: solid 1px black;
      height: auto;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 5px;
      padding-right: 5px;
      width: 100%;
      font-size: 12px;
      text-align: center;
      flex-wrap: wrap;
      resize: none;
    }
    &.closed {
      height: 0px;
      width: 0px;
      display: none;
    }
  }
`

export const LinhaCabecalhoItems = styled.li`
  padding-bottom: 4px;
  border-right: solid 1px black;
`

export const LinhaCabecalhoItemsUltimo = styled.li`
  padding-bottom: 4px;
`

export const LinhaGridItems = styled.li`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  padding-top: 2px;
`

export const LinhaGridItemsUltimo = styled.li`
  border-bottom: solid 1px black;
  padding-top: 2px;
`

export const ParagrafoSuperior = styled.p`
  margin-top: 2px;
  margin-bottom: 0px;
`

export const DivInferior = styled.div`
  margin-bottom: 2px;
  margin-top: 0px;
  border-bottom: 2px dotted;
  padding-bottom: 5px;
`

export const ParagrafoItem = styled.p`
  border-bottom: 2px dotted;
  padding-bottom: 10px;
`

export const TextoCarregando = styled.h2`
  color: #006400;
`

export const TextoListaVazia = styled.h2`
  color: #00008b;
`

export const CoverPopupDiv = styled.div`
  position: absolute;
  display: block;
  background-color: #000000;
  top: 0%;
  right: 0%;
  opacity: 0.8;
  height: 500%;
  width: 100%;
  z-index: 2;
`

export const PopupDiv = styled.div`
  background-color: #ffff;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 1;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  height: auto;
  width: auto;
  z-index: 3;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 768px) {
    background-color: #ffff;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    opacity: 1;
    left: 50%;
    top: 40%;
    border-radius: 10px;
    height: auto;
    width: 70vw;
    z-index: 3;
    border: 2px solid black;
    transform: translate(-50%, -40%);
  }
`

export const CabecarioPopup = styled.div`
  display: flex;
  background-color: lightgreen;
  text-align: center;
  justify-self: center;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  p {
    margin: auto;
    justify-content: center;
    font-weight: bold;
  }
`

export const TextoPopUp = styled.div`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-self: center;
  height: fit-content;
  p {
    margin: auto;
    justify-content: center;
    &.warning {
      color: red;
    }
  }
  &.entrega_item {
    p {
      margin-top: 7px;
      input {
        height: 23px;
        padding: 4px;
        &.fornecedor {
          width: 20vw;
        }
        &.precoUnitario {
          width: 65px;
          -moz-appearance: textfield;
        }
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    b {
      &.adicional {
        color: purple;
      }
    }
  }
`

export const BotoesPopUp = styled.div`
  padding-top: 5px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  height: fit-content;
`

export const BotaoConfirmar = styled.div`
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  width: 100px;
  background-color: #4cbb17;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: green;
  }
`

export const BotaoVoltar = styled.div`
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  width: 100px;
  background-color: #d8d8d8;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: gray;
  }
`

export const TextoItemEntregue = styled.p`
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  left: 70vw;
  margin-top: 6px;
  &.comprador {
    padding-left: 20px;
  }
  p {
    &.textoE {
      display: none;
    }
    &.textoR {
      display: none;
    }
  }
  @media only screen and (max-width: 1000px) {
    p {
      &.textoEnv {
        display: none;
      }
      &.textoE {
        display: block;
      }
      &.textoRec {
        display: none;
      }
      &.textoR {
        display: block;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    p {
      &.textoEnv {
        display: none;
      }
      &.textoE {
        display: none;
      }
      &.textoRec {
        display: none;
      }
      &.textoR {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const TextoEmEntrega = styled.p`
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  margin-top: 7px;
  left: 5vw;
  @media only screen and (max-width: 1400px) {
    left: 4vw;
  }
  @media only screen and (max-width: 1050px) {
    left: 2.8vw;
  }
  @media only screen and (max-width: 800px) {
    left: 1vw;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const DivRelatorioCompleto = styled.div`
  margin-bottom: 40px;
  button {
    cursor: pointer;
    border: 1px solid black;
    text-align: center;
    padding: 5px;
    width: 15vw;
    color: white;
    background-color: #4cbb17;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    &:hover {
      background-color: green;
    }
    &.desativado {
      background-color: gray;
      cursor: default;
      &:hover {
        background-color: gray;
        cursor: default;
      }
    }
  }
  h3 {
    padding: 0;
    margin: 0;
    margin-top: 5px;
    color: blue;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
