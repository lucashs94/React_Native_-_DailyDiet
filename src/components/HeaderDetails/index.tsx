import { useNavigation, useRoute } from '@react-navigation/native'

import { ButtonIcon, Container, HeaderSubTitle, HeaderTitle, Icon } from './styles'


type Props = {
  newHeight: number
  target: number
  current?: number
}

export function HeaderDetails({ newHeight, target, current }: Props) {

  const { goBack } = useNavigation()

  function handleGoBack(){
    goBack()
  }


  return (
    <Container
      newHeight={newHeight}
      target={target}
      current={current ? current: 0}
    >
        <ButtonIcon
          onPress={handleGoBack}
        >
          <Icon 
            target={target}
            current={current ? current: 0}
          />
        </ButtonIcon>

        <HeaderTitle>
          {current}%
        </HeaderTitle>

        <HeaderSubTitle>
          das refeições dentro da dieta
        </HeaderSubTitle>

    </Container>
  );
}