"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const ExportSeries = ({ state }: { state: any }) => {
  const [exportOpen, setExportOpen] = useState(false);
  const [exportSelected, setExportSelected] = useState<Record<string, boolean>>(
    {}
  );

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

  return (
    <>
      <button
        className="px-3 py-1 rounded bg-gray-200"
        onClick={openExport}
        disabled={state.shows.length === 0}
      >
        Export
      </button>

      <Dialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-lg rounded bg-white p-6">
            <Dialog.Title className="text-lg font-semibold mb-3">
              Export shows
            </Dialog.Title>
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
                  <label htmlFor="export-select-all" className="text-sm">
                    Select all
                  </label>
                </div>
                <ul className="max-h-64 overflow-auto border rounded">
                  {state.shows.map((s) => (
                    <li
                      key={s.imdbId}
                      className="flex items-center gap-2 p-2 border-b last:border-b-0"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={!!exportSelected[s.imdbId]}
                        onChange={(e) =>
                          setExportSelected((prev) => ({
                            ...prev,
                            [s.imdbId]: e.target.checked,
                          }))
                        }
                      />
                      <span className="text-sm">{s.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Episodes are excluded from the export.
                </p>
              </>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200"
                onClick={() => setExportOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                onClick={confirmExport}
                disabled={
                  state.shows.length === 0 ||
                  !state.shows.some((s) => exportSelected[s.imdbId])
                }
              >
                Download JSON
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
