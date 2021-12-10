import API from "../../../api/api"

export const getAllPaciente = (pagina, limite, search) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_PACIENTES",
      loading: true
    })
    await API.get("/tramite/api/v1/oficina/natural/page", {
      params: { page: pagina, limit: limite, query: search }
    })
      .then((response) => {
        dispatch({
          type: "GET_PACIENTES",
          pacientes: response.data.content,
          page: pagina,
          limit: limite,
          query: search,
          totalElements: response.data.totalElements,
          totalPages: response.data.totalPages
        })
        dispatch({
          type: "LOADING_PACIENTES",
          loading: false
        })
      })
      .catch((error) => {
        dispatch({ type: "ERROR", failed: error })
      })
  }
}
export const getPacienteById = (idPaciente) => {
  return (dispatch) => {
    dispatch({
      type: "GET_PACIENTE_ID",
      id: idPaciente
    })
  }
}

export const insertPaciente = (formPaciente) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_PACIENTES",
      loading: true
    })
    await API.get("/tramite/api/v1/oficina/natural/page", {
      params: { page: pagina, limit: limite, query: search }
    })
      .then((response) => {
        dispatch({
          type: "GET_PACIENTES",
          pacientes: response.data.content,
          page: pagina,
          limit: limite,
          query: search,
          totalElements: response.data.totalElements,
          totalPages: response.data.totalPages
        })
        dispatch({
          type: "LOADING_PACIENTES",
          loading: false
        })
      })
      .catch((error) => {
        dispatch({ type: "ERROR", failed: error })
      })
  }
}
