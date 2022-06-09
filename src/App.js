import { useState } from "react";
import "./App.css";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First", content: "first Content " },
    { id: 2, title: "Second", content: "second Content" },
    { id: 3, title: "Third", content: "third Content" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="app_wrapper">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="List of Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}> "No posts"</h1>
      )}
    </div>
  );
}

export default App;
