import { SpotifyTrack } from "@/app/types/spotify";
import { useState } from "react";

export const useSpotify = () => {
  const [currentSong, setCurrentSong] = useState<SpotifyTrack | undefined>();
  const url = process.env.NEXT_PUBLIC_API_URL as string;

  const getSong = async () => {
    try {
      const res: any = await fetch(`${url}/api/spotify`);
      const data = await res.json();
      setCurrentSong(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getSong,
    currentSong,
  };
};
