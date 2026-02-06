import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogNavigationProps {
  prevBlog: BlogPost | null;
  nextBlog: BlogPost | null;
}

const BlogNavigation = ({ prevBlog, nextBlog }: BlogNavigationProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/[0.06]">
      {prevBlog ? (
        <Link
          to={`/blog/${prevBlog.slug}`}
          className="neon-card p-5 group hover:!border-[rgba(0,240,255,0.2)] transition-all"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--text-dim)] mb-2">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Previous Article</span>
          </div>
          <h4 className="font-semibold text-white group-hover:text-[var(--neon-cyan)] transition-colors line-clamp-2">
            {prevBlog.title}
          </h4>
        </Link>
      ) : (
        <div />
      )}
      
      {nextBlog ? (
        <Link
          to={`/blog/${nextBlog.slug}`}
          className="neon-card p-5 group hover:!border-[rgba(0,240,255,0.2)] transition-all text-right"
        >
          <div className="flex items-center justify-end gap-2 text-sm text-[var(--text-dim)] mb-2">
            <span>Next Article</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-semibold text-white group-hover:text-[var(--neon-cyan)] transition-colors line-clamp-2">
            {nextBlog.title}
          </h4>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default BlogNavigation;
