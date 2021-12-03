// ** Custom Components
import Sidebar from "@components/sidebar"

// ** Third Party Components
import { Button, FormGroup, Label, FormText } from "reactstrap"
import { AvForm, AvInput } from "availity-reactstrap-validation-safe"
import React, { useState } from "react"
import "@styles/react/libs/flatpickr/flatpickr.scss"
import Flatpickr from "react-flatpickr"

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const [data, setData] = useState({
    idNatural: 0,
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    direccion: "",
    sigla: ""
  })

  const [picker, setPicker] = useState(new Date())
  const [dueDatepicker, setDueDatePicker] = useState(new Date())

  // ** Function to handle form submit
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      console.log(event)
    }
    event.preventDefault()
  }

  return (
    <Sidebar
      size="lg"
      open={open}
      title="New User"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <Label for="nombre">Nombre y apellidos</Label>
          <AvInput
            name="nombre"
            id="nombre"
            placeholder="Michael Labajos"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="sigla">Siglas</Label>
          <AvInput name="sigla" id="sigla" placeholder="-2021-MLD" required />
        </FormGroup>
        <FormGroup>
          <Label for="dni">DNI</Label>
          <AvInput name="dni" id="dni" placeholder="72887473" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <AvInput
            type="email"
            name="email"
            id="email"
            placeholder="mlabajos@regionsanmartin.gob.pe"
            required
          />
          <FormText color="muted">
            You can use letters, numbers & periods
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="direccion">Direccion</Label>
          <AvInput
            name="direccion"
            id="direccion"
            placeholder="72887473"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="telefono">Teléfono</Label>
          <AvInput
            name="telefono"
            id="telefono"
            placeholder="(397) 294-5153"
            required
          />
        </FormGroup>

        <Label for="telefono">Fecha de nacimiento</Label>
        <Flatpickr
          value={picker}
          onChange={(date) => setPicker(date)}
          className="form-control invoice-edit-input date-picker"
        />

        <FormGroup>
          <Label for="user-role">User Role</Label>
          <AvInput type="select" id="user-role" name="user-role" required>
            <option value="subscriber">Subscriber</option>
            <option value="editor">Editor</option>
            <option value="maintainer">Maintainer</option>
            <option value="author">Author</option>
            <option value="admin">Admin</option>
          </AvInput>
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="select-plan">Select Plan</Label>
          <AvInput type="select" id="select-plan" name="select-plan" required>
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
            <option value="company">Company</option>
            <option value="team">Team</option>
          </AvInput>
        </FormGroup>
        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
