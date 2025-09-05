"use client";

import { slugify } from "@lib/utils/textConverter";
import { useSearchParams } from "next/navigation";
import Posts from "./Posts";
import SeoMeta from "./SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import config from "@config/config.json";

const { blog_folder } = config.settings;

const SearchResults = ({ authors }) => {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const keyword = slugify(key || "");

  const posts = getSinglePage(`src/content/${blog_folder}`);

  const searchResults = posts.filter((product) => {
    if (product.frontmatter.draft) {
      return !product.frontmatter.draft;
    }
    if (slugify(product.frontmatter.title).includes(keyword)) {
      return product;
    } else if (
      product.frontmatter.categories.find((category) =>
        slugify(category).includes(keyword)
      )
    ) {
      return product;
    } else if (
      product.frontmatter.tags.find((tag) => slugify(tag).includes(keyword))
    ) {
      return product;
    } else if (slugify(product.content).includes(keyword)) {
      return product;
    }
  });

  return (
    <>
      <SeoMeta title={`'${key}' এর জন্য অনুসন্ধানের ফলাফল`} />
      <h1 className="h2 mb-8 text-center">
        <span className="text-primary">{key}</span> এর জন্য অনুসন্ধানের ফলাফল
      </h1>
      {searchResults.length > 0 ? (
        <Posts posts={searchResults} authors={authors} />
      ) : (
        <div className="py-24 text-center text-h3 shadow">কোনো ফলাফল পাওয়া যায়নি</div>
      )}
    </>
  );
};

export default SearchResults;
