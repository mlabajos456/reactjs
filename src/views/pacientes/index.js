// ** User List Component
import TablePacientes from "./TablePacientes"

// ** Styles
import "@styles/react/apps/app-users.scss"

const PacientesList = () => {
  return (
    <div className="app-user-list">
      <TablePacientes />
    </div>
  )
}

export default PacientesList
