import type { Metadata } from "next";
import "./index.css";
import { AppHeader } from "components/app-header";
import { siteDescription } from "lib/constants";

export const metadata: Metadata = {
  title: "Chidi Orji | My Personal Website",
  description: siteDescription,
  keywords: ["Chidi Orji", "Chidi Orji's Portfolio", "Chidi Orji's Website"],
  openGraph: {
    title: "Chidi Orji | My Personal Website",
    description: siteDescription,
    type: "website",
    url: "https://chidimo.netlify.app",
    images: ["/images/headshot.JPG"],
  },
  twitter: {
    title: "Chidi Orji | My Personal Website",
    description: siteDescription,
    card: "summary_large_image",
    site: "@chidiorji",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://chidimo.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <div className="px-8 md:px-20 py-10 overflow-auto">{children}</div>
      </body>
    </html>
  );
}
