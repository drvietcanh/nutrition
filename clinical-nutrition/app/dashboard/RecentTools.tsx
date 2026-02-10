"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/Card";
import { getRecentTools } from "../../lib/utils/storage";
import { TOOL_CATALOG } from "../../config/tool-metadata";

export function RecentTools() {
  const [recentTools, setRecentTools] = useState<string[]>([]);

  useEffect(() => {
    setRecentTools(getRecentTools());
  }, []);

  if (recentTools.length === 0) return null;

  return (
    <Card>
      <CardHeader icon={Clock} title="Công cụ gần đây" />
      <CardContent>
        <div className="divide-y divide-gray-100">
          {recentTools.slice(0, 5).map((toolId) => {
            const tool = TOOL_CATALOG.find((t) => t.id === toolId);
            if (!tool) return null;
            return (
              <Link
                key={toolId}
                href={`/tools/${toolId}`}
                className="flex items-center justify-between px-3 py-2 hover:bg-blue-50/60 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {tool.title}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {tool.summary}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
