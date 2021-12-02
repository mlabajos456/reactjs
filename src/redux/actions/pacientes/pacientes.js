import API from '@api/api'

export const getPacientes = (limite, pagina, search) => {
    return async dispatch => {
        await API.get(`tramite/api/v1/oficina/natural-page`, {
            params: {
                limit: limite,
                page: pagina,
                query: search
            }
        }).then(response => {
            dispatch({
                type: 'GET_ALL_PACIENTES',
                data: response.content
            })
        })
    }
}