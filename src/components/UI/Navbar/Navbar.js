import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import { MyButton } from "../MyButton/MyButton";
import style from "./Navbar.module.css";
export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={style.navbar}>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className={style.navbar__items}>
        <Link className={style.navbar__item} to="/about">
          О приложении
        </Link>
        <Link className={style.navbar__item} to="/posts">
          Посты
        </Link>
        <Link className={style.navbar__item} to="/">
          Домашняя страница
        </Link>
        <Link className={style.navbar__item} to="/login">
          Войти/Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
