"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { Show, TrackerState, UserProfile } from "lib/series-tracker/types";

export type SeriesTrackerContextValue = {
  state: TrackerState;
  setState: React.Dispatch<React.SetStateAction<TrackerState>>;
  refresh: () => void;
  setProfile: (profile: UserProfile) => void;
  setOmdbApiKey: (key?: string) => void;
  addShow: (show: Show) => void;
  removeShow: (imdbId: string) => void;
  updateShow: (show: Show) => void;
  replaceState: (next: TrackerState) => void;
};

const SeriesTrackerContext = createContext<SeriesTrackerContextValue | undefined>(undefined);

export function SeriesTrackerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TrackerState>({ shows: [] });

  // Initial load
  useEffect(() => {
    setState(StorageRepo.getState());
  }, []);

  // Sync across tabs and when localStorage changes
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      // If any change occurs in localStorage, refresh from repo
      // This keeps state in sync across tabs and with imperative updates.
      if (typeof e.key === "string") {
        setState(StorageRepo.getState());
      }
    };
    globalThis.addEventListener?.("storage", onStorage as any);
    return () => globalThis.removeEventListener?.("storage", onStorage as any);
  }, []);

  const refresh = useCallback(() => {
    setState(StorageRepo.getState());
  }, []);

  const setProfile = useCallback((profile: UserProfile) => {
    StorageRepo.setProfile(profile);
    setState(StorageRepo.getState());
  }, []);

  const setOmdbApiKey = useCallback((key?: string) => {
    StorageRepo.setOmdbApiKey(key);
    setState(StorageRepo.getState());
  }, []);

  const addShow = useCallback((show: Show) => {
    StorageRepo.addShow(show);
    setState(StorageRepo.getState());
  }, []);

  const removeShow = useCallback((imdbId: string) => {
    StorageRepo.removeShow(imdbId);
    setState(StorageRepo.getState());
  }, []);

  const updateShow = useCallback((show: Show) => {
    const current = StorageRepo.getState();
    const updated: TrackerState = {
      ...current,
      shows: current.shows.map((s) => (s.imdbId === show.imdbId ? show : s)),
    };
    StorageRepo.setState(updated);
    setState(updated);
  }, []);

  const replaceState = useCallback((next: TrackerState) => {
    StorageRepo.setState(next);
    setState(StorageRepo.getState());
  }, []);

  const value = useMemo<SeriesTrackerContextValue>(() => ({
    state,
    setState,
    refresh,
    setProfile,
    setOmdbApiKey,
    addShow,
    removeShow,
    updateShow,
    replaceState,
  }), [state, refresh, setProfile, setOmdbApiKey, addShow, removeShow, updateShow, replaceState]);

  return (
    <SeriesTrackerContext.Provider value={value}>{children}</SeriesTrackerContext.Provider>
  );
}

export function useSeriesTracker() {
  const ctx = useContext(SeriesTrackerContext);
  if (!ctx) throw new Error("useSeriesTracker must be used within a SeriesTrackerProvider");
  return ctx;
}
