"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";

interface TooltipProps {
  content: React.ReactNode;
  children?: React.ReactNode;
  icon?: boolean;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  content,
  children,
  icon = false,
  position = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltip = tooltipRef.current;
      const trigger = triggerRef.current;
      const rect = trigger.getBoundingClientRect();

      // Position tooltip
      switch (position) {
        case "top":
          tooltip.style.bottom = `${window.innerHeight - rect.top + 8}px`;
          tooltip.style.left = `${rect.left + rect.width / 2}px`;
          tooltip.style.transform = "translateX(-50%)";
          break;
        case "bottom":
          tooltip.style.top = `${rect.bottom + 8}px`;
          tooltip.style.left = `${rect.left + rect.width / 2}px`;
          tooltip.style.transform = "translateX(-50%)";
          break;
        case "left":
          tooltip.style.right = `${window.innerWidth - rect.left + 8}px`;
          tooltip.style.top = `${rect.top + rect.height / 2}px`;
          tooltip.style.transform = "translateY(-50%)";
          break;
        case "right":
          tooltip.style.left = `${rect.right + 8}px`;
          tooltip.style.top = `${rect.top + rect.height / 2}px`;
          tooltip.style.transform = "translateY(-50%)";
          break;
      }
    }
  }, [isVisible, position]);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {icon ? (
        <button
          type="button"
          className="inline-flex items-center text-gray-400 hover:text-gray-600 focus-ring rounded"
          aria-label="Thông tin"
        >
          <HelpCircle className="w-4 h-4" aria-hidden="true" />
        </button>
      ) : (
        children
      )}

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs ${positionClasses[position]}`}
          role="tooltip"
        >
          <div className="whitespace-normal">{content}</div>
          {/* Arrow */}
          <div
            className={`absolute ${
              position === "top"
                ? "top-full left-1/2 -translate-x-1/2 border-t-gray-900 border-t-4 border-x-transparent border-x-4"
                : position === "bottom"
                ? "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 border-b-4 border-x-transparent border-x-4"
                : position === "left"
                ? "left-full top-1/2 -translate-y-1/2 border-l-gray-900 border-l-4 border-y-transparent border-y-4"
                : "right-full top-1/2 -translate-y-1/2 border-r-gray-900 border-r-4 border-y-transparent border-y-4"
            }`}
          />
        </div>
      )}
    </div>
  );
}
