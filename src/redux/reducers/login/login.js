// **  Initial State
const initialState = {
    usuario: {},
    loading: false,
    status_code: null,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.data

            }
        case 'GET_TOKEN':
            return {

                ...state,
                usuario: action.data

            }
        case 'SALIR':
            return { ...state, usuario: {} }
        case 'DELETE':
            return { ...state, tramites: newTramites }
        default:
            return state
    }
}


export default loginReducer
