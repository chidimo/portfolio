import "./index.css";
import { AppHeader } from "components/app-header";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({});

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
