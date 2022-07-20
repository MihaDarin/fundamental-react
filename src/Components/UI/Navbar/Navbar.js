import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className="navbar">
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
