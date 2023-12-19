import { ButtonSelection, ButtonStatus, ButtonText, Container, Label, SelectionArea } from './styles'


type Props = {
  selection: string | null
  onHandleSelection: React.Dispatch<React.SetStateAction<string | null>>
}

export function SelectArea({ selection, onHandleSelection }: Props) {


  const handleSelection = (option: string) => {
    onHandleSelection(previous => previous === option ? null : option)
  }


  return (
    <Container>

      <Label>
        Está dentro da dieta?
      </Label>

      <SelectionArea>

        <ButtonSelection
          onPress={() => handleSelection('yes')}
          selection={ selection === 'yes' ? 'yes' : null }
        >
          <ButtonStatus yes />
          <ButtonText>Sim</ButtonText>
        </ButtonSelection>
        
        <ButtonSelection
          onPress={() => handleSelection('no')}
          selection={ selection === 'no' ? 'no' : null }
        >
          <ButtonStatus />
          <ButtonText>Não</ButtonText>
        </ButtonSelection>
        
      </SelectionArea>

    </Container>
  )
}