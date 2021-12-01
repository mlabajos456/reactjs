import { React, Fragment, useEffect, useState } from "react"
import { getAllPacientes } from "../../redux/actions/pacientes"
import { useSelector, useDispatch } from "react-redux"

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

// ** Third Party Components
import Select from "react-select"
import ReactPaginate from "react-paginate"
import { ChevronDown } from "react-feather"
import DataTable from "react-data-table-component"
import { selectThemeColors } from "@utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  Row,
  Col,
  Label,
  CustomInput,
  Button
} from "reactstrap"

// ** Table Header
const CustomHeader = ({
  toggleSidebar,
  handlePerPage,
  rowsPerPage,
  handleFilter,
  searchTerm
}) => {
  return (
    <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
      <Row>
        <Col xl="6" className="d-flex align-items-center p-0">
          <div className="d-flex align-items-center w-100">
            <Label for="rows-per-page">Show</Label>
            <CustomInput
              className="form-control mx-50"
              type="select"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: "5rem",
                padding: "0 0.8rem",
                backgroundPosition:
                  "calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </CustomInput>
            <Label for="rows-per-page">Entries</Label>
          </div>
        </Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
        >
          <div className="d-flex align-items-center mb-sm-0 mb-1 mr-1">
            <Label className="mb-0" for="search-invoice">
              Search:
            </Label>
            <Input
              id="search-invoice"
              className="ml-50 w-100"
              type="text"
              value={searchTerm}
              onChange={(e) => handleFilter(e.target.value)}
            />
          </div>
          <Button.Ripple color="primary" onClick={toggleSidebar}>
            Add New User
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const TablaPacientes = () => {
  const store = useSelector((state) => state.pacientes),
    dispatch = useDispatch()

  // ** States
  const [searchTerm, setSearchTerm] = useState("<>") //query

  const [currentPage, setCurrentPage] = useState(1) //page
  const [rowsPerPage, setRowsPerPage] = useState(10) //limit
  const [totalPages, setTotalPages] = useState(10) //totalPages

  //INICIALIZANDO LISTA DE PACIENTES
  useEffect(() => {
    dispatch(getAllPacientes())
  }, [dispatch])

  if (store.loading) {
    return (
      <Fragment>
        <h1>cargando</h1>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <CustomHeader></CustomHeader>
        {store.pacientes.map((pac) => {
          return <li key={pac.id}>{pac.nombre}</li>
        })}
      </Fragment>
    )
  }
}

export default TablaPacientes
