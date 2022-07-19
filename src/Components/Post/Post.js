import React from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../UI/button/MyButton";
import style from "./Post.module.css";
export const Post = (props) => {
  const router = useNavigate();
  console.log(router);
  return (
    <div className={style.post}>
      <div className="post_content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={style.post_btns}>
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};
