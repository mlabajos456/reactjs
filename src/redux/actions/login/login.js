import tokenService from "../../../services/tokenService"
export const getToken = (token, user) => {
  return (dispatch) => {
    dispatch({
      type: "GET_TOKEN",
      data: user
    })
    tokenService.setToken(token)
    tokenService.setUser(user)
  }
}
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "SALIR"
    })
    tokenService.removeUser()
    tokenService.removeToken()
  }
}
