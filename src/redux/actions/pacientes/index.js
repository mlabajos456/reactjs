import API from "../../../api/api"

export const getAllPacientes = (pagina, limite, search) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_PACIENTES",
      loading: true
    })
    await API.get(
      "/tramite/api/v1/oficina/natural/page?limit=20&page=1&query=%3C%3E",
      {
        params: { page: pagina, limit: limite, query: search }
      }
    ).then((response) => {
      dispatch({
        type: "GET_PACIENTES",
        pacientes: response.data.content,
        page: pagina,
        limit: limite,
        query: search,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      })
      dispatch({
        type: "LOADING_PACIENTES",
        loading: false
      })
    })
  }
}
