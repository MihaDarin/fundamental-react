import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items ">
        <Link to="/about">О приложении</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};
