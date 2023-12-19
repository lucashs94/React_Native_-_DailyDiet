import styled from 'styled-components/native'


type StatusProps = {
  yes?: boolean
}

type SelectionProps = {
  selection: string | null
}


export const Container = styled.View`
  width: 100%;

`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const SelectionArea = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  gap: 12px;
`

export const ButtonSelection = styled.TouchableOpacity<SelectionProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;

  border-radius: 6px;
  border: 1px solid transparent;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};

  ${({ theme, selection }) => selection === 'yes' && `
    background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
    border: 1px solid ${theme.COLORS.PRODUCT.GREEN_DARK};
  `}

  ${({ theme, selection }) => selection === 'no' && `
    background-color: ${theme.COLORS.PRODUCT.RED_LIGHT};
    border: 1px solid ${theme.COLORS.PRODUCT.RED_DARK};
  `}
  
`

export const ButtonStatus = styled.View<StatusProps>`
  background-color: ${({ theme, yes }) => yes ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 50px;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`