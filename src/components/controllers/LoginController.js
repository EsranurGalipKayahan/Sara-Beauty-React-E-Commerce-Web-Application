import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../../pages/Login";
import Logout from "../Logout";

const LoginController = ({ login, isAuth, logout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = isAuth;
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const loginHandler = (e) => {
    e.preventDefault();
    login({ email, password });
    setTimeout(() => {
      if (location?.state?.navigated)
        navigate(location?.state?.from?.pathname, { auth });
    }, 1000);
  };
  return auth ? (
    <Logout logout={logout} />
  ) : (
    <Login
      loginHandler={loginHandler}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};
export default LoginController;
