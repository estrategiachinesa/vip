"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube } from "lucide-react";

const VIDEO_LENGTH_SECONDS = 135; // 2 minutes 15 seconds

export default function YoutubePlayer({ videoId }: { videoId: string }) {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoEnded(true);
    }, VIDEO_LENGTH_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
      {!videoEnded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 h-full w-full"
        ></iframe>
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
