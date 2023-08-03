import axios from "axios"

let token ;
export const baseURL = "http://localhost:8080/";

if(typeof window !== "undefined"){
token = window.localStorage .getItem("akkukaToken")
}

const api = axios.create({
    baseURL,
    headers : {authorization : token}
})

export default api ;
