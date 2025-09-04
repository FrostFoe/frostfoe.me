import HomePageContent from "@/app/HomePageContent";
import { getAllPosts } from "@/lib/mdx";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <HomePageContent
      posts={posts}
      sidebar={
        <Suspense fallback={<SidebarLoader />}>
          <Sidebar />
        </Suspense>
      }
    />
  );
}
