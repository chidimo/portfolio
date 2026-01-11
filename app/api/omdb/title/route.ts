import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imdbID = searchParams.get("imdbID");
  const key = process.env.OMDB_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "OMDB_API_KEY not configured" },
      { status: 500 }
    );
  }
  if (!imdbID) {
    return NextResponse.json({ error: "imdbID is required" }, { status: 400 });
  }
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", key);
  url.searchParams.set("i", imdbID);
  url.searchParams.set("plot", "short");

  const res = await fetch(url.toString());
  const data = await res.json();
  return NextResponse.json(data);
}
