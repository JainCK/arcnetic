interface BlogPostPageProps {
  params: {
    postSlug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Blog Post: {params.postSlug}</h1>
    </div>
  );
}
