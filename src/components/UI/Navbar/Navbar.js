import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={style.navbar}>
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
      </div>
    </div>
  );
};
