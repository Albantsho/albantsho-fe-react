import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PlayIcon from "./assets/Play.svg";
import ReactPlayer from "react-player/youtube";

export default function VideoPlayer() {
  const [isPlay, setIsPlay] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // This code will only run on the client-side (in the browser)
    if (typeof window !== "undefined") {
      // Access the window object safely here
      setWidth(window.innerWidth);
    }
  }, []);

  function onClickPreview() {
    setIsPlay(true);
  }
  function onPause() {
    setIsPlay(false);
  }

  return (
    <section className="bg-[#111111] relative py-1 lg:py-[120px]">
      <ReactPlayer
        onClickPreview={onClickPreview}
        onPause={onPause}
        playing={isPlay}
        url="https://youtu.be/K494uB_QbXg"
        className="max-w-[1450px] w-full mx-auto max-h-[904px]"
        light={
          <>
            <img
              src="/assets/images/cover.png"
              className="hidden md:block"
              alt="preview"
            />
            <img
              src="/assets/images/medium-cover.png"
              className="hidden min-[400px]:block md:hidden"
              alt="preview"
            />
            <img
              src="/assets/images/small-cover.png"
              className="min-[400px]:hidden"
              alt="preview"
            />
          </>
        }
        width="100%"
        height={width < 400 ? "720px" : width < 750 ? "790px" : "904px"}
        controls
        playIcon={
          <div className="absolute inset-0  flex items-center justify-center gap-4 ">
            <div className="w-11 h-11 sm:w-[60px] sm:h-[60px]">
              <PlayIcon />
            </div>
            <p className="text-[#FDFEFE] text-[28px] sm:text-5xl font-semibold">
              Watch our demo
            </p>
          </div>
        }
      />
    </section>
  );
}
