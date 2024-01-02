import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

import { HeaderNew } from '../../components/HeaderNew'
import { IMealProps } from '../../services/storage';

import { 
  BTNContainer, 
  ButtonNew, 
  Container, 
  Content, 
  DataArea, 
  DataInfo, 
  DateInfoArea, 
  DateTitle, 
  MealDate, 
  MealDesc, 
  MealName, 
  MealStatus, 
  MealStatusText, 
  Status,  
} from './styles'
import { ModalDelete } from '../../components/ModalDelete';


type Props = {
  item: IMealProps
}

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false)

  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { item } = params as Props


  return (
    <Container>

      <HeaderNew
        title='Refeição'
        bgColor={item.status}
      />

      <Content>

        <DataArea>

          <DataInfo>
            <MealName>
              {item.name}
            </MealName>
            <MealDesc>
              {item.description}
            </MealDesc>
          </DataInfo>

          <DateInfoArea>
            <DateTitle>
              Data e Hora
            </DateTitle>
            <MealDate>
              {item.date} ãs {item.time}
            </MealDate>
          </DateInfoArea>

          <MealStatus>
            <Status 
              status={item.status}
            />

            <MealStatusText>
              { item.status ? 'dentro da dieta' : 'fora da dieta'}
            </MealStatusText>
          </MealStatus>

        </DataArea>

        
        <BTNContainer>
          <ButtonNew
            icon={'PencilSimpleLine'}
            label='Editar refeição'
            onPress={ () => {} }
          />
          
          <ButtonNew
            icon={'Trash'}
            variant='outline'
            label='Excluir refeição'
            onPress={ () => setModalVisible(true) }
          />
        </BTNContainer>

      </Content>

      <ModalDelete 
        visible={modalVisible}
      />

    </Container>
  )
}