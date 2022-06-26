import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/UseFetching";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);
  return (
    <div>
      <h1>Страница поста с ID: {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {post.id}. {post.title}{" "}
          </div>
          <div>{post.body} </div>
        </div>
      )}
    </div>
  );
};
