"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mergeClasses } from "utils/class-merge";

const navigation = [
  { name: "Porfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
  { name: "Applications", href: "/applications" },
];

const Avatar = () => {
  return (
    <Link href={"/"} passHref className="-">
      <span className="sr-only">Chidi Orji</span>
      <img
        className="h-10 w-auto rounded full"
        src="/images/headshot.JPG"
        alt=""
      />
    </Link>
  );
};

const NavItem = ({
  item,
  pathName,
  classNames = "",
}: {
  item: any;
  pathName: string;
  classNames?: string;
}) => {
  return (
    <a
      key={item.name}
      href={item.href}
      className={mergeClasses(
        "text-sm font-semibold text-white py-1 px-1.5",
        pathName?.includes(item.href)
          ? "border border-gray-50 rounded-md opacity-100"
          : "opacity-90",
        classNames
      )}
    >
      <span>{item.name}</span>
    </a>
  );
};

export function AppHeader() {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900">
      <nav
        className="mx-auto flex items-center justify-between py-6 px-8 md:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Avatar />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} pathName={pathName} />
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Avatar />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="flex flex-col space-y-6 py-6">
                {navigation.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    pathName={pathName}
                    classNames="py-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
