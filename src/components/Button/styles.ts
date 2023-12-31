import { View } from 'react-native'
import styled from 'styled-components/native'

export type variant = 'default' | 'outline'
export type icon = 'Plus' | 'PencilSimpleLine' | 'Trash'

type variantProps = {
  variant: variant
}


export const Container = styled.TouchableOpacity<variantProps>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 5px 0;

  border-radius: 6px;

  border: 1px;

  background-color: ${({ theme, variant }) => variant === 'default' 
  ? theme.COLORS.BASE.GRAY_1 
  : 'transparent'};
`

export const TextButton = styled.Text<variantProps>`
  color: ${({ theme, variant }) => variant === 'outline' 
  ? theme.COLORS.BASE.GRAY_1 
  : theme.COLORS.BASE.WHITE};

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-left: 10px;
`