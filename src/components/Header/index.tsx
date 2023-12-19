import { Avatar, Container, Logo } from './styles'

import LogoIMG from '../../assets/Logo.png'


export function Header() {
  return (
    <Container>
      
      <Logo 
        source={LogoIMG}
      />

      <Avatar
        source={{ uri: 'http://github.com/lucashs94.png' }}
      />

    </Container>
  );
}