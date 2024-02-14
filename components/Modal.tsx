import { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


type Props = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  content: ReactElement;
  actions?: ReactElement;
};

export default function Modal(props: Readonly<Props>) {
  const { isOpen, onClose, title, content, actions } = props;
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all my-8 align-middle w-[592px]">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                  onClick={onClose}
                >
                  <span className="sr-only">{"closeCopy"}</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 font-medium text-gray-700"
                  >
                    {title}
                  </Dialog.Title>
                )}
                <div className="mt-2">
                  <div className="text-sm text-gray-500">{content}</div>
                </div>
              </div>

              {actions && <div className="mt-6 flex space-x-3">{actions}</div>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
