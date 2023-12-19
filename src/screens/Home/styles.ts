import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.PRODUCT.RED_DARK};
`

export const Content = styled.View`
  flex: 1;
  margin-top: 20px;
  padding: 0 24px;
  align-items: flex-start;
`

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`