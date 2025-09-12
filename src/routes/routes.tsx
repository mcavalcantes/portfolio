import { Home } from "../pages/home";
import { Blog } from "../pages/blog";

export const ROUTES: {
  path: string;
  element: React.JSX.Element;
}[] = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
];
