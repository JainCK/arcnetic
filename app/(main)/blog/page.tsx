import { Metadata } from "next";
import { previewClient, paginatedBlogPostsQuery, totalPostsCountQuery, BlogPost } from "@/lib/sanity";
import { BlogListUI } from "@/components/blog/blog-list-ui";

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights | Arcnetic",
  description:
    "Explore the latest thinking on software engineering, digital strategy, case studies and future technologies from the Arcnetic team.",
};

async function getBlogData(): Promise<{ posts: BlogPost[]; total: number }> {
  try {
    const [posts, total] = await Promise.all([
      previewClient.fetch(paginatedBlogPostsQuery, { start: 0, end: 3 }),
      previewClient.fetch(totalPostsCountQuery),
    ]);
    return { posts, total };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { posts: [], total: 0 };
  }
}

export default async function BlogPage() {
  const { posts, total } = await getBlogData();

  return <BlogListUI initialPosts={posts} totalPosts={total} />;
}