import { About } from "../Components/Pages/About";
import { ErrorPage } from "../Components/Pages/ErrorPage";
import { HomePage } from "../Components/Pages/HomePage";
import { Login } from "../Components/Pages/Login";
import { PostIdPage } from "../Components/Pages/PostIdPage";
import Posts from "../Components/Pages/Posts";
export const privateRoutes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostIdPage },
  { path: "/error", element: ErrorPage },
  { path: "/", element: HomePage },
];

export const publicRoutes = [{ path: "/", element: Login }];
