import HomePageContent from "@/app/HomePageContent";
import { getAllPostsFromNotion } from "@/lib/notion";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";

export default async function Home() {
  const posts = await getAllPostsFromNotion();

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
