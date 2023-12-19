import { ViewProps } from 'react-native'
import { CardTypeProps, Container, Subtitle, Title } from './styles'


type Props = ViewProps & {
  title: string
  subtitle: string
  type?: CardTypeProps
}


export function Card({ title, subtitle, type = 'DEFAULT', ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >

      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>

    </Container>
  );
}