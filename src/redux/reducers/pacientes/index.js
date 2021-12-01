// ** Initial State
const initialState = {
  pacientes: [],
  page: 1,
  limit: 20,
  query: "<>",
  totalElements: 0,
  totalPages: 0,
  loading: false,
  error: null
}

const PacientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PACIENTES":
      return {
        ...state,
        pacientes: action.pacientes,
        page: action.page,
        limit: action.limit,
        query: action.query,
        totalElements: action.totalElements,
        totalPages: action.totalPages
      }
    case "LOADING_PACIENTES":
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}

export default PacientesReducer
