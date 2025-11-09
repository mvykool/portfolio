import React, { useEffect } from "react";
import { heroConstants } from "@/app/constants/hero-constants";
import Image from "next/image";
import { useSpotify } from "@/hooks/useSpotify";

export default function MusicPlayer() {
  const { currentSong, getSong } = useSpotify();

  useEffect((): void => {
    getSong();
  }, []);

  return (
    <div className="bg-transparent relative h-full w-full rounded-xl">
      <div className="flex ml-5 my-3">
        <svg
          height="50px"
          width="50px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="spotify"
        >
          <linearGradient
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0 -534)"
            y2="590.253"
            y1="530.096"
            x2="32"
            x1="32"
            id="ipdIa4~cOclR8yt_ClW93b"
          >
            <stop stopColor="#42d778" offset="0"></stop>
            <stop stopColor="#3dca76" offset=".428"></stop>
            <stop stopColor="#34b171" offset="1"></stop>
          </linearGradient>
          <path
            d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z"
            fill="url(#ipdIa4~cOclR8yt_ClW93b)"
          ></path>
          <path
            d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z"
            fill="#000"
          ></path>
        </svg>
        <p className="text-sm md:text-lg text-black dark:text-white flex items-center justify-end font-bold">
          {heroConstants.spotify.current}
        </p>
      </div>
      <div className="flex rotate-180 justify-end mb-4 mt-2 md:mt-0 md:mb-2 ml-4 md:ml-7 text-black dark:text-white transition-all ease-in-out">
        <div className="relative rotate-180">
          <p className=" text-xs md:text-base font-bold">
            {currentSong?.isPlaying
              ? currentSong.title
              : heroConstants.spotify.fistSong.title}
          </p>
          <p className="text-xs w-8 md:w-auto">
            {currentSong?.isPlaying
              ? currentSong.artist
              : heroConstants.spotify.fistSong.artist}
          </p>
        </div>
        <div className="relative rounded-md w-10 h-10 flex items-center justify-center my-auto mx-3">
          <Image
            width={50}
            height={50}
            alt="profile"
            className="rounded-md w-7 h-7 md:w-full md:h-full rotate-180"
            src={
              currentSong?.isPlaying
                ? currentSong.albumImageUrl
                : "/Favourite_Worst_Nightmare.jpg"
            }
          />
        </div>
        <div className="loading">
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
        </div>
      </div>
      <div className="flex rotate-180 justify-end mb-1 mt-5 md:mt-0 md:mb-2 ml-4 md:ml-7 text-black dark:text-white transition-all ease-in-out">
        <div className="relative rotate-180">
          <p className="text-xs md:text-base font-bold">
            {heroConstants.spotify.secondSong.title}
          </p>
          <p className="text-xs w-8 md:w-auto">
            {heroConstants.spotify.secondSong.artist}
          </p>
        </div>
        <div className="relative rounded-md w-10 h-10 flex items-center justify-center my-auto mx-3">
          <Image
            width={40}
            height={40}
            alt="profile"
            className="rounded-md w-7 h-7 md:w-full md:h-full rotate-180"
            src="/PearlJam-Ten.jpg"
          />
        </div>
        <div className="play bg-black dark:bg-white"></div>
      </div>
      <div className="hidden md:flex rotate-180 text-black dark:text-white justify-end ml-7 mt-3 transition-all ease-in-out">
        <div className="relative rotate-180">
          <p className=" text-base font-bold">
            {heroConstants.spotify.thirdSong.title}
          </p>
          <p className="text-xs">{heroConstants.spotify.thirdSong.artist}</p>
        </div>
        <div className="relative rounded-md w-10 h-10 flex items-center justify-center my-auto mx-3">
          <Image
            width={40}
            height={40}
            alt="profile"
            className="rounded-md rotate-180"
            src="/OceanCover.jpeg"
          />
        </div>
        <div className="play bg-black dark:bg-white"></div>
      </div>
    </div>
  );
}
