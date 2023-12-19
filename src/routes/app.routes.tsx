import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Home } from '../screens/Home'
import { StatsDetails } from '../screens/StatsDetails'
import { NewMeal } from '../screens/NewMeal'
import { Feedback } from '../screens/Feedback'


const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='stats'
        component={StatsDetails}
      />

      <Screen 
        name='new'
        component={NewMeal}
      />

      <Screen 
        name='feedback'
        component={Feedback}
      />

    </Navigator>
  )
}
