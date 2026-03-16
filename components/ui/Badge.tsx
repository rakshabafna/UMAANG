import React from "react";

interface BadgeProps {
  label: string;
  variant: "success" | "warning" | "danger" | "info" | "neutral";
}

const variantStyles: Record<BadgeProps["variant"], string> = {
  success: "bg-sage-green text-white",
  warning: "bg-amber-500 text-white",
  danger: "bg-[#DC2626] text-white",
  info: "bg-blue-500 text-white",
  neutral: "bg-gray-200 text-gray-600",
};

export function Badge({ label, variant }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full text-xs px-3 py-1 font-medium ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
