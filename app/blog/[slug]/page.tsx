import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import PostContent from "@/components/blog/PostContent";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} | Suleiman Mejd`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return <PostContent post={post} />;
}
