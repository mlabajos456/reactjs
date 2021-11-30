import axios from "axios"
import TokenService from "../services/tokenService"

const instance = axios.create({
  baseURL: "http://localhost:8087/",
  headers: {
    "Content-Type": "application/json"
  }
})

instance.interceptors.request.use(
  (config) => {
    console.log(config)
    const token = TokenService.getToken()

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
          //  config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    /* const originalConfig = err.config;

    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err); */
  }
)

export default instance