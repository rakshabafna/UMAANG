"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

export default function VolunteerPage() {
  const [activeTab, setActiveTab] = useState("home");
  const { currentLanguage } = useAppContext();
  const t = useTranslation(currentLanguage);

  const tabs = [
    { id: "home", label: t("home"), icon: "home" },
    { id: "log-visit", label: t("log_visit"), icon: "edit_note" },
    { id: "training", label: t("my_training"), icon: "school" },
    { id: "history", label: t("visit_history"), icon: "history" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f7f6]">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Navbar role="volunteer" />
        
        <div className="p-4 md:p-8 space-y-8 bg-[#f8f7f6] w-full max-w-6xl mx-auto pb-20 md:pb-8">
          
          {/* TAB 1: HOME */}
          {activeTab === "home" && (
            <section className="space-y-6">
              {/* Banner Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7B9E87] to-[#6A8B74] p-8 text-white shadow-lg">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-nunito">{t("hello_volunteer")}</h2>
                    <p className="text-white/90 text-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F59E0B]">emoji_events</span>
                      {t("top_performer")}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      <span className="text-sm font-medium">{t("next_aarav")}</span>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <span className="material-symbols-outlined text-8xl opacity-20">volunteer_activism</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#9f512d]/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9f512d]/10 flex items-center justify-center text-[#9f512d]">
                    <span className="material-symbols-outlined">child_care</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">{t("total_assigned")}</p>
                    <p className="text-2xl font-bold text-slate-800">6</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#9f512d]/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7B9E87]/10 flex items-center justify-center text-[#7B9E87]">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">{t("visits_this_month")}</p>
                    <p className="text-2xl font-bold text-slate-800">14</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#9f512d]/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                    <span className="material-symbols-outlined">auto_stories</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">{t("training_completion")}</p>
                    <p className="text-2xl font-bold text-slate-800">60%</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar Strip */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-[#9f512d]/5">
                  <h3 className="text-lg font-bold mb-6 text-slate-800">{t("visit_calendar")}</h3>
                  <div className="flex justify-between items-center overflow-x-auto pb-2">
                    {[t("cal_mon"), t("cal_tue"), t("cal_wed"), t("cal_thu"), t("cal_fri"), t("cal_sat"), t("cal_sun")].map((day, ix) => (
                      <div key={day} className="flex flex-col items-center gap-3 min-w-[60px]">
                        <span className={`text-xs font-bold ${ix === 3 ? "text-[#9f512d]" : "text-slate-400"}`}>{day}</span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${ix === 3 ? "border-2 border-[#9f512d] text-[#9f512d] font-bold" : "text-slate-600 bg-slate-50"}`}>
                          {17 + ix}
                        </div>
                        <div className={`w-1.5 h-1.5 rounded-full ${ix < 2 ? "bg-[#9f512d]" : "bg-slate-200"}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* AI Tip Card */}
                <div className="bg-[#FFF8F0] p-6 rounded-2xl shadow-sm border-l-4 border-[#9f512d]">
                  <div className="flex items-center gap-2 mb-3 text-[#9f512d] font-bold">
                    <span className="material-symbols-outlined">lightbulb</span>
                    {t("ai_tip")}
                  </div>
                  <p className="text-[#6B3A2A] text-sm leading-relaxed">
                    {t("ai_tip_desc")}
                  </p>
                  <button className="mt-4 text-xs font-bold text-[#9f512d] flex items-center gap-1 hover:underline">
                    {t("view_activity_guide")} <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* TAB 2: LOG VISIT */}
          {activeTab === "log-visit" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t("log_visit")}</h2>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#9f512d]/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("child_name")}</label>
                      <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 font-medium">Aarav Sharma</div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("visit_date")}</label>
                      <input className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 focus:ring-[#9f512d] focus:border-[#9f512d]" type="date" defaultValue="2025-03-16" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("home_env_checklist")}</label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-[#9f512d] focus:ring-[#9f512d]" />
                          <span className="text-sm text-slate-600 group-hover:text-[#9f512d] transition-colors">{t("safe_playing_area")}</span>
                        </label>
                        <label className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-[#9f512d] focus:ring-[#9f512d]" />
                          <span className="text-sm text-slate-600 group-hover:text-[#9f512d] transition-colors">{t("clean_drinking_water")}</span>
                        </label>
                        <label className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#9f512d] focus:ring-[#9f512d]" />
                          <span className="text-sm text-slate-600 group-hover:text-[#9f512d] transition-colors">{t("educational_materials")}</span>
                        </label>
                        <label className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-[#9f512d] focus:ring-[#9f512d]" />
                          <span className="text-sm text-slate-600 group-hover:text-[#9f512d] transition-colors">{t("guardian_present")}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("engagement_rating")}</label>
                      <div className="flex gap-1">
                        {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-[#F59E0B] fill-1 cursor-pointer">star</span>)}
                        <span className="material-symbols-outlined text-slate-300 cursor-pointer">star</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("activities_observed")}</label>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-[#9f512d] text-white text-xs font-bold cursor-pointer">{t("color_identification")}</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#9f512d] text-white text-xs font-bold cursor-pointer">{t("storytelling")}</span>
                        <span className="px-3 py-1.5 rounded-full bg-[#9f512d] text-white text-xs font-bold cursor-pointer">{t("motor_play")}</span>
                        <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold cursor-pointer">{t("counting")}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t("observation_notes")}</label>
                      <textarea className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 focus:ring-[#9f512d] focus:border-[#9f512d] text-sm" placeholder={t("notes_placeholder")} rows={4}></textarea>
                    </div>
                    <button className="w-full bg-[#9f512d] hover:bg-[#6B3A2A] text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-[#9f512d]/20">
                      {t("save_visit_log")}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: HISTORY */}
          {activeTab === "history" && (
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-800">{t("visit_history")}</h2>
                <div className="flex items-center gap-3">
                  <select className="bg-white border border-slate-200 rounded-lg text-sm font-medium focus:ring-[#9f512d]">
                    <option>{t("all_children")}</option>
                    <option>Aarav Sharma</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl border border-[#9f512d]/10 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-[#9f512d]/10">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">{t("date_col")}</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">{t("child_col")}</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">{t("score_col")}</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">{t("notes_col")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#9f512d]/5">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">16 Mar 2025</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800">Aarav Sharma</td>
                      <td className="px-6 py-4">
                        <div className="flex text-[#F59E0B]">
                          {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-xs fill-1">star</span>)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 italic truncate max-w-xs">{t("history_note_1")}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">14 Mar 2025</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800">Meera Patil</td>
                      <td className="px-6 py-4">
                        <div className="flex text-[#F59E0B]">
                          {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xs fill-1">star</span>)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 italic truncate max-w-xs">{t("history_note_2")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* TAB 4: TRAINING */}
          {activeTab === "training" && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">{t("my_training")}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-500">{t("overall_progress_val")}</span>
                  <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#9f512d] h-full w-[60%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Module 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                  <div className="h-32 bg-[#7B9E87]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#7B9E87] text-5xl">child_care</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 leading-tight">{t("training_m1_title")}</h4>
                      <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{t("status_completed")}</span>
                    </div>
                    <p className="text-slate-500 text-xs mb-4 flex-1">{t("training_m1_desc")}</p>
                    <button className="w-full border border-[#7B9E87] text-[#7B9E87] font-bold py-2 rounded-lg text-sm hover:bg-[#7B9E87] hover:text-white transition-colors">{t("review_material")}</button>
                  </div>
                </div>
                {/* Module 2 */}
                <div className="bg-white border-2 border-[#9f512d] rounded-2xl overflow-hidden shadow-sm flex flex-col relative">
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{t("in_progress_60")}</span>
                  </div>
                  <div className="h-32 bg-[#9f512d]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#9f512d] text-5xl">home_work</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-bold text-slate-800 leading-tight mb-2">{t("training_m2_title")}</h4>
                    <p className="text-slate-500 text-xs mb-4 flex-1">{t("training_m2_desc")}</p>
                    <button className="w-full bg-[#9f512d] text-white font-bold py-2 rounded-lg text-sm hover:bg-[#6B3A2A] transition-colors">{t("continue_training")}</button>
                  </div>
                </div>
                {/* Module 3 */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col opacity-60">
                  <div className="h-32 bg-slate-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 text-5xl">lock</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 leading-tight">{t("training_m3_title")}</h4>
                      <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{t("locked")}</span>
                    </div>
                    <p className="text-slate-500 text-xs mb-4 flex-1">{t("training_m3_desc")}</p>
                    <button className="w-full bg-slate-100 text-slate-400 font-bold py-2 rounded-lg text-sm cursor-not-allowed" disabled>{t("complete_module_2")}</button>
                  </div>
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
