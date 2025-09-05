import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { NotionBlock } from "@/lib/types";

const NotionRichText = ({ richText }: { richText: any[] }) => {
  return (
    <>
      {richText.map((text, index) => {
        const { annotations, plain_text, href } = text;
        const { bold, italic, strikethrough, underline, code, color } =
          annotations;

        let content: React.ReactNode = plain_text;

        if (bold) content = <strong>{content}</strong>;
        if (italic) content = <em>{content}</em>;
        if (strikethrough) content = <del>{content}</del>;
        if (underline) content = <u>{content}</u>;
        if (code) content = <code>{content}</code>;
        if (href)
          content = (
            <Link href={href} className="text-primary underline">
              {content}
            </Link>
          );

        return (
          <span
            key={index}
            className={color !== "default" ? `text-${color}-500` : ""}
          >
            {content}
          </span>
        );
      })}
    </>
  );
};

const NotionRenderer = ({ blocks }: { blocks: NotionBlock[] }) => {
  return (
    <div className="prose prose-invert max-w-none text-base lg:text-lg text-muted-foreground">
      {blocks.map((block) => {
        if (!("type" in block)) return null;

        switch (block.type) {
          case "heading_1":
            return (
              <h1 key={block.id} className="text-4xl font-extrabold my-4">
                <NotionRichText richText={block.heading_1.rich_text} />
              </h1>
            );
          case "heading_2":
            return (
              <h2 key={block.id} className="text-3xl font-bold my-6">
                <NotionRichText richText={block.heading_2.rich_text} />
              </h2>
            );
          case "heading_3":
            return (
              <h3 key={block.id} className="text-2xl font-bold my-4">
                <NotionRichText richText={block.heading_3.rich_text} />
              </h3>
            );
          case "paragraph":
            return (
              <p key={block.id} className="my-4 leading-relaxed">
                <NotionRichText richText={block.paragraph.rich_text} />
              </p>
            );
          case "bulleted_list_item":
            return (
              <ul key={block.id} className="my-4 list-disc list-inside">
                <li>
                  <NotionRichText
                    richText={block.bulleted_list_item.rich_text}
                  />
                </li>
              </ul>
            );
          case "numbered_list_item":
            return (
              <ol key={block.id} className="my-4 list-decimal list-inside">
                <li>
                  <NotionRichText
                    richText={block.numbered_list_item.rich_text}
                  />
                </li>
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-primary pl-6 my-8 italic text-foreground/80"
              >
                <NotionRichText richText={block.quote.rich_text} />
              </blockquote>
            );
          case "image": {
            const src =
              block.image.type === "external"
                ? block.image.external.url
                : block.image.file.url;
            return (
              <div
                key={block.id}
                className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg"
              >
                <Image
                  src={src}
                  alt={
                    block.image.caption[0]?.plain_text ??
                    "Notion blog post image"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            );
          }
          case "divider":
            return <hr key={block.id} className="my-8 border-border" />;
          case "code":
            return (
              <pre
                key={block.id}
                className="bg-card p-4 rounded-lg my-8 overflow-x-auto"
              >
                <code className="text-sm">
                  <NotionRichText richText={block.code.rich_text} />
                </code>
              </pre>
            );

          default:
            return (
              <p key={block.id} className="text-red-500">
                Unsupported block type: {block.type}
              </p>
            );
        }
      })}
    </div>
  );
};

export default NotionRenderer;
