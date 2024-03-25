import axios from 'axios'

function useStateHook<T>(initialValue:T):[T,(newValue:T)=>void]{
  let state:T = initialValue
  let setState = (newValue:T)=>{
    state = newValue
    return state
  }
  return [state,setState]
}

const [token,setToken]= useStateHook<string>("")

const getToken = async () =>{
  const response = await axios.post('http://95.130.227.131:8080/api/v1/authority/sign-in',{
    username:"admin",
    password:"1"
  })
  if(response.status === 200){
    setToken(response.data.data.accessToken)
  }
}

getToken()
console.log(token);


axios.defaults.baseURL = "http://95.130.227.131:8080/api/v1/"
axios.defaults.headers.common.Authorization = "Bearer " + token

export default axios;