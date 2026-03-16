"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

interface NavbarProps {
  role: "parent" | "volunteer" | "admin";
}

const languages = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"] as const;

const notifications = [
  "New milestone recorded for Aarav — Cognitive domain updated.",
  "Weekly progress report is ready for download.",
];

const avatarMap: Record<string, { name: string; title: string; initials: string; img?: string }> = {
  parent: { name: "Priya Sharma", title: "Parent", initials: "PS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEdtq14SrVAlNy3fbBCxnjQZ1QsXddfpG9TG9d77oSV2hV8-Ws89hzK2MYVnVkPJ_Jua6v-cGAKOEgc-nWq-OiPykZ_cRWAs5XqqUnv2hY_4RiaSgGN0YW_O2FlufFrSnRuqzdY2ZkzysAN2nnB53t0z6Adlf_bHXwrcIcOFISPURN9OczoSGG25m_0-lVyzN7R2EgPoaLJQt3Kzio0zCTb7CP4n4PATDbMIy520mPXuhd_xGezoQHwpjxMD4jO_Lyd88rt-c_jGM" },
  volunteer: { name: "Sneha Jadhav", title: "Volunteer", initials: "SJ" },
  admin: { name: "Nitin Kulkarni", title: "Admin", initials: "NK" },
};

export function Navbar({ role }: NavbarProps) {
  const router = useRouter();
  const { currentLanguage, setLanguage, setRole, setAdminAuth } = useAppContext();

  const [langOpen, setLangOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notificationsRead, setNotificationsRead] = useState(false);

  const handleSwitchRole = () => {
    setRole(null);
    router.push("/");
  };

  const handleLogout = () => {
    setAdminAuth(false);
    setRole(null);
    router.push("/");
  };

  const avatar = avatarMap[role];

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-[#9f512d]/10 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4 hidden md:flex">
        {role === "admin" ? (
          <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
            Admin Panel
            <button onClick={handleLogout} className="text-[#9f512d] hover:underline ml-1">Logout</button>
          </div>
        ) : (
          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">visibility</span>
            Viewing as: {avatar.title}
            <button onClick={handleSwitchRole} className="text-[#9f512d] hover:underline ml-1">Switch Role</button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <div className="relative group flex items-center gap-2 text-sm font-medium">
          <button onClick={() => { setLangOpen(!langOpen); setNotifOpen(false); }} className="flex items-center gap-1 hover:text-[#9f512d]">
            <span className="material-symbols-outlined">language</span>
            {currentLanguage}
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>

          {langOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setLangOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${currentLanguage === lang ? "bg-slate-50 text-[#9f512d] font-bold" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={() => { setNotifOpen(!notifOpen); setLangOpen(false); if (!notificationsRead) setNotificationsRead(true); }} className="relative p-2 text-slate-600 hover:bg-[#9f512d]/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            {!notificationsRead && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-2 w-72 z-50">
              <p className="px-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-wide">Notifications</p>
              {notifications.map((n, i) => (
                <div key={i} className="px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors border-t border-slate-100">{n}</div>
              ))}
            </div>
          )}
        </div>

        {avatar.img ? (
          <div className="w-8 h-8 rounded-full bg-cover bg-center border border-[#9f512d]/20" style={{ backgroundImage: `url('${avatar.img}')` }} />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#9f512d]/20 flex items-center justify-center text-[#9f512d] font-bold text-sm">
            {avatar.initials}
          </div>
        )}
      </div>
    </header>
  );
}
