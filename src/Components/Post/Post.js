import React from "react";
import { MyButton } from "../UI/button/MyButton";
import style from "./Post.module.css";
export const Post = (props) => {
  return (
    <div className={style.post}>
      <div className="post_content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => props.removePost(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};
