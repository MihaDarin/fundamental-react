// import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { PostService } from "./components/API/PostService";
import { useFetching } from "./components/hooks/UseFetching";
import { usePosts } from "./components/hooks/UsePosts";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";
import { Loader } from "./components/UI/Loader/Loader";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { getPagesArray, getPagesCount } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов"
          remove={removePost}
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => {
          return (
            <span
              onClick={() => setPage(p)}
              key={p}
              className={page === p ? "page page__current" : "page"}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
