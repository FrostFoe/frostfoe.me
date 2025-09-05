import * as React from "react";
import {
  getAllPostsFromNotion,
  getCategoriesFromNotion,
  getTagsFromNotion,
} from "@/lib/notion";
import SidebarUI from "./SidebarUI";

const Sidebar = async () => {
  const allPosts = await getAllPostsFromNotion();
  const categories = await getCategoriesFromNotion();
  const tags = await getTagsFromNotion();
  const popularPosts = allPosts.slice(0, 3);

  return (
    <SidebarUI
      categories={categories}
      tags={tags}
      popularPosts={popularPosts}
    />
  );
};

export default Sidebar;
