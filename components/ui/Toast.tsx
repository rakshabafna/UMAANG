"use client";

import { useAppContext } from "@/context/AppContext";

export function Toast() {
  const { toast } = useAppContext();

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-terracotta text-white rounded-lg px-5 py-3 shadow-lg
        transition-all duration-300 ease-in-out
        ${toast.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}
    >
      {toast.message}
    </div>
  );
}
