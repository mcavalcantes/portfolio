import { Home } from "../pages/home";
import { Blog } from "../pages/blog";
import { BlogPost } from "../pages/blog-post";

export const ROUTES: {
  path: string;
  element: React.JSX.Element;
}[] = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPost /> },
];
