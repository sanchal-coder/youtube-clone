import React, { useState, useEffect, useRef } from "react";

interface VideoNotificationsTileProps {
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoIconRef: React.RefObject<HTMLDivElement>;
}

export function VideoNotificationsTile({
  setIsVideoOpen,
  videoIconRef,
}: VideoNotificationsTileProps) {
  const [isVisible, setIsVisible] = useState(true);
  const tileRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tileRef.current &&
      !(tileRef.current as HTMLElement).contains(event.target as Node)&&
      videoIconRef.current &&
      !(videoIconRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsVisible(false);
      setIsVideoOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <div
      ref={tileRef}
      className="flex flex-col fixed gap-3 h-[136px] w-[176px] bg-[#282828] z-40 rounded-xl top-14 right-24 p-2 sm:right-[2px]"
    >
      <div className="flex items-center gap-2">
        <img className="h-[24px] w-[24px]" src="you_your_Channel.svg" alt="" />
        <p className="text-sm text-gray-300">Upload video</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="you_your_Channel.svg" alt="" />
        <p className="text-sm text-gray-300">Go Live</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="you_your_Channel.svg" alt="" />
        <p className="text-sm text-gray-300">Create post</p>
      </div>
    </div>
  );
}
