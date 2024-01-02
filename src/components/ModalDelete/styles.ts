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
  width: 90%;
  
  align-items: center;
  align-self: center;
  
  padding: 20px 24px;

  border-radius: 8px;
`

export const TextModal = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  text-align: center;

  padding: 0 48px;

  margin-top: 20px;
  margin-bottom: 30px;
`

export const ButtonArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  gap: 12px;
`

export const ButtonCancel = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  border-radius: 6px;
  padding: 16px 24px;

  align-items: center;
`

export const ButtonDelete = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  border-radius: 6px;
  padding: 16px 24px;

  align-items: center;
`

export const TextDeleteButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const TextCancelButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`