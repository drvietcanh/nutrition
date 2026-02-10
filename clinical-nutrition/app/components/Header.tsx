"use client";

import Link from "next/link";
import { useState } from "react";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { Search } from "./Search";
import { HistoryPanel } from "./HistoryPanel";
import { BookOpen, History } from "lucide-react";
import { Button } from "./Button";

export function Header() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-transparent bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors focus-ring rounded-lg px-2 py-1"
              aria-label="Về trang chủ"
            >
              <BookOpen className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <span className="hidden sm:inline">Dinh dưỡng lâm sàng</span>
              <span className="sm:hidden">Dinh dưỡng</span>
            </Link>

            {/* Desktop navigation */}
            <div className="flex items-center gap-4">
              <MainNav />
              <Button
                onClick={() => setIsHistoryOpen(true)}
                variant="ghost"
                size="sm"
                icon={History}
                iconPosition="left"
                className="hidden sm:flex"
                aria-label="Lịch sử"
              >
                Lịch sử
              </Button>
              <Search />
            </div>

            {/* Mobile navigation */}
            <MobileNav />
          </div>
        </div>
      </header>
      <HistoryPanel isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </>
  );
}
