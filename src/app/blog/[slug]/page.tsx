import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  getAllPostsFromNotion,
  getPostFromSlug,
} from "@/lib/notion";
import { siteConfig } from "@/content/config";
import type { Metadata } from "next";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";
import BlogPostContent from "./BlogPostContent";
import { MOCK_COMMENTS } from "@/content/mock-comments";

export async function generateStaticParams() {
  const posts = await getAllPostsFromNotion();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostFromSlug(params.slug);
  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const postUrl = `${siteConfig.url}/blog/${params.slug}`;
  const imageUrl = frontmatter.imageUrl.startsWith("http")
    ? frontmatter.imageUrl
    : `${siteConfig.url}${frontmatter.imageUrl}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: postUrl,
      type: "article",
      publishedTime: new Date(frontmatter.date).toISOString(),
      authors: [siteConfig.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostFromSlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    datePublished: new Date(post.frontmatter.date).toISOString(),
    dateModified: new Date(post.frontmatter.date).toISOString(),
    description: post.frontmatter.description,
    image: post.frontmatter.imageUrl.startsWith("http")
      ? post.frontmatter.imageUrl
      : `${siteConfig.url}${post.frontmatter.imageUrl}`,
    url: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.author.name.split(" ")[0],
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <BlogPostContent post={post} comments={MOCK_COMMENTS} />
          </div>

          <aside className="lg:col-span-4">
            <Suspense fallback={<SidebarLoader />}>
              <Sidebar />
            </Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
}
