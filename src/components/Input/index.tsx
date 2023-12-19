import { TextInputProps } from 'react-native'
import { Container, InputField, Label } from './styles'


type Props = TextInputProps & {
  label: string
  $flexRow?: boolean
}

export function Input({ label, $flexRow = false, ...rest }: Props) {
  return (

    <Container
      $flexRow={$flexRow}
    >

      <Label>
        { label }
      </Label>

      <InputField
        autoCapitalize='sentences'
        {...rest}
      />

    </Container>
  )
}