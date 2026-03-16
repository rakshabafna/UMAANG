"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className={`relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6
          transition-all duration-300 ease-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {title && (
          <h2 className="text-xl font-nunito font-bold text-soft-brown mb-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
