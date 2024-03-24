import axios from 'axios'

axios.defaults.baseURL = "http://95.130.227.131:8080/api/v1/"
axios.defaults.headers.common.Authorization = "Bearer "

export default axios;