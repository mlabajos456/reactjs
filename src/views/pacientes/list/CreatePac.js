// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, Label, FormText } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

export const CreatePac = ({ open, toggleSidebar }) => {
  // ** Function to handle form submit
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      console.log(event)
    }
    event.preventDefault()
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Nuevo Paciente'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <Label for='nombre'>Nombre y Apellidos</Label>
          <AvInput name='nombre' id='nombre' placeholder='John Doe' required />
        </FormGroup>
        {/*      <FormGroup>
          <Label for='username'>Username</Label>
          <AvInput name='username' id='username' placeholder='johnDoe99' required />
        </FormGroup> */}
        <FormGroup>
          <Label for='DNI'>DNI</Label>
          <AvInput name='DNI' id='DNI' placeholder='72887473' required />
        </FormGroup>
        <FormGroup>
          <Label for='fecha_nac'>Fecha de nacimiento</Label>
          <AvInput name='fecha_nac' id='fecha_nac' placeholder='72887473' required />
        </FormGroup>
        <FormGroup className='mb-2'>
          <Label for='sexo'>Sexo</Label>
          <AvInput type='select' id='sexo' name='sexo' required>
            <option value='1'>Masculino</option>
            <option value='2'>Femenino</option>
          </AvInput>
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <AvInput type='email' name='email' id='email' placeholder='john.doe@example.com' required />
          <FormText color='muted'>Puedes usar letras, numeros & caracteres especiales</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='telefono'>Teléfono</Label>
          <AvInput name='telefono' id='telefono' placeholder='(051) 947877540' required />
        </FormGroup>
        <FormGroup>
          <Label for='domicilio'>Domicilio</Label>
          <AvInput name='domicilio' id='domicilio' placeholder='Av. Perú 288 Lima' />
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Guardar paciente
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancelar
        </Button>
      </AvForm>
    </Sidebar>
  )
}

