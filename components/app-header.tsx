"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Porfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
];

export function AppHeader() {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} passHref className="-m-1.5 p-1.5">
            <span className="sr-only">Chidi Orji</span>
            <img
              className="h-8 w-auto rounded-md"
              src="/images/headshot.JPG"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm font-semibold leading-6 text-white",
                "flex flex-col items-center"
              )}
            >
              <span>{item.name}</span>
              {pathName?.includes(item.href) && (
                <div className="bg-white w-1.5 h-1.5 rounded"></div>
              )}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} passHref className="-m-1.5 p-1.5">
              <span className="sr-only">Chidi Orji</span>
              <img
                className="h-8 w-auto rounded full"
                src="/images/headshot.JPG"
                alt=""
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 flex items-center rounded-md px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {pathName?.includes(item.href) && (
                      <div className="bg-white w-1.5 h-1.5 mr-3 rounded"></div>
                    )}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
