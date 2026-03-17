"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { VelocityCard } from "@/components/ui/VelocityCard";
import { EngagementHeatmap } from "@/components/ui/EngagementHeatmap";
import { childData, engagementData } from "@/lib/data";

const tabs = [
  { id: "overview", label: "Overview", icon: "dashboard" },
  { id: "children", label: "Children", icon: "child_care" },
  { id: "volunteers", label: "Volunteers", icon: "group" },
  { id: "curriculum", label: "Curriculum", icon: "menu_book" },
  { id: "reports", label: "Reports", icon: "analytics" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen overflow-hidden bg-[#FFF8F0]">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Navbar role="admin" />
        
        <div className="p-4 md:p-8 space-y-8 bg-[#FFF8F0] w-full max-w-7xl mx-auto pb-20 md:pb-8">
          
          {activeTab === "overview" && (
            <>
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <p className="text-sm font-medium text-[#6B3A2A]/60">Children Enrolled</p>
                  <div className="flex items-end justify-between mt-2">
                    <h3 className="text-3xl text-[#6B3A2A] font-bold">248</h3>
                    <span className="text-[#7B9E87] text-sm font-bold flex items-center">+12 <span className="material-symbols-outlined text-sm">trending_up</span></span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <p className="text-sm font-medium text-[#6B3A2A]/60">Home Visits</p>
                  <div className="flex items-end justify-between mt-2">
                    <h3 className="text-3xl text-[#6B3A2A] font-bold">312</h3>
                    <span className="text-[#7B9E87] text-sm font-bold flex items-center">+28 <span className="material-symbols-outlined text-sm">trending_up</span></span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <p className="text-sm font-medium text-[#6B3A2A]/60">Avg Milestones</p>
                  <div className="flex items-end justify-between mt-2">
                    <h3 className="text-3xl text-[#6B3A2A] font-bold">71%</h3>
                    <span className="text-[#7B9E87] text-sm font-bold flex items-center">+3% <span className="material-symbols-outlined text-sm">trending_up</span></span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <p className="text-sm font-medium text-[#6B3A2A]/60">Languages</p>
                  <div className="flex items-end justify-between mt-2">
                    <h3 className="text-3xl text-[#6B3A2A] font-bold">6</h3>
                    <span className="text-slate-400 text-sm font-bold">Stable</span>
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Progress by Domain */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-[#6B3A2A]">Milestone Progress by Domain</h4>
                    <span className="material-symbols-outlined text-slate-400">more_horiz</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="font-medium">Cognitive</span>
                        <span className="font-bold">80%</span>
                      </div>
                      <div className="w-full bg-[#A0522D]/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-[#A0522D] h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="font-medium">Language</span>
                        <span className="font-bold">63%</span>
                      </div>
                      <div className="w-full bg-[#A0522D]/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-[#A0522D]/70 h-full rounded-full" style={{ width: "63%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="font-medium">Motor</span>
                        <span className="font-bold">75%</span>
                      </div>
                      <div className="w-full bg-[#A0522D]/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-[#A0522D]/80 h-full rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="font-medium">Social</span>
                        <span className="font-bold">69%</span>
                      </div>
                      <div className="w-full bg-[#A0522D]/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-[#A0522D]/60 h-full rounded-full" style={{ width: "69%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Monthly Visit Frequency */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#A0522D]/5">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-[#6B3A2A]">Monthly Visit Frequency</h4>
                    <div className="flex gap-2">
                      <span className="bg-[#7B9E87]/10 text-[#7B9E87] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Target Met</span>
                    </div>
                  </div>
                  <div className="relative h-48 w-full mt-4 flex items-end justify-around pb-8">
                    <div className="relative flex flex-col items-center group w-1/4">
                      <div className="w-full bg-[#7B9E87]/20 rounded-t-lg transition-all h-[40%]" title="Jan: 220"></div>
                      <span className="absolute -bottom-6 text-xs font-bold text-slate-500">Jan</span>
                    </div>
                    <div className="relative flex flex-col items-center group w-1/4">
                      <div className="w-full bg-[#7B9E87]/40 rounded-t-lg transition-all h-[60%]" title="Feb: 265"></div>
                      <span className="absolute -bottom-6 text-xs font-bold text-slate-500">Feb</span>
                    </div>
                    <div className="relative flex flex-col items-center group w-1/4">
                      <div className="w-full bg-[#7B9E87] rounded-t-lg transition-all h-[80%]" title="Mar: 312"></div>
                      <span className="absolute -bottom-6 text-xs font-bold text-slate-500">Mar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Engagement Heatmap */}
              <div className="w-full mt-2">
                <EngagementHeatmap families={engagementData} />
              </div>

              {/* Child Growth Velocity Overview Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#A0522D]/5 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-[#A0522D]/5 flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold text-[#6B3A2A] flex items-center gap-2">
                      Aarav Sharma — Growth Velocity
                      <span className="bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">auto_awesome</span> AI-Powered
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col px-6 pb-2">
                  {childData.domains.map((domain, i) => (
                    <VelocityCard 
                      key={i} 
                      domainName={domain.name} 
                      percentage={domain.percentage} 
                      monthlyDeltas={domain.monthlyDeltas || []} 
                      compact={true} 
                    />
                  ))}
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs text-slate-400 italic">
                    Velocity is calculated from monthly milestone assessment data. Declining domains are automatically flagged for volunteer review.
                  </p>
                </div>
              </div>

              {/* AI Flags Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#A0522D]/5 overflow-hidden">
                <div className="p-6 border-b border-[#A0522D]/5 flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold text-[#6B3A2A] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#A0522D]">psychology</span>
                      AI Early Delay Detection
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">Real-time flags based on latest milestone reports</p>
                  </div>
                  <button className="text-sm font-bold text-[#A0522D] hover:underline">View All Flags</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#FFF8F0]">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-[#6B3A2A]/60 uppercase tracking-wider">Child Name</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#6B3A2A]/60 uppercase tracking-wider">Risk Level</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#6B3A2A]/60 uppercase tracking-wider">Primary Domain</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#6B3A2A]/60 uppercase tracking-wider">Velocity</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#6B3A2A]/60 uppercase tracking-wider">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#A0522D]/5">
                      <tr className="hover:bg-[#A0522D]/5 transition-colors">
                        <td className="px-6 py-4 font-semibold text-sm">Aarav Sharma</td>
                        <td className="px-6 py-4"><span className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold rounded-full">Medium</span></td>
                        <td className="px-6 py-4 text-sm">Language</td>
                        <td className="px-6 py-4 text-sm font-bold text-amber-500 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">arrow_upward</span>+8% Language</td>
                        <td className="px-6 py-4 text-sm italic text-slate-500">Increase reading sessions x2</td>
                      </tr>
                      <tr className="hover:bg-[#A0522D]/5 transition-colors">
                        <td className="px-6 py-4 font-semibold text-sm">Meera Patil</td>
                        <td className="px-6 py-4"><span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold rounded-full">High</span></td>
                        <td className="px-6 py-4 text-sm">Cognitive</td>
                        <td className="px-6 py-4 text-sm font-bold text-red-600 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">arrow_downward</span>-1% Motor</td>
                        <td className="px-6 py-4 text-sm italic text-slate-500">Schedule specialist review</td>
                      </tr>
                      <tr className="hover:bg-[#A0522D]/5 transition-colors">
                        <td className="px-6 py-4 font-semibold text-sm">Rohan Desai</td>
                        <td className="px-6 py-4"><span className="px-3 py-1 bg-[#7B9E87]/10 text-[#7B9E87] text-xs font-bold rounded-full">Low</span></td>
                        <td className="px-6 py-4 text-sm">Social</td>
                        <td className="px-6 py-4 text-sm font-bold text-emerald-600 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">arrow_upward</span>+3% All</td>
                        <td className="px-6 py-4 text-sm italic text-slate-500">Continue current track</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-slate-50 flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-sm">info</span>
                  <p className="text-[10px] text-slate-400">AI prediction accuracy: 94.2% based on cross-referenced professional pediatric screenings in last 12 months.</p>
                </div>
              </div>

              {/* Volunteer Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#7B9E87]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#7B9E87]/10 flex items-center justify-center text-[#7B9E87]">
                      <span className="material-symbols-outlined">stars</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#6B3A2A]">Top Performer</h5>
                      <p className="text-sm text-slate-400">Sneha K. - 45 visits</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#A0522D]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center text-[#A0522D]">
                      <span className="material-symbols-outlined">history_edu</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#6B3A2A]">Training Progress</h5>
                      <p className="text-sm text-slate-400">68% Avg. Completion</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#F59E0B]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                      <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#6B3A2A]">Needs Follow-up</h5>
                      <p className="text-sm text-slate-400">Anita R. - Missed 2 visits</p>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}

          {activeTab !== "overview" && (
            <div className="flex items-center justify-center h-64 bg-white rounded-2xl border border-[#A0522D]/5 shadow-sm">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">construction</span>
                <h3 className="text-lg font-bold text-slate-500">Under Construction</h3>
                <p className="text-sm text-slate-400">This module is currently being developed.</p>
              </div>
            </div>
          )}

        </div>
      </main>
      <BottomTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
