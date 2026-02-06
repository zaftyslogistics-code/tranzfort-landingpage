import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import { blogs } from "@/data/blogs";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Blog — Insights & Updates | Tranzfort";
  }, []);

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const nonFeaturedBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Insights & <span className="text-neon-gradient">Updates</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              Latest news, tips, and insights from the logistics and transport industry.
            </p>
          </motion.div>
        </div>
        <div className="neon-line-gradient w-full absolute bottom-0" />
      </section>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && selectedCategory === "All" && !searchQuery && (
        <section className="py-10 sm:py-12 md:py-16" style={{ background: "var(--bg-primary)" }}>
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-6 sm:mb-8">
              Featured Articles
            </h2>
            <div className="space-y-6">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters & Blog Grid */}
      <section className="py-10 sm:py-12 md:py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-6">
              All Articles
            </h2>
            <BlogFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {(searchQuery || selectedCategory !== "All"
                ? filteredBlogs
                : nonFeaturedBlogs
              ).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--text-muted)] text-base sm:text-lg">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-[var(--neon-cyan)] hover:underline font-medium text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 sm:py-16 md:py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neon-card p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mb-6">
              Get the latest insights delivered directly to your inbox. No spam,
              just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-white placeholder:text-[var(--text-dim)] text-sm focus:outline-none transition-colors"
                style={{ background: "var(--bg-tertiary)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <button
                type="submit"
                className="btn-neon px-6 py-3 rounded-xl text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
