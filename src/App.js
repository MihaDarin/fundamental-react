import React, { useState } from "react";
import "./App.css";
import { PostForm } from "./Components/PostForm/PostForm";
// import { Post } from "./Components/Post/Post";
import { PostList } from "./Components/PostList/PostList";
// import { MyButton } from "./Components/UI/button/MyButton";
// import { MyInput } from "./Components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Kotlin", body: "Kotlin - язык программирования" },
  ]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <PostForm createPost={createNewPost} />
      <PostList removePost={removePost} posts={posts} title="  Список постов" />
    </div>
  );
}

export default App;
