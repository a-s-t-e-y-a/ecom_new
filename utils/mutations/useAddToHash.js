import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import usePaymentSuccess from "./usePaymentSuccess";
import { useSelector } from "react-redux";

const useGetHash = () => {
  const {mutate:PaymentSuccess} = usePaymentSuccess()
  const address = useSelector((state)=>state?.Address?.adress);
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
        name: "Aviator Sunglasses",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/43995788?s=400&u=1a971d990957a4521d544eb9114e7224caf35d7b&v=4",
        order_id: data?.id,
        // callback_url: `http://localhost:4000/success`,
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
        handler: async (response)=>{
          PaymentSuccess({response, address})
        }
      };
      document.body.appendChild(razorScript)
      razorScript.addEventListener('load', ()=>{
        alert("script loaded successfully");
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", response => {
        });
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
