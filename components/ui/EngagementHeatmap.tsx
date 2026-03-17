"use client";

import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";

function getDetailsByScore(score: number) {
  switch (score) {
    case 3: return "Visit: yes, Activity: yes, Curriculum: yes";
    case 2: return "Visit: yes, Activity: yes, Curriculum: no"; // Or generic
    case 1: return "Visit: no, Activity: yes, Curriculum: no";
    case 0: return "Visit: no, Activity: no, Curriculum: no";
    default: return "";
  }
}

interface FamilyEngagement {
  parentName: string;
  childName: string;
  scores: number[];
}

export function EngagementHeatmap({ families }: { families: FamilyEngagement[] }) {
  const { showToast } = useAppContext();
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  const [assignedFamilies, setAssignedFamilies] = useState<Set<string>>(new Set());

  // Define colors based on score
  const getCellColor = (score: number) => {
    switch (score) {
      case 3: return "bg-[#A0522D] text-white"; // 100% opacity
      case 2: return "bg-[#A0522D]/60 text-white"; // 60% opacity
      case 1: return "bg-[#A0522D]/25 text-slate-500"; // 25% opacity
      case 0: return "bg-[#F3EFEC] text-slate-400"; // sand grey
      default: return "bg-[#F3EFEC]";
    }
  };

  const calculateTrend = (scores: number[]) => {
    if (scores.length < 4) return { label: "Unknown", color: "text-slate-400", arrow: "horizontal_rule" };
    const avgRecent = (scores[2] + scores[3]) / 2;
    const avgPast = (scores[0] + scores[1]) / 2;
    
    if (avgRecent > avgPast + 0.25) return { label: "Improving", color: "text-emerald-600", arrow: "arrow_upward" };
    if (avgRecent < avgPast - 0.25) return { label: "Fading", color: "text-red-600", arrow: "arrow_downward" };
    return { label: "Stable", color: "text-blue-500", arrow: "trending_flat" };
  };

  const handleAssign = (family: FamilyEngagement) => {
    if (assignedFamilies.has(family.parentName)) return;
    
    showToast(`Follow-up visit assigned for ${family.parentName} — Sneha Jadhav notified`);
    setAssignedFamilies(prev => new Set(prev).add(family.parentName));
  };

  const outreachRequired = families.filter(fam => fam.scores[2] <= 1 && fam.scores[3] <= 1);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col w-full font-nunito">
      
      {/* Header & Legend */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-[#6B3A2A]">Family Engagement Heatmap — Last 4 Weeks</h2>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border border-emerald-200">
            Live Tracking
          </span>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-[#F3EFEC]"></div> No Activity</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-[#A0522D]/25"></div> Low</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-[#A0522D]/60"></div> Moderate</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-[#A0522D]"></div> Fully Engaged</div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="font-medium text-slate-400 text-sm text-left pb-2 w-48">Family</th>
              <th className="font-semibold text-slate-600 text-sm text-center pb-2 w-16">Week 1</th>
              <th className="font-semibold text-slate-600 text-sm text-center pb-2 w-16">Week 2</th>
              <th className="font-semibold text-slate-600 text-sm text-center pb-2 w-16">Week 3</th>
              <th className="font-semibold text-slate-600 text-sm text-center pb-2 w-16">Week 4</th>
              <th className="font-semibold text-slate-400 text-sm text-left pl-6 pb-2">Trend</th>
            </tr>
          </thead>
          <tbody>
            {families.map((fam, rowIndex) => {
              const trend = calculateTrend(fam.scores);
              const isEven = rowIndex % 2 === 1; // using odd row index for the "even" row logic

              return (
                <tr key={rowIndex} className={`border-t border-slate-100 ${isEven ? 'bg-[#FDFBF9]' : 'bg-white'}`}>
                  {/* Name cell */}
                  <td className="py-2 pl-2">
                    <p className="font-medium text-sm text-[#6B3A2A]">{fam.parentName}</p>
                    <p className="text-xs text-slate-400 font-sans">{fam.childName}</p>
                  </td>
                  
                  {/* 4 week cells */}
                  {fam.scores.map((score, colIndex) => {
                    const cellKey = `${rowIndex}-${colIndex}`;
                    const isHovered = hoveredCell === cellKey;
                    
                    return (
                      <td key={colIndex} className="p-1">
                        <div className="relative flex justify-center items-center">
                          <div 
                            className={`w-12 h-12 rounded-lg ${getCellColor(score)} flex items-center justify-center font-bold text-sm shadow-sm cursor-help hover:ring-2 ring-[#6B3A2A]/20 transition-all`}
                            onMouseEnter={() => setHoveredCell(cellKey)}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            {score}
                          </div>
                          
                          {/* Tooltip */}
                          {isHovered && (
                            <div className="absolute bottom-full mb-2 z-10 w-48 bg-slate-800 text-white text-xs p-2 rounded shadow-lg pointer-events-none transform -translate-x-1/2 left-1/2 text-center fade-in">
                              <p className="font-medium text-amber-200 mb-0.5">Score: {score}/3</p>
                              {getDetailsByScore(score)}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                  
                  {/* Trend */}
                  <td className="pl-6 align-middle">
                    <div className={`flex items-center gap-1 font-bold text-sm ${trend.color}`}>
                      <span className="material-symbols-outlined text-lg">{trend.arrow}</span>
                      {trend.label}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Outreach Section */}
      {outreachRequired.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-bold text-[#6B3A2A]">Families Needing Outreach</h3>
            <span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full text-xs">
              {outreachRequired.length} At Risk
            </span>
          </div>
          
          <div className="flex flex-col gap-3">
            {outreachRequired.map((fam, idx) => {
              const isAssigned = assignedFamilies.has(fam.parentName);
              
              return (
                <div key={idx} className="bg-[#FFFDFB] rounded-xl border border-[#A0522D]/10 border-l-4 border-l-red-500 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  
                  <div className="flex items-center gap-6">
                    <div>
                      <h4 className="font-bold text-[#6B3A2A]">{fam.parentName}</h4>
                      <p className="text-xs text-slate-400">Child: {fam.childName}</p>
                    </div>
                    
                    {/* Mini history */}
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">History</span>
                      {fam.scores.map((s, i) => (
                        <div key={i} className={`w-4 h-4 rounded-sm ${getCellColor(s)}`} title={`Week ${i+1}: ${s}`}></div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAssign(fam)}
                    disabled={isAssigned}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm ${
                      isAssigned 
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed shadow-none' 
                        : 'bg-[#A0522D] text-white hover:bg-[#8A4526] hover:shadow'
                    }`}
                  >
                    {isAssigned ? "Assigned" : "Assign Follow-up Visit"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
