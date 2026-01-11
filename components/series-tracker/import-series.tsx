"use client";

import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { Show } from "lib/series-tracker/types";

export const ImportSeries = ({ onUpdateState }: { onUpdateState: any }) => {
  const [importOpen, setImportOpen] = useState(false);
  const [importSelected, setImportSelected] = useState<Record<string, boolean>>(
    {}
  );
  const [replaceSelected, setReplaceSelected] = useState<
    Record<string, boolean>
  >({});
  const [importedShows, setImportedShows] = useState<Partial<Show>[]>([]);
  const [fileError, setFileError] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const openImport = () => {
    setImportedShows([]);
    setImportSelected({});
    setReplaceSelected({});
    setFileError(undefined);
    setImportOpen(true);
  };

  const onImportFileChange = async (file?: File | null) => {
    try {
      setFileError(undefined);
      if (!file) return;
      const text = await file.text();
      const json = JSON.parse(text) as any;
      const shows = Array.isArray(json?.shows)
        ? json.shows
        : Array.isArray(json)
        ? json
        : [];
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
      const rep: Record<string, boolean> = {};
      for (const s of normalized)
        if (s.imdbId) {
          sel[s.imdbId] = true;
          rep[s.imdbId] = false; // default: do not replace existing
        }
      setImportedShows(normalized);
      setImportSelected(sel);
      setReplaceSelected(rep);
    } catch (e) {
      console.error("Failed to parse import file", e);
      setFileError(
        "Invalid file format. Expecting a JSON export from this app."
      );
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
    // map of existing by lowercased title
    const existingByTitle = new Map<string, Show>();
    current.shows.forEach((ex) => {
      const key = (ex.title || "").toLowerCase().trim();
      if (key) existingByTitle.set(key, ex);
    });
    for (const s of importedShows) {
      if (!s.imdbId || !importSelected[s.imdbId]) continue;
      const titleKey = (s.title || "").toLowerCase().trim();
      const existing = titleKey ? existingByTitle.get(titleKey) : undefined;
      if (existing) {
        // Only replace if user opted in for this item
        if (replaceSelected[s.imdbId]) {
          const updated: Show = {
            ...existing,
            title: s.title || existing.title,
            thumbnail: s.thumbnail ?? existing.thumbnail,
            imdbUrl: s.imdbUrl || existing.imdbUrl,
            releaseYear: s.releaseYear ?? existing.releaseYear,
            mainCast: s.mainCast ?? existing.mainCast,
            plot: s.plot ?? existing.plot,
            totalSeasons: s.totalSeasons ?? existing.totalSeasons,
            nextAirDate: s.nextAirDate ?? existing.nextAirDate,
            seasons: existing.seasons ?? [],
          };
          const idx = toApply.findIndex((x) => x.imdbId === existing.imdbId);
          if (idx >= 0) toApply[idx] = updated;
        }
        // if replace not checked, leave as is
        continue;
      }
      // Not existing: add new
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
    onUpdateState(StorageRepo.getState());
    setImportOpen(false);
  };

  return (
    <div>
      <button className="px-3 py-1 rounded bg-gray-200" onClick={openImport}>
        Import
      </button>

      <Dialog
        open={importOpen}
        onClose={() => setImportOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-lg rounded bg-white p-6">
            <Dialog.Title className="text-lg font-semibold mb-3">
              Import shows
            </Dialog.Title>
            <div className="mb-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                onChange={(e) => onImportFileChange(e.target.files?.[0])}
              />
            </div>
            {fileError ? (
              <p className="text-sm text-red-600 mb-2">{fileError}</p>
            ) : null}
            {importedShows.length > 0 ? (
              <>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    id="import-select-all"
                    type="checkbox"
                    className="h-4 w-4"
                    checked={importedShows.every(
                      (s) => s.imdbId && importSelected[s.imdbId]
                    )}
                    onChange={(e) => toggleAllImport(e.target.checked)}
                  />
                  <label htmlFor="import-select-all" className="text-sm">
                    Select all
                  </label>
                </div>
                <ul className="max-h-64 overflow-auto border rounded">
                  {importedShows.map((s) => (
                    <li
                      key={s.imdbId || Math.random()}
                      className="flex items-center justify-between gap-2 p-2 border-b last:border-b-0"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={!!(s.imdbId && importSelected[s.imdbId])}
                          onChange={(e) =>
                            s.imdbId &&
                            setImportSelected((prev) => ({
                              ...prev,
                              [s.imdbId!]: e.target.checked,
                            }))
                          }
                        />
                        <span className="text-sm">{s.title || s.imdbId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-xs flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={!!(s.imdbId && replaceSelected[s.imdbId])}
                            onChange={(e) =>
                              s.imdbId &&
                              setReplaceSelected((prev) => ({
                                ...prev,
                                [s.imdbId!]: e.target.checked,
                              }))
                            }
                          />
                          Replace if exists
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-gray-700">
                Choose a JSON file exported from this app.
              </p>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200"
                onClick={() => setImportOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                onClick={confirmImport}
                disabled={
                  importedShows.length === 0 ||
                  !importedShows.some(
                    (s) => s.imdbId && importSelected[s.imdbId]
                  )
                }
              >
                Import Selected
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
