export function IsAuth(data) {
  const Auth = JSON.parse(localStorage.getItem(data));
  if (Auth) {
    return true;
  }
  return false;
}
