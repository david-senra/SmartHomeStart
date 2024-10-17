import Header from '../../containers/Header'
import Login from '../../components/Login'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Login />
      </Container>
    </>
  )
}

export default Home
