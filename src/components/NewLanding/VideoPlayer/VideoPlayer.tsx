import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import PlayIcon from "./assets/Play.svg";

export default function VideoPlayer() {
  const [isPlay, setIsPlay] = useState(false);

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
        url="/api/video"
        className="max-w-[1450] w-full mx-auto"
        light={<img src="/assets/images/cover.png" alt="preview" />}
        width="100%"
        height="100%"
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
