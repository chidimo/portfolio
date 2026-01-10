import Link from "next/link";
import { applications, appHref } from "lib/applications";

export default function ApplicationsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">Applications</h1>
      <p className="text-gray-700 mb-8">
        A curated list of apps I’m building. Click any to see details.
      </p>
      <ul className="space-y-6">
        {applications.map((app) => (
          <li key={app.slug}>
            <div>
              <Link
                className="text-blue-700 hover:underline font-semibold"
                href={appHref(app.slug)}
              >
                {app.name}
              </Link>
            </div>
            <p className="text-gray-600 mt-1">{app.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
