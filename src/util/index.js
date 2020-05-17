export const login = () => {
  localStorage.setItem("app-token", 'oi');
}



export const  autenticado = () => {
  if (localStorage.getItem("app-token")) {
      return true;
  }

  return false;
}