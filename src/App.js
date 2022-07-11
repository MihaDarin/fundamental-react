import React, { useState } from "react";
import "./App.css";
import { PostForm } from "./Components/PostForm/PostForm";
// import { Post } from "./Components/Post/Post";
import { PostList } from "./Components/PostList/PostList";
import { MyInput } from "./Components/UI/input/MyInput";
import { MySelect } from "./Components/UI/select/MySelect";
// import { MyButton } from "./Components/UI/button/MyButton";
// import { MyInput } from "./Components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "интерфейсный программирования",
    },
    { id: 2, title: "Python", body: "серверный программирования" },
    {
      id: 3,
      title: "Kotlin",
      body: " я не знаю этот язык программирования",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const getSortedPosts = () => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  };
  const sortedPosts = getSortedPosts();

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div className="App">
      <PostForm createPost={createNewPost} />
      <hr className="for_hr" />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      {posts.length ? (
        <PostList
          removePost={removePost}
          posts={sortedPosts}
          title="  Список постов"
        />
      ) : (
        <h1 className="no_posts">Постов нет</h1>
      )}
    </div>
  );
}

export default App;
