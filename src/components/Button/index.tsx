import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, TextButton, icon, variant } from './styles'


type Props = TouchableOpacityProps & {
  label: string
  icon?: icon | null
  variant?: variant
}


export function Button({ label, icon = null, variant = 'default', ...rest }: Props) {
  return (
    <Container
      variant={variant}
      {...rest}
    >

      {
        icon && <Icon variant={variant}/>
      }

      <TextButton
        variant={variant}
      >
        {label}
      </TextButton>

    </Container>
  )
}