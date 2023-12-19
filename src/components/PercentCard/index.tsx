import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, SubTitle, Title } from './styles'


type Props = TouchableOpacityProps & {
  target: number
}

export function PercentCard({ target, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      target={target}
      {...rest}
    >

      <Icon /> 

      <Title>
        90,86%
      </Title>

      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>

    </Container>
  )
}