import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ blog, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <Link to={`/blog/${blog.slug}`} className="block">
          <div className="neon-card overflow-hidden hover:!border-[rgba(0,240,255,0.2)]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[var(--neon-cyan)] text-[var(--bg-primary)] border-none font-semibold">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3 text-[var(--neon-cyan)] border-[rgba(0,240,255,0.3)] bg-transparent">
                  {blog.category}
                </Badge>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {blog.title}
                </h2>
                <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-[var(--text-dim)] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readingTime} min read
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/[0.08]"
                  />
                  <div>
                    <p className="font-medium text-white text-sm">{blog.author.name}</p>
                    <p className="text-xs text-[var(--text-dim)]">{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/blog/${blog.slug}`} className="block h-full">
        <div className="neon-card overflow-hidden h-full flex flex-col hover:!border-[rgba(0,240,255,0.2)]">
          <div className="relative h-44 sm:h-48 overflow-hidden">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="outline" className="bg-[var(--bg-primary)]/80 backdrop-blur-sm text-[var(--neon-cyan)] border-[rgba(0,240,255,0.3)]">
                {blog.category}
              </Badge>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex flex-col flex-grow">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-cyan)] transition-colors line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2 flex-grow">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-[var(--text-dim)]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {blog.readingTime} min
                </span>
              </div>
              <span className="flex items-center gap-1 text-[var(--neon-cyan)] font-medium group-hover:gap-2 transition-all">
                Read <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
