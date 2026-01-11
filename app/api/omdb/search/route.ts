import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const key = process.env.OMDB_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "OMDB_API_KEY not configured" }, { status: 500 });
  }
  if (!q?.trim()) {
    return NextResponse.json({ Search: [], Response: "True" });
  }
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", key);
  url.searchParams.set("type", "series");
  url.searchParams.set("s", q);

  const res = await fetch(url.toString());
  const data = await res.json();
  return NextResponse.json(data);
}
