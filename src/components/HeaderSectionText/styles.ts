import styled from 'styled-components/native'


export const Container = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding: 10px 0 5px;
`