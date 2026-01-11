"use client";

import { useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { Season, Show, TrackerState } from "lib/series-tracker/types";
import { EpisodeCard } from "./episode-card";

export const SeasonContainer = ({
  season,
  show,
  hideWatched,
}: {
  season: Season;
  show: Show;
  hideWatched: boolean;
}) => {
  const [state, setState] = useState<TrackerState>({ shows: [] });
  const [upTo, setUpTo] = useState<Record<number, string>>({});

  const saveShow = (next: Show) => {
    const updated: TrackerState = {
      ...state,
      shows: state.shows.map((s) => (s.imdbId === next.imdbId ? next : s)),
    };

    StorageRepo.setState(updated);
    setState(updated);
  };

  const toggleSeason = (seasonNumber: number, watched: boolean) => {
    if (!show) return;
    const nextSeasons = (show.seasons || []).map((s) => {
      if (s.seasonNumber !== seasonNumber) return s;
      return {
        ...s,
        episodes: (s.episodes || []).map((e) => ({ ...e, watched })),
      };
    });
    saveShow({ ...show, seasons: nextSeasons });
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
    saveShow({ ...show, seasons: nextSeasons });
  };

  return (
    <div
      key={season.seasonNumber ?? season.title}
      className="border rounded p-3"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-semibold">{season.title}</h2>

          <div className="mt-2">
            <div className="text-xs text-gray-600 mb-1">
              Progress: {season.episodes.filter((e) => e.watched).length}/
              {season.episodes.length}
            </div>
            <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{
                  width: `${
                    season.episodes.length
                      ? Math.round(
                          (season.episodes.filter((e) => e.watched).length /
                            season.episodes.length) *
                            100
                        )
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
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
