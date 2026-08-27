"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mergeClasses } from "utils/class-merge";

type NavLink = { name: string; href: string };

const navigation: NavLink[] = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
  { name: "Applications", href: "/applications" },
];

const isActive = (pathName: string | null, href: string) =>
  pathName === href || (href !== "/" && !!pathName?.startsWith(`${href}/`));

const Wordmark = () => (
  <Link href="/" className="flex items-center gap-2.5">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-[12px] font-bold text-bg">
      CO
    </span>
    <span className="text-sm font-semibold tracking-tightish text-ink">
      Chidi Orji
    </span>
  </Link>
);

export function AppHeader() {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Global"
      >
        <Wordmark />

        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={mergeClasses(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                isActive(pathName, item.href)
                  ? "bg-elevated font-medium text-ink"
                  : "text-muted hover:text-ink"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-muted md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-line bg-bg px-6 py-5">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              className="-mr-2 rounded-md p-2 text-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={mergeClasses(
                  "rounded-lg px-3 py-2.5 text-base transition-colors",
                  isActive(pathName, item.href)
                    ? "bg-elevated font-medium text-ink"
                    : "text-muted hover:bg-elevated hover:text-ink"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
