import HomePageContent from "@/app/HomePageContent";
import { siteConfig } from "@/content/config";
import { getAllPosts } from "@/lib/mdx";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";

export default async function Home() {
  const posts = await getAllPosts();
  const { home: homeConfig } = siteConfig;

  return (
    <HomePageContent
      posts={posts}
      homeConfig={homeConfig}
      sidebar={
        <Suspense fallback={<SidebarLoader />}>
          <Sidebar />
        </Suspense>
      }
    />
  );
}