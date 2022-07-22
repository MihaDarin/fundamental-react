import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { privateRoutes, publicRoutes } from "../../router/routes";
export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <div></div>;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        );
      })}
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        );
      })}
      <Route path="/*" element={<Navigate to="/" replace />} />;
    </Routes>
  );
};
