"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface DataPoint {
  [key: string]: string | number;
  label: string;
}

interface LineChartProps {
  data: DataPoint[];
  title?: string;
  yAxisLabel?: string;
  lines: Array<{
    dataKey: string;
    name: string;
    color: string;
    strokeWidth?: number;
  }>;
  showArea?: boolean;
  height?: number;
}

export function LineChart({
  data,
  title,
  yAxisLabel = "giá trị",
  lines,
  showArea = false,
  height = 320,
}: LineChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <p className="text-sm font-medium" style={{ color: entry.color }}>
                {entry.name}: {typeof entry.value === "number" ? entry.value.toFixed(1) : entry.value}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const ChartComponent = showArea ? AreaChart : RechartsLineChart;

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          {showArea && (
            <defs>
              {lines.map((line, index) => (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`gradient-${line.dataKey}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={line.color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={line.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
          )}
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="label"
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
            iconType="line"
            formatter={(value: string) => (
              <span className="text-sm text-gray-700">{value}</span>
            )}
          />
          {lines.map((line, index) => {
            const commonProps = {
              key: line.dataKey,
              type: "monotone" as const,
              dataKey: line.dataKey,
              name: line.name,
              stroke: line.color,
              strokeWidth: line.strokeWidth || 2,
              dot: { fill: line.color, r: 4 },
              activeDot: { r: 6, stroke: line.color, strokeWidth: 2 },
              animationDuration: 800,
              animationBegin: index * 100,
            };

            return showArea ? (
              <Area
                {...commonProps}
                fill={`url(#gradient-${line.dataKey})`}
              />
            ) : (
              <Line {...commonProps} />
            );
          })}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
