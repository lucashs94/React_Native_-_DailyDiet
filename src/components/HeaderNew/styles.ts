import styled from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'


type Props = {
  newHeight: number
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${({ newHeight }) => newHeight}px;
  align-items: center;
  
  flex-direction: row;
  justify-content: center;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};
`

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BASE.GRAY_2,
}))`
  
`

export const Title = styled.Text`
  align-self: center;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`