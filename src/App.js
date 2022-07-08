import React, { useState } from "react";
import "./App.css";
// import { Post } from "./Components/Post/Post";
import { PostList } from "./Components/PostList/PostList";
import { MyButton } from "./Components/UI/button/MyButton";
import { MyInput } from "./Components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Kotlin", body: "Kotlin - язык программирования" },
  ]);

  const [title, setTitle] = useState("");

  const addNewPost = (e) => {
    e.preventDefaul();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок поста"
        ></MyInput>
        <MyInput type="text" placeholder="Описание поста"></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="  Список постов" />
    </div>
  );
}

export default App;
