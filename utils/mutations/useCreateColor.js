const { default: api } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreateColor = ()=>{
  const createColor = useMutation({
    mutationFn:async (data)=>{
      await api.post('/color',data)
      return res.data
    },
    onSuccess:()=>{
      toast('Color updated succesfully')
    },
    onError:()=>{
      toast('Error occurred')
    }
  })
 return createColor
}
export default useCreateColor
