// ** Initial State
const initialState = {
    pacientes: [],
    data: [],
    totalPag: 1,
    params: {},
    editPaciente: null
}

const pacientesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PACIENTES':
            return {
                ...state,
                pacientes: action.data
            }
        case 'GET_DATA':
            return {
                ...state,
                data: action.data,
                totalPag: action.totalPages,
                params: action.params
            }
        case 'GET_USER':
            return { ...state, selectedUser: action.selectedUser }
        default:
            return { ...state }
    }
}
export default pacientesReducer
