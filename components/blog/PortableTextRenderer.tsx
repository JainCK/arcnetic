"use client";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const PortableTextComponents = {
  block: {
    // Headings - Updated for Dark Knight Theme
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-playfair text-white mt-16 mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-playfair text-white mt-16 mb-6 leading-tight border-b border-white/10 pb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-playfair text-white mt-12 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-playfair text-white/90 mt-8 mb-4">
        {children}
      </h4>
    ),
    // Paragraphs - Clean, readable sans-serif
    normal: ({ children }: any) => (
      <p className="text-lg leading-8 mb-6 text-white/70 font-space-grotesk font-light">
        {children}
      </p>
    ),
    // Block quote - Styled glass effect
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-white/40 pl-8 my-12 text-xl md:text-2xl font-playfair text-white italic bg-white/[0.02] py-8 pr-4 rounded-r-xl">
        "{children}"
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 mb-8 space-y-3 text-white/70 font-space-grotesk text-lg marker:text-white/40">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 mb-8 space-y-3 text-white/70 font-space-grotesk text-lg marker:text-white/40">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="pl-2">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white font-space-grotesk">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic text-white/90">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-white/10 px-2 py-0.5 rounded text-sm font-mono text-white/90 border border-white/10">
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
          className="text-white border-b border-white/40 hover:border-white transition-colors pb-0.5"
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
        <div className="my-12">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <Image
                src={urlFor(value).width(1200).height(800).url()}
                alt={value.alt || "Blog image"}
                fill
                className="object-cover"
            />
          </div>
          {value.alt && (
            <p className="text-xs text-white/30 text-center mt-4 italic font-space-grotesk tracking-wide">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: any) => (
      <div className="my-10 rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A]">
        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
        <pre className="p-6 overflow-x-auto">
            <code className="text-sm font-mono text-white/80">{value.code}</code>
        </pre>
      </div>
    ),
  },
};

interface PortableTextRendererProps {
  content: any[];
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  return (
    <div className="max-w-none">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}