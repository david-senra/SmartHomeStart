import { MensagemErro, BotaoRetorno } from './styles'

export const ErroSistema = () => (
  <>
    <MensagemErro>Erro! Por favor, faça login novamente!</MensagemErro>
    <BotaoRetorno to={'/'}>Voltar</BotaoRetorno>
  </>
)
