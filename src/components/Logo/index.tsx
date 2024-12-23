import {
  LogoButton,
  LogoDiv,
  LogoStyle,
  LogoStyleStaBarbara,
  DivStaBarbara
} from './styles'
import LogoImg from '../../assets/images/smart_home_logo.png'

export const Logo = () => (
  <LogoDiv>
    <LogoButton to={'/'}>
      <div>
        <LogoStyle src={LogoImg} alt="Logo Smart Home" />
      </div>
    </LogoButton>
  </LogoDiv>
)
