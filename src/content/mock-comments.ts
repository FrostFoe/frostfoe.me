import type { Comment } from "@/lib/types";

export const MOCK_COMMENTS: Comment[] = [
  {
    id: "1",
    author: "Jane Doe",
    avatarUrl: "https://picsum.photos/40/40",
    date: "2 days ago",
    text: "This was an incredibly insightful article! I especially appreciated the section on generative design. It's a concept I've been curious about, and you explained it perfectly. Looking forward to more content like this.",
    reply: {
      id: "r1",
      author: "FrostFoe",
      avatarUrl: "/images/downloaded/logo.png",
      date: "1 day ago",
      text: "Thank you, Jane! I'm thrilled to hear you found the section on generative design helpful. It's a fascinating area with so much potential. I'm definitely planning to write more on advanced design topics soon!",
    },
  },
  {
    id: "2",
    author: "John Smith",
    avatarUrl: "https://picsum.photos/40/40",
    date: "4 days ago",
    text: "Great overview of AI in UX. I work in this field, and it's amazing to see how quickly things are evolving. The point about AI empowering designers, rather than replacing them, is spot on.",
  },
];
