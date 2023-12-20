import { useState } from 'react';
import { Platform, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { EvtTypes, Event, DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Input } from '../../components/Input'
import { HeaderNew } from '../../components/HeaderNew'
import { SelectArea } from '../../components/SelectArea';

import { BTNContainer, ButtonNew, Container, Content, DateTimeArea, Form } from './styles'



export function NewMeal() {
  

  const { navigate } = useNavigation()

  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date('HH:mm'))

  const [dateInput, setDateInput] = useState('')
  const [timeInput, setTimeInput] = useState('')

  const [showPicker, setShowPicker] = useState(false)
  const [mode, setMode] = useState('date')

  const [selection, setSelection] = useState<string | null>(null)


  function onChange( event: DateTimePickerEvent, selectedDate: Date){

    if(event.type === 'set'){
      mode === 'date' 
      ? (setDateInput(selectedDate.toLocaleDateString('pt-BR')))
      : (setTimeInput(selectedDate.toLocaleTimeString('pt-BR').slice(0,5)))
    }

    setShowPicker(false)
  }

  function handleShowPicker(mode: string){
    setShowPicker(true)
    setMode(mode)
  }


  function handleFeedback(){

    navigate('feedback', { selection })

  }
  

  return (
    <Container>

      <HeaderNew />

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
              multiline={false}
            />

            <Input
              label='Descrição'
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top',  maxHeight: 130 }}
            />

            <DateTimeArea>

              {
                showPicker && (
                  <DateTimePicker 
                    mode={mode}
                    display={mode === 'date' ? 'default' : 'spinner'}
                    value={date}
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
            onPress={handleFeedback}
            disabled={!selection}
          />
        </BTNContainer>

      </Content>

    </Container>
  )
}