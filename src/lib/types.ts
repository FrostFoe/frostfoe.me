import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionBlock =
  ListBlockChildrenResponse["results"][number];

export interface Reply {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
}

export interface Comment {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
  reply?: Reply;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  author: string;
  tags: string[];
  readingTime: string;
  comments?: boolean;
  published?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  blocks: NotionBlock[];
}
