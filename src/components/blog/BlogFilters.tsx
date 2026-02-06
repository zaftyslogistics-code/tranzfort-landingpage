import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogCategories } from "@/data/blogs";
import { cn } from "@/lib/utils";

interface BlogFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const BlogFilters = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: BlogFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" size={18} />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-[var(--bg-tertiary)] border-white/[0.08] text-white placeholder:text-[var(--text-dim)] focus:border-[rgba(0,240,255,0.3)]"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedCategory === category
                ? "bg-[var(--neon-cyan)] text-[var(--bg-primary)] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                : "bg-white/[0.03] text-[var(--text-muted)] hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
