import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, SubTitle, Title } from './styles'


type Props = TouchableOpacityProps & {
  target: number
  current?: number
}

export function PercentCard({ target, current, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      target={target}
      current={current ? current : 0}
      {...rest}
    >

      <Icon 
        target={target}
        current={current ? current : 0}
      /> 

      <Title>
        { current ? current.toFixed(2) : '00,00'}%
      </Title>

      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>

    </Container>
  )
}