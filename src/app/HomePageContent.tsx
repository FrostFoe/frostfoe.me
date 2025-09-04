
"use client";

import { siteConfig } from "@/content/config";
import type { Post } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { MotionDiv } from "@/components/blog/Motion";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const ParticlesContainer = dynamic(
  () =>
    import("@/components/ui/particles-container").then(
      (mod) => mod.ParticlesContainer as ComponentType,
    ),
  { ssr: false },
);

interface HomePageContentProps {
  posts: Post[];
  sidebar: React.ReactNode;
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const postItemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function HomePageContent({
  posts,
  sidebar,
}: HomePageContentProps) {
  const { home: homeConfig } = siteConfig;
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="font-sans text-foreground">
      <div className="relative">
        <ParticlesContainer />
        <div className="container mx-auto px-4 pt-20 pb-16 text-center md:pt-24 lg:pt-32 lg:pb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AnimatedTitle text={homeConfig.hero.title} />
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-xl">
              {homeConfig.hero.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" asChild>
                  <Link href={homeConfig.hero.buttons.primary.url}>
                    {homeConfig.hero.buttons.primary.text}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" variant="outline" asChild>
                  <Link href={homeConfig.hero.buttons.secondary.url}>
                    <Rss className="mr-2 h-4 w-4" />{" "}
                    {homeConfig.hero.buttons.secondary.text}
                  </Link>
                </Button>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {homeConfig.latestArticles.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {homeConfig.latestArticles.description}
              </p>
            </MotionDiv>
            <MotionDiv
              className="mt-12 grid grid-cols-1 gap-12"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ perspective: "1000px" }}
            >
              {latestPosts.map((post) => (
                <MotionDiv key={post.slug} variants={postItemVariant}>
                  <PostCard post={post} />
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24">{sidebar}</div>
          </aside>
        </div>
      </div>
    </div>
  );
}
