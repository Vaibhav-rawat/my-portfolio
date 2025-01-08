import Link from "next/link";
import React from "react";
import { GoCodeReview } from "react-icons/go";
import { PiEyeThin } from "react-icons/pi";

type VideoInDetailProps = {
  href: string;
  desc: string;
  poster: string;
  video: string;
};

function VideoInDetail({
  href,
  desc,
  poster,
  video,
}: Readonly<VideoInDetailProps>) {
  return (
    <div className="inner-container text-center">
      <Link
        title="visit the website"
        target="_blank"
        href={href}
        rel="noreferrer"
        className="relative rounded-md inline-block border border-gray-500 border-dashed overflow-hidden video-link"
      >
        <span
          aria-hidden={true}
          className="h-full w-full absolute bg-black/60 justify-center flex items-center opacity-0 transition-opacity"
        >
          <PiEyeThin size={45} className="text-tBase text-white" />
        </span>
        <video
          className="w-full sm:w-auto"
          poster={poster}
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </Link>
      <p className="text-tBaseSecondary text-sm mt-2">
        <GoCodeReview size={22} title="Flex" className="inline-block mr-1 " />
        {desc}
      </p>
    </div>
  );
}

export default VideoInDetail;
