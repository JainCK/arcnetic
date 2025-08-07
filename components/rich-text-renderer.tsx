import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface RichTextRendererProps {
  content: Document;
}

const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => (
      <strong className="font-bold text-foreground">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: ReactNode) => (
      <em className="italic text-muted-foreground">{text}</em>
    ),
    [MARKS.CODE]: (text: ReactNode) => (
      <code className="bg-muted/80 px-2 py-1 rounded text-sm font-mono text-primary font-semibold">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 leading-8 text-base lg:text-lg text-justify font-space-grotesk text-foreground">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl mb-8 mt-16 first:mt-0 font-bold leading-tight font-playfair text-foreground scroll-mt-20">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl mb-6 mt-16 border-b border-border pb-4 font-bold leading-tight font-playfair text-foreground scroll-mt-20">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl mb-5 mt-12 text-primary font-semibold leading-tight font-playfair scroll-mt-20">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl mb-4 mt-10 font-semibold leading-tight font-playfair text-foreground scroll-mt-20">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg mb-3 mt-8 font-semibold leading-tight font-playfair text-muted-foreground scroll-mt-20">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base mb-3 mt-6 font-bold uppercase tracking-wide leading-tight font-playfair text-muted-foreground scroll-mt-20">
        {children}
      </h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="space-y-2 my-8 pl-0">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="space-y-2 my-8 pl-0 list-decimal list-inside">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="font-space-grotesk text-foreground leading-7 mb-3 pl-2 relative before:content-['•'] before:text-primary before:font-bold before:mr-3 before:absolute before:left-0">
        {children}
      </li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-primary/30 pl-8 pr-4 italic text-muted-foreground bg-muted/20 py-6 my-10 rounded-r-lg font-medium text-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="border-border border-t-2 my-16 opacity-50" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const imageUrl = `https:${file.url}`;

      if (file.contentType?.startsWith("image/")) {
        return (
          <div className="my-10">
            <Image
              src={imageUrl}
              alt={description || title || "Blog image"}
              width={file.details.image.width}
              height={file.details.image.height}
              className="rounded-xl shadow-xl border border-border w-full"
            />
            {description && (
              <p className="text-sm text-muted-foreground text-center mt-2 italic">
                {description}
              </p>
            )}
          </div>
        );
      }

      return (
        <div className="my-8 p-4 bg-muted/20 rounded-lg border border-border">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            {title || "Download file"}
          </a>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <Link
          href={uri}
          className="text-primary font-medium no-underline hover:text-primary/80 hover:underline transition-all decoration-2 underline-offset-2"
          target={uri.startsWith("http") ? "_blank" : "_self"}
          rel={uri.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const { slug } = node.data.target.fields;
      return (
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-medium no-underline hover:text-primary/80 hover:underline transition-all decoration-2 underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },
};

// Custom code block renderer (if you want to handle code blocks differently)
export const CodeBlock = ({
  children,
  language,
}: {
  children: string;
  language?: string;
}) => (
  <div className="my-8">
    <pre className="bg-muted/50 border border-border rounded-xl p-6 overflow-x-auto text-sm shadow-lg font-mono leading-relaxed">
      <code className={language ? `language-${language}` : ""}>{children}</code>
    </pre>
  </div>
);

// Main component
export const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  content,
}) => {
  return (
    <div className="prose-container">
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
};

export default RichTextRenderer;
