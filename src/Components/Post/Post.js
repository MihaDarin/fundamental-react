import React from "react";
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
        <button>Удалить</button>
      </div>
    </div>
  );
};
