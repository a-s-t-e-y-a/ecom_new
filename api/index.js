import axios from "axios";
// import { getCookie } from "cookies-next"
// import { toast } from "react-toastify"

let token;
// export const baseURL = "http://localhost:5000/api/"
export const baseURL = "https://api.akkukachasma.com/api/"

export const Imageapi = axios.create({
  // withCredentials: true,
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    "Content-Type": "multipart/formdata",
  },
});

const api = axios.create({
  // withCredentials: true,
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    "Content-Type": "application/json",
  },
});

// export const showErrorMessage = (error) => {
//   const message = error?.response?.data?.message || error?.message || "Something went wrong";
//   toast.error(message);
// }

export default api;
