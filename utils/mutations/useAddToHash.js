import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetHash = () => {
  const mutate = useMutation({
    mutationKey: ["/getHash"],
    mutationFn: async (data) => {
      const res = await api.post("/payment/hash", data);
      return res.data?.order;
    },
    onSuccess: (data) => {
      
      let razorScript = document.createElement("script");
      razorScript.setAttribute("type", "text/javascript");
      razorScript.setAttribute("src", "https://checkout.razorpay.com/v1/checkout.js");
      razorScript.setAttribute("async", true);

      const options = {
        key:"rzp_test_BsvG3tVFWhJRmR",
        amount: data?.amount,
        currency: data?.currency,
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: data?.id,
        callback_url: `${api}/payment/success`,
        prefill: {
          name: "Shashi Ross",
          email: "shashi.ross@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      document.body.appendChild(razorScript)
      razorScript.addEventListener('load', ()=>{
        alert("script loaded successfully");
        const rzp = new window.Razorpay(options);
        rzp.open();
      })
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useGetHash;
