import * as S from './styles'
import { Logo } from '../../components/Logo'

const Header = ({ nomeusur = '' }) => {
  if (nomeusur == '') {
    return (
      <S.HeaderDiv>
        <Logo />
      </S.HeaderDiv>
    )
  } else {
    return <S.HeaderDiv></S.HeaderDiv>
  }
}

export default Header
