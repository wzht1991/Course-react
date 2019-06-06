import axios from 'axios';
import {BASE_URL} from '../utils/utils';
export function LoginAPI (email,password,status){
    return axios.post(`${BASE_URL}${status}/login`,{
        "email":`${email}`,
        "password":`${password}`
    }).then(response=>{
        const firstname=response.data.data.fistname;
        const lastname=response.data.data.lastname;
        return {
            firstname:`${firstname}`,
            lastname:`${lastname}`
        }
    }).catch(error=>{
        // error 是打印不出来的 一定要error.response 才有用
        alert(error.response.data.error);
    })
}