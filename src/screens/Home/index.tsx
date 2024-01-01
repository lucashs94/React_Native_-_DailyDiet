import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { PercentCard } from '../../components/PercentCard'
import { EmptyList } from '../../components/EmptyList'
import { MealCard } from '../../components/MealCard'
import { HeaderSectionText } from '../../components/HeaderSectionText'

import { IMealProps, loadMeals } from '../../services/storage'

import { Container, Content, SectionTitle } from './styles'


type ISectionListDataProps = {
  title: string
  data: IMealProps[]
}

export function Home() {

  const [dataList, setDataList] = useState<ISectionListDataProps[]>([])

  const PERCENT_TARGET = 90

  const { navigate } = useNavigation()
  const isFocused = useIsFocused()


  function handleGoToDetails(){
    navigate('stats', { target: PERCENT_TARGET })
  }


  function handleNewMeal(){
    navigate('new')
  }


  useEffect(() => {

    async function getAll(){

      const returnData = await loadMeals()
      setDataList(returnData)
      
    }
    getAll()
    
  }, [isFocused])


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