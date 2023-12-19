import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'


type Props = {
  target: number
}


export const Container = styled.TouchableOpacity<Props>`
  width: 90%;
  align-items: center;
  align-self: center;

  background-color: ${({ theme, target }) => target >= 90 ? theme.COLORS.PRODUCT.GREEN_LIGHT 
  : theme.COLORS.PRODUCT.RED_LIGHT};
  
  padding: 20px 12px;
  margin-bottom: 10px;
  border-radius: 8px;
`

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.PRODUCT.GREEN_DARK,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`