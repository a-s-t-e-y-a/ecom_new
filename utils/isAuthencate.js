import Router from "next/router";
const Auth = () => {
  const auth = JSON.parse(localStorage.getItem("user_info"));
  if (!auth) {
    Router.push("/login");
  }
};

export default Auth;
