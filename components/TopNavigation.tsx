import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const routes = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Publications", href: "/publications" },
  { title: "Certifications", href: "/certifications" },
  // { title: "Blog", href: "/blog" },
  // { title: "Work History", href: "/experience" },
];

export const TopNavigation = () => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/">
                  <a className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-8 rounded-full"
                      src="/images/headshot.JPG"
                      alt=""
                    />
                    <img
                      className="hidden lg:block h-8 w-8 rounded-full"
                      src="/images/headshot.JPG"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {routes.map((r: any) => {
                    return (
                      <Link key={r.href} href={r.href}>
                        <a
                          className={clsx({
                            "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":
                              router.pathname === r.href,
                            "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":
                              router.pathname !== r.href,
                          })}
                        >
                          {r.title}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {routes.map((r: any) => {
                return (
                  <Disclosure.Button
                    as="a"
                    key={r.href}
                    href={r.href}
                    className={clsx({
                      "bg-indigo-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium":
                        router.pathname === r.href,
                      "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium":
                        router.pathname !== r.href,
                    })}
                  >
                    {r.title}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
