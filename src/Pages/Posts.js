// import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../App.css";
import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/UseFetching";
import { usePosts } from "../hooks/UsePosts";
import { PostFilter } from "../components/PostFilter/PostFilter";
import { PostForm } from "../components/PostForm/PostForm";
import { PostList } from "../components/PostList/PostList";
import { Loader } from "../components/UI/Loader/Loader";
import { MyButton } from "../components/UI/MyButton/MyButton";
import { MyModal } from "../components/UI/MyModal/MyModal";
import { Pagination } from "../components/UI/Pagination/Pagination";
import { getPagesCount } from "../utils/pages";
import { useObserver } from "../hooks/UseObserver";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );
  const lastElement = useRef();
  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        remove={removePost}
      />
      <div ref={lastElement} style={{ height: 20, background: "red " }} />
      {isPostsLoading && <Loader />}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
