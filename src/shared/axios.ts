import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };

class Http {
  instance: AxiosInstance
  constructor(baseURL:string){
    this.instance = axios.create({
      baseURL,
    })
  }
  get<T = unknown>(url: string, query?: Record<string,string|number>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method' >){
    return this.instance.request<T>({ url, method: 'GET', params: query, ...config })
  }
  post<T = unknown>(url: string, data?: Record<string,JSONValue>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method' >){
    return this.instance.request<T>({ url, method: 'POST', data, ...config })
  }
  patch<T = unknown>(url: string, data?: Record<string, JSONValue>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method' >){
    return this.instance.request<T>({ url, method: 'PATCH', data, ...config })
  }
  delete<T = unknown>(url: string, query?: Record<string,string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method' >){
    return this.instance.request<T>({ url, method: 'PATCH', params: query, ...config })
  }
}

const http = new Http('/api/v1')
http.instance.interceptors.request.use((config)=>{
  const jwt = localStorage.getItem('jwt')
  if(jwt) {
    config.headers!.Authorization = `Bearer ${jwt}`
  }
  return config
})
http.instance.interceptors.response.use((response)=>{
  return response
}, (error)=>{
  if(error.response){
    const axiosError = error as AxiosError
    if(axiosError.response?.status === 429){
      alert('你太频繁了')
    }
  }
  throw error
})

export default http