import React from "react";
import style from "./Post.module.css";
export const Post = (props) => {
  return (
    <div className={style.post_wrapper}>
      <div>
        <strong>Заголовок</strong>
        <div>Текст</div>
      </div>
      <button>Удалить</button>
    </div>
  );
};
