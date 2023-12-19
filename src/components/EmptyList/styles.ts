import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`


export const TextEmpty = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`