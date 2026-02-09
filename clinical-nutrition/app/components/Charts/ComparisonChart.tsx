"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ComparisonData {
  name: string;
  actual: number;
  target: number;
}

interface ComparisonChartProps {
  data: ComparisonData[];
  title?: string;
  yAxisLabel?: string;
  unit?: string;
}

export function ComparisonChart({
  data,
  title,
  yAxisLabel = "giá trị",
  unit = "",
}: ComparisonChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => {
            const diff = entry.dataKey === "actual" && payload[1]
              ? entry.value - payload[1].value
              : entry.dataKey === "target" && payload[0]
              ? payload[0].value - entry.value
              : 0;
            const diffPercent = payload[0]?.value
              ? ((diff / payload[0].value) * 100).toFixed(1)
              : "0";
            
            return (
              <div key={index} className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: entry.color }}>
                    {entry.name}: {entry.value.toFixed(1)} {unit}
                  </p>
                  {Math.abs(diff) > 0.1 && (
                    <p className="text-xs text-gray-500">
                      {diff > 0 ? "+" : ""}{diff.toFixed(1)} {unit} ({diffPercent}%)
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            stroke="#6b7280"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={{ stroke: "#9ca3af" }}
          />
          <YAxis
            stroke="#6b7280"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={{ stroke: "#9ca3af" }}
            label={{
              value: yAxisLabel,
              angle: -90,
              position: "insideLeft",
              style: { fontSize: "12px", fill: "#6b7280", textAnchor: "middle" },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            formatter={(value: string) => (
              <span className="text-sm text-gray-700">{value}</span>
            )}
          />
          <Bar
            dataKey="actual"
            fill="#3b82f6"
            name="Thực tế"
            radius={[4, 4, 0, 0]}
            animationDuration={800}
            animationBegin={0}
          />
          <Bar
            dataKey="target"
            fill="#22c55e"
            name="Mục tiêu"
            radius={[4, 4, 0, 0]}
            animationDuration={800}
            animationBegin={100}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
