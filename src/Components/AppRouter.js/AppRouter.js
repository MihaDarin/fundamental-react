import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/routes";
export const AppRouter = () => {
  const isAuth = false;
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
      <Route path="/*" element={<Navigate to="/" replace />} />;
    </Routes>
  );
};
