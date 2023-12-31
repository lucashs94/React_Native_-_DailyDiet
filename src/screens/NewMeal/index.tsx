import { useState } from 'react';
import { Platform, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Input } from '../../components/Input'
import { HeaderNew } from '../../components/HeaderNew'
import { SelectArea } from '../../components/SelectArea';

import { BTNContainer, ButtonNew, Container, Content, DateTimeArea, Form } from './styles'
import { createMeal } from '../../services/storage';

type AndroidMode = 'date' | 'time'

export function NewMeal() {
  
  const { navigate } = useNavigation()

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


  async function handleFeedback(){

    if(
      mealName === '' 
      || mealDescription === ''
      || selection === null 
      || dateInput === ''
      || timeInput === ''
    ){
      return
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
  

  return (
    <Container>

      <HeaderNew 
        title='Nova refeição'
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
            label='Cadastrar refeição'
            activeOpacity={0.7}
            onPress={handleFeedback}
            disabled={!selection}
          />
        </BTNContainer>

      </Content>

    </Container>
  )
}