"use client";

import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`absolute right-0 top-0 h-full bg-white shadow-xl
          w-full sm:w-[400px]
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-soft-brown hover:text-terracotta transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-sand"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-6 pt-14 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
