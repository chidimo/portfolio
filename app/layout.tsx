import "./index.css";
import type { ReactNode } from "react";
import { AppHeader } from "components/app-header";
import { SiteFooter } from "components/site-footer";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <AppHeader />
        <main className="container-page flex-1 py-16 sm:py-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
