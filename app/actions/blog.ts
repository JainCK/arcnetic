"use server";

import { previewClient, paginatedBlogPostsQuery, BlogPost } from "@/lib/sanity";

export async function loadMorePosts(start: number, end: number): Promise<BlogPost[]> {
  const posts = await previewClient.fetch<BlogPost[]>(paginatedBlogPostsQuery, {
    start,
    end,
  });
  return posts;
}
