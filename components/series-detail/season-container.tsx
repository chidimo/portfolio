"use client";

import { useState } from "react";
import type { Season, Show } from "lib/series-tracker/types";
import { useSeriesTracker } from "components/series-tracker/series-tracker-context";
import { EpisodeCard } from "./episode-card";
import { Progress } from "components/progress";

export const SeasonContainer = ({
  season,
  show,
  hideWatched,
}: {
  season: Season;
  show: Show;
  hideWatched: boolean;
}) => {
  const { updateShow } = useSeriesTracker();
  const [upTo, setUpTo] = useState<Record<number, string>>({});

  const toggleSeason = (seasonNumber: number, watched: boolean) => {
    if (!show) return;
    const nextSeasons = (show.seasons || []).map((s) => {
      if (s.seasonNumber !== seasonNumber) return s;
      return {
        ...s,
        episodes: (s.episodes || []).map((e) => ({ ...e, watched })),
      };
    });
    updateShow({ ...show, seasons: nextSeasons });
  };

  const markUpTo = (seasonNumber: number, n: number) => {
    if (!show) return;
    if (!Number.isFinite(n) || n < 1) return;
    const nextSeasons = (show.seasons || []).map((sn) => {
      if (sn.seasonNumber !== seasonNumber) return sn;
      return {
        ...sn,
        episodes: sn.episodes.map((ep) => ({
          ...ep,
          watched: (ep.episodeNumber ?? 0) <= n,
        })),
      };
    });
    updateShow({ ...show, seasons: nextSeasons });
  };

  return (
    <div
      key={season.seasonNumber ?? season.title}
      className="border rounded p-3"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-semibold">{season.title}</h2>

          <Progress
            className="mt-2"
            label="Progress"
            current={season.episodes.filter((e) => e.watched).length}
            total={season.episodes.length}
            showFraction
            showPercentage
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <button
              className="text-sm text-blue-700 text-left"
              onClick={() => {
                const val = Number.parseInt(
                  upTo[season.seasonNumber ?? 0] || "0",
                  10
                );
                if (Number.isFinite(val) && val > 0) {
                  markUpTo(season.seasonNumber ?? 0, val);
                } else {
                  toggleSeason(season.seasonNumber ?? 0, true);
                }
              }}
            >
              {(() => {
                const val = Number.parseInt(
                  upTo[season.seasonNumber ?? 0] || "0",
                  10
                );
                return Number.isFinite(val) && val > 0
                  ? `Mark up to E${val}`
                  : "Mark season watched";
              })()}
            </button>
            <button
              className="text-sm text-blue-700 text-left"
              onClick={() => toggleSeason(season.seasonNumber ?? 0, false)}
            >
              Mark season unwatched
            </button>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>Up to</span>
            <input
              type="number"
              min={1}
              max={Math.max(1, season.episodes.length)}
              className="w-16 border rounded px-2 py-1"
              value={upTo[season.seasonNumber ?? 0] ?? ""}
              onChange={(e) =>
                setUpTo((prev) => ({
                  ...prev,
                  [season.seasonNumber ?? 0]: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <ul className="divide-y">
        {season.episodes
          .filter((e) => (hideWatched ? !e.watched : true))
          .map((e) => (
            <EpisodeCard
              key={e.episodeNumber ?? e.title}
              episode={e}
              season={season}
              show={show}
            />
          ))}
      </ul>
    </div>
  );
};
