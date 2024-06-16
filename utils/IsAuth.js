export function IsAuth(data) {
  const Auth = JSON.parse(localStorage.getItem(data));
  if (Auth) {
    return true;
  }
  return false;
}

export const checkAndLogoutAfter24Hours = () => {
  const loginTime = localStorage.getItem('loginTime');
  if (loginTime) {
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const currentTime = Date.now();
    if (currentTime - loginTime > twentyFourHours) {
      // Clear localStorage and logout
      localStorage.clear();
      return true; // User is logged out
    }
  }
  return false; // User is not logged out
};

export const loginTime = () => {
  return localStorage.setItem('loginTime', Date.now());
}

export function isUserLoggedIn(){
  const UserAuth = localStorage.getItem("user_info")
  if (UserAuth) {
    return true;
  }
  return false;
}