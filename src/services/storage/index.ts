import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
const STORAGE_KEY = '@dailyDiet:meals'


export type IMealProps = {
  id: string
  name: string
  description: string
  date: string
  time: string
  status: boolean
}

export type IMealPropsData = Omit<IMealProps, 'id'>


type ISectionsProps = { [data:string]: IMealProps[] }


export const getAllMeals = async () => {

  const result = await AsyncStorage.getItem(STORAGE_KEY)
  const resultParsed = result ? JSON.parse(result) : []

  return resultParsed
}


export const getMeal = () => {

}


export const createMeal = async (data: IMealPropsData) => {
  
  let meals: IMealProps[] = await getAllMeals()

  const newData: IMealProps = {
    id: String(uuid.v4()),
    ...data
  }

  meals.push(newData)


  if(data){
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(meals))
  }

}


export const deleteMeal = async (item: IMealProps) => {

  const meals: IMealProps[] = await getAllMeals()

  const filtered = meals.filter( meal => meal.id !== item.id)

  if(filtered){
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  }
}


export const loadMeals = async () => {
  let sections: ISectionsProps = {}
  let meals: IMealProps[] = await getAllMeals() 

  meals.sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))

  meals.forEach( meal => {

    const dateSection = meal.date

    if(!sections[dateSection]){
      sections[dateSection] = []
    }

    sections[dateSection].push(meal)
  })

  const arraySections = Object.keys(sections).map( section => ({
    title: section,
    data: sections[section],
  }))

  return arraySections
}


