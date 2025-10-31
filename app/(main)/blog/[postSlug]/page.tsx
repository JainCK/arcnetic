import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { CalendarDays, User, ArrowLeft, Clock } from "lucide-react";
import { client, blogPostBySlugQuery, BlogPost, urlFor } from "@/lib/sanity";

interface BlogPostPageProps {
  params: Promise<{
    postSlug: string;
  }>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(blogPostBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadTime(body: any[]): number {
  if (!body) return 1;

  const wordsPerMinute = 200;
  const textLength = body
    .filter((block) => block._type === "block")
    .map(
      (block) => block.children?.map((child: any) => child.text).join(" ") || ""
    )
    .join(" ").length;

  const readTime = Math.ceil(textLength / (wordsPerMinute * 5)); // Rough estimate
  return Math.max(1, readTime);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await getBlogPost(postSlug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Arcnetic Blog`,
    description: post.excerpt || `Read our latest blog post: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { postSlug } = await params;
  const post = await getBlogPost(postSlug);

  if (!post) {
    notFound();
  }

  const readTime = calculateReadTime(post.body || []);

  return (
    <div className="min-h-screen">
      {/* Back to Blog */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <Badge key={category._id} variant="secondary">
                    {category.title}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-playfair">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              {/* Author */}
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl mb-12">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {post.body && <PortableTextRenderer content={post.body} />}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {post.author.bio && (
        <section className="py-12 bg-muted/20 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6">
                {post.author.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(64).height(64).url()}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">
                    About {post.author.name}
                  </h3>
                  <PortableTextRenderer content={post.author.bio} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-12 text-center border-t border-border/50">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Read More Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
