import { SeriesDetailPage } from "components/series-detail/series-detail-page";

export default function ShowDetailsPage({
  params,
}: {
  params: { slug: string; imdbId: string };
}) {
  console.log({ params });
  return <SeriesDetailPage slug={params.slug} imdbId={params.imdbId} />;
}
