import api, { Imageapi, axiosInstance } from "@/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

const useCreateBrand = ()=>{
  const createBrand = useMutation({
    mutationFn:async (data)=>{
      const res = await api.post('/brands',data)
      return res.data
    },
    onSuccess:(data)=>{
      toast('Brand added successfully')
    },
    onError:(data)=>{
      toast(error.message)
    }
  })
  return createBrand;
}

export default useCreateBrand;
