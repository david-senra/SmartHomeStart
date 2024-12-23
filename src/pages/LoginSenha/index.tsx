import Header from '../../containers/Header'
import TelaLoginSenha from '../../components/TelaLoginSenha'
import { Container } from '../../styles'

const LoginSenha = () => {
  return (
    <>
      <Header />
      <Container>
        <TelaLoginSenha />
      </Container>
    </>
  )
}

export default LoginSenha
