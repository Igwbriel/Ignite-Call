import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong"> Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Conecte seu calendário e ermita que as pessoas marquem agendamentos no
          seu tempo livre.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form">
        <label>
          <Text size="sm">Nome de úsuario</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="seu-usuario"
            crossOrigin={undefined}
          />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="seu-nome" crossOrigin={undefined} />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
