import React, { useState } from "react";
import "./App.css";
import { Post } from "./Components/Post/Post";
import { PostList } from "./Components/PostList/PostList";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Kotlin", body: "Kotlin - язык программирования" },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title="  Список постов" />
    </div>
  );
}

export default App;
