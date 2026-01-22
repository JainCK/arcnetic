import { Metadata } from "next";
import { previewClient, blogPostsQuery, BlogPost } from "@/lib/sanity";
import { BlogListUI } from "@/components/blog/blog-list-ui";

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights | Arcnetic",
  description:
    "Explore the latest thinking on software engineering, digital strategy, case studies and future technologies from the Arcnetic team.",
};

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await previewClient.fetch(blogPostsQuery);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogListUI posts={posts} />;
}