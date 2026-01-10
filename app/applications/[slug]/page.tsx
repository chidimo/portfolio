import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { applications, getAppBySlug } from "lib/applications";

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const app = getAppBySlug(params.slug);
  if (!app) return notFound();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">{app.name}</h1>
      <p className="text-gray-700 mb-8">{app.description} Coming soon.</p>
      <Link href="/applications" className="text-blue-700 hover:underline font-semibold">
        ← Back to Applications
      </Link>
    </main>
  );
}

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getAppBySlug(params.slug);
  return {
    title: app?.name ?? "Application",
    description: app?.description,
  };
}
