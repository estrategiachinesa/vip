"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_LENGTH_SECONDS = 135; // 2 minutes 15 seconds

const CustomProgressBar = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-500/50">
    <div
      className={cn(
        "h-full bg-primary",
        isPlaying ? "animate-progress" : ""
      )}
    ></div>
    <style jsx>{`
      @keyframes progress {
        0% { width: 0%; }
        10% { width: 60%; }
        70% { width: 80%; }
        80% { width: 90%; }
        100% { width: 100%; }
      }
      .animate-progress {
        animation: progress ${VIDEO_LENGTH_SECONDS}s linear forwards;
      }
    `}</style>
  </div>
);

export default function YoutubePlayer({ videoId }: { videoId: string }) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        setVideoEnded(true);
        setIsPlaying(false);
      }, VIDEO_LENGTH_SECONDS * 1000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  if (!isClient) {
    return <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl"></div>;
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
      {!videoEnded ? (
        <>
          <iframe
            id="youtube-player"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full pointer-events-none"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center" onClick={togglePlay}>
             <button
                aria-label={isPlaying ? "Pause" : "Play"}
                className="bg-black/50 text-white rounded-full p-4 transition-opacity duration-300 opacity-100 hover:opacity-75 focus:opacity-100 group-hover:opacity-100"
              >
                {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10" />}
              </button>
          </div>
          <CustomProgressBar isPlaying={isPlaying} />
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-800 text-white p-8 text-center">
            <Youtube className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold font-headline mb-2">Gostou do que viu?</h3>
            <p className="text-lg mb-6 max-w-md">
                Clique no botão abaixo para garantir seu acesso imediato à Estratégia Chinesa e comece a transformar seus resultados hoje mesmo.
            </p>
            <Button asChild size="lg" className="text-lg font-bold animate-pulse">
                <Link href="#offer">
                    👉 QUERO ACESSO IMEDIATO
                </Link>
            </Button>
        </div>
      )}
    </div>
  );
}
