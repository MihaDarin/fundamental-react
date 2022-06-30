import { About } from "../Pages/About";
import { Error } from "../Pages/Error";
import { HomePage } from "../Pages/HomePage";
import { Login } from "../Pages/Login";
import { PostIdPage } from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";

export const privateRoutes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostIdPage },
  { path: "/error", element: Error },
  { path: "/", element: HomePage },
];
export const publicRoutes = [{ path: "/login", element: Login }];
