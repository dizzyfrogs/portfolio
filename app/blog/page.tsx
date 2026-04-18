import { getAllPosts } from "@/lib/posts";
import BlogPostList from "@/components/blog/BlogPostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
  alternates: {
    canonical: "https://suleiman.dev/blog",
  },
  openGraph: {
    title: "Blog | Suleiman Mejd",
    description:
      "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
    url: "https://suleiman.dev/blog",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Suleiman Mejd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Suleiman Mejd",
    description:
      "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
    images: ["/og.png"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog | Suleiman Mejd",
  url: "https://suleiman.dev/blog",
  author: {
    "@type": "Person",
    name: "Suleiman Mejd",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4">BLOG</p>

          <h1 className="font-sans font-light text-[36px] md:text-[48px] text-text-primary dark:text-text-dark-primary leading-tight mb-3">
            Sully&apos;s{" "}
            <span className="font-medium text-accent">loose threads</span>
          </h1>

          <p className="font-sans text-[14px] text-text-secondary dark:text-text-dark-secondary mb-12">
            Occasional writing on things I&apos;m building and learning.
          </p>

          <BlogPostList posts={posts} />
        </div>
      </section>
    </>
  );
}
