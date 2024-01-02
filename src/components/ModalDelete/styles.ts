import styled from 'styled-components/native'


export const ModalView = styled.Modal`
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const BgBlack = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  opacity: 0.5;
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  position: absolute;
  width: 80%;
  
  align-items: center;
  align-self: center;
  
  padding: 20px 24px;

  border-radius: 8px;
`

export const TextDelete = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  text-align: center;

  margin-bottom: 20px;
`

export const ButtonArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_1};
`

export const ButtonDelete = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_1};
`