import { getAllPostsFromNotion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getAllPostsFromNotion();
    return NextResponse.json(posts);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
