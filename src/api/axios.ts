import axios from "axios"
import { showLoader, hideLoader } from "../context/loadingStore"

const api = axios.create({
  baseURL: "http://localhost:4000",
})

api.interceptors.request.use((config) => {
  showLoader()

  const token = localStorage.getItem("accessToken")
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    hideLoader()
    return response
  },
  (error) => {
    hideLoader()
    return Promise.reject(error)
  }
)

export default api
