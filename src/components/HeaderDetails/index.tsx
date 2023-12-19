import { useNavigation } from '@react-navigation/native'
import { ButtonIcon, Container, HeaderSubTitle, HeaderTitle, Icon } from './styles'


type Props = {
  newHeight: number
  target: number
}

export function HeaderDetails({ newHeight, target }: Props) {

  const { goBack } = useNavigation()


  function handleGoBack(){
    goBack()
  }


  return (
    <Container
      newHeight={newHeight}
      target={target}
    >
        <ButtonIcon
          onPress={handleGoBack}
        >
          <Icon />
        </ButtonIcon>

        <HeaderTitle>
          90,85%
        </HeaderTitle>

        <HeaderSubTitle>
          das refeições dentro da dieta
        </HeaderSubTitle>

    </Container>
  );
}