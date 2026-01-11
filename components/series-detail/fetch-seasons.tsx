"use client";

import { useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type {
  Episode,
  Season,
  Show,
  TrackerState,
} from "lib/series-tracker/types";
import { getSeason, getTitle } from "lib/series-tracker/omdb";

export const FetchSeasons = ({ show }: { show: Show }) => {
  const [state, setState] = useState<TrackerState>({ shows: [] });

  const saveShow = (next: Show) => {
    const updated: TrackerState = {
      ...state,
      shows: state.shows.map((s) => (s.imdbId === next.imdbId ? next : s)),
    };

    StorageRepo.setState(updated);
    setState(updated);
  };

  const fetchAllSeasons = async () => {
    const full = await getTitle(show.imdbId);
    const total = full?.totalSeasons
      ? Number(full.totalSeasons)
      : show.totalSeasons ?? 0;
    const capped = Math.max(0, Math.min(total, 30));
    const seasons: Season[] = [];
    for (let i = 1; i <= capped; i++) {
      const data = await getSeason(show.imdbId, i);
      if (!data || data.Response === "False") continue;
      const existing = (show.seasons || []).find((s) => s.seasonNumber === i);
      const existingWatched = new Map<number, boolean>();
      existing?.episodes.forEach((e) => {
        if (typeof e.episodeNumber === "number")
          existingWatched.set(e.episodeNumber, !!e.watched);
      });
      const eps: Episode[] = (data.Episodes || []).map((ep) => {
        const epNo = ep.Episode ? Number(ep.Episode) : undefined;
        return {
          title: ep.Title,
          releaseDate:
            ep.Released && ep.Released !== "N/A"
              ? new Date(ep.Released).toISOString()
              : undefined,
          episodeNumber: epNo,
          watched: epNo ? existingWatched.get(epNo) ?? false : false,
        };
      });
      seasons.push({
        title: `${data.Title ?? show.title} - Season ${data.Season ?? i}`,
        seasonNumber: data.Season ? Number(data.Season) : i,
        episodes: eps,
      });
    }
    // compute next upcoming air date from all episodes with a future release date
    const futureTimestamps: number[] = [];
    const now = Date.now();
    seasons.forEach((sn) =>
      sn.episodes.forEach((ep) => {
        if (ep.releaseDate) {
          const t = Date.parse(ep.releaseDate);
          if (!Number.isNaN(t) && t > now) futureTimestamps.push(t);
        }
      })
    );
    const nextAirDate = futureTimestamps.length
      ? new Date(Math.min(...futureTimestamps)).toISOString()
      : undefined;

    const updated = {
      ...show,
      seasons,
      totalSeasons: capped || show.totalSeasons,
      nextAirDate,
    };
    saveShow(updated);
  };

  return (
    <button className="text-blue-700" onClick={fetchAllSeasons}>
      Fetch seasons
    </button>
  );
};
