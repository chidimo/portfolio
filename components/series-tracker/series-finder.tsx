"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  searchSeries,
  getTitle,
  type OmdbSearchItem,
} from "lib/series-tracker/omdb";
import type { Show } from "lib/series-tracker/types";
import { useSeriesTracker } from "./series-tracker-context";

export const SeriesFinder = () => {
  const { state, addShow } = useSeriesTracker();
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<OmdbSearchItem[]>([]);
  const [error, setError] = useState<string | undefined>();

  const onSearch = async () => {
    setError(undefined);
    setResults([]);
    if (!q.trim()) return;
    setLoading(true);
    try {
      const items = await searchSeries(q.trim());
      setResults(items);
    } catch (e) {
      console.error("OMDb search failed", e);
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const onAdd = async (item: OmdbSearchItem) => {
    const full = await getTitle(item.imdbID);
    const show: Show = {
      imdbId: item.imdbID,
      title: full?.Title ?? item.Title,
      thumbnail: full?.Poster ?? item.Poster,
      imdbUrl: `https://www.imdb.com/title/${item.imdbID}`,
      releaseYear: full?.Year ?? item.Year,
      mainCast: full?.Actors?.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      plot: full?.Plot,
      totalSeasons: full?.totalSeasons ? Number(full.totalSeasons) : undefined,
      seasons: [],
    };
    addShow(show);
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for a TV series"
            className="w-full border rounded px-3 py-2 pr-9"
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
          />
          {q ? (
            <button
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setQ("")}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : null}
        </div>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
          onClick={onSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error ? <p className="text-red-600 mt-2 text-sm">{error}</p> : null}
      {results.length > 0 ? (
        <div className="mt-3">
          <h3 className="font-medium mb-2">Results</h3>
          <ul className="space-y-2">
            {results.slice(0, 5).map((r) => {
              const isAdded = state.shows.some((s) => s.imdbId === r.imdbID);
              return (
                <li
                  key={r.imdbID}
                  className="flex items-center justify-between gap-3 border rounded p-2"
                >
                  <div className="flex items-center gap-3">
                    {r.Poster && r.Poster !== "N/A" ? (
                      <img
                        src={r.Poster}
                        alt="poster"
                        className="h-12 w-8 object-cover rounded md:h-16 md:w-12"
                      />
                    ) : null}
                    <div>
                      <div className="font-semibold">{r.Title}</div>
                      <div className="text-xs text-gray-600">{r.Year}</div>
                    </div>
                  </div>
                  <button
                    className="px-3 py-1 rounded bg-green-600 text-white disabled:opacity-60"
                    onClick={() => onAdd(r)}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added" : "Add"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
