import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import { previewClient, blogPostsQuery, BlogPost, urlFor } from "@/lib/sanity";

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog - Arcnetic",
  description:
    "Latest insights, tutorials, and updates from the Arcnetic team on technology, development, and digital innovation.",
};

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await previewClient.fetch(blogPostsQuery);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto mt-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Insights, tutorials, and updates from our team. Stay updated with
              the latest trends in technology, development best practices, and
              digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
                No blog posts yet
              </h2>
              <p className="text-muted-foreground">
                We're working on some amazing content. Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`}>
                      <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 cursor-pointer">
                        {/* Featured Image */}
                        {post.mainImage && (
                          <div className="aspect-video overflow-hidden rounded-t-lg">
                            <Image
                              src={urlFor(post.mainImage)
                                .width(600)
                                .height(400)
                                .url()}
                              alt={post.mainImage.alt || post.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <CardHeader className="pb-2">
                          {/* Categories */}
                          {post.categories && post.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.categories.slice(0, 2).map((category) => (
                                <Badge
                                  key={category._id}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {category.title}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Title */}
                          <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 font-playfair">
                            {post.title}
                          </h2>
                        </CardHeader>

                        <CardContent className="pt-0">
                          {/* Excerpt */}
                          {post.excerpt && (
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}

                          {/* Meta Information */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                              {/* Author */}
                              <div className="flex items-center gap-2">
                                <User className="h-3 w-3" />
                                <span>{post.author.name}</span>
                              </div>

                              {/* Date */}
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-3 w-3" />
                                <span>{formatDate(post.publishedAt)}</span>
                              </div>
                            </div>

                            {/* Read More */}
                            <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all duration-300">
                              <span className="text-xs font-medium">
                                Read More
                              </span>
                              <ArrowRight className="h-3 w-3" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
