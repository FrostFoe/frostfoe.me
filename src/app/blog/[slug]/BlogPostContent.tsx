"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import Link from "next/link";
import { siteConfig } from "@/content/config";
import { format } from "date-fns";
import { slugify } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import type { Comment as CommentType, Post } from "@/lib/types";
import {
  CalendarDays,
  User,
  Folder,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import type { ComponentType } from "react";
import CommentsSection from "@/components/blog/CommentsSection";
import NotionRenderer from "@/components/blog/NotionRenderer";

const iconMap: Record<string, React.ElementType> = {
  Linkedin,
  Twitter,
  Facebook,
};

const CommentFormLoader = () => (
  <div className="mt-12">
    <Skeleton className="h-7 w-48 mb-6" />
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-12 w-36" />
    </div>
  </div>
);

const CommentForm = dynamic(
  () => import("@/components/blog/CommentForm") as Promise<ComponentType>,
  {
    loading: () => <CommentFormLoader />,
    ssr: false,
  },
);

interface BlogPostContentProps {
  post: Post;
  comments: CommentType[];
}

export default function BlogPostContent({
  post,
  comments,
}: BlogPostContentProps) {
  const { frontmatter, slug, blocks } = post;
  const { blog: blogConfig } = siteConfig;
  const postUrl = `${siteConfig.url}/blog/${slug}`;

  const getShareUrl = (platform: string) => {
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(frontmatter.title);
    const encodedDescription = encodeURIComponent(frontmatter.description);

    switch (platform.toLowerCase()) {
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      default:
        return "#";
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <article>
        <header>
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{format(new Date(frontmatter.date), "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{frontmatter.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-4 w-4" />
              <Link
                href={`/category/${slugify(frontmatter.category)}`}
                className="hover:text-primary transition-colors"
              >
                {frontmatter.category}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{frontmatter.readingTime}</span>
            </div>
          </div>
        </header>

        <MotionDiv
          className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={frontmatter.imageUrl}
            alt={frontmatter.title}
            fill
            className="object-cover"
            data-ai-hint={frontmatter.imageHint}
            priority
          />
        </MotionDiv>

        <NotionRenderer blocks={blocks} />

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-bold">{blogConfig.sharePostText}</h3>
          <div className="flex items-center gap-1">
            {blogConfig.shareLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const shareUrl = getShareUrl(link.name);
              return (
                <MotionDiv
                  key={link.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={shareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      aria-label={`Share on ${link.name}`}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span className="hidden sm:inline">{link.name}</span>
                    </Link>
                  </Button>
                </MotionDiv>
              );
            })}
          </div>
        </div>

        {frontmatter.comments !== false && (
          <>
            <Separator className="my-8" />
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <CommentsSection comments={comments} />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <CommentForm />
            </MotionDiv>
          </>
        )}
      </article>
    </MotionDiv>
  );
}
