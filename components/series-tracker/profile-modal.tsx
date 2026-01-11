"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { StorageRepo } from "lib/series-tracker/storage";
import type { UserProfile } from "lib/series-tracker/types";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9\s-]/g, "")
    .replaceAll(/\s+/g, "-")
    .replaceAll(/-+/g, "-");
}

export const ProfileModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const s = StorageRepo.getState();
    if (!s.profile) setOpen(true);
  }, []);

  const onSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const profile: UserProfile = {
      name: trimmed,
      slug: slugify(trimmed),
      registeredAt: new Date().toISOString(),
    };
    StorageRepo.setProfile(profile);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-md rounded bg-white p-6">
          <Dialog.Title className="text-lg font-semibold mb-2">
            Create your profile
          </Dialog.Title>
          <p className="text-sm text-gray-700 mb-4">
            Enter a display name. This stays on your browser only.
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border rounded px-3 py-2 mb-4"
          />
          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
