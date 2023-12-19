import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};

  margin-top: -50px;

  padding: 10px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`


export const ContentTitle = styled.Text`
  margin: 20px 0;

  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const CardArea = styled.View`
  max-width: 100%;
  flex-direction: row;
  gap: 12px;
`