import "./index.css";
import type { ReactNode } from "react";
import { AppHeader } from "components/app-header";
import { SiteFooter } from "components/site-footer";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <AppHeader />
        <main className="measure flex-1 py-14 sm:py-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
