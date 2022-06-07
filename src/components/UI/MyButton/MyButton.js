import React from "react";
import style from "./MyButton.module.css";
export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={style.myBTN}>
      {children}
    </button>
  );
};
