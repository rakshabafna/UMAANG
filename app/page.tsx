"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function HomePage() {
  const router = useRouter();
  const { setRole, setAdminAuth, showToast, currentLanguage, setLanguage } = useAppContext();
  const [adminCode, setAdminCode] = useState("");
  const [showAdminModal, setShowAdminModal] = useState(false);

  const handleRoleSelect = (roleId: "parent" | "volunteer") => {
    setRole(roleId);
    showToast(`Signed in as ${roleId === "parent" ? "Parent" : "Volunteer"}`);
    router.push(`/${roleId}`);
  };

  const handleAdminLogin = () => {
    if (adminCode === "admin123" || adminCode.length > 0) {
      setRole("admin");
      setAdminAuth(true);
      showToast("Authenticated as Admin");
      router.push("/admin");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
      {/* Left Panel: Brand & Stats */}
      <div className="lg:w-1/2 w-full bg-[#9f512d] relative flex flex-col justify-between p-8 lg:p-16 text-white overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="pattern" patternUnits="userSpaceOnUse" width="40" x="0" y="0">
                <circle cx="20" cy="20" fill="currentColor" r="1"></circle>
              </pattern>
            </defs>
            <rect fill="url(#pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>

        {/* Logo Removed */}

        {/* Main Content */}
        <div className="relative z-10 mt-20 lg:mt-0">
          <h1 className="font-nunito text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Right Stimulation.<br />Right Time.
          </h1>
          <p className="text-xl lg:text-2xl font-medium text-white/90 max-w-xl leading-relaxed">
            A unified platform for tracking early childhood development, supporting families, and empowering volunteers across Maharashtra.
          </p>
        </div>

        {/* Stats Pills */}
        <div className="relative z-10 flex flex-wrap gap-3 mt-12 lg:mt-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex flex-col">
            <span className="text-xs uppercase tracking-widest font-bold text-white/70">Children Enrolled</span>
            <span className="text-xl font-black">248</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex flex-col">
            <span className="text-xs uppercase tracking-widest font-bold text-white/70">Home Visits This Month</span>
            <span className="text-xl font-black">312</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex flex-col">
            <span className="text-xs uppercase tracking-widest font-bold text-white/70">Languages Supported</span>
            <span className="text-xl font-black">6</span>
          </div>
        </div>
      </div>

      {/* Right Panel: Navigation & Language */}
      <div className="lg:w-1/2 w-full bg-[#FFF8F0] flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-nunito font-extrabold text-[#9f512d] mb-8 text-center lg:text-left">
            Continue as
          </h2>
          
          <div className="space-y-4">
            {/* Parent Card */}
            <button 
              onClick={() => handleRoleSelect("parent")}
              className="w-full group flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-[#9f512d]/10 hover:border-[#9f512d] hover:shadow-md transition-all text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9f512d]/10 text-[#9f512d] flex items-center justify-center group-hover:bg-[#9f512d] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">family_restroom</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Parent</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Track your child&apos;s milestones and access learning activities
                </p>
              </div>
              <span className="material-symbols-outlined ml-auto self-center text-slate-300 group-hover:text-[#9f512d]">
                chevron_right
              </span>
            </button>

            {/* Volunteer Card */}
            <button 
              onClick={() => handleRoleSelect("volunteer")}
              className="w-full group flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-[#9f512d]/10 hover:border-[#9f512d] hover:shadow-md transition-all text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9f512d]/10 text-[#9f512d] flex items-center justify-center group-hover:bg-[#9f512d] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Volunteer</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Log home visits and manage your training modules
                </p>
              </div>
              <span className="material-symbols-outlined ml-auto self-center text-slate-300 group-hover:text-[#9f512d]">
                chevron_right
              </span>
            </button>
          </div>

          {/* Language Switcher */}
          <div className="mt-12 pt-8 border-t border-[#9f512d]/10">
            <div className="flex items-center gap-2 mb-4 text-slate-500 font-semibold text-xs uppercase tracking-widest justify-center lg:justify-start">
              <span className="material-symbols-outlined text-sm">language</span>
              View in
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
              {["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"].map((lang, index, arr) => (
                <React.Fragment key={lang}>
                  <button 
                    onClick={() => setLanguage(lang as "English" | "Hindi" | "Marathi" | "Tamil" | "Telugu" | "Bengali")}
                    className={`transition-colors ${currentLanguage === lang ? "text-[#9f512d] font-bold hover:underline" : "hover:text-[#9f512d]"}`}
                  >
                    {lang}
                  </button>
                  {index < arr.length - 1 && <span className="text-slate-300">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => setShowAdminModal(true)}
              className="text-[12px] text-[#9CA3AF] hover:text-[#9f512d] transition-colors"
            >
              Admin Access
            </button>
          </div>

        </div>
      </div>

      {/* Admin Login Modal (Hidden by Default) */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowAdminModal(false)}>
          <div className="bg-white w-full max-w-sm rounded-2xl p-8 shadow-2xl transform transition-all" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-nunito font-bold text-[#6B3A2A] mb-6 text-center">Admin Login</h2>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600">
                  admin@spacece.in
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Password</label>
                <input 
                  type="password"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                  placeholder="Enter access code"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 focus:outline-none focus:border-[#A0522D]"
                />
              </div>
              <button 
                onClick={handleAdminLogin}
                className="w-full bg-[#A0522D] hover:bg-[#8B4524] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#A0522D]/20 mt-4"
              >
                Login to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
