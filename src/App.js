import React, { useMemo, useState } from "react";
import "./App.css";
import { PostFilter } from "./Components/PostFilter/PostFilter";
import { PostForm } from "./Components/PostForm/PostForm";
// import { Post } from "./Components/Post/Post";
import { PostList } from "./Components/PostList/PostList";
// import { MyInput } from "./Components/UI/input/MyInput";
// import { MySelect } from "./Components/UI/select/MySelect";
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
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm createPost={createNewPost} />
      <hr className="for_hr" />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="  Список постов"
      />
    </div>
  );
}

export default App;
