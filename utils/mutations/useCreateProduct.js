const { default: api, Imageapi } = require("@/api")
import { useMutation } from "@tanstack/react-query"
const { toast } = require("react-toastify")

const useCreateProduct = () => {
  const createPowerType = useMutation({
    mutationFn: async (data) => {
      await Imageapi.post('/products', data)
      return res.data
    },
    onSuccess: () => {
      toast('PowerType created succesfully')
    },
    onError: () => {
      toast('Error occurred')
    }
  })
  return createPowerType
}
export default useCreateProduct
