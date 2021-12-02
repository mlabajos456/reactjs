import API from '../../../api/api'
import tokenService from '../../../services/tokenService'
export const getToken = (token, user) => {
    return dispatch => {
        dispatch({
            type: 'GET_TOKEN',
            data: user
        })
        tokenService.setToken(token)
        tokenService.setUser(user)
        /*   dispatch({
              type: 'LOADING',
              data: true
          })
  
          return axios.post(`http://localhost:8083/securytramite/api/auth`, {
              username: "44429462",
              password: "ANGEL123"
          }
  
          ).then(response => {
              dispatch({
                  type: 'GET_TOKEN',
                  data: response.data
              })
              tokenService.setToken(response.data.token)
              tokenService.setUser(response.data.user)
              dispatch({
                  type: 'LOADING',
                  data: false
              })
          }).catch(error => {
              console.log(error)
          }) */
    }
}

export const eliminarTramites = (idTramites) => {
    const sd = [1, 2, 3, 4, 5, 6, 7]

    return dispatch => {
        return API.get(`comments`,
            { params: { postId: 1 } }
        ).then(response => {

            dispatch({
                type: 'GET_TOKEN',
                data: response

            })
        }).catch(error => {
            console.log(error)
        })
    }


}