import React from "react";
import { useState } from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MyButton } from "../UI/MyButton/MyButton";
export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", content: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", content: "" });
  };
  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Post Title"
      />
      <MyInput
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        type="text"
        placeholder="Post Text"
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
};
