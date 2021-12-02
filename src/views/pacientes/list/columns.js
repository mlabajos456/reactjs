// ** React Imports
import { Link } from "react-router-dom"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Store & Actions
/* import { getUser } from '../store/action' */
import { getPacienteById } from "@store/actions/pacientes"
import { store } from "@store/storeConfig/store"

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import {
  Slack,
  User,
  Settings,
  Database,
  Edit,
  MoreVertical,
  FileText,
  Trash2,
  Archive
} from "react-feather"

// ** Renders Client Columns
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      "light-success",
      "light-danger",
      "light-warning",
      "light-info",
      "light-primary",
      "light-secondary"
    ],
    color = states[stateNum]

  if (row.idNatural) {
    return (
      <Avatar
        className="mr-1"
        img="/static/media/7.0fc55608.png"
        width="32"
        height="32"
      />
    )
  } else {
    return (
      <Avatar
        color={color || "primary"}
        className="mr-1"
        content={row.nombre || "Sin nombre"}
        initials
      />
    )
  }
}

// ** Renders Role Columns
const renderRole = (row) => {
  const roleObj = {
    subscriber: {
      class: "text-primary",
      icon: User
    },
    maintainer: {
      class: "text-success",
      icon: Database
    },
    editor: {
      class: "text-info",
      icon: Edit
    },
    author: {
      class: "text-warning",
      icon: Settings
    },
    admin: {
      class: "text-danger",
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit

  return (
    <span className="text-truncate text-capitalize align-middle">
      <Icon
        size={18}
        className={`${roleObj[row.role] ? roleObj[row.role].class : ""} mr-50`}
      />
      {row.nombre}
    </span>
  )
}

const statusObj = {
  pending: "light-warning",
  active: "light-success",
  inactive: "light-secondary"
}

export const columns = [
  {
    name: "Nombre y Apellidos",
    minWidth: "400px",
    selector: "nombre",
    sortable: true,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        {renderClient(row)}
        <div className="d-flex flex-column">
          <Link
            to={`/apps/user/view/${row.id}`}
            className="user-name text-truncate mb-0"
            /*  onClick={() => store.dispatch(getUser(row.id))} */
          >
            <span className="font-weight-bold">{row.nombre}</span>
          </Link>
          <small className="text-truncate text-muted mb-0">{row.sigla}</small>
        </div>
      </div>
    )
  },
  {
    name: "DNI",
    minWidth: "172px",
    selector: "dni",
    sortable: true,
    cell: (row) => <span className="text-capitalize">{row.dni}</span>
  },
  {
    name: "Email",
    minWidth: "320px",
    selector: "email",
    sortable: false,
    cell: (row) => row.email
  },
  {
    name: "Telefono",
    minWidth: "138px",
    selector: "email",
    sortable: false,
    cell: (row) => row.telefono
  },
  {
    name: "Dirección",
    minWidth: "400px",
    selector: "direccion",
    sortable: false,
    cell: (row) => row.direccion
  },
  /* {
    name: "Role",
    minWidth: "172px",
    selector: "role",
    sortable: true,
    cell: (row) => renderRole(row)
  }, */

  /* {
    name: "Status",
    minWidth: "138px",
    selector: "status",
    sortable: true,
    cell: (row) => (
      <Badge className="text-capitalize" color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  }, */
  {
    name: "Acciones",
    minWidth: "100px",
    selector: "nombre",
    sortable: true,
    cell: (row) => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row.idNatural}`}
            className="w-100"
            onClick={() => store.dispatch(getPacienteById(row.idNatural))}
          >
            <FileText size={14} className="mr-50" />
            <span className="align-middle">Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/edit/${row.id}`}
            className="w-100"
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <Archive size={14} className="mr-50" />
            <span className="align-middle">Edit</span>
          </DropdownItem>
          <DropdownItem className="w-100">
            <Trash2 size={14} className="mr-50" />
            <span className="align-middle">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
