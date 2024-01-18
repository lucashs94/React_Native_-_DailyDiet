import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import * as SplashScreen from 'expo-splash-screen'

import theme from './src/styles/theme'
import { Routes } from './src/routes'

import { Loading } from './src/components/Loading'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })

  
  useEffect(() => {

    async function prepare(){
      try {
        await new Promise(resolve => setTimeout(resolve, 4000))
        
      } catch (error) { 
        console.log(error)

      }finally{
        await SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={'dark-content'} 
        translucent
        backgroundColor='transparent'
      />
      {
        fontsLoaded ? <Routes /> : <Loading/>
      }
    </ThemeProvider>
  );
}
