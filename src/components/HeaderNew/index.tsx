import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ButtonIcon, Container, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'


export function HeaderNew() {

  const HEIGHT = useSafeAreaInsets().top + 90

  const { goBack } = useNavigation()


  function handleGoBack(){
    goBack()
  }


  return (
    <Container
      newHeight={HEIGHT}
    >

      <ButtonIcon
        onPress={handleGoBack}
      >
        <Icon />
      </ButtonIcon>

      <Title>
        Nova refeição
      </Title>

    </Container>
  )
}