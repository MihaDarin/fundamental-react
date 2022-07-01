import React, { useContext } from "react";
import { MyButton } from "../components/UI/MyButton/MyButton";
import { MyInput } from "../components/UI/MyInput/MyInput";
import { AuthContext } from "../context/Context";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Логин" />
        <MyInput type="password" placeholder="Пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
