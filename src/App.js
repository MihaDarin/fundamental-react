import { useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList/PostList";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { MyInput } from "./components/UI/MyInput/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First", content: "first Content " },
    { id: 2, title: "Second", content: "second Content" },
    { id: 3, title: "Third", content: "third Content" },
  ]);
  const [post, setPost] = useState({ title: "", content: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", content: "" });
  };

  return (
    <div className="app_wrapper">
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
      <PostList posts={posts} title="List of Posts" />
    </div>
  );
}

export default App;
