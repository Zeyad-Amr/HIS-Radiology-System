export const loggedIn = () => {
    if(!localStorage.token){
      return false
    }
    return true
  }

export const logOut =  () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    }