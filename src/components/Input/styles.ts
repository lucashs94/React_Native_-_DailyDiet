import styled from 'styled-components/native'

type Props = {
  $flexRow: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
  margin-bottom: 20px;

  ${({ $flexRow }) => $flexRow && `
    flex: 1;
  `}
`

export const InputField = styled.TextInput`
  padding: 14px;
  margin-top: 10px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`