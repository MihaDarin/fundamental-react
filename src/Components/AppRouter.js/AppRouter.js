import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { ErrorPage } from "../Pages/ErrorPage";
import { PostIdPage } from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};
