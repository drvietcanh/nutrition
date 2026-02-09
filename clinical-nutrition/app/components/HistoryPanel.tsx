"use client";

import { useState, useEffect } from "react";
import { History, X, Trash2, Clock, Calculator } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import {
  getToolHistory,
  clearToolHistory,
  type ToolHistory,
} from "../../lib/utils/storage";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import Link from "next/link";
import toast from "react-hot-toast";

interface HistoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  maxItems?: number;
}

export function HistoryPanel({
  isOpen,
  onClose,
  maxItems = 10,
}: HistoryPanelProps) {
  const [history, setHistory] = useState<ToolHistory[]>([]);

  useEffect(() => {
    if (isOpen) {
      const toolHistory = getToolHistory();
      setHistory(toolHistory.slice(0, maxItems));
    }
  }, [isOpen, maxItems]);

  const handleClear = () => {
    if (confirm("Bạn có chắc muốn xóa toàn bộ lịch sử?")) {
      clearToolHistory();
      setHistory([]);
      toast.success("Đã xóa lịch sử");
    }
  };

  const getToolName = (toolId: string): string => {
    const toolNames: Record<string, string> = {
      "energy-protein-calculator": "Máy tính Năng lượng & Protein",
      "bmi-body-composition": "BMI & Thành phần cơ thể",
      "fluid-requirements": "Nhu cầu Dịch",
      "malnutrition-screening": "Sàng lọc Suy dinh dưỡng",
      "intake-assessment": "Đánh giá Lượng ăn",
      "meal-planner": "Lập kế hoạch Bữa ăn",
      "food-database": "Cơ sở Dữ liệu Thực phẩm",
    };
    return toolNames[toolId] || toolId;
  };

  const getToolUrl = (toolId: string): string => {
    return `/tools/${toolId}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <History className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Lịch sử Sử dụng
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <Button
                onClick={handleClear}
                variant="ghost"
                size="sm"
                icon={Trash2}
                iconPosition="left"
              >
                Xóa tất cả
              </Button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors focus-ring"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {history.length === 0 ? (
            <div className="text-center py-12">
              <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Chưa có lịch sử sử dụng</p>
              <p className="text-sm text-gray-500">
                Lịch sử sẽ được lưu tự động khi bạn sử dụng các công cụ
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((item, index) => (
                <Link
                  key={index}
                  href={getToolUrl(item.toolId)}
                  className="block"
                >
                  <Card className="hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="w-4 h-4 text-blue-600" />
                          <h3 className="font-semibold text-gray-900">
                            {item.toolName || getToolName(item.toolId)}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {formatDistanceToNow(new Date(item.timestamp), {
                              addSuffix: true,
                              locale: vi,
                            })}
                          </span>
                        </div>
                        {item.result && (
                          <div className="text-xs text-gray-500 space-y-1">
                            {Object.entries(item.result).slice(0, 3).map(([key, value]) => (
                              <div key={key}>
                                <span className="font-medium">{key}:</span>{" "}
                                {typeof value === "number"
                                  ? value.toFixed(1)
                                  : String(value)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
