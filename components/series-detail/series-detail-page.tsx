"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Show } from "lib/series-tracker/types";
import { FetchSeasons } from "./fetch-seasons";
import { ScheduleSetter } from "./schedule-setter";
import { SeasonContainer } from "./season-container";
import { useSeriesTracker } from "components/series-tracker/series-tracker-context";
import { Progress } from "components/progress";
import { UpcomingBanner } from "components/series-tracker/upcoming-banner";

export const SeriesDetailPage = () => {
  const params = useParams() as { slug?: string; imdbId?: string };
  const imdbId = params?.imdbId;
  const { state } = useSeriesTracker();
  const [hideWatched, setHideWatched] = useState(false);

  console.log({params})
  const show = useMemo<Show | undefined>(
    () => state.shows.find((s) => s.imdbId === imdbId),
    [state, imdbId]
  );

  // Update document title
  useEffect(() => {
    if (show?.title) {
      document.title = `${show.title} – Series Tracker – Chidi Orji`;
    }
  }, [show?.title]);

  const imdbVideosUrl = `https://www.imdb.com/title/${
    show?.imdbId ?? ""
  }/videogallery/`;

  const showProgress = useMemo(() => {
    const allEpisodes = (show?.seasons || []).flatMap((s) => s.episodes || []);
    const total = allEpisodes.length;
    const watched = allEpisodes.filter((e) => e.watched).length;
    return { watched, total };
  }, [show]);

  // if (params?.slug !== "series-movie-tracker") return notFound();

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
          <UpcomingBanner show={show} days={3} className="mt-3" />
          <Progress
            className="mt-3"
            label="Overall progress"
            current={showProgress.watched}
            total={showProgress.total}
            showFraction
            showPercentage
          />
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
            <FetchSeasons show={show} />
            <ScheduleSetter show={show} />
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
                <SeasonContainer
                  key={s.seasonNumber ?? s.title}
                  season={s}
                  show={show}
                  hideWatched={hideWatched}
                />
              ))}
          </div>
        )}
      </div>
    </main>
  );
};
