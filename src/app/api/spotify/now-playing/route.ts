import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

let cache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 15 * 1000; // 15 seconds

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", REFRESH_TOKEN);

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!res.ok) throw new Error("Failed to refresh Spotify access token");

  const data = await res.json();
  return data.access_token;
}

async function fetchCurrentlyPlaying() {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  const token = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (res.status === 204) {
    const empty = { playing: false };
    cache = { data: empty, timestamp: Date.now() };
    return empty;
  }

  if (!res.ok) throw new Error("Failed to fetch currently playing track");

  const data = await res.json();
  const track = data?.item?.name ?? null;
  const artist =
    data?.item?.artists?.map((a: any) => a.name).join(", ") ?? null;
  const album = data?.item?.album?.name ?? null;
  const albumImage = data?.item?.album?.images?.[0]?.url ?? null;

  const formatted = {
    playing: data.is_playing,
    track,
    artist,
    album,
    albumImage,
  };

  cache = { data: formatted, timestamp: Date.now() };
  return formatted;
}

export async function GET() {
  try {
    const data = await fetchCurrentlyPlaying();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
