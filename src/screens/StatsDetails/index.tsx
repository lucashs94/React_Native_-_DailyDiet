import { Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IStatsDataProps, PERCENT_TARGET } from '../Home';
import { Card } from '../../components/Card';
import { HeaderDetails } from '../../components/HeaderDetails'

import { 
  CardArea, 
  Container,
  Content, 
  ContentTitle, 
} from './styles'


const { height } = Dimensions.get('window')

type Props = {
  stats: IStatsDataProps | null
}

export function StatsDetails() {
  
  const HEIGHT = useSafeAreaInsets().top + height/4

  const { params } = useRoute()
  const { stats } = params as Props

  
  
  return (
    <Container>

      <HeaderDetails
        newHeight={HEIGHT}
        target={PERCENT_TARGET}
        current={stats?.healthyPercent}
      />

      <Content>

        <ContentTitle>
          Estatísticas gerais
        </ContentTitle>

        <Card 
          title={stats ? stats.bestSequenceQTT.toString() : '0'}
          subtitle='melhor sequência de pratos dentro da dieta'
        />

        <Card 
          title={stats ? stats.totalMeals.toString() : '0'}
          subtitle='refeições registradas'
        />

        <CardArea>
          <Card 
            title={stats ? stats.healthyQTT.toString() : '0'}
            subtitle='refeições dentro da dieta'
            type='PRIMARY'
          />

          <Card 
            title={stats ? stats.notHealthyQTT.toString() : '0'}
            subtitle='refeições fora da dieta'
            type='SECONDARY'
          />
        </CardArea>

      </Content>

    </Container>
  );
}