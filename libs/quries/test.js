import {useQuery} from "@tanstack/react-query"
import axios from "axios"

const useTest = ()=>{
    const test = useQuery({
        queryKey : ["test"] ,
        queryFn : async()=>{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            return res.data
        }
    })
    return test
}

export default useTest