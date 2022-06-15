import { useState } from "react";
import "./App.css";
import { usePosts } from "./components/hooks/UsePosts";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { MyModal } from "./components/UI/MyModal/MyModal";
// import { MyInput } from "./components/UI/MyInput/MyInput";
// import { MySelect } from "./components/UI/MySelect/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Первый", content: " c " },
    { id: 2, title: "Второй", content: "b" },
    { id: 3, title: "Третий", content: "a " },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

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
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        remove={removePost}
      />
    </div>
  );
}

export default App;
