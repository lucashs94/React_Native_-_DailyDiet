import { TouchableOpacityProps } from 'react-native'
import { Container, TextButton, icon, variant } from './styles'
import * as Icon from 'phosphor-react-native'
import theme from '../../styles/theme'

type Props = TouchableOpacityProps & {
  label: string
  icon?: icon | null
  variant?: variant
}

export function Button({ label, icon = null, variant = 'default', ...rest }: Props) {

  const color = variant === 'default' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_1


  return (
    <Container
      activeOpacity={0.7}
      variant={variant}
      {...rest}
    >

      {
        icon && ( 
          icon === 'PencilSimpleLine' 
          ? <Icon.PencilSimpleLine size={18} color={color}/> 
          : icon === 'Plus' ? <Icon.Plus size={18} color={color}/> 
          : <Icon.Trash size={18} color={color}/>
        )
      }

      <TextButton
        variant={variant}
      >
        {label}
      </TextButton>

    </Container>
  )
}