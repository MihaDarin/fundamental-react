import React from "react";
import style from "./MyInput.module.css";
export const MyInput = (props) => {
  return <input className={style.myInput} {...props} />;
};
