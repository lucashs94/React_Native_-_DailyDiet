import styled from 'styled-components/native'
import { Button } from '../../components/Button'


export const Container = styled.View`
  flex: 1;
`

export const Content = styled.KeyboardAvoidingView`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};

  margin-top: -20px;
  padding: 30px 24px 10px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
`

export const DateTimeArea = styled.View`
  flex-direction: row;
  justify-content: space-between;

  gap: 12px;
`

export const BTNContainer = styled.View`
  width: 100%;
`

export const ButtonNew = styled(Button)`
  
`

