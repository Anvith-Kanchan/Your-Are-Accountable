// app/components/AiInsights.jsx
'use client';

import { useState, useEffect } from 'react';

export default function AiInsights({ userId }) {
  const [insight, setInsight] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const response = await fetch(`/api/insights?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch insights');
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setInsight(data.insight);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (userId) {
      fetchInsights();
    }
  }, [userId]);

  const formatText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-[#f5f5f7]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] overflow-hidden">
        <div className="px-7 pt-7 pb-7">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3820/3820331.png"
              alt="AI"
              className="w-5 h-5 opacity-60 invert"
            />
            <h2 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight">AI Insights</h2>
          </div>

          {/* Shimmer skeleton */}
          <div className="space-y-3">
            <div className="h-3 rounded-full bg-white/[0.04] animate-shimmer w-full"></div>
            <div className="h-3 rounded-full bg-white/[0.04] animate-shimmer w-4/5"></div>
            <div className="h-3 rounded-full bg-white/[0.04] animate-shimmer w-3/5"></div>
            <div className="h-8"></div>
            <div className="h-3 rounded-full bg-white/[0.04] animate-shimmer w-full"></div>
            <div className="h-3 rounded-full bg-white/[0.04] animate-shimmer w-2/3"></div>
          </div>

          <p className="text-[12px] text-[#3a3a3c] mt-6 text-center">
            Analyzing your patterns...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] overflow-hidden">
        <div className="px-7 pt-7 pb-7">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3820/3820331.png"
              alt="AI"
              className="w-5 h-5 opacity-60 invert"
            />
            <h2 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight">AI Insights</h2>
          </div>

          <div className="rounded-xl bg-[#ff453a]/10 border border-[#ff453a]/20 px-5 py-4">
            <div className="flex items-start gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                alt="Error"
                className="w-4 h-4 mt-0.5 opacity-70 invert"
                style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(-20deg)' }}
              />
              <p className="text-[13px] text-[#ff453a]/90 leading-relaxed">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] overflow-hidden">
      <div className="px-7 pt-7 pb-7">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3820/3820331.png"
              alt="AI"
              className="w-5 h-5 opacity-60 invert"
            />
            <h2 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight">AI Insights</h2>
          </div>
          <span className="text-[11px] text-[#30d158] font-medium bg-[#30d158]/10 px-2.5 py-1 rounded-full">
            Live
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-5"></div>

        {/* Insight content */}
        <div className="text-[14px] text-[#86868b] leading-[1.7] whitespace-pre-wrap">
          {formatText(insight)}
        </div>

        {/* Powered by tag */}
        <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
            alt="AI chip"
            className="w-3.5 h-3.5 opacity-40 invert"
          />
          <p className="text-[11px] text-[#3a3a3c]">
            Powered by AI analysis of your entries
          </p>
        </div>
      </div>
    </div>
  );
}
