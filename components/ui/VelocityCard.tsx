import React from "react";

interface VelocityCardProps {
  domainName: string;
  percentage: number;
  monthlyDeltas: number[];
  compact?: boolean;
}

export function VelocityCard({ domainName, percentage, monthlyDeltas, compact = false }: VelocityCardProps) {
  // Core calculations
  const latestDelta = monthlyDeltas[monthlyDeltas.length - 1] || 0;
  const previousDelta = monthlyDeltas[monthlyDeltas.length - 2] || 0;

  // Trend Status Calculation
  let trendStatus: "Rising" | "Slowing" | "Declining" | "Steady" = "Steady";
  let trendColor = "text-blue-500";
  let borderColor = "border-blue-500";
  let bgTheme = "bg-blue-50";
  let borderTheme = "border-blue-200";
  let arrow = "arrow_forward";

  if (latestDelta <= 0) {
    trendStatus = "Declining";
    trendColor = "text-red-600";
    borderColor = "border-l-red-500";
    bgTheme = "bg-red-50";
    borderTheme = "border-red-200";
    arrow = "arrow_downward";
  } else if (latestDelta >= previousDelta + 1) {
    trendStatus = "Rising";
    trendColor = "text-emerald-600";
    borderColor = "border-l-emerald-500";
    bgTheme = "bg-emerald-50";
    borderTheme = "border-emerald-200";
    arrow = "arrow_upward";
  } else if (latestDelta < previousDelta - 1 && latestDelta > 0) {
    trendStatus = "Slowing";
    trendColor = "text-amber-500";
    borderColor = "border-l-amber-500";
    bgTheme = "bg-amber-50";
    borderTheme = "border-amber-200";
    arrow = "trending_flat"; // using flat arrow for slowing but positive
  } else {
    trendStatus = "Steady";
    trendColor = "text-blue-500";
    borderColor = "border-l-blue-500";
    bgTheme = "bg-blue-50";
    borderTheme = "border-blue-200";
    arrow = "arrow_forward";
  }
  
  // Custom Sudden Slowdown Alert
  const suddenSlowdown = previousDelta >= 5 && latestDelta <= 1;

  // Prediction Calculation
  const target = 80;
  let predictionText = "";
  if (percentage >= target) {
    predictionText = "Already achieved";
  } else if (latestDelta <= 0) {
    predictionText = "Declining — recommend volunteer review";
  } else {
    const monthsToTarget = Math.ceil((target - percentage) / latestDelta);
    // Base date is March 2025
    const date = new Date(2025, 2); // Month is 0-indexed (2 = March)
    date.setMonth(date.getMonth() + monthsToTarget);
    const monthYear = date.toLocaleString("en-US", { month: "long", year: "numeric" });
    predictionText = `On track to reach 80% by ${monthYear}`;
  }

  // Sparkline builder
  const renderSparkline = () => {
    // A simple hardcoded sparkline logic
    // We map the 4 data points to a fixed 100x30 SVG box.
    const maxVal = Math.max(...monthlyDeltas, 5); // ensure some vertical scale
    const minVal = Math.min(...monthlyDeltas, -5);
    const range = maxVal - minVal || 1;
    
    // Map to Y coordinates (0 at top, 30 at bottom)
    const getY = (val: number) => 30 - ((val - minVal) / range) * 20 - 5; 
    
    // 4 points = X coordinates 10, 36, 62, 90
    const xCoords = [10, 36, 62, 90];
    const points = monthlyDeltas.map((val, i) => `${xCoords[i]},${getY(val)}`).join(" ");
    
    // Extract base color hex for the sparkline styling based on trend
    let strokeHex = "#3B82F6"; // blue
    if (trendStatus === "Declining") strokeHex = "#DC2626"; // red
    if (trendStatus === "Rising") strokeHex = "#059669"; // emerald
    if (trendStatus === "Slowing") strokeHex = "#F59E0B"; // amber

    return (
      <div className="mt-4">
        <svg width="100" height="30" viewBox="0 0 100 30" className="overflow-visible">
           <polyline points={points} fill="none" stroke={strokeHex} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
           {monthlyDeltas.map((val, i) => (
             <circle key={i} cx={xCoords[i]} cy={getY(val)} r="3" fill="white" stroke={strokeHex} strokeWidth="1.5" />
           ))}
        </svg>
        <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">Last 4 months</p>
      </div>
    );
  };

  if (compact) {
    return (
      <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-3 w-1/4">
          <span className="font-bold text-slate-700 text-sm">{domainName}</span>
        </div>
        
        <div className={`flex items-center gap-1 font-bold text-sm w-1/6 ${trendColor}`}>
          <span className="material-symbols-outlined text-sm">{arrow}</span>
          {latestDelta > 0 ? "+" : ""}{latestDelta}%
        </div>
        
        <div className="w-1/4 px-4">
           <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
             <div className="bg-[#A0522D] h-full rounded-full" style={{ width: `${percentage}%` }}></div>
           </div>
        </div>
        
        <div className="w-1/4 text-xs text-slate-500 italic truncate pr-4">
          {predictionText}
        </div>
        
        <div className="w-auto flex justify-end">
          <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${bgTheme} ${trendColor} ${borderTheme} border`}>
            {trendStatus}
          </span>
        </div>
      </div>
    );
  }

  // Full Mode Card
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative border-l-4 ${borderColor} flex flex-col`}>
      {/* Sudden Slowdown Alert Banner */}
      {suddenSlowdown && (
        <div className="bg-amber-50 px-4 py-2 border-b border-amber-100 flex gap-2 items-start shrink-0">
          <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">warning</span>
          <p className="text-xs text-amber-800 font-medium">
            <strong>Sudden slowdown detected.</strong> This domain grew significantly last month but barely grew this month. Consider reviewing activities.
          </p>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Header: Domain Name & Velocity Delta */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-lg font-bold text-slate-800">{domainName}</h3>
          <div className={`flex items-center gap-1 font-bold text-lg ${trendColor}`}>
            <span className="material-symbols-outlined font-bold">{arrow}</span>
            <span>{latestDelta > 0 ? "+" : ""}{latestDelta}%</span>
            <span className="text-xs font-medium opacity-80 self-end mb-0.5 ml-1">this month</span>
          </div>
        </div>

        {/* Progress Bar & Current Status */}
        <div className="mb-2">
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden relative">
            <div className="bg-[#A0522D] h-full rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
            {/* Goal Marker at 80% */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-slate-300 left-[80%] z-10 hidden sm:block"></div>
          </div>
          <div className="flex justify-between items-center mt-2">
             <span className="text-[#A0522D] font-bold text-xl">{percentage}%</span>
             <span className="text-xs text-slate-400 font-medium">Goal: 80%</span>
          </div>
        </div>

        {/* Sparkline History */}
        <div className="flex-1">
          {renderSparkline()}
        </div>
      </div>

      {/* Footer: Trend Badge & Prediction */}
      <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center gap-3 shrink-0">
        <span className={`text-xs font-bold uppercase px-2 py-1 rounded-md ${bgTheme} ${trendColor} ${borderTheme} border whitespace-nowrap`}>
          {trendStatus}
        </span>
        <span className={`text-xs font-medium leading-tight ${trendStatus === 'Declining' ? 'text-red-600 font-bold' : 'text-slate-500'}`}>
          {predictionText}
        </span>
      </div>
    </div>
  );
}
