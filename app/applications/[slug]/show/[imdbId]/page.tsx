import { SeriesDetailPage } from "components/series-detail/series-detail-page";

export default async function ShowDetailsPage({
  params,
}: {
  params: Promise<{ slug: string; imdbId: string }>;
}) {
  const { slug, imdbId } = await params;
  console.log({ slug, imdbId });
  return <SeriesDetailPage slug={slug} imdbId={imdbId} />;
}
