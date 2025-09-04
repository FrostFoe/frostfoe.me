import { siteConfig } from "@/content/config";
import { getAllPosts } from "@/lib/mdx";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";
import { Post } from "@/lib/types";

interface HomePageContentProps {
  posts: Post[];
  homeConfig: {
    hero: {
      title: string;
      description: string;
      buttons: {
        primary: {
          text: string;
          url: string;
        };
        secondary: {
          text: string;
          url: string;
        };
      };
      image: {
        src: string;
        alt: string;
        hint: string;
      };
    };
    latestArticles: {
      title: string;
      description: string;
    };
  };
  sidebar: React.ReactNode;
}

export default function HomePageContent({ posts, homeConfig, sidebar }: HomePageContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8">
          {/* Your hero section and other content here */}
        </div>
        <div className="lg:col-span-4">
          {sidebar}
        </div>
      </div>
    </div>
  );
}
