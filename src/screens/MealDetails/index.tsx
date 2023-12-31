import { useNavigation, useRoute } from '@react-navigation/native';

import { HeaderNew } from '../../components/HeaderNew'

import { BTNContainer, ButtonNew, Container, Content, DataArea, DataInfo, DateInfoArea, DateTitle, MealDate, MealDesc, MealName, MealStatus, MealStatusText, Status,  } from './styles'
import { IMealProps } from '../../services/storage';
import React from 'react';


type Props = IMealProps

export function MealDetails() {

  const { navigate } = useNavigation()
  const { params } = useRoute()
  // const { meal } = params as Props


  return (
    <Container>

      <HeaderNew
        title='Refeição'
      />

      <Content>

        <DataArea>

          <DataInfo>
            <MealName>
              Sanduiche
            </MealName>
            <MealDesc>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </MealDesc>
          </DataInfo>

          <DateInfoArea>
            <DateTitle>
              Data e Hora
            </DateTitle>
            <MealDate>
              12/08/2023 ãs 20:00
            </MealDate>
          </DateInfoArea>

          <MealStatus>
            <Status/>
            <MealStatusText>
              dentro da dieta
            </MealStatusText>
          </MealStatus>

        </DataArea>

        
        <BTNContainer>
          <ButtonNew
            icon={'PencilSimpleLine'}
            label='Editar refeição'
          />
          
          <ButtonNew
            icon={'Trash'}
            variant='outline'
            label='Excluir refeição'
          />
        </BTNContainer>

      </Content>

    </Container>
  )
}