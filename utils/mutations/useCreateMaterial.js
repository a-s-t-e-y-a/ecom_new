const { default: api } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreateMaterial = ()=>{
  const createMaterial = useMutation({
    mutationFn:async (data)=>{
      await api.post('/material',data)
      return res.data
    },
    onSuccess:()=>{
      toast('Material created succesfully')
    },
    onError:()=>{
      toast('Error occurred')
    }
  })
 return createMaterial
}
export default useCreateMaterial
