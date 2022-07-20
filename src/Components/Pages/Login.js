import React from "react";
import { MyButton } from "../UI/button/MyButton";
import { MyInput } from "../UI/input/MyInput";

export const Login = () => {
  return (
    <div>
      <h1>Страница логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
