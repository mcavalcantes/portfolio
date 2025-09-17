import { type Post, POSTS } from "@/data/posts";

export function getPostBySlug(slug: string): Post | null {
  for (const post of POSTS) {
    if (post.slug === slug) {
      return post;
    }
  }

  return null;
}
