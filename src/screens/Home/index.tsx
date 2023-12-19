import { SectionList, Text } from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { PercentCard } from '../../components/PercentCard'

import { Container, Content, SectionTitle } from './styles'
import { DATA } from '../../data'
import { EmptyList } from '../../components/EmptyList'
import { MealCard } from '../../components/MealCard'
import { HeaderSectionText } from '../../components/HeaderSectionText'
import { useNavigation } from '@react-navigation/native'


export function Home() {

  const PERCENT_TARGET = 90

  const { navigate } = useNavigation()


  function handleGoToDetails(){
    navigate('stats', { target: PERCENT_TARGET })
  }

  function handleNewMeal(){
    navigate('new')
  }


  return (
    <Container>

      <Header />

      <PercentCard 
        target={PERCENT_TARGET}
        onPress={handleGoToDetails}
      />

      <Content>

        <SectionTitle>
          Refeições
        </SectionTitle>

        <Button 
          label='Nova Refeição'
          icon
          onPress={handleNewMeal}
        />

        <SectionList
          style={{ width: '100%', marginTop: 15 }}
          sections={DATA}
          keyExtractor={ item => String(item.id) }
          renderItem={ ({ item }) => (
            <MealCard item={item} />
          ) }
          renderSectionHeader={ ({ section: { title } }) => (
            <HeaderSectionText title={title} />
          ) }
          ListEmptyComponent={ () => (
            <EmptyList />
          ) }
          showsVerticalScrollIndicator={false}
        />

      </Content>
      
    </Container>
  )
}