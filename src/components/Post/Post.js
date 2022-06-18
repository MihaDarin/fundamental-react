import React from "react";
import { MyButton } from "../UI/MyButton/MyButton";
import style from "./Post.module.css";
export const Post = (props) => {
  return (
    <div className={style.post_wrapper}>
      <div>
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
    </div>
  );
};
