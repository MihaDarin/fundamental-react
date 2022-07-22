import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { MyButton } from "../button/MyButton";
import style from "./Navbar.module.css";
export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link className={style.link} to="/about">
          О приложении
        </Link>
        <Link className={style.link} to="/posts">
          Посты
        </Link>
        <Link className={style.link} to="/">
          Домашняя страница
        </Link>
      </div>
    </div>
  );
};
