import { ModalProps } from 'react-native'

import { 
  BgBlack, 
  ButtonArea, 
  ButtonCancel, 
  ButtonDelete, 
  Container, 
  Content, 
  ModalView, 
  TextCancelButton, 
  TextDeleteButton, 
  TextModal 
} from './styles'


type Props = ModalProps & {
  visible: boolean
  onClose: () => void
}

export function ModalDelete( { visible, onClose, ...rest }: Props ) {
  return (
    <ModalView
      animationType='fade'
      visible={visible}
      transparent
      statusBarTranslucent
      {...rest}
    >
      <Container>

        <BgBlack />
        
        <Content>
          <TextModal>
            Deseja realmente excluir o registro da refeição?
          </TextModal>

          <ButtonArea>
            <ButtonCancel
              activeOpacity={0.7}
              onPress={ onClose }
            >
              <TextCancelButton>Cancelar</TextCancelButton>
            </ButtonCancel>

            <ButtonDelete
              activeOpacity={0.7}
              onPress={ () => {} }
            >
              <TextDeleteButton>Sim, excluir</TextDeleteButton>
            </ButtonDelete>

          </ButtonArea>
        </Content>
      </Container>

    </ModalView>
  )
}