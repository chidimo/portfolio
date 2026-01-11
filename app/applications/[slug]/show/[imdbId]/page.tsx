"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { Show, TrackerState } from "lib/series-tracker/types";
import { SeriesDetailPage } from "components/series-detail/series-detail-page";

export default function ShowDetailsPage() {
  const params = useParams() as { slug?: string; imdbId?: string };
  const imdbId = params?.imdbId;
  const [state, setState] = useState<TrackerState>({ shows: [] });

  useEffect(() => {
    setState(StorageRepo.getState());
  }, []);

  const show = useMemo<Show | undefined>(
    () => state.shows.find((s) => s.imdbId === imdbId),
    [state, imdbId]
  );

  // Update document title
  useEffect(() => {
    if (show?.title) {
      document.title = `${show.title} – Series Tracker`;
    }
  }, [show?.title]);

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
  return <SeriesDetailPage />;
}
