import styled from 'styled-components/native'


type Props = {
  status: boolean
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;

  background: transparent;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};
  border-radius: 6px;

  padding: 14px 16px;
  margin-bottom: 10px;
  gap: 12px;

`

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Separator = styled.View`
  height: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_4};
`

export const MealText = styled.Text`
  flex: 1;

  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Status = styled.View<Props>`
  background-color: ${({ theme, status }) => status ? theme.COLORS.PRODUCT.GREEN_MID : theme.COLORS.PRODUCT.RED_MID};
  width: 14px;
  height: 14px;
  border-radius: 50px;
`