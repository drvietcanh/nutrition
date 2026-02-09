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
      <CardHeader icon={Clock} title="Công cụ Gần đây" />
      <CardContent>
        <div className="space-y-2">
          {recentTools.slice(0, 5).map((toolId) => {
            const tool = TOOL_CATALOG.find((t) => t.id === toolId);
            if (!tool) return null;
            return (
              <Link
                key={toolId}
                href={`/tools/${toolId}`}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{tool.title}</p>
                  <p className="text-sm text-gray-600">{tool.summary}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
