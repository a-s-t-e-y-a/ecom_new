const { default: api, Imageapi } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreateLensDeatils = ()=>{
  const createLensDeatils = useMutation({
    mutationFn:async (data)=>{
      await Imageapi.post('/lense',data)
      return res.data
    },
    onSuccess:()=>{
      toast('LensDeatils created succesfully')
    },
    onError:()=>{
      toast('Error occurred')
    }
  })
 return createLensDeatils
}
export default useCreateLensDeatils
