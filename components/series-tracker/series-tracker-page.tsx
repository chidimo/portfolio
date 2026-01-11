"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProfileModal } from "components/series-tracker/profile-modal";
import { StorageRepo } from "lib/series-tracker/storage";
import type { TrackerState } from "lib/series-tracker/types";
import { ExportSeries } from "./export-series";
import { ImportSeries } from "./import-series";
import { ShowCard } from "./show-card";
import { SeriesFinder } from "./series-finder";

export const SeriesTrackerPage = () => {
  const [state, setState] = useState<TrackerState>({ shows: [] });

  useEffect(() => {
    setState(StorageRepo.getState());
  }, []);

  const profileName = state.profile?.name ?? "Guest";

  const handleRemoveShow = (removeId: string) => {
    StorageRepo.removeShow(removeId);
    setState(StorageRepo.getState());
  };

  return (
    <div>
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

      <SeriesFinder />

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Your Shows</h3>
          <div className="flex gap-2">
            <ImportSeries
              onUpdateState={(s) => {
                setState(s);
              }}
            />
            <ExportSeries state={state} />
          </div>
        </div>
        {state.shows.length === 0 ? (
          <p className="text-gray-600">
            No shows yet. Search above and add one.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.shows.map((s) => (
              <ShowCard
                key={s.imdbId}
                show={s}
                onRemoveShow={handleRemoveShow}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
