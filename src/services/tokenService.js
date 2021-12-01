class TokenService {
  /*   getLocalRefreshToken() {
        const user = JSON.parse(localStorage.getItem("user"))
        return user?.refreshToken
    }

    getLocalAccessToken() {
        const user = JSON.parse(localStorage.getItem("user"))
        return user?.accessToken
    }

    updateLocalAccessToken(token) {
        let user = JSON.parse(localStorage.getItem("user"))
        user.accessToken = token
        localStorage.setItem("user", JSON.stringify(user))
    }
*/
  getUser() {
    return JSON.parse(localStorage.getItem("userData"))
  }

  setUser(user) {
    localStorage.setItem("userData", JSON.stringify(user))
  }

  setToken(token) {
    localStorage.setItem("token", JSON.stringify(token))
  }
  getToken() {
    return JSON.parse(localStorage.getItem("token"))
  }

  removeToken() {
    localStorage.removeItem("token")
  }

  removeUser() {
    localStorage.removeItem("userData")
  }
}

export default new TokenService()
