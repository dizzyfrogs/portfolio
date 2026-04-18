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
    alternates: {
      canonical: `https://suleiman.dev/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://suleiman.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Suleiman Mejd" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: ["/og.png"],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://suleiman.dev/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Suleiman Mejd",
      url: "https://suleiman.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PostContent post={post} />
    </>
  );
}
