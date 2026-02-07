"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { SearchModal } from "./SearchModal";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 focus-ring transition-colors"
        aria-label="Tìm kiếm"
      >
        <SearchIcon className="w-5 h-5" aria-hidden="true" />
        <span className="hidden lg:inline">Tìm kiếm</span>
      </button>
      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
