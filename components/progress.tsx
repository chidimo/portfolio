"use client";

import React from "react";

type ProgressProps = {
  current: number;
  total: number;
  label?: string;
  className?: string;
  barHeightClassName?: string; // e.g. "h-2" or "h-3"
  showFraction?: boolean;
  showPercentage?: boolean;
};

export const Progress: React.FC<ProgressProps> = ({
  current,
  total,
  label,
  className,
  barHeightClassName = "h-2",
  showFraction = true,
  showPercentage = true,
}) => {
  const safeTotal = Math.max(0, total || 0);
  const safeCurrent = Math.min(Math.max(0, current || 0), safeTotal);
  const pct = safeTotal ? Math.round((safeCurrent / safeTotal) * 100) : 0;

  return (
    <div className={className}>
      <div className="text-xs text-gray-600 mb-1">
        {label ? <span className="font-medium">{label}: </span> : null}
        {showFraction ? (
          <span>
            {safeCurrent}/{safeTotal}
          </span>
        ) : null}
        {showFraction && showPercentage ? <span> · </span> : null}
        {showPercentage ? <span>{pct}%</span> : null}
      </div>
      <div
        className={`${barHeightClassName} w-full bg-gray-200 rounded overflow-hidden`}
      >
        <div className="h-full bg-green-600" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
