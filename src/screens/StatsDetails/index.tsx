import { Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Card } from '../../components/Card';
import { HeaderDetails } from '../../components/HeaderDetails'

import { 
  CardArea, 
  Container,
  Content, 
  ContentTitle, 
} from './styles'
import { useRoute } from '@react-navigation/native';


const { height } = Dimensions.get('window')

type Props = {
  target: number
}


export function StatsDetails() {
  
  const HEIGHT = useSafeAreaInsets().top + height/4

  const { params } = useRoute()
  const { target } = params as Props

  
  return (
    <Container>

      <HeaderDetails
        newHeight={HEIGHT}
        target={target}
      />

      <Content>

        <ContentTitle>
          Estatísticas gerais
        </ContentTitle>

        <Card 
          title='22'
          subtitle='melhor sequência de pratos dentro da dieta'
        />

        <Card 
          title='109'
          subtitle='refeições registradas'
        />

        <CardArea>
          <Card 
            title='99'
            subtitle='refeições dentro da dieta'
            type='PRIMARY'
          />

          <Card 
            title='10'
            subtitle='refeições fora da dieta'
            type='SECONDARY'
          />
        </CardArea>

      </Content>

    </Container>
  );
}