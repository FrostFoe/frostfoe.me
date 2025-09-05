
import { Client } from "@notionhq/client";
import { NotionBlock, Post } from "./types";
import { cache } from "react";
import readingTime from "reading-time";
import { slugify } from "./utils";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.BLOG_INDEX_ID ?? "";

const getPage = cache((pageId: string) => {
  return notion.pages.retrieve({ page_id: pageId });
});

const getPageFromSlug = cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  return response.results[0];
});

const getBlocks = cache(async (blockID: string): Promise<NotionBlock[]> => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockID,
      start_cursor: cursor,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks as NotionBlock[];
});

function mapNotionResultToPost(result: any): Omit<Post, "content" | "blocks"> {
  const readingTimeStats = readingTime("");

  return {
    slug: result.properties.Slug.formula.string,
    frontmatter: {
      title: result.properties.Title.title[0].plain_text,
      date: result.properties.Date.date.start,
      description: result.properties.Description.rich_text[0].plain_text,
      imageUrl: result.properties.ImageUrl.url,
      imageHint: "notion blog image",
      category: result.properties.Category.select.name,
      author: result.properties.Author.rich_text[0].plain_text,
      tags: result.properties.Tags.multi_select.map((tag: any) => tag.name),
      readingTime: readingTimeStats.text,
      comments: true,
      published: result.properties.Published.checkbox,
    },
  };
}

export const getAllPostsFromNotion = cache(async (): Promise<Post[]> => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  console.log("Raw Notion response:", JSON.stringify(response.results, null, 2));

  const postsResults = response.results;

  const posts = await Promise.all(
    postsResults.map(async (result: any) => {
      const postDetails = mapNotionResultToPost(result);
      const blocks = await getBlocks(result.id);
      const content = blocks
        .map((block: any) => {
          if (block[block.type].rich_text) {
            return block[block.type].rich_text
              .map((text: any) => text.plain_text)
              .join("");
          }
          return "";
        })
        .join(" ");

      const readingTimeStats = readingTime(content);

      return {
        ...postDetails,
        frontmatter: {
          ...postDetails.frontmatter,
          readingTime: readingTimeStats.text,
        },
        content,
        blocks,
      };
    }),
  );

  const publishedPosts = posts.filter(
    (post): post is Post => post !== null && post.frontmatter.published,
  );

  console.log("Mapped posts:", JSON.stringify(publishedPosts, null, 2));

  return publishedPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
});

export const getPostFromSlug = cache(async (slug: string) => {
  const page = await getPageFromSlug(slug);
  if (!page) {
    return null;
  }
  const postDetails = mapNotionResultToPost(page);
  const blocks = await getBlocks(page.id);
  const content = blocks
    .map((block: any) => {
      if (block[block.type].rich_text) {
        return block[block.type].rich_text
          .map((text: any) => text.plain_text)
          .join("");
      }
      return "";
    })
    .join(" ");

  const readingTimeStats = readingTime(content);

  return {
    ...postDetails,
    frontmatter: {
      ...postDetails.frontmatter,
      readingTime: readingTimeStats.text,
    },
    content,
    blocks,
  };
});

export async function getCategoriesFromNotion(): Promise<
  Record<string, number>
> {
  const posts = await getAllPostsFromNotion();
  const categories: Record<string, number> = {};
  posts.forEach((post) => {
    const category = post.frontmatter.category;
    categories[category] = (categories[category] || 0) + 1;
  });
  return categories;
}

export async function getTagsFromNotion(): Promise<string[]> {
  const posts = await getAllPostsFromNotion();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

export async function getPostsByCategoryFromNotion(
  categorySlug: string,
): Promise<Post[]> {
  const allPosts = await getAllPostsFromNotion();
  return allPosts.filter(
    (post) => slugify(post.frontmatter.category) === categorySlug,
  );
}

export async function getPostsByTagFromNotion(tagSlug: string): Promise<Post[]> {
  const allPosts = await getAllPostsFromNotion();
  return allPosts.filter((post) =>
    post.frontmatter.tags.some((tag) => slugify(tag) === tagSlug),
  );
}
