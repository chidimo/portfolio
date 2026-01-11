export type OmdbSearchItem = {
  imdbID: string;
  Title: string;
  Year?: string;
  Poster?: string;
  Type?: string;
};

export type OmdbSearchResponse = {
  Search?: OmdbSearchItem[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

export type OmdbTitleResponse = {
  imdbID: string;
  Title: string;
  Year?: string;
  Poster?: string;
  Plot?: string;
  Runtime?: string; // e.g. "60 min"
  totalSeasons?: string; // for series
  Actors?: string; // comma-separated
  Released?: string; // date string
  Response: "True" | "False";
  Error?: string;
};

export type OmdbSeasonEpisode = {
  Title: string;
  Released?: string; // date
  Episode?: string; // number as string
  imdbID: string;
};

export type OmdbSeasonResponse = {
  Title?: string;
  Season?: string;
  totalSeasons?: string;
  Episodes?: OmdbSeasonEpisode[];
  Response: "True" | "False";
  Error?: string;
};

export async function searchSeries(q: string): Promise<OmdbSearchItem[]> {
  const url = new URL("/api/omdb/search", globalThis.location?.origin);
  url.searchParams.set("q", q);
  const res = await fetch(url.toString());
  const data = (await res.json()) as OmdbSearchResponse;
  if (data.Response === "True") return (data.Search || []).slice(0, 5);
  return [];
}

export async function getTitle(
  imdbID: string
): Promise<OmdbTitleResponse | null> {
  const url = new URL("/api/omdb/title", globalThis.location?.origin);
  url.searchParams.set("imdbID", imdbID);
  const res = await fetch(url.toString());
  const data = (await res.json()) as OmdbTitleResponse;
  if (data.Response === "True") return data;
  return null;
}

export async function getSeason(
  imdbID: string,
  season: number
): Promise<OmdbSeasonResponse | null> {
  const url = new URL("/api/omdb/season", globalThis.location?.origin);
  url.searchParams.set("imdbID", imdbID);
  url.searchParams.set("season", String(season));
  const res = await fetch(url.toString());
  const data = (await res.json()) as OmdbSeasonResponse;
  if (data.Response === "True") return data;
  return null;
}
