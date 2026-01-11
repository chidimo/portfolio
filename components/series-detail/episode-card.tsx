"use client";

import { useMemo, useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type {
  Episode,
  Season,
  Show,
  TrackerState,
} from "lib/series-tracker/types";
import { isWithinDays } from "utils/datetime-utils";

export const EpisodeCard = ({
  episode,
  season,
  show,
}: {
  episode: Episode;
  season: Season;
  show: Show;
}) => {
  const [state, setState] = useState<TrackerState>({ shows: [] });

  const saveShow = (next: Show) => {
    const updated: TrackerState = {
      ...state,
      shows: state.shows.map((s) => (s.imdbId === next.imdbId ? next : s)),
    };

    StorageRepo.setState(updated);
    setState(updated);
  };

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
    saveShow({ ...show, seasons: nextSeasons });
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
    if (!show || !show.tentativeNextAirDate || !show.tentativeNextEpisode)
      return new Map<string, string>();
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

  const formatTentative = (iso: string) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    const weekdays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    const day = d.getDate();
    const suffix = (n: number) => {
      const j = n % 10,
        k = n % 100;
      if (j === 1 && k !== 11) return "st";
      if (j === 2 && k !== 12) return "nd";
      if (j === 3 && k !== 13) return "rd";
      return "th";
    };
    return `${weekdays[d.getDay()]} ${day}${suffix(day)} ${
      months[d.getMonth()]
    }, ${d.getFullYear()}`;
  };

  return (
    <li
      key={episode.episodeNumber ?? episode.title}
      className="py-2 flex items-center justify-between"
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
              <span className="inline-flex items-center rounded bg-yellow-100 text-yellow-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
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
                    <span className="inline-flex items-center rounded bg-yellow-100 text-yellow-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
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
