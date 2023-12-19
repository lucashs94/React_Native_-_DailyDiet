import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Input } from '../../components/Input'
import { HeaderNew } from '../../components/HeaderNew'
import { SelectArea } from '../../components/SelectArea';

import { BTNContainer, ButtonNew, Container, Content, DateTimeArea, Form } from './styles'



export function NewMeal() {

  const { navigate } = useNavigation()

  const [selection, setSelection] = useState<string | null>(null)

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
              <Input
                label='Data'
                numberOfLines={1}
                multiline={false}
                $flexRow
              />

              <Input
                label='Hora'
                numberOfLines={1}
                multiline={false}
                $flexRow
              />
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