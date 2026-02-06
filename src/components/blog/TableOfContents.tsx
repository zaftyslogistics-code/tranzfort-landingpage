import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse headings from markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];
    
    const items: TOCItem[] = matches.map((match, index) => ({
      id: `heading-${index}`,
      text: match[2].trim(),
      level: match[1].length,
    }));
    
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="neon-card p-5 sticky top-28">
      <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm">
        <List size={16} />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? "1rem" : 0 }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "text-left text-sm transition-colors hover:text-[var(--neon-cyan)] w-full truncate",
                activeId === heading.id
                  ? "text-[var(--neon-cyan)] font-medium"
                  : "text-[var(--text-muted)]"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
