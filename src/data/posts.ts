import POST_01 from "../assets/posts/tests/post-1.md?raw"; // test post
import POST_02 from "../assets/posts/tests/post-2.md?raw"; // test post
import POST_03 from "../assets/posts/tests/post-3.md?raw"; // test post
import POST_04 from "../assets/posts/tests/post-4.md?raw"; // test post

export type Post = {
  date: Date;
  slug: string;
  title: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    date: new Date(2025, 0),
    slug: "post-01",
    title: "Post 01",
    content: POST_01,
  },
  {
    date: new Date(2025, 1),
    slug: "post-02",
    title: "Post 02",
    content: POST_02,
  },
  {
    date: new Date(2025, 2),
    slug: "post-03",
    title: "Post 03",
    content: POST_03,
  },
  {
    date: new Date(2025, 3),
    slug: "post-04",
    title: "Post 04",
    content: POST_04,
  },
];
