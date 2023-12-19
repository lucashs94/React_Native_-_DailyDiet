import { MagnifyingGlass } from 'phosphor-react-native'

import { Container, TextEmpty } from './styles'


export function  EmptyList() {
  return (
    <Container>

      <MagnifyingGlass 
        size={50}
      />

      <TextEmpty>
        Não encontramos uma refeicao!
      </TextEmpty>

    </Container>
  )
}