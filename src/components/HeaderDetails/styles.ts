import styled from "styled-components/native"
import { ArrowLeft } from 'phosphor-react-native'


type PropsHeader = {
  newHeight: number
  target: number
}

export const Container = styled.View<PropsHeader>`
  width: 100%;
  height: ${({ newHeight }) => newHeight}px;
  align-items: center;

  background-color: ${({ theme, target }) => target >= 90 ? theme.COLORS.PRODUCT.GREEN_LIGHT 
  : theme.COLORS.PRODUCT.RED_LIGHT};

  padding: 60px 24px;
`

export const ButtonIcon = styled.TouchableOpacity`
  background: transparent;

  align-self: flex-start;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.PRODUCT.GREEN_DARK,
}))``

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`

export const HeaderSubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`