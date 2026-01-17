import Link from "next/link";
import { applications } from "lib/applications";

export default function ApplicationsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-2">Applications</h1>
      <p className="text-gray-700 mb-8">
        A list of hobby apps I&apos;m maintaining. Blue links are web apps, and
        mobile icons indicate the appropriate platform.
      </p>
      <ul className="space-y-6">
        {applications.map((app) => {
          return (
            <li key={app.name} className="pb-2 border-b border-b-1">
              <div>
                {app.webUrl ? (
                  <div>
                    <Link
                      className="text-blue-700 hover:underline font-semibold"
                      href={app.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {app.name}
                    </Link>
                  </div>
                ) : (
                  <span className="text-gray-700 font-semibold">
                    {app.name}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-1">{app.description}</p>

              {app.playStoreUrl ? (
                <div className="flex my-4">
                  <Link
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                      alt="Get it on Google Play"
                      className="h-12"
                    />
                  </Link>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
