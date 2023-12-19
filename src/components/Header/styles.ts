import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 60px 24px 32px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`