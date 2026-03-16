import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`,
          backgroundColor: color || "#A0522D",
        }}
      />
    </div>
  );
}
