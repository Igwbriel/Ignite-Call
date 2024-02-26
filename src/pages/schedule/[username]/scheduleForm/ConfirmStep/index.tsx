import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduleForm() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduleForm}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          26 de fevereiro de 2024
        </Text>

        <Text>
          <Clock />
          20:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="seu nome" crossOrigin={undefined} />
      </label>

      <label>
        <Text size="sm">Endereço de email</Text>
        <TextInput
          type="email"
          placeholder="JoeJonnings@example.com"
          crossOrigin={undefined}
        />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
