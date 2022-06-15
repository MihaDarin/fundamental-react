import React from "react";
// import style from "./Post.module.css";
import { Post } from "../Post/Post";
export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Постов нет</h1>;
  }
  return (
    <div>
      <h1 className="head">{title}</h1>
      {posts.map((post, index) => {
        return (
          <Post remove={remove} number={index + 1} post={post} key={post.id} />
        );
      })}
    </div>
  );
};
