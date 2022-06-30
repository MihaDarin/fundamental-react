import React from "react";
import { MyButton } from "../components/UI/MyButton/MyButton";
import { MyInput } from "../components/UI/MyInput/MyInput";

export const Login = () => {
  return (
    <div>
      <h1>Страница логина</h1>
      <form>
        <MyInput type="text" placeholder="Логин" />
        <MyInput type="password" placeholder="Пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
