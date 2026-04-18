"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostContent({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-24 pb-16 px-4 md:px-6"
    >
      <div className="max-w-[680px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-[12px] text-text-hint dark:text-text-dark-hint hover:text-text-secondary dark:hover:text-text-dark-secondary transition-colors duration-150 mb-8"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <h1 className="font-sans font-light text-[36px] md:text-[40px] text-text-primary dark:text-text-dark-primary leading-tight tracking-[-0.5px] mb-2">
          {post.title}
        </h1>

        <p className="font-mono text-[12px] text-text-hint dark:text-text-dark-hint mb-8">
          {formatDate(post.date)}
        </p>

        <hr className="border-[0.5px] border-border dark:border-border-dark mb-8" />

        <div className="prose prose-blog max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}
