import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (user) => {
    setTimeout(() => {
      if (user.email === "johndoe@amail.com" && user.password === "12345") {
        setIsAuth(true);
      } else setIsAuth(false);
    }, 1000);
  };
  const logout = () => {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  };
  return [isAuth, login, logout];
};
export default useAuth;
