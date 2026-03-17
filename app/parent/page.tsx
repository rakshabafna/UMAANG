"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";
import { VelocityCard } from "@/components/ui/VelocityCard";
import { childData } from "@/lib/data";

export default function ParentPage() {
  const [activeTab, setActiveTab] = useState("home");
  const { currentLanguage } = useAppContext();
  const t = useTranslation(currentLanguage);

  const tabs = [
    { id: "home", label: t("home"), icon: "home" },
    { id: "child", label: t("my_child"), icon: "face" },
    { id: "activities", label: t("activities"), icon: "extension" },
    { id: "curriculum", label: t("curriculum"), icon: "menu_book" },
    { id: "support", label: t("support"), icon: "support_agent" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f7f6]">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Navbar role="parent" />
        
        <div className="p-4 sm:p-8 max-w-6xl mx-auto w-full pb-20 md:pb-8">
          {/* TAB: HOME */}
          {activeTab === "home" && (
            <>
              {/* Welcome Banner */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#9f512d] to-[#bc6c47] p-8 mb-8 text-white shadow-lg shadow-[#9f512d]/20">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-bold font-nunito mb-2">{t("welcome_parent")}</h2>
                    <p className="text-white/80 text-lg font-inter">{t("child_info")}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      <span className="text-xs font-bold uppercase tracking-wider">{t("next_visit")}</span>
                    </div>
                    <p className="font-medium text-sm">{t("visit_date")}</p>
                    <p className="text-xs text-white/70">{t("visit_by")}</p>
                  </div>
                </div>
                {/* Abstract Background Pattern */}
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none flex items-center justify-end pr-8">
                  <span className="material-symbols-outlined text-[200px]">auto_awesome</span>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Progress Card */}
                <div className="bg-white p-6 rounded-xl border border-[#9f512d]/10 shadow-sm flex items-center gap-8">
                  <div className="relative w-32 h-32 shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <circle className="stroke-slate-100" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                      <circle className="stroke-[#9f512d] transition-all duration-1000 ease-out" cx="18" cy="18" fill="none" r="16" strokeDasharray="74, 100" strokeLinecap="round" strokeWidth="3" transform="rotate(-90 18 18)"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-slate-900">74%</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{t("overall_progress")}</h3>
                    <p className="text-slate-500 text-sm mb-4">{t("milestones_achieved")}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">history</span>
                      {t("last_updated")}
                    </div>
                  </div>
                </div>

                {/* AI Alert Card */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                      <span className="material-symbols-outlined">psychology_alt</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-900 mb-1">{t("language_stimulation")}</h3>
                      <p className="text-amber-800/80 text-sm leading-relaxed mb-4">
                        {t("language_desc")}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab("activities")}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {t("view_recommendations")}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                {/* Last Visit Summary */}
                <div className="bg-white p-6 rounded-xl border border-[#9f512d]/10 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t("last_visit_summary")}</h3>
                      <p className="text-sm text-slate-500">{t("last_visit_details")}</p>
                    </div>
                    <div className="bg-[#9f512d]/10 text-[#9f512d] px-3 py-1 rounded-full text-sm font-bold">
                      {t("score")}
                    </div>
                  </div>
                  <div className="bg-[#f8f7f6] p-4 rounded-lg border border-[#9f512d]/5 italic text-slate-600 text-sm leading-relaxed">
                    {t("visit_quote")}
                  </div>
                </div>

                {/* Curriculum Card */}
                <div className="bg-white p-6 rounded-xl border border-[#9f512d]/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-[#9f512d]">auto_stories</span>
                      <h3 className="text-lg font-bold text-slate-900">{t("this_weeks_curriculum")}</h3>
                    </div>
                    <p className="text-[#9f512d] font-bold text-sm mb-3">{t("week_12")}</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9f512d]/40"></span>
                        {t("activity_1")}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9f512d]/40"></span>
                        {t("activity_2")}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9f512d]/40"></span>
                        {t("activity_3")}
                      </li>
                    </ul>
                  </div>
                  <button className="w-full border-2 border-[#9f512d] text-[#9f512d] hover:bg-[#9f512d] hover:text-white font-bold py-2 px-4 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
                    {t("view_curriculum")}
                  </button>
                </div>
              </div>

              {/* Upcoming Activities Preview */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">{t("recommended_activities")}</h2>
                  <button className="text-[#9f512d] font-medium text-sm flex items-center gap-1 hover:underline">
                    {t("all_activities")} <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Activity 1 */}
                  <div className="group cursor-pointer">
                    <div className="h-40 bg-slate-200 rounded-xl overflow-hidden mb-3 relative shadow-md">
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#9f512d]">VOCABULARY</div>
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-[#9f512d] transition-colors">{t("farm_animal")}</h4>
                    <p className="text-xs text-slate-500">{t("farm_animal_desc")}</p>
                  </div>
                  {/* Activity 2 */}
                  <div className="group cursor-pointer">
                    <div className="h-40 bg-slate-200 rounded-xl overflow-hidden mb-3 relative shadow-md">
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#9f512d]">LOGIC</div>
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-[#9f512d] transition-colors">{t("size_sorting")}</h4>
                    <p className="text-xs text-slate-500">{t("size_sorting_desc")}</p>
                  </div>
                  {/* Activity 3 */}
                  <div className="group cursor-pointer">
                    <div className="h-40 bg-slate-200 rounded-xl overflow-hidden mb-3 relative shadow-md">
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#9f512d]">LISTENING</div>
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-[#9f512d] transition-colors">{t("simon_says")}</h4>
                    <p className="text-xs text-slate-500">{t("simon_says_desc")}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB: CHILD */}
          {activeTab === "child" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t("child_profile")}</h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#9f512d]/10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-32 h-32 rounded-full bg-slate-200 border-4 border-white shadow-lg shrink-0 overflow-hidden relative">
                    <span className="material-symbols-outlined text-6xl text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">face</span>
                  </div>
                  <div className="flex-1 space-y-6 w-full">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Aarav Sharma</h3>
                      <p className="text-slate-500">ID: UMG-2024-8932</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("dob")}</p>
                        <p className="font-semibold text-slate-800 mt-1">12 Dec 2022</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("gender")}</p>
                        <p className="font-semibold text-slate-800 mt-1">{t("male")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("blood_group")}</p>
                        <p className="font-semibold text-slate-800 mt-1">O+</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("weight")}</p>
                        <p className="font-semibold text-slate-800 mt-1">12.5 kg</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("height")}</p>
                        <p className="font-semibold text-slate-800 mt-1">88 cm</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t("health_conditions")}</p>
                      <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-200">
                        {t("none_reported")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUMMARY ROW */}
              <div className="bg-[#FFF8F0] p-4 rounded-xl shadow-sm border border-[#9f512d]/10 mb-6">
                <h3 className="text-sm font-bold text-[#6B3A2A] mb-3">Aarav&apos;s Growth This Month</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {childData.domains.map((domain, i) => {
                    const latest = domain.monthlyDeltas?.[domain.monthlyDeltas.length - 1] || 0;
                    const prev = domain.monthlyDeltas?.[domain.monthlyDeltas.length - 2] || 0;
                    
                    let trendColor = "text-blue-500";
                    let arrow = "arrow_forward";
                    if (latest <= 0) {
                      trendColor = "text-red-500";
                      arrow = "arrow_downward";
                    } else if (latest >= prev + 1) {
                      trendColor = "text-emerald-500";
                      arrow = "arrow_upward";
                    } else if (latest < prev - 1 && latest > 0) {
                      trendColor = "text-amber-500";
                      arrow = "trending_flat";
                    }

                    return (
                      <div key={i} className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg border border-[#9f512d]/5">
                        <span className="text-xs font-bold text-slate-700 truncate flex-1">{domain.name}</span>
                        <div className={`flex items-center ${trendColor} font-bold text-xs shrink-0`}>
                          <span className="material-symbols-outlined text-[14px] leading-none">{arrow}</span>
                          <span className="leading-none">{latest > 0 ? "+" : ""}{latest}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* DOMAINS GRID (Replace existing bars with VelocityCards) */}
              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Developmental Domains</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {childData.domains.map((domain, i) => (
                  <VelocityCard 
                    key={i} 
                    domainName={domain.name} 
                    percentage={domain.percentage} 
                    monthlyDeltas={domain.monthlyDeltas || []} 
                    compact={false} 
                  />
                ))}
              </div>

            </section>
          )}

          {/* TAB: ACTIVITIES */}
          {activeTab === "activities" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t("activity_library")}</h2>
              
              <div className="flex gap-2 pb-2 overflow-x-auto">
                {["All", t("category_physical"), t("category_cognitive"), t("category_communication")].map((cat, i) => (
                  <button key={i} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? "bg-[#9f512d] text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: t("farm_animal"), type: t("category_physical"), desc: t("farm_animal_desc"), icon: "pets" },
                  { title: t("size_sorting"), type: t("category_cognitive"), desc: t("size_sorting_desc"), icon: "category" },
                  { title: t("simon_says"), type: t("category_communication"), desc: t("simon_says_desc"), icon: "record_voice_over" },
                ].map((act, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group hover:border-[#9f512d]/50 transition-all cursor-pointer">
                    <div className="h-40 bg-slate-100 flex items-center justify-center relative">
                      <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:text-[#9f512d] transition-colors">{act.icon}</span>
                      <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#9f512d] shadow-sm uppercase">{act.type}</div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-slate-800 mb-1">{act.title}</h4>
                      <p className="text-xs text-slate-500 mb-4">{act.desc}</p>
                      <button className="w-full text-[#9f512d] font-bold text-sm bg-[#9f512d]/10 py-2 rounded-lg group-hover:bg-[#9f512d] group-hover:text-white transition-colors">
                        {t("view_activity_guide")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB: CURRICULUM */}
          {activeTab === "curriculum" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t("curriculum_overview")}</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="divide-y divide-slate-100">
                  <div className="p-6 bg-slate-50 hover:bg-slate-50/50 transition-colors opacity-60">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800">Week 10</h4>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] uppercase font-bold rounded-full">{t("status_completed")}</span>
                    </div>
                    <p className="text-sm text-slate-500">Fine Motor Skills & Basic Shapes</p>
                  </div>
                  <div className="p-6 bg-slate-50 hover:bg-slate-50/50 transition-colors opacity-60">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800">Week 11</h4>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] uppercase font-bold rounded-full">{t("status_completed")}</span>
                    </div>
                    <p className="text-sm text-slate-500">Colors & Pattern Recognition</p>
                  </div>
                  <div className="p-6 border-l-4 border-l-[#9f512d] bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900">{t("week_12")}</h4>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] uppercase font-bold rounded-full">{t("status_in_progress")}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">Focus on improving {t("category_communication")} and auditory processing through interactive play.</p>
                    <button className="text-[#9f512d] text-sm font-bold flex items-center gap-1 hover:underline">
                      {t("view_curriculum")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="p-6 bg-slate-50 hover:bg-slate-50/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800">Week 13</h4>
                      <span className="px-2 py-1 bg-slate-200 text-slate-600 text-[10px] uppercase font-bold rounded-full">{t("status_upcoming")}</span>
                    </div>
                    <p className="text-sm text-slate-500">Gross Motor Skills & Coordination</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB: SUPPORT */}
          {activeTab === "support" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t("help_support")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t("contact_coordinator")}</h3>
                  <p className="text-slate-500 text-sm">Get in touch with Sneha Jadhav for directly rescheduling or querying upcoming visits.</p>
                  <button className="w-full bg-[#9f512d] hover:bg-[#6B3A2A] text-white font-bold py-3 rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">call</span>
                    Message Volunteer
                  </button>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">help_center</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t("faq")}</h3>
                  <p className="text-slate-500 text-sm">Questions about milestones, updating child information, or reporting app issues.</p>
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-all shadow-sm mt-2 flex items-center justify-center gap-2">
                    View FAQ
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <BottomTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
