import { ModalProps } from 'react-native'
import { BgBlack, ButtonArea, ButtonCancel, ButtonDelete, Container, Content, ModalView, TextDelete } from './styles'


type Props = ModalProps & {
  visible: boolean
}

export function ModalDelete( { visible, ...rest}: Props ) {
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
          <TextDelete>
            Deseja realmente excluir o registro da refeição?
          </TextDelete>

          <ButtonArea>
            <ButtonCancel>

            </ButtonCancel>

            <ButtonDelete>
              
            </ButtonDelete>

          </ButtonArea>
        </Content>
      </Container>

    </ModalView>
  )
}