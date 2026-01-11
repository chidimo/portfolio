"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type {
  Episode,
  Season,
  Show,
  TrackerState,
} from "lib/series-tracker/types";
import { getSeason, getTitle } from "lib/series-tracker/omdb";

export default function ShowDetailsPage() {
  const params = useParams() as { slug?: string; imdbId?: string };
  const imdbId = params?.imdbId;
  const [state, setState] = useState<TrackerState>({ shows: [] });
  const [hideWatched, setHideWatched] = useState(false);
  const [upTo, setUpTo] = useState<Record<number, string>>({});

  useEffect(() => {
    setState(StorageRepo.getState());
  }, []);

  const show = useMemo<Show | undefined>(
    () => state.shows.find((s) => s.imdbId === imdbId),
    [state, imdbId]
  );

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

  const fetchAllSeasons = async () => {
    if (!show) return;
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

  const imdbVideosUrl = `https://www.imdb.com/title/${
    show?.imdbId ?? ""
  }/videogallery/`;

  const showProgress = useMemo(() => {
    const allEpisodes = (show?.seasons || []).flatMap((s) => s.episodes || []);
    const total = allEpisodes.length;
    const watched = allEpisodes.filter((e) => e.watched).length;
    return { watched, total };
  }, [show]);

  if (!params || params.slug !== "series-movie-tracker") return notFound();
  if (!show) {
    return (
      <main>
        <p className="text-gray-700">Show not found in your list.</p>
        <Link
          href="/applications/series-movie-tracker"
          className="text-blue-700 hover:underline"
        >
          ← Back
        </Link>
      </main>
    );
  }
  return (
    <main>
      <div className="mb-4">
        <Link
          href="/applications/series-movie-tracker"
          className="text-blue-700 hover:underline"
        >
          ← Back to tracker
        </Link>
      </div>
      <div className="flex gap-4 mb-6">
        {show.thumbnail && show.thumbnail !== "N/A" ? (
          <img
            src={show.thumbnail}
            alt="poster"
            className="h-40 w-28 object-cover rounded md:h-60 md:w-40"
          />
        ) : (
          <div className="h-40 w-28 bg-gray-200 rounded md:h-60 md:w-40" />
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{show.title}</h1>
          {show.releaseYear ? (
            <div className="text-sm text-gray-600">{show.releaseYear}</div>
          ) : null}
          {show.plot ? <p className="mt-2 text-gray-700">{show.plot}</p> : null}
          {show.mainCast && show.mainCast.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {show.mainCast.slice(0, 5).map((c) => (
                <span
                  key={c}
                  className="text-[10px] md:text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-3 text-sm text-gray-700">
            Overall progress: {showProgress.watched}/{showProgress.total}
            <div className="mt-1 h-2 w-full bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{
                  width: `${
                    showProgress.total
                      ? Math.round(
                          (showProgress.watched / showProgress.total) * 100
                        )
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
          <div className="mt-3 flex gap-3">
            <a
              href={show.imdbUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              Open on IMDb
            </a>
            <a
              href={imdbVideosUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              Watch trailer
            </a>
            <button className="text-blue-700" onClick={fetchAllSeasons}>
              Fetch seasons
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Seasons</h2>
          <label className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              checked={hideWatched}
              onChange={(e) => setHideWatched(e.target.checked)}
            />
            Hide watched episodes
          </label>
        </div>
        {!show.seasons || show.seasons.length === 0 ? (
          <p className="text-gray-700">
            No seasons loaded yet. Click &quot;Fetch seasons&quot; above.
          </p>
        ) : (
          <div className="space-y-6">
            {[...show.seasons]
              .sort((a, b) => (b.seasonNumber ?? 0) - (a.seasonNumber ?? 0))
              .map((s) => (
                <div
                  key={s.seasonNumber ?? s.title}
                  className="border rounded p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h2 className="font-semibold">{s.title}</h2>

                      <div className="mt-2">
                        <div className="text-xs text-gray-600 mb-1">
                          Progress: {s.episodes.filter((e) => e.watched).length}
                          /{s.episodes.length}
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-green-600"
                            style={{
                              width: `${
                                s.episodes.length
                                  ? Math.round(
                                      (s.episodes.filter((e) => e.watched)
                                        .length /
                                        s.episodes.length) *
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
                              upTo[s.seasonNumber ?? 0] || "0",
                              10
                            );
                            if (Number.isFinite(val) && val > 0) {
                              markUpTo(s.seasonNumber ?? 0, val);
                            } else {
                              toggleSeason(s.seasonNumber ?? 0, true);
                            }
                          }}
                        >
                          {(() => {
                            const val = Number.parseInt(
                              upTo[s.seasonNumber ?? 0] || "0",
                              10
                            );
                            return Number.isFinite(val) && val > 0
                              ? `Mark up to E${val}`
                              : "Mark season watched";
                          })()}
                        </button>
                        <button
                          className="text-sm text-blue-700 text-left"
                          onClick={() => toggleSeason(s.seasonNumber ?? 0, false)}
                        >
                          Mark season unwatched
                        </button>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span>Up to</span>
                        <input
                          type="number"
                          min={1}
                          max={Math.max(1, s.episodes.length)}
                          className="w-16 border rounded px-2 py-1"
                          value={upTo[s.seasonNumber ?? 0] ?? ""}
                          onChange={(e) =>
                            setUpTo((prev) => ({
                              ...prev,
                              [s.seasonNumber ?? 0]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="divide-y">
                    {s.episodes
                      .filter((e) => (hideWatched ? !e.watched : true))
                      .map((e) => (
                        <li
                          key={e.episodeNumber ?? e.title}
                          className="py-2 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-sm font-medium">
                              {e.episodeNumber ? `E${e.episodeNumber} · ` : ""}
                              {e.title}
                            </div>
                            {e.releaseDate ? (
                              <div className="text-xs text-gray-600">
                                {new Date(e.releaseDate).toLocaleDateString()}
                              </div>
                            ) : null}
                          </div>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={!!e.watched}
                              onChange={(ev) =>
                                toggleEpisode(
                                  s.seasonNumber ?? 0,
                                  e.episodeNumber,
                                  ev.target.checked
                                )
                              }
                            />
                            Watched
                          </label>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </main>
  );
}
