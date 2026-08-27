import { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  content: ReactElement;
  actions?: ReactElement;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  content,
  actions,
}: Readonly<Props>) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-ink/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-3"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-3"
            >
              <Dialog.Panel className="w-full max-w-xl border border-rule bg-card p-6 shadow-2xl sm:p-8">
                <div className="mb-5 flex items-start justify-between gap-6 border-b border-rule pb-4">
                  <Dialog.Title
                    as="h3"
                    className="font-serif text-2xl font-bold leading-tight"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={onClose}
                    className="more shrink-0"
                  >
                    Close ×
                  </button>
                </div>

                <div className="text-ink">{content}</div>

                {actions ? (
                  <div className="mt-6 flex gap-3">{actions}</div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
