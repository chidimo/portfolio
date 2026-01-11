"use client";

import { Dialog } from "@headlessui/react";

export const ConfirmModal = ({
  open,
  title = "Are you sure?",
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onCancel} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-md rounded bg-white p-6">
          <Dialog.Title className="text-lg font-semibold mb-2">
            {title}
          </Dialog.Title>
          {description ? (
            <p className="text-sm text-gray-700 mb-4">{description}</p>
          ) : null}
          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 rounded bg-gray-200"
              onClick={onCancel}
            >
              {cancelText}
            </button>
            <button
              className="px-4 py-2 rounded bg-red-600 text-white"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
