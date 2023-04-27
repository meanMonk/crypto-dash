import axios from 'axios'
import { API_URL } from '../utils/constant'

const AxiosInstance = axios.create({
  baseURL: API_URL,
})

AxiosInstance.interceptors.request.use((config) => {
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default AxiosInstance
