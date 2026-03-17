"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";

const avatarMap: Record<string, { name: string; title: string; initials: string; img?: string }> = {
  parent: { name: "Priya Sharma", title: "Parent", initials: "PS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEdtq14SrVAlNy3fbBCxnjQZ1QsXddfpG9TG9d77oSV2hV8-Ws89hzK2MYVnVkPJ_Jua6v-cGAKOEgc-nWq-OiPykZ_cRWAs5XqqUnv2hY_4RiaSgGN0YW_O2FlufFrSnRuqzdY2ZkzysAN2nnB53t0z6Adlf_bHXwrcIcOFISPURN9OczoSGG25m_0-lVyzN7R2EgPoaLJQt3Kzio0zCTb7CP4n4PATDbMIy520mPXuhd_xGezoQHwpjxMD4jO_Lyd88rt-c_jGM" },
  volunteer: { name: "Sneha Jadhav", title: "Volunteer", initials: "SJ" },
  admin: { name: "Nitin Kulkarni", title: "Admin", initials: "NK" },
};

interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface SidebarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function Sidebar({ tabs, activeTab, onTabChange }: SidebarProps) {
  const { currentRole } = useAppContext();
  const currentAvatar = avatarMap[currentRole as string] || avatarMap["parent"];

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-[#9f512d]/10 flex-col shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#9f512d] rounded flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[20px]">child_care</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-[#9f512d] font-nunito">UMAANG</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? "bg-[#9f512d] text-white shadow-md shadow-[#9f512d]/20" : "text-slate-600 hover:bg-[#9f512d]/10 hover:text-[#9f512d]"}`}
            >
              {tab.icon && (
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              )}
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-[#9f512d]/10">
        <div className="flex items-center gap-3">
          {currentAvatar.img ? (
            <img src={currentAvatar.img} alt={currentAvatar.name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#9f512d]/20 flex items-center justify-center text-[#9f512d] font-bold">
              {currentAvatar.initials}
            </div>
          )}
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-800 truncate">{currentAvatar.name}</p>
            <p className="text-xs text-slate-500 truncate">{currentAvatar.title}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
