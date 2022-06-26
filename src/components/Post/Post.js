import React from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../UI/MyButton/MyButton";
import style from "./Post.module.css";

export const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className={style.post_wrapper}>
      <div>
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={style.post__btns}>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
