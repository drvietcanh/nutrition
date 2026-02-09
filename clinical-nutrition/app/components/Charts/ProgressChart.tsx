"use client";

import {
  LineChart,
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
  date: string;
  value: number;
  label?: string;
}

interface ProgressChartProps {
  data: DataPoint[];
  title?: string;
  yAxisLabel?: string;
  dataKey?: string;
  color?: string;
  showArea?: boolean;
}

export function ProgressChart({
  data,
  title,
  yAxisLabel = "giá trị",
  dataKey = "value",
  color = "#3b82f6",
  showArea = false,
}: ProgressChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const currentValue = payload[0].value;
      const previousValue = data.length > 1 ? data[data.findIndex(d => d.label === label) - 1]?.value : null;
      const change = previousValue !== null ? currentValue - previousValue : null;
      const changePercent = previousValue && previousValue !== 0
        ? ((change! / previousValue) * 100).toFixed(1)
        : null;

      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: entry.color }}>
                  {entry.name}: {entry.value.toFixed(1)}
                </p>
                {change !== null && changePercent && (
                  <p className={`text-xs ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {change >= 0 ? "↑" : "↓"} {Math.abs(change).toFixed(1)} ({changePercent}%)
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const ChartComponent = showArea ? AreaChart : LineChart;
  const DataComponent = showArea ? Area : Line;

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={320}>
        <ChartComponent
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
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
          {showArea ? (
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${color})`}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={800}
            />
          ) : (
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
              animationDuration={800}
            />
          )}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
