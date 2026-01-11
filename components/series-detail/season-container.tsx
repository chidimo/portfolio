"use client";

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

  return (
    <div
      key={season.seasonNumber ?? season.title}
      className="border rounded"
    >
      <div className="flex items-center justify-between mb-2 p-3">
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
              onClick={() => toggleSeason(season.seasonNumber ?? 0, true)}
            >
              Mark season watched
            </button>
            <button
              className="text-sm text-blue-700 text-left"
              onClick={() => toggleSeason(season.seasonNumber ?? 0, false)}
            >
              Mark season unwatched
            </button>
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
