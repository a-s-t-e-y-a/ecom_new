import { loginTime } from "@/utils/IsAuth";
import useAdminLogin from "@/utils/mutations/useCreateAdmin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const router = useRouter();
  useEffect(() => {
    // Check if the admin_info object is present in localStorage
    const adminInfo = window.localStorage.getItem("admin_info");
    if (adminInfo) {
      // Redirect to the admin dashboard
      router.push("dashboard");
    }
  }, []);
  const MoveSingupHandler = () => {
    router.push("registeredUsers");
  };
  const { mutate, isSuccess, data } = useAdminLogin();
  const { register, handleSubmit } = useForm();

  const loginHandler = (formData) => {
    const payload = {
      email: formData.username,
      password: formData.password,
    };
    mutate(payload);
  };

  if (isSuccess) {
    console.log(data.data.token)
    
    window.localStorage.setItem("admin_info", JSON.stringify( data.data.token ));
    // Redirect to dashboard or perform any other necessary actions
    router.push("dashboard");
  }

  return (
    <div className="w-[100vw] h-[100vh]">
      <form
        className="w-[40%] h-[40%] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        onSubmit={handleSubmit(loginHandler)}
      >
        <h1 className="text-2xl my-2 text-center font-bold">Login</h1>
        <div className="w-72 mx-auto my-5">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              {...register("username", { required: true })}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Username
            </label>
          </div>
        </div>
        <div className="w-72 mx-auto my-5">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              type="password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              {...register("password", { required: true })}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Password
            </label>
          </div>
        </div>
        <button
          className="w-72 relative left-[50%] translate-x-[-50%] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          Login
        </button>
        <br></br>
        <button
          className="select-none relative left-[50%] translate-x-[-50%] my-5 w-72 rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => MoveSingupHandler()}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
