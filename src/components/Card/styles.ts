import styled from 'styled-components/native'


export type CardTypeProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT'

type Props = {
  type: CardTypeProps
}


export const Container = styled.View<Props>`
  flex-shrink: 1;
  width: 100%;
  align-items: center;

  background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.BASE.GRAY_6 : (
    type === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT
  )};

  padding: 16px;
  margin: 6px 0;

  border-radius: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;

  margin-bottom: 10px;
`

export const Subtitle = styled.Text`
  text-align: center;
  
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`