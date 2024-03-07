const { default: api, Imageapi } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreatePowerType = ()=>{
  const createPowerType = useMutation({
    mutationFn:async (data)=>{
      await Imageapi.post('/power-type',data)
      return res.data
    },
    onSuccess:()=>{
      toast('PowerType created succesfully')
    },
    onError:()=>{
      toast('Error occurred')
    }
  })
 return createPowerType
}
export default useCreatePowerType
