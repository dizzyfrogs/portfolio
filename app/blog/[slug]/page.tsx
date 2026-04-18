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
  const title = `${post.title} | Suleiman Mejd`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://suleiman.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title,
      description: post.excerpt,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return <PostContent post={post} />;
}
