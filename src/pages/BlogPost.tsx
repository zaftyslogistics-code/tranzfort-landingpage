import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogNavigation from "@/components/blog/BlogNavigation";
import BlogCard from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import { getBlogBySlug, getAdjacentBlogs, getRelatedBlogs } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug || "");
  const { prev, next } = getAdjacentBlogs(slug || "");
  const relatedBlogs = blog ? getRelatedBlogs(blog.slug, blog.category) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
        <Header />
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-[var(--text-muted)] mb-6 text-sm sm:text-base">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="btn-neon px-6 py-3 rounded-xl text-sm inline-block">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Parse markdown content to HTML-like structure
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    let headingIndex = 0;
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith("### ")) {
        const id = `heading-${headingIndex++}`;
        return (
          <h3
            key={index}
            id={id}
            className="text-xl font-bold text-white mt-8 mb-4 scroll-mt-28"
          >
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      }
      
      if (trimmedLine.startsWith("## ")) {
        const id = `heading-${headingIndex++}`;
        return (
          <h2
            key={index}
            id={id}
            className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-28"
          >
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      }
      
      if (trimmedLine.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-[var(--neon-cyan)] pl-4 my-6 italic text-[var(--text-muted)]"
          >
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      }
      
      if (trimmedLine.startsWith("- **")) {
        const match = trimmedLine.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2 list-disc text-[var(--text-muted)]">
              <strong className="text-white">{match[1]}</strong>
              {match[2] && `: ${match[2]}`}
            </li>
          );
        }
      }
      
      if (trimmedLine.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 list-disc text-[var(--text-muted)]">
            {trimmedLine.replace("- ", "")}
          </li>
        );
      }
      
      if (/^\d+\.\s/.test(trimmedLine)) {
        return (
          <li key={index} className="ml-6 mb-2 list-decimal text-[var(--text-muted)]">
            {trimmedLine.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      
      if (trimmedLine === "") {
        return <br key={index} />;
      }
      
      // Bold text handling
      const boldProcessed = trimmedLine.replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="font-semibold text-white">$1</strong>'
      );
      
      return (
        <p
          key={index}
          className="text-[var(--text-muted)] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: boldProcessed }}
        />
      );
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-primary), var(--bg-primary)/50, transparent)" }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 -mt-28 sm:-mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--neon-cyan)] mb-6 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </button>
            
            <Badge variant="outline" className="bg-[var(--bg-primary)]/80 backdrop-blur-sm text-[var(--neon-cyan)] border-[rgba(0,240,255,0.3)] mb-4">
              {blog.category}
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[var(--text-muted)] text-sm">
              <div className="flex items-center gap-3">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/[0.08]"
                />
                <div>
                  <p className="font-medium text-white text-sm">{blog.author.name}</p>
                  <p className="text-xs text-[var(--text-dim)]">{blog.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {blog.readingTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="neon-card p-5 sm:p-6 md:p-10"
            >
              <div className="prose prose-lg max-w-none">
                {renderContent(blog.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-white/[0.03] text-[var(--text-muted)] border-white/[0.08]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-white font-medium text-sm">
                    <Share2 size={16} />
                    Share:
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/[0.08] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[rgba(0,240,255,0.3)] transition-colors"
                      style={{ background: "var(--bg-tertiary)" }}
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/[0.08] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[rgba(0,240,255,0.3)] transition-colors"
                      style={{ background: "var(--bg-tertiary)" }}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/[0.08] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[rgba(0,240,255,0.3)] transition-colors"
                      style={{ background: "var(--bg-tertiary)" }}
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <BlogNavigation prevBlog={prev} nextBlog={next} />
            </motion.article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents content={blog.content} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16" style={{ background: "var(--bg-secondary)" }}>
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-6 sm:mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
