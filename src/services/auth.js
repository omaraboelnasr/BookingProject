
import axiosInstance from './../axiosConfig/instance';
export function Regist(email,password){
 return axiosInstance.post('/user/',{email,password})
}


