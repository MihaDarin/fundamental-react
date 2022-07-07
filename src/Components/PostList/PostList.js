import React from "react";
import style from "./PostList.module.css";
import { Post } from "../Post/Post";
export const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 className={style.postList_title}>{title}</h1>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};
