import "./index.css";
import type { ReactNode } from "react";
import Script from "next/script";
import { AppHeader } from "components/app-header";
import { SiteFooter } from "components/site-footer";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({});

// Runs before the page paints: applies the viewer's saved theme so there is
// no flash of the wrong palette. `suppressHydrationWarning` on <html> covers
// the class this adds before React hydrates.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("theme-dark");else if(t==="light")document.documentElement.classList.add("theme-light");}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <AppHeader />
        <main className="measure flex-1 py-14 sm:py-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
