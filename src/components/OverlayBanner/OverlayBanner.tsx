import React from "react";

export default function OverlayBanner() {
  return (
    <div className="relative -z-20  hidden md:flex ">
      <img
        src="/assets/images/Rectangle.svg"
        alt="helping-hand"
        height="2179.69px"
        width="642.99px"
        className="absolute left-0 xl:top-[calc(345px_+_10px)] 2xl:top-[calc(395px_+10px)] -z-20 w-full"
      />
    </div>
  );
}
