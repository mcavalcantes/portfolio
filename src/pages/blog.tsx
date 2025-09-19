import { POSTS } from "@/data";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Link } from "react-router";
import { formatDateShort } from "@/lib/formatDateShort";

export function Blog() {
  return (
    <div className="flex min-h-screen flex-col bg-(--gray-9) text-(--gray-0) dark:bg-(--gray-0) dark:text-(--gray-9)">
      <Header />
      <div className="flex flex-col gap-8 px-4 md:px-32 xl:px-96">
        <div>
          <h1 className="py-4 text-3xl font-semibold">Blog</h1>
        </div>
        <ul className="flex flex-col gap-8">
          {POSTS.map((post, index) => (
            <li key={index}>
              <div className="flex flex-col gap-4 rounded-xl border border-(--gray-5) p-6 dark:border-(--gray-4)">
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <div>{formatDateShort(post.date)}</div>
                </div>
                <div className="prose prose-neutral dark:prose-invert line-clamp-5 max-w-none md:line-clamp-4 xl:line-clamp-3">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {post.content.slice(0, 300) + "..."}
                  </Markdown>
                </div>
                <div className="flex justify-end">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-semibold text-(--gray-4) underline decoration-dotted decoration-2 dark:text-(--gray-5)"
                  >
                    Continuar lendo
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
