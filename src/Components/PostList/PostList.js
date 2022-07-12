import React from "react";
import style from "./PostList.module.css";
import { Post } from "../Post/Post";
export const PostList = ({ posts, title, removePost }) => {
  if (!posts.lenght) {
    return <h1 className="no_posts">Постов нет</h1>;
  }
  return (
    <div>
      <h1 className={style.postList_title}>{title}</h1>
      {posts.map((post, index) => {
        return (
          <Post
            removePost={removePost}
            number={index + 1}
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  );
};
