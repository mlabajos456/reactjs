// ** Initial State
const initialState = {
  pacientes: [],
  page: 1,
  limit: 20,
  query: "<>",
  totalElements: 0,
  totalPages: 0,
  loading: false,
  error: null,
  selectUser: null
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
    case "GET_PACIENTE_ID":
      let userSelect
      // ** find & update object
      state.pacientes.find((item) => {
        if (item.idNatural === action.id) {
          userSelect = item
        }
      })
      console.info("soy el paciente seleccionado causita ctm", userSelect)

      // ** Get index to add or remove bookmark from array
      /*  const bookmarkIndex = state.bookmarks.findIndex(x => x.id === action.id)

      if (bookmarkIndex === -1) {
        state.bookmarks.push(objectToUpdate)
      } else {
        state.bookmarks.splice(bookmarkIndex, 1)
      } */

      return {
        ...state,
        selectUser: userSelect
      }
    default:
      return state
  }
}

export default PacientesReducer
