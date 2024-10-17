import * as S from './styles'
import { Logo } from '../../components/Logo'

const Header = ({ nomeusur = '' }) => {
  if (nomeusur == '') {
    return (
      <S.Header>
        <Logo />
      </S.Header>
    )
  } else {
    return (
      <S.Header>
        <Logo />
        <S.NomeUsuario>Usuário: {nomeusur}</S.NomeUsuario>
      </S.Header>
    )
  }
}

export default Header
