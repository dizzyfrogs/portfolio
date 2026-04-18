"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.08 }}
        >
          <Link href={`/blog/${post.slug}`} className="block group">
            <div className="bg-surface dark:bg-surface-dark border-[0.5px] border-border dark:border-border-dark rounded-xl p-6 transition-all duration-150 group-hover:border-border-hover dark:group-hover:border-border-dark-hover group-hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="font-sans font-medium text-[18px] text-text-primary dark:text-text-dark-primary leading-snug">
                  {post.title}
                </h2>
                <span className="font-mono text-[12px] text-text-hint dark:text-text-dark-hint shrink-0 mt-0.5 whitespace-nowrap">
                  {formatDate(post.date)} · {post.readingTime}
                </span>
              </div>
              <p className="font-sans text-[14px] text-text-secondary dark:text-text-dark-secondary leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
                Read post
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
