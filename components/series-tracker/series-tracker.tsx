"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { ProfileModal } from "components/series-tracker/profile-modal";
import { StorageRepo } from "lib/series-tracker/storage";
import {
  searchSeries,
  getTitle,
  type OmdbSearchItem,
} from "lib/series-tracker/omdb";
import type { Show, TrackerState } from "lib/series-tracker/types";
import { ConfirmModal } from "components/series-tracker/confirm-modal";

export const SeriesTrackerApp = () => {
  const [state, setState] = useState<TrackerState>({ shows: [] });
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<OmdbSearchItem[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [exportSelected, setExportSelected] = useState<Record<string, boolean>>({});
  const [importSelected, setImportSelected] = useState<Record<string, boolean>>({});
  const [importedShows, setImportedShows] = useState<Partial<Show>[]>([]);
  const [fileError, setFileError] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setState(StorageRepo.getState());
  }, []);

  const profileName = state.profile?.name ?? "Guest";

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
    StorageRepo.addShow(show);
    setState(StorageRepo.getState());
  };

  const removeShow = (imdbId: string) => {
    StorageRepo.removeShow(imdbId);
    setState(StorageRepo.getState());
  };

  const requestRemove = (imdbId: string) => {
    setPendingRemoveId(imdbId);
    setConfirmOpen(true);
  };

  const confirmRemove = () => {
    if (pendingRemoveId) removeShow(pendingRemoveId);
    setConfirmOpen(false);
    setPendingRemoveId(null);
  };

  const openExport = () => {
    const sel: Record<string, boolean> = {};
    for (const s of state.shows) sel[s.imdbId] = true;
    setExportSelected(sel);
    setExportOpen(true);
  };

  const toggleAllExport = (checked: boolean) => {
    const sel: Record<string, boolean> = {};
    for (const s of state.shows) sel[s.imdbId] = checked;
    setExportSelected(sel);
  };

  const confirmExport = () => {
    const payload = {
      shows: state.shows
        .filter((s) => exportSelected[s.imdbId])
        .map((s) => ({
          imdbId: s.imdbId,
          title: s.title,
          thumbnail: s.thumbnail,
          imdbUrl: s.imdbUrl,
          releaseYear: s.releaseYear,
          mainCast: s.mainCast,
          plot: s.plot,
          totalSeasons: s.totalSeasons,
          nextAirDate: s.nextAirDate,
          seasons: [],
        })),
      exportedAt: new Date().toISOString(),
      format: "series-tracker.v1",
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "series-tracker-export.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setExportOpen(false);
  };

  const openImport = () => {
    setImportedShows([]);
    setImportSelected({});
    setFileError(undefined);
    setImportOpen(true);
  };

  const onImportFileChange = async (file?: File | null) => {
    try {
      setFileError(undefined);
      if (!file) return;
      const text = await file.text();
      const json = JSON.parse(text) as any;
      const shows = Array.isArray(json?.shows) ? json.shows : Array.isArray(json) ? json : [];
      const normalized: Partial<Show>[] = shows.map((s: any) => ({
        imdbId: s.imdbId,
        title: s.title,
        thumbnail: s.thumbnail,
        imdbUrl: s.imdbUrl,
        releaseYear: s.releaseYear,
        mainCast: s.mainCast,
        plot: s.plot,
        totalSeasons: s.totalSeasons,
        nextAirDate: s.nextAirDate,
        seasons: [],
      }));
      const sel: Record<string, boolean> = {};
      for (const s of normalized) if (s.imdbId) sel[s.imdbId] = true;
      setImportedShows(normalized);
      setImportSelected(sel);
    } catch (e) {
      console.error("Failed to parse import file", e);
      setFileError("Invalid file format. Expecting a JSON export from this app.");
      setImportedShows([]);
      setImportSelected({});
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const toggleAllImport = (checked: boolean) => {
    const sel: Record<string, boolean> = {};
    for (const s of importedShows) if (s.imdbId) sel[s.imdbId] = checked;
    setImportSelected(sel);
  };

  const confirmImport = () => {
    const current = StorageRepo.getState();
    const toApply: Show[] = [...current.shows];
    const existingTitles = new Set(
      current.shows
        .map((s) => (s.title || "").toLowerCase().trim())
        .filter((t) => t.length > 0)
    );
    for (const s of importedShows) {
      if (!s.imdbId || !importSelected[s.imdbId]) continue;
      const titleKey = (s.title || "").toLowerCase().trim();
      if (titleKey && existingTitles.has(titleKey)) {
        // Skip importing shows that already exist by title (case-insensitive)
        continue;
      }
      toApply.push({
        imdbId: s.imdbId,
        title: s.title || s.imdbId,
        thumbnail: s.thumbnail,
        imdbUrl: s.imdbUrl || `https://www.imdb.com/title/${s.imdbId}`,
        releaseYear: s.releaseYear,
        mainCast: s.mainCast,
        plot: s.plot,
        totalSeasons: s.totalSeasons,
        nextAirDate: s.nextAirDate,
        seasons: [],
      });
    }
    StorageRepo.setState({ ...current, shows: toApply });
    setState(StorageRepo.getState());
    setImportOpen(false);
  };

  return (
    <main>
      <ProfileModal />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Welcome, {profileName}</h2>
        <p className="text-gray-600 mb-4">
          Track series you watch and see what&apos;s next.
        </p>

        <div className="mb-4">
          <Link
            href="/applications"
            className="text-blue-700 hover:underline font-semibold"
          >
            ← Back to Applications
          </Link>
        </div>
      </div>

      {/* API key is handled server-side via env; no input needed */}

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

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Your Shows</h3>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded bg-gray-200"
              onClick={openImport}
            >
              Import
            </button>
            <button
              className="px-3 py-1 rounded bg-gray-200"
              onClick={openExport}
              disabled={state.shows.length === 0}
            >
              Export
            </button>
          </div>
        </div>
        {state.shows.length === 0 ? (
          <p className="text-gray-600">
            No shows yet. Search above and add one.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.shows.map((s) => (
              <li key={s.imdbId} className="relative border rounded p-3">
                <button
                  className="absolute top-2 right-2 text-red-700 text-sm"
                  onClick={() => requestRemove(s.imdbId)}
                >
                  Remove
                </button>
                <div className="flex gap-3">
                  {s.thumbnail && s.thumbnail !== "N/A" ? (
                    <img
                      src={s.thumbnail}
                      alt="poster"
                      className="h-24 w-16 object-cover rounded md:h-40 md:w-28"
                    />
                  ) : (
                    <div className="h-24 w-16 bg-gray-200 rounded md:h-40 md:w-28" />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold">{s.title}</div>
                    {s.releaseYear ? (
                      <div className="text-xs text-gray-600">
                        {s.releaseYear}
                      </div>
                    ) : null}
                    {s.plot ? (
                      <div className="text-xs text-gray-700 mt-1 line-clamp-3">
                        {s.plot}
                      </div>
                    ) : null}
                    {s.mainCast && s.mainCast.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {s.mainCast.slice(0, 3).map((c) => (
                          <span
                            key={c}
                            className="text-[10px] md:text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {s.nextAirDate ? (
                      <div
                        className={
                          "text-xs mt-1 " +
                          (Date.now() + 7 * 24 * 60 * 60 * 1000 >=
                          new Date(s.nextAirDate).getTime()
                            ? "text-green-700"
                            : "text-gray-700")
                        }
                      >
                        Next air date:{" "}
                        {new Date(s.nextAirDate).toLocaleDateString()}
                      </div>
                    ) : null}
                    <div className="mt-2 flex flex-wrap gap-2 items-center">
                      <a
                        href={s.imdbUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 hover:underline text-sm"
                      >
                        Open on IMDb
                      </a>
                      <a
                        href={`/applications/series-movie-tracker/show/${s.imdbId}`}
                        className="text-sm text-blue-700 hover:underline"
                      >
                        View details
                      </a>
                      <div className="w-full" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ConfirmModal
        open={confirmOpen}
        title="Remove show?"
        description="This will remove the show from your list on this device. You can add it again later."
        confirmText="Remove"
        cancelText="Cancel"
        onConfirm={confirmRemove}
        onCancel={() => {
          setConfirmOpen(false);
          setPendingRemoveId(null);
        }}
      />
      <Dialog open={exportOpen} onClose={() => setExportOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-lg rounded bg-white p-6">
            <Dialog.Title className="text-lg font-semibold mb-3">Export shows</Dialog.Title>
            {state.shows.length === 0 ? (
              <p className="text-sm text-gray-700">No shows to export.</p>
            ) : (
              <>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    id="export-select-all"
                    type="checkbox"
                    className="h-4 w-4"
                    checked={state.shows.every((s) => exportSelected[s.imdbId])}
                    onChange={(e) => toggleAllExport(e.target.checked)}
                  />
                  <label htmlFor="export-select-all" className="text-sm">Select all</label>
                </div>
                <ul className="max-h-64 overflow-auto border rounded">
                  {state.shows.map((s) => (
                    <li key={s.imdbId} className="flex items-center gap-2 p-2 border-b last:border-b-0">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={!!exportSelected[s.imdbId]}
                        onChange={(e) =>
                          setExportSelected((prev) => ({ ...prev, [s.imdbId]: e.target.checked }))
                        }
                      />
                      <span className="text-sm">{s.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 mt-2">Episodes are excluded from the export.</p>
              </>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-4 py-2 rounded bg-gray-200" onClick={() => setExportOpen(false)}>Cancel</button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                onClick={confirmExport}
                disabled={state.shows.length === 0 || !state.shows.some((s) => exportSelected[s.imdbId])}
              >
                Download JSON
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog open={importOpen} onClose={() => setImportOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-lg rounded bg-white p-6">
            <Dialog.Title className="text-lg font-semibold mb-3">Import shows</Dialog.Title>
            <div className="mb-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                onChange={(e) => onImportFileChange(e.target.files?.[0])}
              />
            </div>
            {fileError ? <p className="text-sm text-red-600 mb-2">{fileError}</p> : null}
            {importedShows.length > 0 ? (
              <>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    id="import-select-all"
                    type="checkbox"
                    className="h-4 w-4"
                    checked={importedShows.every((s) => s.imdbId && importSelected[s.imdbId])}
                    onChange={(e) => toggleAllImport(e.target.checked)}
                  />
                  <label htmlFor="import-select-all" className="text-sm">Select all</label>
                </div>
                <ul className="max-h-64 overflow-auto border rounded">
                  {importedShows.map((s) => (
                    <li key={s.imdbId || Math.random()} className="flex items-center gap-2 p-2 border-b last:border-b-0">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={!!(s.imdbId && importSelected[s.imdbId])}
                        onChange={(e) =>
                          s.imdbId && setImportSelected((prev) => ({ ...prev, [s.imdbId!]: e.target.checked }))
                        }
                      />
                      <span className="text-sm">{s.title || s.imdbId}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-gray-700">Choose a JSON file exported from this app.</p>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-4 py-2 rounded bg-gray-200" onClick={() => setImportOpen(false)}>Cancel</button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                onClick={confirmImport}
                disabled={importedShows.length === 0 || !importedShows.some((s) => s.imdbId && importSelected[s.imdbId])}
              >
                Import Selected
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
};
