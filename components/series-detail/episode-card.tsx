"use client";

import { useMemo } from "react";
import type { Episode, Season, Show } from "lib/series-tracker/types";
import { isWithinDays } from "utils/datetime-utils";
import { useSeriesTracker } from "components/series-tracker/series-tracker-context";
import { formatTentative } from "utils/formatters";

export const EpisodeCard = ({
  show,
  season,
  episode,
}: {
  show: Show;
  season: Season;
  episode: Episode;
}) => {
  const { updateShow } = useSeriesTracker();

  const toggleEpisode = (
    seasonNumber: number,
    episodeNumber?: number,
    watched?: boolean
  ) => {
    if (!show) return;
    if (!episodeNumber) return;
    const nextSeasons = (show.seasons || []).map((s) => {
      if (s.seasonNumber !== seasonNumber) return s;
      return {
        ...s,
        episodes: (s.episodes || []).map((e) =>
          e.episodeNumber === episodeNumber
            ? { ...e, watched: watched ?? !e.watched }
            : e
        ),
      };
    });
    updateShow({ ...show, seasons: nextSeasons });
  };

  const mostRecentSeasonNumber = useMemo(() => {
    const nums = (show?.seasons || [])
      .map((s) => s.seasonNumber)
      .filter((n): n is number => typeof n === "number");
    return nums.length ? Math.max(...nums) : undefined;
  }, [show]);

  const allEpisodesFlat = useMemo(() => {
    if (!show || typeof mostRecentSeasonNumber !== "number")
      return [] as {
        seasonNumber: number;
        episodeNumber: number;
        title: string;
      }[];
    const sn = (show.seasons || []).find(
      (s) => s.seasonNumber === mostRecentSeasonNumber
    );
    if (!sn)
      return [] as {
        seasonNumber: number;
        episodeNumber: number;
        title: string;
      }[];
    const eps = [...(sn.episodes || [])]
      .filter((e) => typeof e.episodeNumber === "number")
      .sort((a, b) => (a.episodeNumber ?? 0) - (b.episodeNumber ?? 0));
    return eps.map((e) => ({
      seasonNumber: mostRecentSeasonNumber,
      episodeNumber: e.episodeNumber || 0,
      title: e.title,
    }));
  }, [show, mostRecentSeasonNumber]);

  const tentativeDates = useMemo(() => {
    if (!show?.tentativeNextAirDate || !show.tentativeNextEpisode) {
      return new Map<string, string>();
    }
    const startDate = Date.parse(show.tentativeNextAirDate);
    const freq = Math.max(1, show.tentativeFrequencyDays || 7);
    if (Number.isNaN(startDate)) return new Map<string, string>();
    const key = (s: number, e: number) => `s${s}-e${e}`;
    const map = new Map<string, string>();
    // find index of baseline
    const idx = allEpisodesFlat.findIndex(
      (x) =>
        x.seasonNumber === show.tentativeNextEpisode!.seasonNumber &&
        x.episodeNumber === show.tentativeNextEpisode!.episodeNumber
    );
    if (idx < 0) return map;
    let current = new Date(startDate);
    for (let i = idx; i < allEpisodesFlat.length; i++) {
      const ep = allEpisodesFlat[i];
      map.set(key(ep.seasonNumber, ep.episodeNumber), current.toISOString());
      // advance for next
      const next = new Date(current);
      next.setDate(next.getDate() + freq);
      current = next;
    }
    return map;
  }, [show, allEpisodesFlat]);

  return (
    <li
      key={episode.episodeNumber ?? episode.title}
      className={
        "py-2 px-3 flex items-center justify-between rounded " +
        (episode.watched ? "bg-gray-50 opacity-70" : "")
      }
    >
      <div>
        <div className="text-sm font-medium">
          {episode.episodeNumber ? `E${episode.episodeNumber} · ` : ""}
          {episode.title}
        </div>
        {episode.releaseDate ? (
          <div className="text-xs text-gray-600 flex items-center gap-2">
            <span>Air date: {formatTentative(episode.releaseDate)}</span>
            {isWithinDays(episode.releaseDate, 3) ? (
              <span className="inline-flex items-center rounded bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                Soon
              </span>
            ) : null}
          </div>
        ) : null}
        {typeof season.seasonNumber === "number" &&
        typeof episode.episodeNumber === "number"
          ? (() => {
              const k = `s${season.seasonNumber}-e${episode.episodeNumber}`;
              const val = tentativeDates.get(k);
              return val ? (
                <div className="text-xs text-blue-700 flex items-center gap-2">
                  <span>Tentative air date: {formatTentative(val)}</span>
                  {isWithinDays(val, 3) ? (
                    <span className="inline-flex items-center rounded bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      Soon
                    </span>
                  ) : null}
                </div>
              ) : null;
            })()
          : null}
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={!!episode.watched}
          onChange={(ev) =>
            toggleEpisode(
              season.seasonNumber ?? 0,
              episode.episodeNumber,
              ev.target.checked
            )
          }
        />
        Watched
      </label>
    </li>
  );
};
