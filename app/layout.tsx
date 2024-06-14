import { Metadata } from "next";
import "./index.css";
import { AppHeader } from "components/app-header";

export const metadata: Metadata = {
  title: "Chidi Orji (orjichidi95@gmail.com)",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
