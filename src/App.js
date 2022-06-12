import { useMemo, useState } from "react";
import "./App.css";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";
// import { MyInput } from "./components/UI/MyInput/MyInput";
// import { MySelect } from "./components/UI/MySelect/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Первый", content: " c " },
    { id: 2, title: "Второй", content: "b" },
    { id: 3, title: "Третий", content: "a " },
  ]);

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
  }, [sortedPosts, filter.query]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="app_wrapper">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
    </div>
  );
}

export default App;
