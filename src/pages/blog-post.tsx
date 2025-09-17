import { useParams } from "react-router";
import Markdown from "react-markdown";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { formatDateShort } from "@/lib/formatDateShort";
import { getPostBySlug } from "@/lib/getPostBySlug";

export function BlogPost() {
  const { slug } = useParams();

  if (!slug) {
    throw new Error("Error: `slug` identifier was not provided.");
  }

  const post = getPostBySlug(slug);

  if (!post) {
    throw new Error(`Error: \`${slug}\` identifier does not match any post.`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-(--gray-9) text-(--gray-0) dark:bg-(--gray-0) dark:text-(--gray-9)">
      <Header />
      <div className="flex flex-col gap-8 px-4 md:px-32 xl:px-96">
        <div className="flex flex-col">
          <h1 className="py-4 text-3xl font-semibold">{post.title}</h1>
          <div>{formatDateShort(post.date)}</div>
        </div>
        <div className="prose xl:prose-lg prose-neutral dark:prose-invert">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}
