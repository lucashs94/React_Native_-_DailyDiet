import { useNavigation, useRoute } from '@react-navigation/native';

import SuccessFeedbackImage from '../../assets/feedback-sucess.png'
import FailFeedbackImage from '../../assets/feedback-failed.png'

import { Buttonfield, Container, Headline, ImageField, Strong, Subtitle, Title } from './styles';

type Props = {
  selection: string
}

export function Feedback() {

  const { navigate } = useNavigation()

  const { params } = useRoute()
  const { selection } = params as Props

  const title = selection === 'yes' ? 'Continue assim!' : 'Que pena!'
  const negrito = selection === 'yes' ? 'dentro da dieta' : 'saiu da dieta'
  const subTitle_1 = selection === 'yes' 
  ? `Você continua `
  : 'Você '
  const subTitle_2 = selection === 'yes' 
  ? `. Muito bem!`
  : ' dessa vez, mas continue se esforçando e não desista!'


  function handleGoToHome(){
    navigate('home')
  }

  return (
    <Container>

      <Headline>

        <Title
          selection={selection}
        >
          {title}
        </Title>

        <Subtitle>
          {subTitle_1}
          <Strong>{negrito}</Strong>
          {subTitle_2}
        </Subtitle>

      </Headline>

      <ImageField
        source={selection === 'yes' ? SuccessFeedbackImage : FailFeedbackImage}
      />

      <Buttonfield
        label='Ir para a página inicial'
        onPress={handleGoToHome}
      />

    </Container>
  )
}