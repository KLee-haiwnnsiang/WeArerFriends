import axios from "axios";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

const router = useRouter()
let baseURL = ''
if (process.env.NODE_ENV == 'development') {
  baseURL = 'https://192.168.255.101'
}
const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = {
      Authorization: token
    }
  }
  return config
})
instance.interceptors.response.use((res: AxiosResponse) => {
  return res
}, (err) => {
  console.log('request err', err)
  if (err.response.stutas) {
    switch (err.response.stutas) {
      case 401:
        ElMessage.error('token失效')
        router.push('/login').then(r => r)
        break
      case 502:
        ElMessage.error('服务器内部错误')
        break
    }
  }
  return Promise.reject(err)
})

export default instance
