import { Container } from './styles'

type Props = {
  title: string
}

export function HeaderSectionText({ title }: Props) {
  return (
    <Container>
      {title}
    </Container>
  )
}