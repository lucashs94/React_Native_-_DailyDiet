import { useNavigation } from '@react-navigation/native'
import { Container, MealText, Separator, Status, TimeText } from './styles'

type Props = {
  item: {
    time: string
    name: string
    status: boolean
  }
}

export function MealCard({ item: { time, name, status } }: Props) {

  const { navigate } = useNavigation()

  function handleDetails(){
    navigate('details')
  }

  return (
    <Container
      activeOpacity={0.7}
      onPress={handleDetails}
    >

      <TimeText>
        {time}
      </TimeText>

      <Separator />

      <MealText>
        {name}
      </MealText>

      <Status 
        status={status}
      />

    </Container>
  )
}