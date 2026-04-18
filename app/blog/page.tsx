import { getAllPosts } from "@/lib/posts";
import BlogPostList from "@/components/blog/BlogPostList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
  openGraph: {
    title: "Blog | Suleiman Mejd",
    description:
      "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
    url: "https://suleiman.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Suleiman Mejd",
    description:
      "Occasional writing on things I'm building and learning. Algorithms, side projects, and software engineering.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
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
  );
}
