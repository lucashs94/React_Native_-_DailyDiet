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

  meals.sort((a, b) => {
    return convertToDate(a) - convertToDate(b)
  })

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


export const statsMeals = async () => {
  
  const meals: IMealProps[] = await getAllMeals()

  const totalMeals = meals.length
  const healthyQTT = meals.filter( meal => meal.status === true ).length
  const notHealthyQTT = meals.filter( meal => meal.status === false ).length
  const healthyPercent = Number((healthyQTT/totalMeals * 100).toFixed(2))
  const bestSequenceQTT = bestSequence(meals)

  const stats = {
    totalMeals,
    healthyQTT,
    notHealthyQTT,
    healthyPercent,
    bestSequenceQTT,
  }

  return stats
}


function bestSequence(array: IMealProps[]){

  array.sort((a, b) => convertToDate(a) - convertToDate(b))

  let sequenceHealthy = 0
  let masxSequenceHealthy = 0

  for (const obj of array){
    if (obj.status === true){
      sequenceHealthy++

      sequenceHealthy > masxSequenceHealthy && (masxSequenceHealthy = sequenceHealthy)

    }else{
      sequenceHealthy = 0
    }
  }

  return masxSequenceHealthy
}


function convertToDate(obj: IMealProps){

  const objTimestamp = new Date(
    Number(obj.date.split('/')[2]), 
    Number(obj.date.split('/')[1]) - 1, 
    Number(obj.date.split('/')[0]),
    Number(obj.time.split(':')[0]),
    Number(obj.time.split(':')[1]),
  )

  return objTimestamp.getTime()
}