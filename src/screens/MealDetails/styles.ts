import styled from 'styled-components/native'
import { Button } from '../../components/Button'


export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};

  margin-top: -20px;
  padding: 30px 24px 10px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const DataArea = styled.View`
  flex: 1;
  width: 100%;

  gap: 34px;
`

export const DataInfo = styled.View`
  gap: 6px;
`

export const DateInfoArea = styled.View`
  gap: 6px;
`

export const MealName = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const MealDesc = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const MealDate = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const MealStatus = styled.View`
  flex-direction: row;
  align-self: flex-start;
  align-items: center;

  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};

  border-radius: 50px;
  gap: 12px;
`

export const Status = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.GREEN_DARK};
  width: 8px;
  height: 8px;
  border-radius: 50px;
`

export const MealStatusText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const BTNContainer = styled.View`
  width: 100%;
`

export const ButtonNew = styled(Button)`
  
`

