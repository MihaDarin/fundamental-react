import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import "./App.css";
import { usePosts } from "./Components/hooks/usePosts";
import { PostFilter } from "./Components/PostFilter/PostFilter";
import { PostForm } from "./Components/PostForm/PostForm";
import { PostList } from "./Components/PostList/PostList";
import { MyButton } from "./Components/UI/button/MyButton";
import { MyModal } from "./Components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([]);
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Добавить пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createNewPost} />{" "}
      </MyModal>
      <hr className="for_hr" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <h1>Идёт загрузка</h1>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="  Список постов"
        />
      )}
    </div>
  );
}

export default App;
