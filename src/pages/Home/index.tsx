import Header from '../../containers/Header'
import SplashScreen from '../../components/SplashScreen'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <SplashScreen />
      </Container>
    </>
  )
}

export default Home
