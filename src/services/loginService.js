import axios from 'axios'
export const getLogin = async (usuario, password) => {

    const log = await axios.post(`http://localhost:8083/securytramite/api/auth`, {
        username: "44429462",
        password: "ANGEL123"
    })
    return log
    /*   .then(response => {
            dispatch({
                type: 'GET_TOKEN',
                data: response.data
            })
            tokenService.setToken(response.data.token)
            tokenService.setUser(response.data.user)
          return response
              dispatch({
                 type: 'LOADING',
                 data: false
             }) 
      }).catch(error => {
          return error
      }) */
}