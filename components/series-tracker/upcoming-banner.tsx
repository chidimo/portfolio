"use client";

import React from "react";
import type { Show } from "lib/series-tracker/types";
import { findUpcomingForShow } from "lib/series-tracker/upcoming";
import { formatTentative, getPaddedNumber } from "utils/formatters";

export const UpcomingBanner = ({
  show,
  days = 3,
  className = "",
}: {
  show?: Show;
  days?: number;
  className?: string;
}) => {
  const upcoming = findUpcomingForShow(show, days);
  if (!upcoming) return null;
  const dateStr = new Date(upcoming.dateISO).toISOString();
  const padSeason = getPaddedNumber(upcoming.seasonNumber);
  const padEpisode = getPaddedNumber(upcoming.episodeNumber);
  const code =
    padSeason && padEpisode ? `S${padSeason}.E${padEpisode}` : undefined;
  const title = upcoming.title || "Upcoming episode";

  return (
    <div
      className={`w-fit mb-2 rounded border border-blue-200 bg-blue-50 text-blue-800 px-2 py-1 text-xs ${className}`}
    >
      <span className="font-semibold">Upcoming:</span>{" "}
      {code ? <span className="font-mono mr-1">{code}</span> : null}
      <span>{`${title} – ${formatTentative(dateStr)}`}</span>
    </div>
  );
};
