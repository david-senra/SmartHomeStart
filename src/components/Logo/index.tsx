import {
  LogoButton,
  LogoDiv,
  LogoStyle,
  LogoStyleStaBarbara,
  DivStaBarbara
} from './styles'
import LogoImg from '../../assets/images/cantaria_logo.png'
import LogoStaBarbaraImg from '../../assets/images/stabarbara_logo.jpg'

export const Logo = () => (
  <LogoDiv>
    <LogoButton to={'/'}>
      <div>
        <LogoStyle src={LogoImg} alt="Logo Cantaria" />
      </div>
      <DivStaBarbara>
        <LogoStyleStaBarbara src={LogoStaBarbaraImg} alt="Logo Cantaria" />
      </DivStaBarbara>
    </LogoButton>
  </LogoDiv>
)
