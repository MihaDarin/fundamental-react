// import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { PostService } from "./components/API/PostService";
import { usePosts } from "./components/hooks/UsePosts";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";
import { Loader } from "./components/UI/Loader/Loader";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { MyModal } from "./components/UI/MyModal/MyModal";
// import { MyInput } from "./components/UI/MyInput/MyInput";
// import { MySelect } from "./components/UI/MySelect/MySelect";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }
  return (
    <div className="app_wrapper">
      <MyButton style={{ marginTop: "15px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов"
          remove={removePost}
        />
      )}
    </div>
  );
}

export default App;
