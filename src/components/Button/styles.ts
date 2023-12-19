import styled from 'styled-components/native'

import { Plus, PencilSimpleLine, Trash, IconProps } from 'phosphor-react-native'

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

  margin: 10px 0;

  border-radius: 6px;

  border: 1px;

  background-color: ${({ theme, variant }) => variant === 'default' 
  ? theme.COLORS.BASE.GRAY_1 
  : 'transparent'};
`

export const Icon = styled(Plus).attrs<variantProps>(({ theme, variant }) => ({
  size: 18,
  color: variant === 'outline' ? theme.COLORS.BASE.GRAY_1 : theme.COLORS.BASE.WHITE,
}))`
  margin-right: 15px;
`

export const TextButton = styled.Text<variantProps>`
  color: ${({ theme, variant }) => variant === 'outline' 
  ? theme.COLORS.BASE.GRAY_1 
  : theme.COLORS.BASE.WHITE};

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`