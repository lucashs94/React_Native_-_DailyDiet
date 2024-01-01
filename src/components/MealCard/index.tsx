import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { IMealProps } from '../../services/storage'

import { Container, MealText, Separator, Status, TimeText } from './styles'


type Props = {
  item: IMealProps
}

export function MealCard({ item }: Props) {

  const { navigate } = useNavigation()

  function handleDetails(){
    navigate('details', { item })
  }

  return (
    <Container
      activeOpacity={0.7}
      onPress={handleDetails}
    >

      <TimeText>
        {item.time}
      </TimeText>

      <Separator />

      <MealText>
        {item.name}
      </MealText>

      <Status 
        status={item.status}
      />

    </Container>
  )
}