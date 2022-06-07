import React from "react";
// import style from "./Post.module.css";
import { Post } from "../Post/Post";
export const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 className="head">{title}</h1>
      {posts.map((post, index) => {
        return <Post number={index + 1} post={post} key={post.id} />;
      })}
    </div>
  );
};
