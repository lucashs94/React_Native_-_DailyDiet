import styled from 'styled-components/native'
import { Button } from '../../components/Button'

type Props = {
  selection: string
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};

  padding: 24px;

  gap: 50px;
`

export const Headline = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  gap: 8px;
`

export const Title = styled.Text<Props>`

  color: ${({ theme, selection }) => selection === 'yes' 
  ? theme.COLORS.PRODUCT.GREEN_DARK 
  : theme.COLORS.PRODUCT.RED_DARK};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const Subtitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Strong = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const ImageField = styled.Image`
  
`

export const Buttonfield = styled(Button)`
  width: 60%;
`