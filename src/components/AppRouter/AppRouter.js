import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { About } from "../../Pages/About";
// import Posts from "../../Pages/Posts";
// import { Error } from "../../Pages/Error";
// import { PostIdPage } from "../../Pages/PostIdPage";
// import { HomePage } from "../../Pages/HomePage";
import { privateRoutes, publicRoutes } from "../../router/routes";
export const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return <Route path={route.path} element={<route.element />} />;
      })}
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route path={route.path} element={<route.element />} />;
      })}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
