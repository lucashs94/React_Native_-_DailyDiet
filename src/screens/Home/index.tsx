import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { PercentCard } from '../../components/PercentCard'
import { EmptyList } from '../../components/EmptyList'
import { MealCard } from '../../components/MealCard'
import { HeaderSectionText } from '../../components/HeaderSectionText'

import { IMealProps, loadMeals, statsMeals } from '../../services/storage'

import { Container, Content, SectionTitle } from './styles'


type ISectionListDataProps = {
  title: string
  data: IMealProps[]
}

export type IStatsDataProps = {
  totalMeals: number
  healthyQTT: number
  notHealthyQTT: number
  healthyPercent: number
  bestSequenceQTT: number
}

export const PERCENT_TARGET = 80

export function Home() {

  const [dataList, setDataList] = useState<ISectionListDataProps[]>([])
  const [stats, setStats] = useState<IStatsDataProps | null>(null)


  const { navigate } = useNavigation()
  const isFocused = useIsFocused()


  function handleGoToDetails(){

    navigate('stats', { stats })
  }


  function handleNewMeal(){
    navigate('new', { item: undefined })
  }


  async function fetchAll(){

    const returnData = await loadMeals()
    setDataList(returnData)
  }


  async function fetchStats(){
    const stats = await statsMeals()
    setStats(stats)
  }


  useEffect(() => {

    fetchAll()
    fetchStats()
    
  }, [isFocused])


  return (
    <Container>

      <Header />

      <PercentCard 
        target={PERCENT_TARGET}
        current={stats?.healthyPercent}
        onPress={handleGoToDetails}
      />

      <Content>

        <SectionTitle>
          Refeições
        </SectionTitle>

        <Button 
          label='Nova Refeição'
          icon= 'Plus'
          onPress={handleNewMeal}
        />

        <SectionList
          style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
          sections={dataList}
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