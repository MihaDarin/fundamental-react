import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import { useFetching } from "../hooks/useFetching";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, commentError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentByPostId(id);
      setComments(response.data);
    }
  );
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Страница поста c ID {params.id}</h1>
      {isLoading ? (
        <h1>Идёт загрузка</h1>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isCommentsLoading ? (
        <h1>Идёт загрузка</h1>
      ) : (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id} style={{ marginTop: 15 }}>
                <h5>{comment.email}</h5>
                <div>{comment.body} </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
