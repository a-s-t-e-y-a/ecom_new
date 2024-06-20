import { customLocalStorage } from "@/utils/Helpers";
import axios from "axios";
// import { getCookie } from "cookies-next"
// import { toast } from "react-toastify"

// export const baseURL = "http://localhost:5000/api/"
export const baseURL = "https://api.akkukachasma.com/api/"
const token = customLocalStorage.getItem("user_info")

export const Imageapi = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    Authorization: `${token}`,
    "Content-Type": "multipart/formdata",
  },
});

const api = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    Authorization: `${token}`,
    "Content-Type": "application/json",
  },
});

export default api;
