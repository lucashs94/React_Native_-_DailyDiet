import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ButtonIcon, Container, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'


type Props = { 
  title: string
  bgColor?: boolean | null
}

export function HeaderNew({ title, bgColor=null }: Props) {

  const HEIGHT = useSafeAreaInsets().top + 90

  const { goBack } = useNavigation()


  function handleGoBack(){
    goBack()
  }


  return (
    <Container
      newHeight={HEIGHT}
      bgColor={bgColor}
    >

      <ButtonIcon
        onPress={handleGoBack}
      >
        <Icon />
      </ButtonIcon>

      <Title>
        {title}
      </Title>

    </Container>
  )
}