import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import "./App.css";
import { useFetching } from "./Components/hooks/useFetching";
import { usePosts } from "./Components/hooks/usePosts";
import { PostFilter } from "./Components/PostFilter/PostFilter";
import { PostForm } from "./Components/PostForm/PostForm";
import { PostList } from "./Components/PostList/PostList";
import { MyButton } from "./Components/UI/button/MyButton";
import { MyModal } from "./Components/UI/MyModal/MyModal";
import { getPagesArray, getPagesCount } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const pagesArray = getPagesArray(totalPages);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <h1>Идёт загрузка</h1>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="  Список постов"
        />
      )}
      <div className="pages__btns">
        {pagesArray.map((p) => {
          return (
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? "page page__current " : "page"}
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
