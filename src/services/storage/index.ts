import AsyncStorage from '@react-native-async-storage/async-storage'


const STORAGE_KEY = '@dailyDiet:meals'


type IMealProps = {
  id: string
  name: string
  description: string
  date: string
  time: string
  status: boolean
}

type ISectionsProps = { [data:string]: IMealProps[] }


export const getAllMeals = async () => {

  const result = await AsyncStorage.getItem(STORAGE_KEY)
  const resultParsed = result ? JSON.parse(result) : []

  return resultParsed
}


export const getMeal = () => {

}


export const insertMeal = async (data: IMealProps) => {
  
  let meals: IMealProps[] = await getAllMeals()
  meals.push(data)


  if(data){
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(meals))
  }

}


export const deleteMeal = () => {


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


