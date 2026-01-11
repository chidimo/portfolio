import type { Show } from "lib/series-tracker/types";
import { isWithinDays } from "utils/datetime-utils";

export type UpcomingInfo = {
  seasonNumber?: number;
  episodeNumber?: number;
  title: string;
  dateISO: string;
};

function hasUpcoming(x: UpcomingInfo | null): x is UpcomingInfo {
  return !!x && typeof x.dateISO === "string";
}

export const findUpcomingForShow = (
  show?: Show,
  days = 3
): UpcomingInfo | null => {
  if (!show) return null;

  // Candidate from scheduled release dates in seasons
  let seasonCandidate: UpcomingInfo | null = null;
  const now = Date.now();
  (show.seasons || []).forEach((sn) => {
    (sn.episodes || []).forEach((ep) => {
      if (!ep.releaseDate) return;
      if (!isWithinDays(ep.releaseDate, days)) return;
      const t = Date.parse(ep.releaseDate);
      if (Number.isNaN(t) || t < now) return;
      if (!seasonCandidate || t < Date.parse(seasonCandidate.dateISO)) {
        seasonCandidate = {
          seasonNumber: sn.seasonNumber,
          episodeNumber: ep.episodeNumber,
          title: ep.title,
          dateISO: ep.releaseDate,
        };
      }
    });
  });

  // Candidate from tentative schedule
  let tentativeCandidate: UpcomingInfo | null = null;
  if (
    show.tentativeNextAirDate &&
    isWithinDays(show.tentativeNextAirDate, days)
  ) {
    const base = show.tentativeNextEpisode;
    const title = (show.seasons || [])
      .find((s) => s.seasonNumber === base?.seasonNumber)
      ?.episodes?.find((e) => e.episodeNumber === base?.episodeNumber)?.title;
    tentativeCandidate = {
      seasonNumber: base?.seasonNumber,
      episodeNumber: base?.episodeNumber,
      title:
        title ||
        (base
          ? `S${base.seasonNumber} · E${base.episodeNumber}`
          : "Upcoming episode"),
      dateISO: show.tentativeNextAirDate,
    };
  }

  if (hasUpcoming(seasonCandidate) && hasUpcoming(tentativeCandidate)) {
    // At this point, both are UpcomingInfo, but TS doesn't track it properly
    // Store them in new variables to force the narrowing
    const sc: UpcomingInfo = seasonCandidate;
    const tc: UpcomingInfo = tentativeCandidate;

    const sDate = Date.parse(sc.dateISO);
    const tDate = Date.parse(tc.dateISO);
    return sDate <= tDate ? sc : tc;
  }

  return seasonCandidate ?? tentativeCandidate ?? null;
};
