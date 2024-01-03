import { useEffect, useState } from 'react';
import { Platform, ScrollView, Pressable } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { IMealProps, createMeal, deleteMeal } from '../../services/storage';

import { Input } from '../../components/Input'
import { HeaderNew } from '../../components/HeaderNew'
import { SelectArea } from '../../components/SelectArea';

import { BTNContainer, ButtonNew, Container, Content, DateTimeArea, Form } from './styles'


type AndroidMode = 'date' | 'time'

type Props = {
  item: IMealProps
}


export function NewMeal() {
  
  const isFocused = useIsFocused()
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { item } = params as Props

  const [mealName, setMealName] = useState('')
  const [mealDescription, setMealDescription] = useState('')

  const [dateInput, setDateInput] = useState<string>('')
  const [timeInput, setTimeInput] = useState<string>('')
  const [showPicker, setShowPicker] = useState(false)
  const [mode, setMode] = useState<AndroidMode>("date")

  const [selection, setSelection] = useState<string | null>(null)


  function onChange( event: DateTimePickerEvent, selectedDate: Date | undefined){

    if(event.type === 'set' && selectedDate){
      mode === 'date' 
      ? (setDateInput(selectedDate.toLocaleDateString('pt-BR')))
      : (setTimeInput(selectedDate.toLocaleTimeString('pt-BR').slice(0,5)))
    }

    setShowPicker(false)
  }

  
  function handleShowPicker(mode: AndroidMode){
    setShowPicker(true)
    setMode(mode)
  }


  async function handleCreateMeal(){

    if(
      mealName === '' 
      || mealDescription === ''
      || selection === null 
      || dateInput === ''
      || timeInput === ''
    ){
      return
    }

    if(item){
      await deleteMeal(item)
    }

    const data = {
      name: mealName,
      description: mealDescription,
      date: dateInput,
      time: timeInput,
      status: selection === 'yes' ? true : false,
    }

    await createMeal(data)

    navigate('feedback', { selection })
  }


  useEffect(() => {
    if(item){
      setMealName(item.name)
      setMealDescription(item.description)
      setDateInput(item.date)
      setTimeInput(item.time)
      setSelection( item.status ? 'yes' : 'no')
    }

  }, [isFocused])
  

  return (
    <Container>

      <HeaderNew 
        title={ item ? 'Editar refeição' : 'Nova refeição'}
      />

      <Content
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        keyboardVerticalOffset={200}
      >

        <ScrollView 
          style={{ flex: 1, width: '100%',}}
          showsVerticalScrollIndicator={false}
        >

          <Form>
            <Input
              label='Nome'
              numberOfLines={1}
              onChangeText={setMealName}
              value={mealName}
            />

            <Input
              label='Descrição'
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top',  maxHeight: 130 }}
              onChangeText={setMealDescription}
              value={mealDescription}
            />

            <DateTimeArea>

              {
                showPicker && (
                  <DateTimePicker 
                    mode={mode}
                    display={mode === 'date' ? 'default' : 'spinner'}
                    value={new Date()}
                    onChange={onChange}
                    is24Hour={true}
                  />
                )
              }

              <Pressable 
                style={{ flex: 1}}
                onPress={() => handleShowPicker('date')}
              >
                <Input
                  label='Data'
                  value={dateInput}
                  placeholder='01/01/2023'
                  editable={false}
                  $flexRow
                />
              </Pressable>

              <Pressable
                style={{ flex: 1}}
                onPress={() => handleShowPicker('time')}
              >
                <Input
                  label='Hora'
                  value={timeInput}
                  placeholder='20:00'
                  editable={false}
                  $flexRow
                />
              </Pressable>
            </DateTimeArea>

            <SelectArea 
              selection={selection}
              onHandleSelection={setSelection}
            /> 
            
          </Form>

        </ScrollView>
        
        <BTNContainer>
          <ButtonNew
            label={ item ? 'Salvar alterações' : 'Cadastrar refeição'}
            activeOpacity={0.7}
            onPress={handleCreateMeal}
            disabled={!selection}
          />
        </BTNContainer>

      </Content>

    </Container>
  )
}