import { Imageapi, axiosInstance } from "@/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

const useCreateCategories = ()=>{
  const createCategories = useMutation({
    mutationFn:async (data)=>{
      const res = await Imageapi.post('/categories',data)
      return res.data
    },
    onSuccess:(data)=>{
      toast('Categories added successfully')
    },
    onError:(data)=>{
      toast(error.message)
    }
  })
  return createCategories;
}

export default useCreateCategories;
