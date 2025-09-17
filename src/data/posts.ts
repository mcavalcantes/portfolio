import POST_TESTE from "../assets/posts/teste.md?raw";
import POST_BLOG from "../assets/posts/blog.md?raw";

export type Post = {
  date: Date;
  slug: string;
  title: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    date: new Date(2025, 8),
    slug: "blog",
    title: "Como implementei esse blog sem usar back-end",
    content: POST_BLOG,
  },
  {
    date: new Date(2025, 8),
    slug: "teste",
    title: "Teste",
    content: POST_TESTE,
  },
];
