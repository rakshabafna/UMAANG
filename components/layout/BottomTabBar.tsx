"use client";

import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface BottomTabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function BottomTabBar({
  tabs,
  activeTab,
  onTabChange,
}: BottomTabBarProps) {
  return (
    <nav className="flex md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-sand z-40">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-1 transition-colors
              ${isActive ? "text-terracotta" : "text-gray-400"}`}
          >
            <span className="text-xs font-medium">{tab.label}</span>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
