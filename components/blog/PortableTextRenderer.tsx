"use client";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-playfair">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-foreground font-playfair">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-foreground font-playfair">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-foreground">
        {children}
      </h4>
    ),
    // Paragraphs
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-6 text-foreground/90 font-inter">
        {children}
      </p>
    ),
    // Block quote
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg text-foreground/80 bg-muted/20 py-4 rounded-r-lg font-inter">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 space-y-3 text-foreground/90 font-inter">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-3 text-foreground/90 font-inter">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-lg leading-relaxed pl-2">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-lg leading-relaxed pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
          className="text-primary hover:underline font-medium"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="rounded-xl w-full object-cover"
          />
          {value.alt && (
            <p className="text-sm text-foreground/70 text-center mt-3 italic font-inter">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),
  },
};

interface PortableTextRendererProps {
  content: any[];
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}
