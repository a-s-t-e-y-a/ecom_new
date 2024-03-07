import { Imageapi, axiosInstance } from "@/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

const useCreateShape = ()=>{
  const createShape = useMutation({
    mutationFn:async (data)=>{
      const res = await Imageapi.post('/shape',data)
      return res.data
    },
    onSuccess:(data)=>{
      toast('Shape added successfully')
    },
    onError:(data)=>{
      toast(error.message)
    }
  })
  return createShape;
}

export default useCreateShape;
