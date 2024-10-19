import styled from 'styled-components'

function pegarCorCard(situacao: string) {
  if (situacao == 'aberto') {
    return '#ededed'
  } else if (situacao == 'andamento') {
    return 'lightyellow'
  } else if (situacao == 'entregue') {
    return 'lightgreen'
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

export const GridCabecalho = styled.ul<{ situacaoPedido: string }>`
  cursor: pointer;
  width: 79.7vw;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 34px;
  gap: 3px;
  border-bottom: solid 2px black;
  background-color: ${(props) => pegarCorCard(props.situacaoPedido)};
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
`

export const GridCabecalhoSolto = styled.ul`
  width: 79.7vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3px;
  margin-bottom: 5px;
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
        margin-top: 25px;
        left: ${(props) => props.larguraTexto / 2.6 + 'vw'};
        border: solid 1px;
        border-bottom: solid 1px !important;
        padding: 3px;
      }
    }
  }
`

export const TextoObservacaoItem = styled.p<{
  textoObservacao: string
  larguraTexto: number
}>`
  &.textoObsOverflow#textoObservacaoOverflow {
    max-width: 24vw;
    &:hover {
      &::after {
        content: '${(props) => props.textoObservacao}';
        position: absolute;
        background-color: yellow;
        z-index: 30;
        margin-top: 25px;
        right: ${(props) => 3.3 * props.larguraTexto + 'px'};
        border: solid 1px;
        border-bottom: solid 1px !important;
        padding: 2px;
        overflow-y: visible;
        &:last-of-type {
          border-bottom: solid 1px !important;
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
  }
  &.noPointer {
    cursor: default;
  }
`

export const DivTraco = styled.div<{
  tipoUsuario: string
}>`
  position: relative;
  right: ${(props) => (props.tipoUsuario == 'solicitante' ? '0.1' : '60')}vw;
  width: 60vw;
  bottom: 13.5px;
  border-bottom: solid 2px;
  border-top: hidden 2px;
  z-index: -1;
`

export const DivEntregue = styled.div`
  position: absolute;
  height: 24px;
  width: 60vw;
  left: 9.5vw;
  border-bottom: hidden 2px;
  border-top: hidden 2px;
  background-color: #d2f8d2;
  z-index: -1;
`

export const IconeDiv = styled.div`
  z-index: 7;
`

export const IconeTranca = styled.img`
  height: 15px;
  cursor: pointer;
`

export const IconeExcelDiv = styled.div`
  position: relative;
  top: 7px;
  padding-left: 5px;
  z-index: 10;
`

export const LinhaDiv = styled.div<{ usuario: string }>`
  margin-left: ${(props) => (props.usuario == 'restrito' ? '0' : '28')}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  overflow-x: visible;
`

export const IconeExcelImg = styled.img`
  height: 25px;
  cursor: pointer;
`

export const IconeEntregueDiv = styled.div`
  z-index: 7;
`

export const IconeEntregueImg = styled.img`
  height: 15px;
  cursor: pointer;
`

export const IconeLapisDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  }
  &.quantidade {
    margin-left: 4.2vw;
  }
  &.unidade {
    margin-left: 5vw;
  }
  &.centrocusto {
    z-index: 5;
    position: absolute;
    margin-left: 4.5vw;
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
`

export const InputDataLimite = styled.input`
  position: absolute;
  margin-right: 50px;
  width: 120px;
  height: 34px;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
`

export const InputQuantidade = styled.input`
  position: absolute;
  margin-right: 1.5vw;
  margin-top: 1px;
  width: 2.1vw;
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
`

export const InputUnidade = styled.select`
  position: absolute;
  margin-right: 1.7vw;
  margin-top: 1px;
  width: 45px;
  height: 22px;
  font-size: 15px;
  padding-top: 0px;
  padding-bottom: 2px;
  text-align: center;
  option {
    font-size: 15px;
  }
`

export const InputCentroCusto = styled.select`
  position: absolute;
  margin-right: 1.2vw;
  margin-top: 1px;
  width: 2.75vw;
  height: 22px;
  font-size: 15px;
  padding-top: 2px;
  text-align: center;
  option {
    font-size: 15px;
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
`

export const ItemCheckDiv = styled.div`
  position: relative;
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
  &.finalizado {
    height: 22px;
    width: 20px;
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
