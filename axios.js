import axios from 'axios'
import store from './Redux/store'

const instance = axios.create(
{
    baseURL: "https://dashboard.spatulagroup.com/api/",
   
}
);

instance.interceptors.request.use(request => {
    request.headers.api_token = store.getState().auth.auth.token;
    return request
  })
  
  instance.interceptors.response.use(response => {
    return response
  })

export default instance;