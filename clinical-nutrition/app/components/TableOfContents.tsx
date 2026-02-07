"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export function TableOfContents({ headings, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${className} ${isSticky ? "sticky top-24" : ""}`}
      aria-label="Mục lục"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-gray-600" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-gray-900">Mục lục</h2>
        </div>
        <ul className="space-y-2">
          {headings.map((heading) => {
            const paddingLeft = heading.level === 1 ? "pl-0" : heading.level === 2 ? "pl-4" : "pl-8";
            const isActive = activeId === heading.id;
            
            return (
              <li key={heading.id}>
                <button
                  type="button"
                  onClick={() => scrollToHeading(heading.id)}
                  className={`w-full text-left text-sm transition-colors focus-ring rounded px-2 py-1 ${
                    isActive
                      ? "text-blue-600 font-medium bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  } ${paddingLeft}`}
                >
                  {heading.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// Helper function to extract headings from content
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^#{1,3}\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].match(/^#+/)?.[0].length || 1;
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}
