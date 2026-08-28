import "./index.css";
import type { ReactNode } from "react";
import Script from "next/script";
import { AppHeader } from "components/app-header";
import { SiteFooter } from "components/site-footer";
import { getMetadata, siteUrl } from "lib/constants";
import { mySocial } from "lib/social";

export const metadata = getMetadata({});

// Runs before the page paints: applies the viewer's saved theme so there is
// no flash of the wrong palette. `suppressHydrationWarning` on <html> covers
// the class this adds before React hydrates.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("theme-dark");else if(t==="light")document.documentElement.classList.add("theme-light");}catch(e){}})();`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chidi Orji",
  url: siteUrl,
  image: `${siteUrl}/images/headshot.JPG`,
  jobTitle: "Full-Stack ML Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Salford",
  },
  knowsAbout: [
    "Machine Learning",
    "Natural Language Processing",
    "Semantic Search",
    "Full-Stack Web Development",
  ],
  sameAs: mySocial.map((s) => s.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <AppHeader />
        <main className="measure flex-1 py-14 sm:py-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
