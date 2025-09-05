"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { t, type Language } from "@/lib/i18n";

interface HeaderProps {
  language: Language;
}

const descriptorKeys = [
  "header_name_developer",
  "header_name_student",
  "header_name_innovator",
];

export default function Header({ language }: HeaderProps) {
  const [online, setOnline] = useState(true);
  const [spotifyTrack, setSpotifyTrack] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch("/api/spotify/now-playing");
        const data = await res.json();
        if (data.playing) {
          setSpotifyTrack(`${data.artist} – ${data.track}`);
        } else {
          setSpotifyTrack(null);
        }
      } catch (err) {
        console.error("Spotify API error:", err);
        setSpotifyTrack(null);
      }
    };

    fetchTrack();
    // update every 15s
    const interval = setInterval(fetchTrack, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % descriptorKeys.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Paul |{" "}
          <span
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {t(language, descriptorKeys[index])}
          </span>
        </h1>
        <div className="relative group">
          <span
            className={`h-3 w-3 rounded-full block ${
              online ? "bg-green-500" : "bg-neutral-500"
            }`}
          />
          <div className="absolute right-0 mt-1 px-2 py-1 text-xs rounded bg-neutral-800 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {online
              ? t(language, "header_status_online")
              : t(language, "header_status_offline")}
          </div>
        </div>
      </div>
      <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
        {t(language, "header_description_prefix")}{" "}
        <span className="text-white font-medium">
          {t(language, "header_description_backend")}
        </span>{" "}
        {t(language, "header_description_middle")}{" "}
        <span className="text-white font-medium">
          {t(language, "header_description_creator")}
        </span>{" "}
        {t(language, "header_description_and")}{" "}
        <span className="text-white font-medium">
          {t(language, "header_description_management")}
        </span>
        .
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between text-sm text-neutral-400 gap-2">
        <div className="flex items-center gap-2 max-w-xs overflow-hidden">
          <span className="text-green-400">🎵</span>
          <span className="truncate">
            {spotifyTrack
              ? t(language, "header_spotify_listening", { track: spotifyTrack })
              : t(language, "header_spotify_not_listening")}
          </span>
        </div>
        <a
          href="mailto:me@p2k.dev"
          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          {t(language, "header_email")}
        </a>
      </div>
    </section>
  );
}
