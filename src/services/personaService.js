import API from '../api/api'
export const getPacientes = async (limite, pagina, search) => {
    const log = await API.get(`tramite/api/v1/oficina/natural-page`, {
        params: {
            limit: limite,
            page: pagina,
            query: search
        }
    })
    return log
}