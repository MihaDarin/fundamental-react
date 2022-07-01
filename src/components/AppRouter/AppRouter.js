import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { privateRoutes, publicRoutes } from "../../router/routes";
import { Loader } from "../UI/Loader/Loader";
export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        );
      })}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        );
      })}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
