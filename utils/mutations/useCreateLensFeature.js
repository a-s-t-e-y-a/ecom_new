const { default: api, Imageapi } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreateLenseFeature = ()=>{
  const createLenseFeature = useMutation({
    mutationFn:async (data)=>{
      await Imageapi.post('/lense-feature',data)
      return res.data
    },
    onSuccess:()=>{
      toast('LenseFeature created succesfully')
    },
    onError:()=>{
      toast('Error occurred')
    }
  })
 return createLenseFeature
}
export default useCreateLenseFeature
