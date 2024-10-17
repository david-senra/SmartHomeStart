import { LogoButton, LogoDiv, LogoStyle } from './styles'
import LogoImg from '../../assets/images/cantaria_logo.png'

export const Logo = () => (
  <LogoDiv>
    <LogoButton to={'/'}>
      <LogoStyle src={LogoImg} alt="Logo Cantaria" />
    </LogoButton>
  </LogoDiv>
)
