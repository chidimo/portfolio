"use client";

import { useState } from "react";
import { ConfirmModal } from "components/series-tracker/confirm-modal";

export const RemoveShow = ({
  showId,
  onRemove,
}: {
  showId: string;
  onRemove: (removedId: string) => void;
}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);

  const requestRemove = (imdbId: string) => {
    setPendingRemoveId(imdbId);
    setConfirmOpen(true);
  };

  const confirmRemove = () => {
    if (pendingRemoveId) {
      onRemove(pendingRemoveId);
    }
    setConfirmOpen(false);
    setPendingRemoveId(null);
  };

  return (
    <>
      <button
        className="absolute top-2 right-2 text-red-700 text-sm"
        onClick={() => requestRemove(showId)}
      >
        Remove
      </button>

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
    </>
  );
};
