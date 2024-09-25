import React, { useState } from "react";

interface VideoCardProps {
  video: {
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      thumbnails: {
        default: {
          url: string;
        };
      };
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
  };
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        className="rounded-2xl"
        width="100%"
        height="220"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=${isHovered ? 1 : 0}`}
        title={video.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="flex justify-between w-auto">
        <div className="flex space-x-3">
          <div>
            <img
              className="rounded-full w-10"
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>{video.snippet.title}</p>
            <div>
              <p className="text-gray-400 text-sm">{video.snippet.title}</p>
              <p className="text-gray-400 text-sm">
                {video.statistics.viewCount} views •{" "}
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </div>
    </div>
  );
}
