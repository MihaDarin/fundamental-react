import React, { useEffect, useState } from "react";
import PostService from "../../API/PostService";
// import "../../App.css";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { PostFilter } from "../PostFilter/PostFilter";
import { PostForm } from "../PostForm/PostForm";
import { PostList } from "../PostList/PostList";
import { MyButton } from "../UI/button/MyButton";
import { MyModal } from "../UI/MyModal/MyModal";
import { Pagination } from "../UI/pagination/Pagination";
import { getPagesCount } from "../../utils/pages";

function Posts() {
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
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
