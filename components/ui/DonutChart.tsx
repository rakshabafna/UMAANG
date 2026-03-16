import React from "react";

interface DonutChartProps {
  percentage: number;
  size?: number;
}

export function DonutChart({ percentage, size = 120 }: DonutChartProps) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#F5ECD7"
        strokeWidth={strokeWidth}
      />
      {/* Foreground circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#A0522D"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-700 ease-out"
      />
      {/* Center text */}
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-soft-brown font-nunito font-bold transform rotate-90"
        style={{
          fontSize: size * 0.22,
          transformOrigin: `${size / 2}px ${size / 2}px`,
        }}
      >
        {percentage}%
      </text>
    </svg>
  );
}
