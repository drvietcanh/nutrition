"use client";

import { useState } from "react";
import { Info } from "lucide-react";

interface TooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export function Tooltip({ term, definition, children }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="underline decoration-dotted decoration-blue-500 cursor-help"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${term}`}
      >
        {children}
      </span>
      {isOpen && (
        <div
          id={`tooltip-${term}`}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 pointer-events-none"
          role="tooltip"
        >
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <div className="font-semibold mb-1">{term}</div>
              <div className="text-gray-200">{definition}</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </div>
      )}
    </span>
  );
}
