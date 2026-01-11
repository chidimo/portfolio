"use client";

import { useMemo, useState } from "react";
import { Dialog } from "@headlessui/react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { Show, TrackerState } from "lib/series-tracker/types";

export const ScheduleSetter = ({ show }: { show: Show }) => {
  const [state, setState] = useState<TrackerState>({ shows: [] });
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [schedDate, setSchedDate] = useState<string>("");
  const [schedTarget, setSchedTarget] = useState<string>(""); // key: s{season}-e{episode}
  const [schedFreq, setSchedFreq] = useState<number>(7);

  const saveShow = (next: Show) => {
    const updated: TrackerState = {
      ...state,
      shows: state.shows.map((s) => (s.imdbId === next.imdbId ? next : s)),
    };

    StorageRepo.setState(updated);
    setState(updated);
  };

  const mostRecentSeasonNumber = useMemo(() => {
    const nums = (show?.seasons || [])
      .map((s) => s.seasonNumber)
      .filter((n): n is number => typeof n === "number");
    return nums.length ? Math.max(...nums) : undefined;
  }, [show]);

  const allEpisodesFlat = useMemo(() => {
    if (!show || typeof mostRecentSeasonNumber !== "number")
      return [] as {
        seasonNumber: number;
        episodeNumber: number;
        title: string;
      }[];
    const sn = (show.seasons || []).find(
      (s) => s.seasonNumber === mostRecentSeasonNumber
    );
    if (!sn)
      return [] as {
        seasonNumber: number;
        episodeNumber: number;
        title: string;
      }[];
    const eps = [...(sn.episodes || [])]
      .filter((e) => typeof e.episodeNumber === "number")
      .sort((a, b) => (a.episodeNumber ?? 0) - (b.episodeNumber ?? 0));
    return eps.map((e) => ({
      seasonNumber: mostRecentSeasonNumber,
      episodeNumber: e.episodeNumber || 0,
      title: e.title,
    }));
  }, [show, mostRecentSeasonNumber]);

  const openScheduleModal = () => {
    if (!show) return;
    setSchedDate(
      show.tentativeNextAirDate
        ? show.tentativeNextAirDate.substring(0, 10)
        : ""
    );
    const baseline = show.tentativeNextEpisode;
    setSchedTarget(
      baseline ? `s${baseline.seasonNumber}-e${baseline.episodeNumber}` : ""
    );
    setSchedFreq(show.tentativeFrequencyDays || 7);
    setScheduleOpen(true);
  };

  const saveSchedule = () => {
    if (!show) return;
    if (!schedDate || !schedTarget) {
      setScheduleOpen(false);
      return;
    }
    const [sStr, eStr] = schedTarget.split("-");
    const seasonNumber = Number((sStr || "").replace("s", ""));
    const episodeNumber = Number((eStr || "").replace("e", ""));
    const updated: Show = {
      ...show,
      tentativeNextAirDate: new Date(schedDate).toISOString(),
      tentativeNextEpisode: { seasonNumber, episodeNumber },
      tentativeFrequencyDays: Math.max(
        1,
        Number.isFinite(schedFreq) ? schedFreq : 7
      ),
    };
    saveShow(updated);
    setScheduleOpen(false);
  };

  return (
    <>
      <button className="text-blue-700" onClick={openScheduleModal}>
        Set tentative schedule
      </button>
      <Dialog
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-md rounded bg-white p-6">
            <Dialog.Title className="text-lg font-semibold mb-3">
              Set tentative schedule
            </Dialog.Title>
            {!show || (show.seasons || []).length === 0 ? (
              <p className="text-sm text-gray-700">
                Load seasons first to select an episode.
              </p>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="sched-date" className="block text-sm mb-1">
                    Date
                  </label>
                  <input
                    id="sched-date"
                    type="date"
                    value={schedDate}
                    onChange={(e) => setSchedDate(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="sched-episode" className="block text-sm mb-1">
                    Episode
                  </label>
                  <select
                    id="sched-episode"
                    value={schedTarget}
                    onChange={(e) => setSchedTarget(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Select episode</option>
                    {allEpisodesFlat.map((ep) => (
                      <option
                        key={`s${ep.seasonNumber}-e${ep.episodeNumber}`}
                        value={`s${ep.seasonNumber}-e${ep.episodeNumber}`}
                      >
                        Season {ep.seasonNumber} · E{ep.episodeNumber} ·{" "}
                        {ep.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="sched-freq" className="block text-sm mb-1">
                    Frequency (days)
                  </label>
                  <input
                    id="sched-freq"
                    type="number"
                    min={1}
                    value={schedFreq}
                    onChange={(e) => setSchedFreq(Number(e.target.value) || 7)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200"
                onClick={() => setScheduleOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                onClick={saveSchedule}
                disabled={!schedDate || !schedTarget}
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
